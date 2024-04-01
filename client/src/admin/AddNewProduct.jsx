import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const APIUrl = "http://localhost:8000/api/v1";

export function AddNewProduct() {
  const addProduct = async () => {
    console.log("add product triggered");
    let productName = document.getElementById("productName").value;
    let ProductDescriptions = document.getElementById(
      "ProductDescriptions"
    ).value;
    let productPrice = document.getElementById("productPrice").value;
    let ProductCategory = document.getElementById("ProductCategory").value;

    let imageDatas = document.getElementById("imgM").value;
    let imageDatas1 = document.getElementById("img1").value;
    let imageDatas2 = document.getElementById("img2").value;

    // console.log(
    //   // productId,
    //   productName,
    //   ProductDescriptions,
    //   productPrice,
    //   ProductCategory,
    //   imageDatas,
    //   imageDatas1,
    //   imageDatas2,
    // );

    const pData = await fetch(`${APIUrl}/product`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // productId,
        productName,
        ProductDescriptions,
        productPrice,
        ProductCategory,
        imageDatas,
        imageDatas1,
        imageDatas2,
      }),
    });
    const sentDataP = await pData.json();
    console.log(sentDataP);
    if (sentDataP.message === "Product added successfully") {
      toast.success("Product added successfully");
    }
    document.getElementById("productName").value = "";
    document.getElementById("ProductDescriptions").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("ProductCategory").value = "";
    document.getElementById("imgM").value = "";
    document.getElementById("img1").value = "";
    document.getElementById("img2").value = "";
  };

  function showInfoCloudinary() {
    let Cloudinary = document.getElementById('Cloudinary')
    Cloudinary.style.display = 'flex'
  }
  function hideInfoCloudinary() {
    let Cloudinary = document.getElementById('Cloudinary')
    Cloudinary.style.display = 'none'
  }

  return (
    <>
      <ToastContainer />
      <div className="lg:max-w-[96%] md:max-w-[744px] max-w-[375px] h-[75vh] mx-auto bg-gray-50 py-12 px-6 mt-12">
        <div>
          <div className="flex gap-3 pl-5">
            <p className="text-sm font-medium text-gray-800 pb-5">
              Product Information
            </p>
          </div>
          <hr />
        </div>
        <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-14 md:px-6 px-4 mt-6 w-full">
          <div className="text">
            <div className="w-full lg:mt-6 mt-6">
              <p className="text-base text-gray-800">Product Name</p>
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
                <p className="text-base text-gray-800">Description</p>
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
                <p className="text-base text-gray-800">Price</p>
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
                <p className="text-base text-gray-800">Category</p>
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

          {/* main image work and add product start */}
          <div className="border-0 flex flex-col w-[35%] h-[60vh]">
            <div className>
              <div className="mt-6">
                <div className="flex items-center justify-start border-0">
                  <p className="text-base text-gray-800">Image Main url</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-[12px] h-[12px] ml-2"
                    onMouseEnter={showInfoCloudinary}
                    onMouseLeave={hideInfoCloudinary}
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                  <p className="text-xs border rounded w-fit absolute -mt-10 ml-7 hidden p-1" id="Cloudinary">Use Cloudinary or anyother for URL</p>
                </div>

                <input
                  type="text"
                  name
                  id="imgM"
                  placeholder=""
                  className="placeholder:text-sm placeholder bg-transparent text-gray-500 focus:outline-none border border-gray-300 lg:min-w-[240px] w-full py-3 px-3 rounded mt-4"
                />
              </div>
            </div>
            <div className>
              <div className="mt-6">
                <p className="text-base text-gray-800">Image support url1</p>
                <input
                  type="text"
                  name
                  id="img1"
                  placeholder=""
                  className="placeholder:text-sm placeholder bg-transparent text-gray-500 focus:outline-none border border-gray-300 lg:min-w-[240px] w-full py-3 px-3 rounded mt-4"
                />
              </div>
            </div>
            <div className>
              <div className="mt-6">
                <p className="text-base text-gray-800">Image support url2</p>
                <input
                  type="text"
                  name
                  id="img2"
                  placeholder=""
                  className="placeholder:text-sm placeholder bg-transparent text-gray-500 focus:outline-none border border-gray-300 lg:min-w-[240px] w-full py-3 px-3 rounded mt-4"
                />
              </div>
            </div>
            <div className>
              <button onClick={() => addProduct()} className="mt-10 w-full">
                <div className="bg-indigo-700 w-full py-3 px-2 rounded md:mt-5 mt-9 hover:bg-indigo-600 transition duration-300 ease-in-out cursor-pointer">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-white">Add Product</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* main image work and add product end */}
        </div>
      </div>
    </>
  );
}
