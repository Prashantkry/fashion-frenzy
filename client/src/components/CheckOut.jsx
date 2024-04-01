import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { addToCart } from "../redux/CartSlice";
import "../App.css";

function CheckOut() {
  const APIURL = "http://localhost:8000/api/v1";
  const UserId = localStorage.getItem("UserId");
  // console.log(UserId);

  // const [show, setShow] = useState(false);
  // const cartDataFromFrontend = useSelector((state) => state.cart.cart);
  // console.log(cartDataFromFrontend);

  // // send checkout data to backend
  // const addToCart = async (cartDataFromFrontend) => {
  //   console.log("api triggered");
  //   try {
  //     const data = await fetch(`${APIURL}/checkout`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         UserId,
  //         cartDataFromFrontend,
  //       }),
  //     });
  //     const res = await data.json();
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // addToCart(cartDataFromFrontend);

  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  let shipping;
  let tax;
  let total;

  // delete cart item
  const removeFromCart = useCallback(async (productId) => {
    // dispatch(removeFromCart({ productId }));
    console.log(productId);
    const fetchedData = await fetch(`${APIURL}/checkout`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        UserId: UserId,
      }),
    });
    const res = await fetchedData.json();
    console.log(res);
    if (res.message === "Product removed from cart") {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.ProductId !== productId)
      );
      toast("Product removed from cart");
    } else if (res.message === "User's cart not found") {
      toast("User's cart not found");
    } else {
      toast("error in removing cart item");
    }
  });

  const removeFromCartMemoized = useCallback(removeFromCart, []);
  // get checkout data from backend
  useEffect(() => {
    const checkoutData = async () => {
      const res = await fetch(`${APIURL}/checkout`, {
        method: "get",
        headers: {
          "content-type": "application/json",
          UserId: UserId,
        },
      });
      const cartItemsData = await res.json();
      console.log(cartItemsData);
      setCartItems(cartItemsData.checkoutData.data);
      const cartLen = cartItemsData.checkoutData.data.length;
      dispatch(addToCart(cartLen));
      // console.log(cartItems);
    };
    checkoutData();
  }, [UserId, removeFromCartMemoized]);

  // Calculate subtotal
  // let subtotal = 100
  let subtotal = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.ProductPrice);
  }, 0);
  subtotal = subtotal.toFixed(2);

  if (cartItems.length > 0) {
    shipping = 49;
    tax = 35;
    total = parseFloat(subtotal) + shipping + tax;
  } else {
    shipping = 0;
    tax = 0;
    total = 0;
  }

  // payment integration using stripe
  const publicKey =
    "pk_test_51OWAMnSFC1dmGb39x0r3a91n2Hf5iteSRVrOfyPs8QO5u2rWPXXbbYNBgpdPm74UcrZLik0C3AMYoRmvNZdTCyOK00Zih3ysa3";
  const checkoutPlan = async () => {
    // const stripe = await loadStripe(publicKey);    // when using session id 
    const pay = await fetch(`${APIURL}/create-checkout-session`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems,
        UserId,
      }),
    });
    const paymentDetails = await pay.json();
    console.log(paymentDetails);

    // const session = await paymentDetails;  // ? when using session id 
    // const res = stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
    // if (res.error) {
    //   console.log(res.error);
    // }

    const sessionURl = await paymentDetails.session.url;
    console.log(sessionURl)
    window.location.href = sessionURl
  };

  return (
    <>
      <ToastContainer />
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
            <a href="/" className="text-sm pl-2 leading-none">
              Back
            </a>
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
                        src={item.ProductImage}
                        alt
                        className="w-[300px] h-[300px] object-contain object-center p-2"
                      />
                    </div>

                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 font-extrabold border border-gray-500 p-1 flex items-center justify-center rounded h-[20px] w-[20px]">
                        {item.ProductId}
                      </p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          {item.ProductName}
                        </p>
                        
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2 text-wrap w-[30vw]">
                        {item.ProductDescriptions}
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <button className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            Add to favorites
                          </button>
                          <button
                            onClick={() => removeFromCart(item.ProductId)}
                            className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          Price
                          ₹ {item.ProductPrice}
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
                &nbsp;₹ {total}
              </p>
            </div>
            <button
              onClick={checkoutPlan}
              className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
