import express from "express";
import {
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth";
import authUser from "../middlewares/auth";

const orderRouter = express.Router();
// Admin Routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/stripe", authUser, placeOrderRazorPay);

//User features
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
