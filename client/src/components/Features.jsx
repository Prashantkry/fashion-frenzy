import React from "react";
import { features } from "./Images";
import { arrow } from "./Images";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around h-auto md:h-[83vh]">
      <div
        className="w-full h-[700px] md:w-[40%] bg-cover bg-center mt-5"
        style={{ backgroundImage: `url(${features})` }}
      ></div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2 w-full md:w-[60%] h-auto border-0 sm:mt-10 lg:mt-5">
        <div className="absolute text-3xl font-semibold -mt-10 tracking-wide flex">
          <p>What We Offer</p>
          <img src={arrow} alt="" className="w-[80px] mt-5 rotate-6" />
        </div>

        {/* Card Component */}
        {[
          {
            title: "FREE DELIVERY",
            description:
              "Cras pellentesque, nisi ac tempus pellentesque, orci sem commodo urna",
            iconPath:
              "M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",
          },
          {
            title: "FREE, EASY EXCHANGES",
            description:
              "Nam eget urna id tellus venenatis ullamcorper quis ut augue sagittis sed",
            iconPath:
              "M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z",
          },
          {
            title: "24/H CUSTOMER SERVICE",
            description:
              "Pellentesque habitant morbi tristue senectus etnetus et malesuada fames",
            iconPath:
              "M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z",
          },
          {
            title: "GIFT CARD",
            description:
              "Cras in semper massa, vel rutrum ligula. Aenean consectetur nisl a ante",
            iconPath:
              "M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.3 44.7L256 74.7l-24.5-42.4C215.6 4.9 186 27 154.2 27H152c-48.6 0-88 39.4-88 88zm0 200v56c0 17.7 14.3 32 32 32H192V288H64zm240 88H416c17.7 0 32-14.3 32-32V288H304V376z",
          },
          {
            title: "WIN 10% OFF",
            description:
              "Cras pellentesque, nisi ac tempus pellentesque, orci sem commodo urna",
            iconPath:
              "M96 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0 16a48 48 0 1 0-32 83.2V320h32V195.2A48 48 0 0 0 96 112zm384-48a32 32 0 1 1-64 0 32 32 0 1 1 64 0zM400 80a48 48 0 0 0-32 83.2V320h32V163.2a48 48 0 0 0 32-83.2zM48 384h416v32H48zM256 32c8.8 0 16-7.2 16-16s-7.2-16-16-16S240 7.2 240 16s7.2 16 16 16zm0 480c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z",
          },
          {
            title: "POINTS",
            description:
              "Cras in semper massa, vel rutrum ligula. Aenean consectetur nisl a ante",
            iconPath:
              "M232 32h48c13.3 0 24 10.7 24 24v24h68c41.4 0 75 33.6 75 75v212c0 30.9-19.1 58.8-47.7 69.7L360 471.4V544c0 8.8-7.2 16-16 16H168c-8.8 0-16-7.2-16-16V471.4l-29.3-12.7C93.1 447.8 74 419.9 74 389V177c0-41.4 33.6-75 75-75h68V56c0-13.3 10.7-24 24-24zM296 288c0-22.1-17.9-40-40-40s-40 17.9-40 40v192h80V288z",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-2 border bg-white shadow-md rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-16 w-16 text-blue-500"
            >
              <path d={feature.iconPath} />
            </svg>
            <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
            <p className="text-sm mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
