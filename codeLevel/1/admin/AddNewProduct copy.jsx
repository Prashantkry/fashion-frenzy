import React, { useEffect, useState } from "react";
import axios from "axios";

const APIUrl = "http://localhost:8000/api/v1";

export function AddNewProduct() {
  const [imageData, setImageData] = useState({ myFile: "" }); // convert to base64 start
  const [selectedImage, setSelectedImage] = useState(null);

  const convertToBase64 = async (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        res(reader.result);
      };
      reader.onerror = (error) => {
        console.log("error", error);
        rej(error);
      };
    });
  };

  const imageDataChange = async (e) => {
    const file = e.target.files[0];
    const convertToBase64Res = await convertToBase64(file);
    setImageData({ ...imageData, myFile: convertToBase64Res });
    setSelectedImage(imageData);
  };

  const addProduct = async (imageData) => {
    console.log("add product triggered");
    let productId = document.getElementById("productId").value;
    let productName = document.getElementById("productName").value;
    let ProductDescriptions = document.getElementById(
      "ProductDescriptions"
    ).value;
    let productPrice = document.getElementById("productPrice").value;
    let ProductCategory = document.getElementById("ProductCategory").value;

    console.log(
      productId,
      productName,
      ProductDescriptions,
      productPrice,
      ProductCategory,
      imageData
    );
    try {
      const formData = new FormData();
      formData.append("productId", productId);
      formData.append("productName", productName);
      formData.append("ProductDescriptions", ProductDescriptions);
      formData.append("productPrice", productPrice);
      formData.append("ProductCategory", ProductCategory);
      formData.append("imageData", imageData);

      const response = await axios.post(`${APIUrl}/product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <div className="lg:max-w-[96%] md:max-w-[744px] max-w-[375px] h-[75vh] mx-auto bg-gray-900 py-5 ">
        <div>
          <div className="flex gap-3 pl-5">
            <p className="text-sm font-medium text-gray-300 pb-5">
              Product Information
            </p>
          </div>
          <hr />
        </div>
        <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-14 md:px-6 px-4 mt-6 w-full">
          <div className="text">
            <div className="w-full lg:mt-0 mt-6">
              <p className="text-base text-gray-300">Product Id</p>
              <input
                type="text"
                name
                id="productId"
                placeholder=""
                className="placeholder:text-sm placeholder bg-transparent text-gray-500 focus:outline-none border border-gray-300 lg:min-w-[540px] w-full py-3 px-3 rounded mt-4"
              />
            </div>
            <div className="w-full lg:mt-6 mt-6">
              <p className="text-base text-gray-300">Product Name</p>
              <input
                type="text"
                name
                id="productName"
                placeholder=""
                className="placeholder:text-sm placeholder bg-transparent text-gray-500 focus:outline-none border border-gray-300 lg:min-w-[540px] w-full py-3 px-3 rounded mt-4"
              />
            </div>
            <div className>
              <div className="mt-6">
                <p className="text-base text-gray-300">Description</p>
                <input
                  type="text"
                  name
                  id="ProductDescriptions"
                  placeholder=""
                  className="placeholder:text-sm placeholder bg-transparent text-gray-500 focus:outline-none border border-gray-300 lg:min-w-[540px] w-full py-3 px-3 rounded mt-4"
                />
              </div>
            </div>

            <div className="lg:flex md:flex block gap-8 md:mt-4 mt-6">
              <div className="w-full">
                <p className="text-base text-gray-300">Price</p>
                <input
                  type="text"
                  name
                  id="productPrice"
                  placeholder=""
                  className="placeholder:text-sm placeholder bg-transparent text-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4"
                />
              </div>
            </div>
            <div className="lg:flex md:flex block gap-8 md:mt-4 mt-6">
              <div className="mt-4 w-full">
                <p className="text-base text-gray-300">Category</p>
                <select
                  className="text-gray-500 focus:outline-none border bg-transparent border-gray-300  w-full py-3 px-3 rounded mt-4"
                  id="ProductCategory"
                >
                  <option className="" value="select">
                    select
                  </option>
                  <option className="" value="Men">
                    Men
                  </option>
                  <option className="" value="Women">
                    Women
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* image work and add product start */}
          <div className="lg:max-w-[20vw] border-0 flex flex-col items-center justify-center w-full  pb-4 py-8 lg:h-[50vh]">
            <div className="border border-gray-300 w-full flex items-center justify-center pb-4 rounded-md py-8 lg:h-[90%]">
              {!selectedImage && (
                <>
                  <label htmlFor="filePicker" className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </label>
                  <input
                    type="file"
                    name="myFile"
                    id="filePicker"
                    style={{ display: "none" }}
                    onChange={(e) => imageDataChange(e)}
                  />
                </>
              )}
              {selectedImage && (
                <img
                  src={imageData.myFile}
                  id="productImg"
                  alt="X"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            {/* add product */}
            {selectedImage && (
              <button
                onClick={() => addProduct(imageData)}
                className="flex justify-end px-4"
              >
                <div className="bg-indigo-700 lg:max-w-[143px] w-full py-3 px-2 rounded md:mt-12 mt-9 hover:bg-indigo-600 transition duration-300 ease-in-out cursor-pointer">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-white">Add Product</p>
                  </div>
                </div>
              </button>
            )}
          </div>
          {/* image work and add product end */}
        </div>
      </div>
    </>
  );
}
