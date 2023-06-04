import express from "express"
import { addLecture, createCourse, deleteCourse, getAllCourses, getCourseLecture } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);

//Create new course (ONLY ADMIN)
router.route("/createcourse").post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

// Get course detail
router.route("/coursedet/:id").get(isAuthenticated, getCourseLecture)
.post(isAuthenticated, authorizeAdmin,  singleUpload, addLecture)
.delete(isAuthenticated, authorizeAdmin, deleteCourse);

//Delete LectureAdd lecture, Delete Course,

export default router;