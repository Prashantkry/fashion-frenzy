import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { bc3 } from "./Images";

/* Install and Import Pure React Carusel using  npm i pure-react-carousel */
export default function Testimonial() {
  return (
    <>
      <div className="mx-auto py-12">
        <div className="flex items-center justify-center px-4 mb-3 md:mb-5">
          <h1 className="md:text-4xl text-gray-300 text-2xl font-bold font-serif">
            Testimonial
          </h1>
        </div>
        <CarouselProvider
          naturalSlideWidth={50}
          isIntrinsicHeight={true}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <div className="pb-3 2xl:pb-3 flex">
                <div className="flex items-center justify-center w-full flex-col">
                  {/* <img
                    src="https://i.ibb.co/LgMb5L4/ramiro-pianarosa-xd4ao7-ALxb0-unsplash-1.png"
                    className="w-48 h-48"
                    alt="profile picture"
                  /> */}
                  <h1 className="text-2xl leading-6 font semibold mt-3 text-gray-400">
                    Jhon Deo
                  </h1>
                  <div className="mt-3">
                    {/* <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-svg1.svg"
                      alt="stars"
                    /> */}
                  </div>
                  <div className="flex md:w-7/12 w-10/12 px-8 relative mt-5">
                    <div className="absolute left-0 md:-ml-8 -ml-4 -mt-4">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/accent.svg"
                        alt="top accent"
                      />
                    </div>
                    <p className="text-lg leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores maxime, quam quo exercitationem esse cum.
                    </p>
                    <div className="absolute right-0 bottom-0 md:-mr-8 -mr-4 -mb-4">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/accents.svg"
                        alt="bottom accent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="pb-3 2xl:pb-3 flex">
                <div className="flex items-center justify-center w-full flex-col">
                  <h1 className="text-2xl leading-6 font semibold mt-3 text-gray-400">
                    Jhon Deo
                  </h1>
                  <div className="flex md:w-7/12 w-10/12 px-8 relative mt-5">
                    <div className="absolute left-0 md:-ml-8 -ml-4 -mt-4">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/accent.svg"
                        alt="top accent"
                      />
                    </div>
                    <p className="text-lg leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores maxime, quam quo exercitationem esse cum.
                    </p>
                    <div className="absolute right-0 bottom-0 md:-mr-8 -mr-4 -mb-4">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/accents.svg"
                        alt="bottom accent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="pb-3 2xl:pb-3 flex">
                <div className="flex items-center justify-center w-full flex-col">
                  <h1 className="text-2xl leading-6 font semibold mt-3 text-gray-400">
                    Jhon Deo
                  </h1>

                  <div className="flex md:w-7/12 w-10/12 px-8 relative mt-5">
                    <div className="absolute left-0 md:-ml-8 -ml-4 -mt-4">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/accent.svg"
                        alt="top accent"
                      />
                    </div>
                    <p className="text-lg leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores maxime, quam quo exercitationem esse cum.
                    </p>
                    <div className="absolute right-0 bottom-0 md:-mr-8 -mr-4 -mb-4">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/accents.svg"
                        alt="bottom accent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
          <div className="flex items-center justify-center ">
            <ButtonBack>
              <button
                id="prev"
                role="button"
                aria-label="previous slide"
                className="cursor-pointer p-2 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-svg4.svg"
                  alt="previous"
                />
              </button>
            </ButtonBack>
            <ButtonNext>
              <button
                id="next"
                role="button"
                aria-label="next slide"
                className="ml-7 p-2 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 cursor-pointer focus:outline-none"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-svg5.svg"
                  alt="next"
                />
              </button>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </>
  );
}
