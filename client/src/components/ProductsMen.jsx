import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ShimmerEffect from "./Product/ShimmerEffect";

// const APIUrl = "http://localhost:8000/api/v1";
const APIUrl = "https://fashion-frenzy.onrender.com/api/v1";
const Men = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProducts() {
    setIsLoading(true);
    const productsJSON = await fetch(`${APIUrl}/product`);
    let productsRes = await productsJSON.json();
    setProductsData(productsRes.allProducts);
    // console.log(productsRes.allProducts);
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const UserId = localStorage.getItem("UserId");
  // console.log(UserId);

  // send checkout data to backend
  const addToCart = async (product) => {
    console.log("api triggered");
    try {
      const data = await fetch(`${APIUrl}/checkout`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserId,
          productProperties: [product],
        }),
      });
      const res = await data.json();
      console.log(res);
      toast.success("Added to Cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full pt-6">
        <div className="p-5 mx-12">
          <div className="border-b mb-5 flex justify-between text-sm">
            <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-0 border-indigo-600 uppercase">
              <button
                className="font-semibold inline-block"
                onClick={getProducts}
              >
                Our Best Collections
              </button>
            </div>
            <Link href="#">See All</Link>
          </div>

          <div className="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {
              isLoading ? (
                <ShimmerEffect />
              ) : (
                productsData.slice(0, 4).map((product, id) => (
                  <div
                    key={id}
                    className="w-auto rounded overflow-hidden shadow-lg flex flex-col h-[530px] bg-gray-300"
                  >
                    <div className="relative">
                      <Link to="/productDetails">
                        <img
                          className="w-full h-[350px] p-3 px-7"
                          src={product.ProductImage}
                          alt=""
                        />
                      </Link>
                      <Link href="#!">
                        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                          {product.ProductId}
                        </div>
                      </Link>
                    </div>
                    <div className="px-6 mb-auto">
                      <Link
                        to="/"
                        className="font-medium text-sm h-[2vh] hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 overflow-scroll no-scrollbar"
                      >
                        {product.ProductName}
                      </Link>
                      <p className="text-gray-500 text-sm h-[4.2vh] border-0 overflow-scroll no-scrollbar">
                        {product.ProductDescriptions.slice(0, 105)}
                      </p>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100 text-nowrap">
                      <button
                        onClick={() => addToCart(product)}
                        className=" text-gray-800 border border-gray-900 p-1 text-sm px-2 rounded font-semibold -mt-1 -ml-3"
                      >
                        Add to Cart →
                      </button>

                      <div className="flex items-center justify-center">
                        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                          <span className="ml-1 line-through text-gray-600 font-semibold text-xs mt-1">
                            ₹ {product.ProductPrice}
                          </span>
                        </span>

                        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                          <span className="ml-1 text-lg">
                            ₹
                            {product.ProductPrice -
                              (20 * product.ProductPrice) / 100}
                            <span className="text-green-700 font-semibold text-xs">
                              (20% Off)
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default Men;
