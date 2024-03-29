import React, { useState } from "react";

export default function NotFound() {
  return (
    <div className="bg-gray-800">
      {/* <img
        className="absolute w-full h-full top-0 z-0"
        // src="https://i.ibb.co/JmcV6n1/Fictional-colourful-night-sky-with-stars-and-nebula.jpg"
      /> */}
      <div className="flex justify-center items-center py-32 lg:py-0">
        <div className=" px-4 flex justify-center items-center relative z-10 text-gray-800">
          <div className="sm:w-5/6 bg-white border rounded-md grid place-items-center my-8 py-16 px-4 md:px-24 lg:px-72">
            <img src="https://i.ibb.co/Lrq5cgP/404-1.png" alt={404} />
            <h1 className="text-center font-bold text-gray-800 text-xl lg:text-2xl pt-12  lg:pt-8 ">
              PAGE NOT FOUND
            </h1>
            <p className="py-6 md:py-8 text-gray-800 text-center ">
              The page you are looking for might have been removed, has its name
              changed, or is temporarily unavailable.
            </p>
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white border rounded-md py-4 px-8 w-full lg:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
