import productModel from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";

//Function for add Product
const addProduct = async (req, res) => {
  try {
    let { name, description, price, category, subCategory, sizes, bestSeller } =
      req.body;
    // Parse sizes if JSON string
    if (typeof sizes === "string") {
      sizes = JSON.parse(sizes);
    }

    price = Number(price);

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (image) => image !== undefined,
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );
    // console.log("Images array:", image);
    // console.log("Server started");
    // console.log(
    //   "Request body:",
    //   name,
    //   description,
    //   price,
    //   category,
    //   subCategory,
    //   sizes,
    //   bestSeller,
    //   images,
    // );
    // console.log("Files uploaded:", images);
    // console.log("url", imagesUrl);
    // console.log("Before saving product");
    const productData = {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
      image: imagesUrl,
      date: Date.now(),
    };
    // console.log(productData);
    await productModel.create(productData);

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

//Function for List Products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Function for removing products
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Function for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
