import express from "express"
import { changePassword, 
         forgotPassword, 
         getMyProfile, 
         login,
         logout, 
         register, 
         resetPassword, 
         updateProfile, 
         updateProfilePicture } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//register
router.route("/register").post(register);

//login
router.route("/login").post(login);

//logout
router.route("/logout").get(logout);

//Create Profile
router.route("/me").get(isAuthenticated, getMyProfile);

//Change Password
router.route("/changepassword").put(isAuthenticated, changePassword);

//update profile
router.route("/update").put(isAuthenticated, updateProfile);

//update profile picture
router.route("/updatepic").put(isAuthenticated, updateProfilePicture);


//forget password
router.route("/forgotpassword").post(forgotPassword);

//reset password
router.route("/resetpassword/:token").put(resetPassword);



export default router;
