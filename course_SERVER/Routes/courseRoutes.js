import express from "express"
import { addLecture, createCourse, getAllCourses, getCourseLecture } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";


const router = express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);
//Create new course (ONLY ADMIN)
router.route("/createcourse").post(singleUpload, createCourse);

// Get course detail
router.route("/coursedet/:id").get(getCourseLecture).post(singleUpload, addLecture);

//Delete LectureAdd lecture, Delete Course,

export default router;