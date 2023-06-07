import  express  from "express";
import { isAuthenticated } from "../middlewares/auth.js";
// import singleUpload from "../middlewares/multer.js"
import { buySubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

//payment verification Route
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

//getRazorpay key
router.route("/razorpaykey").get(getRazorPayKey);

export default router;