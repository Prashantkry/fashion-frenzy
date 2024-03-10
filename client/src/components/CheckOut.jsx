import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import "../App.css";

function CheckOut() {
  // const [show, setShow] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value === 0 ? 1 : value, // If the quantity is 0, default it to 1
    }));
  };

  // Calculate subtotal
  let subtotal = cartItems.reduce((acc, item) => {
    const quantity = quantities[item.id] || 1; // Default quantity to 1 if not set
    return acc + parseFloat(item.productP) * quantity;
  }, 0)
  subtotal = subtotal.toFixed(2);
  const shipping = 49;
  const tax = 35;
  const total = (parseFloat(subtotal) + shipping + tax)

  return (
    <>
      <div className="w-full h-[100vh] p-10 flex items-start justify-around">
        <div className="w-[65vw] h-[95vh] p-10 border-0 border-red-500">
          <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
            <p className="text-sm pl-2 leading-none">Back</p>
          </div>
          <p className="text-6xl font-black leading-10 text-gray-800 pt-3">
            Cart items
          </p>
          <div className="w-full h-[77vh] mt-10 p-2 border-2 border-gray-700 flex flex-col items-center justify-start overflow-scroll no-scrollbar">
            {cartItems.map((item, k) => {
              return (
                <div key={k} className="w-full h-full m-2 border px-10">
                  <div className="md:flex items-center py-3 border-gray-200">
                    <div className="w-1/4">
                      <img
                        src={item.productImg}
                        alt
                        className="w-[300px] h-[300px] object-contain object-center p-2"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 font-extrabold border border-gray-500 p-1 flex items-center justify-center rounded h-[20px] w-[20px]">
                        {item.productId}
                      </p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          {item.productName}
                        </p>
                        <select
                          className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                          value={quantities[item.productId]}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value)
                            )
                          }
                        >
                          <option value={1}>01</option>
                          <option value={2}>02</option>
                          <option value={3}>03</option>
                        </select>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2 text-wrap w-[30vw]">
                        {item.productDes}
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <button className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            Add to favorites
                          </button>
                          <button
                            onClick={() =>
                              dispatch(removeFromCart({ id: item.id }))
                            }
                            className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          ₹ {item.productP}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* summary start */}
        <div className="flex flex-col mt-[17vh] px-14 py-20 items-center w-[28vw] border-2 border-black justify-between">
          <div>
            <p className="text-4xl font-black leading-9 text-gray-800">
              Summary
            </p>
            <div className="flex items-center justify-between pt-16">
              <p className="text-base leading-none text-gray-800">Subtotal</p>
              <p className="text-base leading-none text-gray-800">
                ₹ {subtotal}
              </p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800">Shipping</p>
              <p className="text-base leading-none text-gray-800">
                ₹ {shipping}
              </p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800">Tax</p>
              <p className="text-base leading-none text-gray-800">₹ {tax}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
              <p className="text-2xl leading-normal text-gray-800">Total</p>
              <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                ₹ {total}
              </p>
            </div>
            <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
