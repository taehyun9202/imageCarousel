import React from "react";
import Image from "next/image";

const CarouselImage = ({ image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-64 w-64 relative">
        <Image
          className="mx-auto object-cover"
          alt="image"
          layout="fill"
          src={image.image}
        />
      </div>
      <p>{image.title}</p>
    </div>
  );
};

export default CarouselImage;
