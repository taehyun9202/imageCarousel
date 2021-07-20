import React, { useState } from "react";
import CarouselImage from "./CarouselImage";

const images = [
  { title: "react", image: "/image.png" },
  { title: "react", image: "/image.png" },
  { title: "react", image: "/image.png" },
  { title: "react", image: "/image.png" },
  { title: "react", image: "/image.png" },
  { title: "react", image: "/image.png" },
];

const Carousel = () => {
  const [current, setCurrent] = useState(images[0]);

  const leftClick = () => {};
  return (
    <div>
      <div className="w-full">
        <div className="max-w-7xl flex w-full justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 p-1 bg-gray-300 rounded-full cursor-pointer flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokelinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className="flex bg-red-100 overflow-hidden">
            {images.map((i, idx) => (
              <CarouselImage image={i} />
            ))}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 p-1 bg-gray-300 rounded-full cursor-pointer flex-shrink-0 animate-ping"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
