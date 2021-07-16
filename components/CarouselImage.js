import React from "react";
import Image from "next/image";

const CarouselImage = ({ pos, idx, activeIdx }) => {
  const createItem = (position, idx) => {
    const item = {
      styles: {
        transform: `translateX(${position * slideWidth}rem)`,
      },
      player: _items[idx].player,
    };

    switch (position) {
      case length - 1:
      case length + 1:
        item.styles = { ...item.styles, filter: "grayscale(1)" };
        break;
      case length:
        break;
      default:
        item.styles = { ...item.styles, opacity: 0 };
        break;
    }

    return item;
  };
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <Image src={item.player.image} alt={item.player.title} layout="fill" />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

export default CarouselImage;
