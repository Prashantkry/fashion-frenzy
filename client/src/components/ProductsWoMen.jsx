import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsWoMen = () => {
  const [productsData, setProductsData] = useState([]);
  const APIUrl = "https://fashion-frenzy.onrender.com/api/v1";

  async function getProducts() {
    const productsJSON = await fetch(`${APIUrl}/product`);
    let productsRes = await productsJSON.json();
    setProductsData(productsRes.allProducts);
    console.log(productsRes);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="w-full bg-gray-950 pt-6">
        <div className="max-w-screen-xl mx-auto sm:p-10 md:p-16 bg-gray-900">
          <div className="border-b mb-5 flex justify-between text-sm">
            <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-[20px] h-[20px] p-0.5"
              >
                <path
                  fill="#161717"
                  d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"
                />
              </svg>
              <button
                className="font-semibold inline-block"
                onClick={getProducts}
              >
                Womens Collections
              </button>
            </div>
            <Link href="#">See All</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* <!-- CARD 1 --> */}
            {productsData.map((product) => (
              <div
                key={product.id}
                className="rounded overflow-hidden shadow-lg flex flex-col w-[300px] h-[500px] bg-gray-800"
              >
                <Link href="#"></Link>
                <div className="relative">
                  <Link to="#">
                    <img
                      className="w-full h-[300px] p-3"
                      src={product.ProductImage}
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </Link>
                  <Link to="#">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      {product.ProductId}
                    </div>
                  </Link>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <Link
                    to="#"
                    className="font-medium text-sm h-[4vh] hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 overflow-scroll no-scrollbar"
                  >
                    {product.ProductName}
                  </Link>
                  <p className="text-gray-500 text-sm h-[8vh] border-0 overflow-scroll no-scrollbar">
                    {product.ProductDescriptions.slice(0, 105)}
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <button className=" text-gray-800 border border-gray-900 p-1 text-sm px-2 rounded font-semibold -mt-1 -ml-3">
                    Buy →
                  </button>

                  <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <span className="ml-1">Price {product.ProductPrice}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsWoMen;
