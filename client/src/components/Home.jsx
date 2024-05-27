import React, { useState, useEffect } from "react";
import { bc1, bc2, bc3, w1, bc5, bc4, back } from "./Images";
import bc from "./Images";
import "../App.css";
import Navbar from "./Navbar";
import ProductsMen from "./ProductsMen";
import ProductsWoMen from "./ProductsWoMen";
import Newsletter from "./NewsLetter";
import Testimonial from "./Testimonial";
import Brands from "./Brands";

const images = [bc, bc1, bc2, bc3];
const shopPage = () => {
  window.location.href = "/Product";
};

// slide show of both content
document.addEventListener("DOMContentLoaded", function () {
  let currentContentIndex = 1;
  const contentCount = 2;
  function toggleContent() {
    document.getElementById(`content${currentContentIndex}`).style.display =
      "none";
    currentContentIndex = (currentContentIndex % contentCount) + 1;
    document.getElementById(`content${currentContentIndex}`).style.display =
      "block";
  }
  setInterval(toggleContent, 3000);
});

const Home = () => {
  return (
    <>
      {/* main content start */}
      <div>
        {/* content 1 */}
        <div className="border-0 border-red-800 relative" id="content1">
          <div className="w-[80%] md:w-[27vw] h-[18vh] bg-gray-50 absolute z-20 opacity-5 mt-[25vh] md:mt-[25vh] ml-[10vw] md:ml-[9.4vw]" />
          <div className="absolute z-30 text-gray-50 text-2xl md:text-4xl bg-gray-900 p-5 bg-transparent border w-[80%] md:w-[27vw] h-[18vh] border-gray-600 filter mt-[26vh] md:mt-[26vh] ml-[10vw] md:ml-[10vw]">
            <p className="font-thin">
              Update&nbsp;
              <span className="font-extrabold tracking-widest text-slate-700">
                Your Look
              </span>
              <br /> now with our latest <br />
              <span className="font-extrabold text-slate-700">must-haves.</span>
            </p>
          </div>

          <button
            onClick={shopPage}
            className="absolute text-gray-50 z-20 h-[70px] md:h-[100px] w-[70px] md:w-[100px] ring-1 rounded-full flex items-center justify-around mt-[50vh] md:mt-[54vh] ml-[70vw] md:ml-[32vw]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="10"
              viewBox="0 0 512 512"
              className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] "
            >
              <path
                fill="#165474"
                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
              />
            </svg>
          </button>
          <button
            onClick={shopPage}
            className="absolute tracking-widest text-cyan-600 font-semibold z-20 h-[70px] md:h-[100px] w-[70px] md:w-[100px] ring-1 rounded-full flex items-center justify-around mt-[50vh] md:mt-[54vh] ml-[50vw] md:ml-[26.1vw]"
          >
            Shop
          </button>
          <div className="z-10 flex justify-center items-center">
            <img
              src={bc}
              alt=""
              className="h-[60vh] md:h-[82vh] w-[90vw] object-cover rounded-md mt-12"
            />
          </div>
          <div className="absolute z-30 w-[30px] h-[45px] -mt-[8vh] ml-[48vw] border-2 p-0 rounded-3xl downArrow items-center flex justify-center">
            <span className="">↓</span>
          </div>
        </div>
        {/* content 2 */}
        <div className="border-0 border-red-800 relative" id="content2">
          <div className="w-[90%] md:w-[29vw] border h-[23vh] absolute mt-[26vh] ml-[5vw] md:ml-[10vw] flex items-center justify-center">
            <div className="absolute z-30 text-gray-50 text-2xl md:text-4xl p-5 m-5 border-0 border-gray-600 filter">
              <p className="font-thin">
                create your &nbsp;
                <span className="font-extrabold tracking-widest text-slate-700">
                  Style with Our
                </span>
                <br /> Hottest arrival for her.
              </p>
            </div>
          </div>
          <p className="absolute z-20 text-xs md:text-sm font-semibold text-cyan-700 tracking-widest ml-[5vw] md:ml-[10vw] mt-[45vh] md:mt-[50vh]">
            Sale offer <span className="text-xl md:text-3xl ">20%</span>
            <span className=" font-bold">off</span> this week
          </p>

          <button
            onClick={shopPage}
            className="absolute text-gray-50 z-20 h-[70px] md:h-[100px] w-[70px] md:w-[100px] ring-1 rounded-full flex items-center justify-around mt-[55vh] md:mt-[60vh] ml-[60vw] md:ml-[27vw]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="10"
              viewBox="0 0 512 512"
              className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] "
            >
              <path
                fill="#165474"
                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
              />
            </svg>
          </button>
          <button
            onClick={shopPage}
            className="absolute tracking-widest text-cyan-900 z-20 h-[70px] md:h-[100px] w-[70px] md:w-[100px] ring-1 rounded-full flex items-center justify-around font-bold mt-[55vh] md:mt-[60vh] ml-[40vw] md:ml-[21vw]"
          >
            Shop
          </button>
          <div className="z-10 flex justify-center items-center">
            <img
              src={back}
              alt=""
              className="h-[60vh] md:h-[82vh] w-[90vw] object-cover rounded-md mt-12"
            />
          </div>
          <div className="absolute z-30 w-[30px] h-[45px] -mt-[8vh] ml-[48vw] border-2 p-0 rounded-3xl downArrow items-center flex justify-center">
            <span className="">↓</span>
          </div>
        </div>
      </div>

      {/* main content end */}

      <div className="bg-gray-50 h-[23vh] border-0 flex flex-col items-center justify-center">
        <div className="w-[0.1vw] h-[5vh] bg-gray-700 my-5" />
        <p className=" text-gray-600 text-sm tracking-wide">
          ALYSUM IS A PREMIUM ECOMMERCE THEME.
        </p>
        <p className=" text-gray-600 mt-4 flex text-sm tracking-wide text-center">
          Quisque euismod pretium lacinia. Vivamus sollicitudin placerat sit
          amet sagittis. Mauris ac ante porta, pellentesque lacus
        </p>
      </div>
      {/* Import Other Components */}
      <ProductsMen />

      <Brands />

      {/* <Newsletter/> */}
      {/* offer grid start */}
      <div className="mx-[8vw] w-[82vw] border-b flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-0 border-indigo-600 uppercase">
          <button className="font-semibold inline-block">What we Offer</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-6 border-0 items-center justify-center">
        <div className="h-[50vh] relative">
          <img
            src={bc1}
            alt="x"
            className="object-cover rounded shadow-md h-full"
          />
          <div className="h-full w-full absolute inset-0 flex flex-col items-center justify-center p-8 text-gray-300">
            <span className="uppercase text-xs md:text-lg lg:text-xl font-thin">
              Exclusive
            </span>
            <span className="lowercase text-4xl md:text-6xl lg:text-7xl font-thin">
              Discounts
            </span>
            <div className="flex items-start justify-start">
              <span className="lowercase text-4xl md:text-6xl lg:text-7xl font-thin">
                &
              </span>
              <span className="uppercase text-4xl md:text-6xl lg:text-7xl font-bold">
                Offers
              </span>
            </div>
          </div>
        </div>
        <div className="w-auto h-[50vh] relative">
          <img
            src={bc5}
            alt="x"
            className="object-cover rounded shadow-md h-full"
          />
          <div className="h-full w-full absolute inset-0 flex flex-col items-center justify-center p-8 text-gray-300">
            <span className="uppercase text-xs md:text-lg lg:text-xl font-thin">
              shop now{" "}
            </span>
            <span className="lowercase text-4xl md:text-6xl lg:text-7xl font-thin">
              hottest news
            </span>
            <span className="uppercase text-4xl md:text-6xl lg:text-7xl font-bold">
              #ALYSUM
            </span>
          </div>
        </div>
        <div className="w-auto h-auto offer-image grid">
          <div className="h-auto flex mb-[2.5vh] relative">
            <img
              src={bc3}
              alt="x"
              className="object-cover rounded shadow-md w-[95%] h-[24.3vh]"
            />
            <div className="h-full w-full absolute inset-0 flex flex-col items-center justify-center p-5 text-gray-300">
              <span className="uppercase text-xs md:text-sm lg:text-lg font-thin">
                see the great
              </span>
              <span className="lowercase text-4xl md:text-5xl lg:text-6xl font-thin">
                attention to
              </span>
              <span className="uppercase text-4xl md:text-5xl lg:text-6xl font-bold">
                details
              </span>
            </div>
          </div>
          <div className="h-auto relative">
            <img
              src={bc2}
              alt="x"
              className="object-cover rounded shadow-md w-[95%] h-[24.3vh]"
            />
            <div className="h-full w-full absolute inset-0 flex flex-col items-center justify-center p-4 text-gray-300">
              <span className="uppercase text-xs md:text-sm lg:text-lg font-thin">
                discover{" "}
              </span>
              <span className="lowercase text-4xl md:text-5xl lg:text-6xl font-thin">
                style that
              </span>
              <span className="uppercase text-4xl md:text-5xl lg:text-6xl font-bold">
                inspires
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* offer grid end */}

      {/* testimonial start  */}
      <Testimonial />
      {/* testimonial end */}

      {/* <ProductsWoMen /> */}
    </>
  );
};

export default Home;
