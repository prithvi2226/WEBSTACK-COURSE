import express from "express"
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLecture } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);

//Create new course (ONLY ADMIN)
router.route("/createcourse").post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

// Get course detail Add lecture, Delete Course,
router.route("/coursedet/:id").get(isAuthenticated, getCourseLecture)
.post(isAuthenticated, authorizeAdmin,  singleUpload, addLecture)
.delete(isAuthenticated, authorizeAdmin, deleteCourse);

//Delete Lecture
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture);

export default router;