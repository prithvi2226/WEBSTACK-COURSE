import express from "express"
import { login, logout, register } from "../controllers/userController.js";

const router = express.Router();

//register
router.route("/register").post(register);

//login
router.route("/login").post(login);

//logout
router.route("/logout").get(logout);


export default router;
