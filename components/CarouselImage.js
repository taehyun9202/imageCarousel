import React from "react";
import Image from "next/image";

const _items = [
  {
    player: {
      title: "Efren Reyes",
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
    },
  },
  {
    player: {
      title: "Shane Van Boening",
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg",
    },
  },
  {
    player: {
      title: "Mike Sigel",
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
    },
  },
  {
    player: {
      title: "Willie Mosconi",
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg",
    },
  },
];

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

const CarouselImage = ({ pos, idx, activeIdx }) => {
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
