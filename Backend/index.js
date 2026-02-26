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

//App config

const app = express();
const port = process.env.PORT || 4000;
//Payment Gateway
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
connectDB();
connectCloudinary();
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

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
