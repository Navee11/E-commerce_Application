import React from "react";
import { useForm } from "react-hook-form";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Add({ token }) {
  const { register, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: {
      sizes: [],
    },
  });
  const selectedSizes = watch("sizes");
  const image1 = watch("image1")?.[0];
  const image2 = watch("image2")?.[0];
  const image3 = watch("image3")?.[0];
  const image4 = watch("image4")?.[0];

  const onSubmitHandler = async (data) => {
    console.log("Form Data: ", data);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("subCategory", data.subCategory);
      formData.append("bestSeller", data.bestSeller);
      formData.append("sizes", JSON.stringify(data.sizes));
      image1 && formData.append("image1", data.image1[0]);
      image2 && formData.append("image2", data.image2[0]);
      image3 && formData.append("image3", data.image3[0]);
      image4 && formData.append("image4", data.image4[0]);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2 ">Upload Image</p>
        <div className="flex gap-2 ">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input type="file" id="image1" hidden {...register("image1")} />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input type="file" id="image2" hidden {...register("image2")} />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input type="file" id="image3" hidden {...register("image3")} />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input type="file" id="image4" hidden {...register("image4")} />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          className="w-full max-w-125 px-3 py-2"
          type="text"
          placeholder="Type Here"
          required
          {...register("name")}
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Desctiption</p>
        <textarea
          className="w-full max-w-125 px-3 py-2"
          type="text"
          placeholder="Write content here"
          {...register("description")}
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select {...register("category")} className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">SubCategory</p>
          <select {...register("subCategory")} className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input
            {...register("price")}
            className="w-full px-3 py-2 sm:w-30"
            type="Number"
            placeholder="25"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size, index) => {
            const isSelected = selectedSizes.includes(size);
            const handleSize = () => {
              if (isSelected) {
                setValue(
                  "sizes",
                  selectedSizes.filter((item) => item !== size),
                );
              } else {
                setValue("sizes", [...selectedSizes, size]);
              }
            };
            return (
              <div onClick={handleSize} key={size}>
                <p
                  className={` px-3 py-1 cursor-pointer ${isSelected ? "bg-black text-white" : "bg-slate-200"}`}
                >
                  {size}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input {...register("bestSeller")} type="checkbox" id="bestSeller" />
        <label className="cursor-pointer" htmlFor="bestSeller">
          Add to bestseller
        </label>
      </div>
      <button className="w-28 py-3 mt-4 bg-black text-white" type="submit">
        Add
      </button>
    </form>
  );
}

export default Add;
