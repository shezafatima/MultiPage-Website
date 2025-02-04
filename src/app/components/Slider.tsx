
"use client";
import { IoLocationSharp } from "react-icons/io5";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Define the Property type
interface Property {
  id: number;
  image: string;
  price: string;
  location: string;
  description: string;
}

// Define the props for CardSlider
interface CardSliderProps {
  properties: Property[];
}

// CardSlider component
const CardSlider: React.FC<CardSliderProps> = ({ properties }) => {
  const sliderRef = useRef<Slider | null>(null); // Ref to control the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {properties.map((property) => (
          <div key={property.id} className="px-4">
            <div   className="bg-white shadow-lg card border rounded-lg overflow-hidden flex flex-col h-full mt-10 mb-4">
            <div className="relative w-full h-[14rem]">
                        <Image
                            src={property.image}
                            alt={property.description}
                            width={1000}
                            height={1000}
                           
                            className="w-[40rem] h-full object-cover rounded"
                            priority
                        />
                    </div>
                    <div className="p-4 flex-grow">
                        <p className="text-green-500  font-bold text-xl ">{property.price}</p>
                        <h1 className="text-xl flex items-center justify-center text-black mt-2">{property.description}</h1>
                        <div className="mt-2 flex flex-row">
                            <div className="mt-1 text-lg mx-1">

                        <IoLocationSharp />
                            </div>
                        <p className="text-gray-600 text-lg ">{property.location}</p>
                        </div>
                    </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className=" ml-2 absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded-full hover:bg-gray-400 hover:text-white"
      >
        &#9664; 
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className=" mr-2 absolute top-1/2 right-0 transform -translate-y-1/2 bg-white  text-gray-800 px-2 py-1 rounded-full hover:bg-gray-400 hover:text-white"
      >
        &#9654; 
      </button>
    </div>
  );
};

export default CardSlider;
