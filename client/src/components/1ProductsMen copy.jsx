import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { ToastContainer, toast } from "react-toastify";

const Men = () => {
  const [productsData, setProductsData] = useState([]);
  const APIUrl = "https://fashion-frenzy.onrender.com/api/v1";

  async function getProducts() {
    const productsJSON = await fetch(`${APIUrl}/product`);
    let productsRes = await productsJSON.json();
    setProductsData(productsRes.allProducts);
    // console.log(productsRes);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer />
      <div className="w-full pt-6">
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* <!-- CARD 1 --> */}
            {productsData.map((product, id) => (
              <div
                key={id}
                className="rounded overflow-hidden shadow-lg flex flex-col w-[330px] h-[500px] bg-gray-300"
              >
                <Link href="#"></Link>
                <div className="relative">
                  <Link href="#">
                    <img
                      className="w-full h-[300px] p-3 px-7"
                      src={product.ProductImage}
                      alt="Sunset in the mountains"
                    />
                  </Link>
                  <Link href="#!">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      {product.ProductId}
                    </div>
                  </Link>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <Link
                    to="/"
                    className="font-medium text-sm h-[4vh] inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 overflow-scroll no-scrollbar"
                  >
                    {product.ProductName}
                  </Link>
                  <p className="text-gray-500 text-sm h-[8vh] border-0 overflow-scroll no-scrollbar">
                    {product.ProductDescriptions.slice(0, 105)}
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <button
                    onClick={() => {
                      dispatch(
                        addToCart({
                          productImg: product.ProductImage,
                          productId: product.ProductId,
                          productName: product.ProductName,
                          productDes: product.ProductDescriptions,
                          productP:
                            product.ProductPrice -
                            (20 * product.ProductPrice) / 100,
                        })
                      );
                      toast.success("Added to Cart");
                    }}
                    className=" text-gray-800 border border-gray-900 p-1 text-sm px-2 rounded font-semibold -mt-1 -ml-3"
                  >
                    Add to Cart →
                  </button>

                  <div className="flex items-center justify-center">
                    <span
                      // href="#"
                      className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                    >
                      <span className="ml-1 line-through text-gray-600 font-semibold text-xs mt-1">
                        ₹ {product.ProductPrice}
                      </span>
                    </span>

                    <span
                      // href="#"
                      className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                    >
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Men;
