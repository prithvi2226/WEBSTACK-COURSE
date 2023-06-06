import  express  from "express";
import { isAuthenticated } from "../middlewares/auth.js";
// import singleUpload from "../middlewares/multer.js"
import { buySubscription } from "../controllers/paymentController.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").post(isAuthenticated, buySubscription)


export default router;