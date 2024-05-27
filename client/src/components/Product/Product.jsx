import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const APIUrl = "https://fashion-frenzy.onrender.com/api/v1";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  // const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch(`${APIUrl}/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.allProducts);
        setMen(
          data.allProducts.filter((pMens) => {
            return pMens.ProductCategory.toLowerCase() === "men";
          })
        );
        setWomen(
          data.allProducts.filter((pWomens) => {
            return pWomens.ProductCategory.toLowerCase() === "women";
          })
        );
      });
  }, []);

  function handleAllProduct() {
    fetch(`${APIUrl}/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.allProducts);
      });
  }
  function handleMen() {
    setProducts(men);
  }
  function handleWomen() {
    setProducts(women);
  }

  // const productProperties = products.map((product, index) => {
  //   const {
  //     _id,
  //     ProductId,
  //     ProductName,
  //     ProductDescriptions,
  //     ProductPrice,
  //     ProductImage,
  //   } = product;

  //   return {
  //     productId: ProductId,
  //     productName: ProductName,
  //     productDes: ProductDescriptions,
  //     productP:
  //       ProductPrice.ProductPrice - (20 * ProductPrice.ProductPrice) / 100,
  //     productImg: ProductImage,
  //   };
  // });

  const UserId = localStorage.getItem("UserId");

  const addToCart = async (e) => {
    console.log("api triggered");
    try {
      const data = await fetch(`${APIUrl}/checkout`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserId,
          productProperties: [e],
        }),
      });
      const res = await data.json();
      console.log(res);
      toast.success("Added to Cart");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(products);

  // const handle99_499 = (ProductPrice) => {
  //   if (ProductPrice >= 99 && ProductPrice <= 499) {
  //   }
  // };

  // const handle499_999 = (ProductPrice) => {
  //   if (ProductPrice >= 499 && ProductPrice <= 999) {
  //   }
  // };

  // const handle999_2999 = (ProductPrice) => {
  //   if (ProductPrice >= 999 && ProductPrice <= 2999) {
  //   }
  // };

  // const handle2999_4999 = (ProductPrice) => {
  //   if (ProductPrice >= 2999 && ProductPrice <= 4999) {
  //   }
  // };

  // const handle5000 = (ProductPrice) => {
  //   if (ProductPrice >= 5000) {
  //   }
  // };

  // const calculateDiscountedPrice = (productPrice, discountPercentage) => {
  //   return (productPrice - discountPercentage * productPrice).toFixed(1);
  // };

  // const handleDiscount = (e, value) => {
  //   const filteredProducts = products.filter((product) => {
  //     // if(product.)
  //   });
  //   setProducts(filteredProducts);
  // };

  return (
    <>
      <ToastContainer />
      <div className="w-full h-[93.2vh] flex items-center justify-between">
        {/* filter and sorting start */}
        {/* <div className="bg-gray-50 h-full w-[20%] border"> */}
        {/* filter and sort */}
        {/* <div className="flex items-center justify-between px-10 py-5 border-b">
            <button className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[15px] h-[15px] mr-2"
              >
                <path
                  fill="#353536"
                  d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
                />
              </svg>
              Filter Product
            </button>
            <select className="flex items-center justify-center border p-1 ">
              <option> Sort </option>
              <option> Relevance </option>
              <option> Most Bought </option>
              <option> Brands </option>
              <option> LEVI'S </option>
              <option> GLORISA </option>
              <option> Raymond </option>
              <option> METRONAUT </option>
              <option> Houseofchic </option>
              <option> FUBAR </option>
              <option> STONEBERG </option>
            </select>
          </div>
          sorting by price 
          <div className="py-6 px-8">
            <p className="text-lg font-semibold tracking-wide">PRICE</p>
            <div className="flex items-center justify-start mt-3 w-[45%]">
              <input
                type="radio"
                name=""
                id=""
                className="mr-3"
                onClick={handle99_499}
              />
              <label htmlFor="99-499">₹ 99 - ₹ 499</label>
            </div>
            <div className="flex items-center justify-start mt-3 w-[45%]">
              <input
                type="radio"
                name=""
                id=""
                className="mr-3"
                onClick={handle499_999}
              />
              <label htmlFor="99-499">₹ 499 - ₹ 999</label>
            </div>
            <div className="flex items-center justify-start mt-3 w-[45%]">
              <input
                type="radio"
                name=""
                id=""
                className="mr-3"
                onClick={handle999_2999}
              />
              <label htmlFor="99-499">₹ 999 - ₹ 2999</label>
            </div>
            <div className="flex items-center justify-start mt-3 w-[48%]">
              <input
                type="radio"
                name=""
                id=""
                className="mr-3"
                onClick={handle2999_4999}
              />
              <label htmlFor="99-499">₹ 2999 - ₹ 4999</label>
            </div>
            <div className="flex items-center justify-start mt-3 w-[45%]">
              <input
                type="radio"
                name=""
                id=""
                className="mr-3"
                onClick={handle5000}
              />
              <label htmlFor="99-499">₹ 5000 +</label>
            </div>
          </div>

          sorting by DISCOUNT 
          <div className="py-6 px-8">
            <p className="text-lg font-semibold tracking-wide">DISCOUNT</p>
            <div className="mt-2 flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 text-gray-500"
                onChange={(e) => handleDiscount(e.target.checked, 0.2)}
              />
              <p>20% or more</p>
            </div>
            <div className="mt-2 flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 text-gray-500"
                onChange={(e) => handleDiscount(e.target.checked, 0.3)}
              />
              <p>30% or more</p>
            </div>
            <div className="mt-2 flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 text-gray-500"
                onChange={(e) => handleDiscount(e.target.checked, 0.4)}
              />
              <p>40% or more</p>
            </div>
            <div className="mt-2 flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 text-gray-500"
                onChange={(e) => handleDiscount(e.target.checked, 0.5)}
              />
              <p>50% or more</p>
            </div>
            <div className="mt-2 flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 text-gray-500"
                onChange={(e) => handleDiscount(e.target.checked, 0.6)}
              />
              <p>60% or more</p>
            </div>
            <div className="mt-2 flex items-center justify-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 text-gray-500"
              />
              <p>70% or more</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-7">
            <button className="bg-red-700 w-[80%] text-lg font-semibold text-white tracking-wide rounded py-2">
              Reset Filter
            </button>
          </div>
        </div> */}

        {/* all products start */}
        <div className="bg-gray-50 h-[93.2vh] overflow-scroll w-full">
          <div className="py-5 sm:py-10 md:py-16 px-2 sm:px-5 md:px-10">
            <div className="border-b border-gray-800 mb-5 flex justify-between text-sm">
              <div className="text-indigo-600 flex items-center justify-between pb-2 pr-2 border-b-0 border-indigo-600 uppercase w-full">
                <button
                  className="font-semibold flex items-center justify-center"
                  onClick={handleAllProduct}
                >
                  <svg
                    className="h-6 mr-3"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 455.005 455.005"
                  >
                    <g>
                      <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"></path>
                      <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z"></path>
                      <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z"></path>
                      <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"></path>
                      <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"></path>
                      <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z"></path>
                      <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z"></path>
                    </g>
                  </svg>
                  All Product available
                </button>
                <button
                  className="font-semibold inline-block"
                  onClick={handleMen}
                >
                  Men Collections
                </button>
                <button
                  className="font-semibold inline-block"
                  onClick={handleWomen}
                >
                  Women Collections
                </button>
              </div>
              {/* <a to="#">See All</a> */}
            </div>

            <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 justify-center">
              {products.map((e, i) => (
                <div
                  key={i}
                  className="flex mt-3 card text-nowrap my-5 mx-5 w-auto"
                >
                  <div className="rounded overflow-hidden shadow-lg flex flex-col w-[314px] bg-gray-100 justify-center">
                    <div className="relative">
                      <Link to="/productDetails">
                        <img
                          className="w-full h-[350px] p-3 pb-1"
                          src={e.ProductImage}
                          alt=""
                        />
                      </Link>
                      <Link to="#!">
                        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                          {i + 1}
                        </div>
                      </Link>
                    </div>
                    <div className="px-6 py-3 mb-auto">
                      <Link
                        to="#"
                        className="font-medium text-sm hover:text-indigo-600 h-[1.5vh] transition duration-500 ease-in-out inline-block mb-2 text-gray-800"
                      >
                        {e.ProductName}
                      </Link>
                      <p className="text-gray-500 text-sm overflow-scroll max-h-[4.2vh] no-scrollbar">
                        {e.ProductDescriptions}
                      </p>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                      <button
                        onClick={() => addToCart(e)}
                        className=" text-gray-800 border border-gray-900 p-1 text-sm px-2 rounded font-semibold -mt-1 -ml-3"
                      >
                        Add to Cart →
                      </button>

                      <div className="flex items-center justify-center">
                        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                          <span className="ml-1 line-through text-gray-600 font-semibold text-[9px] mt-1">
                            ₹ {e.ProductPrice}
                          </span>
                        </span>

                        {/* <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                          <span className="ml-1 font-semibold text-[12px]">
                            ₹{e.ProductPrice - (30 * e.ProductPrice) / 100}
                            {e.ProductPrice >= 1 &&
                              e.ProductPrice < 499 &&
                              `₹ ${calculateDiscountedPrice(
                                e.ProductPrice,
                                0.2
                              )} (20% Off)`}
                            {e.ProductPrice >= 499 &&
                              e.ProductPrice < 999 &&
                              `₹ ${calculateDiscountedPrice(
                                e.ProductPrice,
                                0.3
                              )} (30% Off)`}
                            {e.ProductPrice >= 999 &&
                              e.ProductPrice <= 1999 &&
                              `₹ ${calculateDiscountedPrice(
                                e.ProductPrice,
                                0.35
                              )} (35% Off)`}
                            {e.ProductPrice >= 2000 &&
                              e.ProductPrice <= 3999 &&
                              `₹ ${calculateDiscountedPrice(
                                e.ProductPrice,
                                0.55
                              )} (55% Off)`}
                            {e.ProductPrice >= 4000 &&
                              e.ProductPrice <= 6999 &&
                              `₹ ${calculateDiscountedPrice(
                                e.ProductPrice,
                                0.4
                              )} (40% Off)`}
                            {e.ProductPrice > 6999 &&
                              `₹ ${calculateDiscountedPrice(
                                e.ProductPrice,
                                0.6
                              )} (60% Off)`}
                          </span>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
