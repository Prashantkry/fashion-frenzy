import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { b1, b2, b3, b4, b5, b6, b7 } from "./Images";

/* Install and Import Pure React Carusel using  npm i pure-react-carousel */
export default function Brands() {
  const images = [b1, b2, b3, b4, b6, b7];
  return (
    <>
      <div className="mx-auto py-12 w-auto z-30 border-0">
        <p className="text-gray-300 border-0 -mt-7 font-serif text-3xl text-center border-b-2 w-fit flex items-center justify-center m-auto mb-8">
          Our Brands
        </p>
        <div className="flex flex-wrap  items-center justify-evenly">
          {images.map((e, i) => (
            <img
              key={i}
              src={e}
              alt="x"
              className="border-0 border-black h-[150px]"
            />
          ))}
        </div>
      </div>
    </>
  );
}
