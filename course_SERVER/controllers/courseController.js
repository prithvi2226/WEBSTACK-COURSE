import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import  Course  from "../models/Course.js"    
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/errorHandler.js"
import cloudinary from "cloudinary";


export const getAllCourses = catchAsyncError( async(req, res, next) => {
    const courses = await Course.find().select("-lectures");
    res.status(200).json({
        success: true,
        courses,
    });
});

export const createCourse = catchAsyncError( async(req, res, next) => {

    const {title, description, category, createdBy} = req.body;

    if(!title || !description || !category || !createdBy){
        return next(new ErrorHandler("Please Add All The Fields", 400))
    }

    const file = req.file;
    
    const fileUri = getDataUri(file);

    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

    await Course.create({
        title, 
        description, 
        category, 
        createdBy, 
        poster: {
            public_id: mycloud.public_id,
            url: mycloud.secure_url,
        }
         
    })
   
    res.status(201).json({
        success: true,
        message: "Course Created Successfully, U can add Lecture Videos Now!",
    });
});

export const getCourseLecture = catchAsyncError( async(req, res, next) => {
    const course = await Course.findById(req.params.id);

    if(!course){
        return next(new ErrorHandler("Course Not FounD!", 404));
    }

    course.views += 1;

    await course.save();

    res.status(200).json({
        success: true,
        lectures: course.lectures,
    });
});

//Max Video Size 100MB
export const addLecture = catchAsyncError( async(req, res, next) => {
    
    const{id} = req.params;
    const{title, description} = req.body;

    const course = await Course.findById(id);


    if(!course){
        return next(new ErrorHandler("Course Not FounD!", 404));
    }

    //upload file here
    const file = req.file;
    
    const fileUri = getDataUri(file);

    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content, {
        resource_type: "video",
    });

    course.lectures.push({
        title,
        description,
        video: {
            public_id: mycloud.public_id,
            url: mycloud.secure_url,
        }
    })

    course.numOfVideos = course.lectures.length;

    await course.save();

    res.status(200).json({
        success: true,
        message: "Lecture Added in Course!",
    });
});


export const deleteCourse = catchAsyncError( async(req, res, next) => {

    const { id } = req.params;

    const course = await Course.findById(id);

    await cloudinary.v2.uploader.destroy(course.poster.public_id);

    for (let i = 0; i < course.lectures.length; i++) {
        const singleLecture = course.lectures[i];
        await cloudinary.v2.uploader.destroy(singleLecture.public_id);
    }
    
    if(!course){
        return next(new ErrorHandler("Course Not FounD!", 404));
    }
   
    res.status(201).json({
        success: true,
        message: "Course deleted Successfully",
    });
});

