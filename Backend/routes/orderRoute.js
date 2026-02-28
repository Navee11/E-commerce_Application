import express from "express";
import {
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripePayment,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();
// Admin Routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorPay);
orderRouter.post("/verifyStripe", authUser, verifyStripePayment);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

//User features
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
