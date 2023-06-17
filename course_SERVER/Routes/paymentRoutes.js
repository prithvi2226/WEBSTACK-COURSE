import  express  from "express";
import {isAuthenticated } from "../middlewares/auth.js";
// import singleUpload from "../middlewares/multer.js"
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

//payment verification Route
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

//getRazorpay key
router.route("/razorpaykey").get(getRazorPayKey);

//cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription)

export default router;