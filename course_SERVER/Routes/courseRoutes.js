import express from "express"
import { createCourse, getAllCourses } from "../controllers/courseController.js";


const router = express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);
//Create new course (ONLY ADMIN)
router.route("/createcourse").post(createCourse);

//Add lecture, Delete Course, Get course detail

//Delete Lecture

export default router;