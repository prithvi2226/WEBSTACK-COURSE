import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Stats } from "../models/Stats.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";



export const contact = catchAsyncError(async(req, res, next)=>{

    const {name, email, message} = req.body;

    if(!name || !email || !message){
        return(
            next(new ErrorHandler("All fields are mandatory", 400))
        );
    }

    const to = process.env.MY_MAIL;
    const subject = "FROM PRITHV! COURSE";
    const text = `Name - ${name}, email - ${email}. \n ${message}`;

    await sendEmail(to, subject, text);
    
    res.status(200).json({
        success: true,
        message: "Your Message has been sent!"
    })
})


export const courseRequest = catchAsyncError(async(req, res, next)=>{
    
    const {name, email, course} = req.body;

    if(!name || !email || !course){
        return(
            next(new ErrorHandler("All fields are mandatory", 400))
        );
    }

    
    const to = process.env.MY_MAIL;
    const subject = "REQUEST FOR A COURSE!";
    const text = `Name - ${name}, email - ${email}. \n ${course}`;

    await sendEmail(to, subject, text);
    
    res.status(200).json({
        success: true,
        message: "Your Message has been sent for Course Request!"
    })
})


export const getDashboardStats = catchAsyncError(async(req, res, next)=>{

    const stats = await Stats.find({}).sort({createdAt: "desc"}).limit(12);

    const statsData = [];
    
    for (let i = 0; i < stats.length; i++) {
        statsData.unshift(stats[i]);        
    }
    const requiredSize = 12 - stats.length;

    for (let i = 0; i < requiredSize; i++) {
        statsData.unshift({
            users: 0,
            subscription: 0,
            views: 0,
        });        
    }

    const usersCount = statsData[11].users;
    const subscriptionCount = statsData[11].subscription;
    const viewsCount = statsData[11].views;


    let usersProfit = true,
        viewsProfit = true,
        subscriptionProfit = true;

    let usersPercent = 0,
        viewsPercent = 0,
        subscriptionPercent = 0;

    if(statsData[10].users === 0){
        usersPercent = usersCount*100;
    }
    if(statsData[10].subscription === 0){
        subscriptionPercent = subscriptionCount*100;
    }
    if(statsData[10].views === 0){
        viewsPercent = viewsCount*100;
    }

    else{
        const difference = {
            users: statsData[11].users - statsData[10].users,
            subscription: statsData[11].subscription - statsData[10].subscription,
            views: statsData[11].views - statsData[10].views,
        }

        usersPercent = (difference.users / statsData[10].users) * 100;
        subscriptionPercent = (difference.subscription / statsData[10].subscription) * 100;
        viewsPercent = (difference.views / statsData[10].views) * 100;
    }

    if(usersPercent < 0){
        usersProfit = false;
    }
    
    if(subscriptionPercent < 0){
        subscriptionProfit = false;
    }
    
    if(viewsPercent < 0){
        viewsProfit = false;
    }    

    res.status(200).json({
        success: true,
        stats: statsData,
        usersCount,
        subscriptionCount,
        viewsCount,
        usersPercent,
        subscriptionPercent,
        viewsPercent,
        usersProfit,
        subscriptionProfit,
        viewsProfit
    })
})

