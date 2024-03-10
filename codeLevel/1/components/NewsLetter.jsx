import React from "react";
import "../App.css";
const Newsletter = () => {
  return (
    <>
      <div className="items-center justify-center relative mt-0 mb-10 NavBg h-[30vh]">
        <img
          className="hidden md:block w-full h-full absolute"
          src="https://i.ibb.co/SXQ72jM/Group-780.png"
          alt="an envelope"
        />
        <img
          className="block md:hidden w-full h-full absolute rounded-md"
          src="https://i.ibb.co/MhJJZnt/X-93.png"
          alt="an envelope"
        />
        <div className="relative z-10 w-full">
          <div className="flex flex-col justify-center items-center py-12 px-6">
            <p className="text-sm text-center text-white pb-4">
              Free updates about interview questions and trends
            </p>
            <p className="md:text-4xl text-2xl tracking-widest font-serif text-center font-bold text-white pb-4 md:pb-8">
              Subscribe to our channel
            </p>
            <div className="md:w-full w-3/4 flex flex-col justify-center md:flex-row gap-4 md:gap-0">
              <input
                className="md:w-1/3 p-2 sm:p-4 border border-gray-300 rounded-md md:rounded-r-none bg-white focus:outline-none placeholder-gray-300"
                type="email"
                placeholder="Enter email to join"
              />
              <button className="w-full md:w-32 p-2 sm:p-4 border rounded-md md:rounded-l-none bg-indigo-700 hover:bg-indigo-800 text-base font-medium text-white border-indigo-700 focus:border-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
