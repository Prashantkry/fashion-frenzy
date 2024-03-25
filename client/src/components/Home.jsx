import React, { useState, useEffect } from "react";
import { bc1, bc2, bc3, w1, bc5, bc4 } from "./Images";
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
const Home = () => {
  return (
    <>
      <div className="h-[93.5vh] border-0 border-red-800">
        <div className="w-[27vw] h-[18vh] bg-gray-50 absolute z-20 opacity-5 mt-[25vh] ml-[9.4vw]" />
        <div className="absolute z-30 text-gray-50 text-4xl bg-gray-900 p-5 bg-transparent border w-[27vw] h-[18vh] border-gray-600 filter mt-[26vh] ml-[10vw]">
          <p className="font-thin">
            Update&nbsp;
            <span className="font-extrabold tracking-widest text-slate-700">
              Your Look
            </span>
            <br /> now with our latest <br />
            <span className="font-extrabold text-slate-700">must-haves.</span>
          </p>
        </div>
        <p className=" absolute z-20 text-sm font-thin text-cyan-700 tracking-widest ml-[9.5vw] mt-[45vh]">
          Follow recent trends in unique style
        </p>
          
        <button onClick={shopPage} className="absolute text-gray-50 z-20 h-[100px] w-[100px] ring-1 rounded-full flex items-center justify-around mt-[54vh] ml-[32vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            width="10"
            viewBox="0 0 512 512"
            className="w-[30px] h-[30px] "
          >
            <path
              fill="#165474"
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
            />
          </svg>
        </button>
        <button
          onClick={shopPage}
          className="absolute tracking-widest text-cyan-600 font-semibold z-20 h-[100px] w-[100px] ring-1 rounded-full flex items-center justify-around mt-[54vh] ml-[26.1vw]"
        >
          Shop
        </button>
        <div className="z-10 flex justify-center items-center">
          <img
            src={bc}
            alt=""
            className="h-[82vh] w-[90vw] object-cover rounded-md mt-12"
          />
        </div>
        <div className="absolute z-30 w-[30px] h-[45px] -mt-[8vh] ml-[48vw] border-2 p-0 rounded-3xl downArrow items-center flex justify-center">
          <span className="">↓</span>
        </div>
      </div>

      <div className="bg-gray-50 h-[23vh] border-0 flex flex-col items-center justify-center">
        <div className="w-[0.1vw] h-[5vh] bg-gray-700 my-5" />
        <p className=" text-gray-600 text-sm tracking-wide">
          ALYSUM IS A PREMIUM ECOMMERCE THEME.
        </p>
        <p className=" text-gray-600 mt-4 text-sm tracking-wide">
          Quisque euismod pretium lacinia. Vivamus sollicitudin placerat sit
          amet sagittis. Mauris ac ante porta, pellentesque lacus
        </p>
      </div>
      {/* Import Other Components */}
      <ProductsMen />

      <Brands />

      {/* <Newsletter/> */}
      {/* offer grid start */}
      <div className="mx-[8vw] w-[82vw] border-b flex justify-between text-sm mt-16">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-0 border-indigo-600 uppercase">
          <button className="font-semibold inline-block">What we Offer</button>
        </div>
      </div>
      <div className="h-[60vh] w-[95vw] grid grid-cols-3 gap-6 py-10 px-6 border-0 pl-[9.5vw] items-center justify-center">
        <div className="w-[27.5vw] h-[50vh] relative">
          <img
            src={bc1}
            alt="x"
            className="object-cover rounded shadow-md h-full"
          />
          <div className="h-full w-full absolute flex flex-col item-center justify-center p-8 text-gray-300 -mt-[50vh]">
            <span className="uppercase text-lg font-thin">Exclusive</span>
            <span className="lowercase text-6xl font-thin">Discounts</span>
            <div className="flex items-start justify-start">
              <span className="lowercase text-6xl font-thin">&</span>
              <span className="uppercase text-6xl font-bold">Offers</span>
            </div>
          </div>
        </div>
        <div className="w-[27.5vw] h-[50vh] relative">
          <img
            src={bc5}
            alt="x"
            className="object-cover rounded shadow-md h-full"
          />
          <p className="h-full w-full absolute flex flex-col item-center justify-center p-8 text-gray-300 -mt-[50vh]">
            <span className="uppercase text-lg font-thin">shop now </span>
            <span className="lowercase text-6xl font-thin">hottest news</span>
            <span className="uppercase text-6xl font-bold">#ALYSUM</span>
          </p>
        </div>
        <div className="w-fit h-[50vh]">
          <div className="h-[23vh] mb-[2.5vh] relative">
            <img
              src={bc3}
              alt="x"
              className="object-cover rounded shadow-md w-[95%] h-[24.3vh]"
            />
            <p className="h-full w-full absolute flex flex-col item-center justify-center p-5 -mt-[20vh] text-gray-300">
              <span className="uppercase text-sm font-thin">see the great</span>
              <span className="lowercase text-5xl font-thin">attention to</span>
              <span className="uppercase text-5xl font-bold">details</span>
            </p>
          </div>
          <div className="h-[23vh] relative">
            <img
              src={bc2}
              alt="x"
              className="object-cover rounded shadow-md w-[95%] h-[24.3vh]"
            />
            <p className="h-full w-full absolute flex flex-col item-center justify-center p-4 -mt-[20vh] text-gray-300">
              <span className="uppercase text-sm font-thin">discover </span>
              <span className="lowercase text-5xl font-thin">style that</span>
              <span className="uppercase text-5xl font-bold">inspires</span>
            </p>
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
