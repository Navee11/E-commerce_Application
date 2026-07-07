import dotenv from "dotenv";
dotenv.config({ override: true });
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import Razorpay from "razorpay";

//App config

const app = express();
const port = process.env.PORT || 4000;
//Payment Gateway
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const razorPayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
try {
  await connectDB();
  connectCloudinary();
  console.log("Startup successful");
} catch (err) {
  console.error("Startup failed:", err);
  throw err;
}
//Middlewares

app.use(express.json());
app.use(cors());

//API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
  });
}

export default app;
