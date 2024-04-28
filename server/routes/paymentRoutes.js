import express from "express";
import { checkout , paymentVerification , getRoute} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/paymentVerification").post(paymentVerification);
router.route("/").get(getRoute);
export default router;
