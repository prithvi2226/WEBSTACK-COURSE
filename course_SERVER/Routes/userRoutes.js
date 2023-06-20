import express from "express"
import { DeleteMyProfile, DeleteUser, addToPlaylist, 
         changePassword, 
         deleteFromPlaylist, 
         forgotPassword, 
         getAllUsers, 
         getMyProfile, 
         login,
         logout, 
         register, 
         resetPassword, 
         updateProfile, 
         updateProfilePicture, 
         updateUserRole} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js"

const router = express.Router();

//register
router.route("/register").post(singleUpload, register);

//login
router.route("/login").post(login);

//logout
router.route("/logout").get(logout);

//Create Profile
router.route("/me").get(isAuthenticated, getMyProfile);

//Delete Profile
router.route("/me").delete(isAuthenticated, DeleteMyProfile);

//Change Password
router.route("/changepassword").put(isAuthenticated, changePassword);

//update profile
router.route("/update").put(isAuthenticated, updateProfile);

//update profile picture
router.route("/updatepic").put(isAuthenticated,singleUpload, updateProfilePicture);


//forget password
router.route("/forgotpassword").post(forgotPassword);

//reset password
router.route("/resetpassword/:token").put(resetPassword);

//AddtoPlaylist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

//Remove from Playlist
router.route("/removefromplaylist").delete(isAuthenticated, deleteFromPlaylist);


//admin routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

//Update User ROle
//delete User
router.route("/admin/users/:id").put(isAuthenticated, authorizeAdmin, updateUserRole)
.delete(isAuthenticated, authorizeAdmin, DeleteUser);


export default router;
