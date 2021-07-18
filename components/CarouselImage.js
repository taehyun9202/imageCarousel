import React from "react";
import Image from "next/image";

const _items = [
  {
    player: {
      title: "Efren Reyes",
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: "/image.png",
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: "/image.png",
    },
  },
  {
    player: {
      title: "Shane Van Boening",
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: "/image.png",
    },
  },
  {
    player: {
      title: "Mike Sigel",
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: "/image.png",
    },
  },
  {
    player: {
      title: "Willie Mosconi",
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: "/image.png",
    },
  },
];

const length = _items.length;
_items.push(..._items);
const CarouselImage = ({ pos, idx, activeIdx }) => {
  const createItem = (position, idx) => {
    const item = {
      styles: {
        transform: `translateX(${position * 30}rem)`,
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
    <li className="absolute inline-block w-44 m-0 p-4" style={item.styles}>
      <div className="relative cursor-pointer flex h-full overflow-hidden w-full">
        <Image
          className="object-cover"
          src={item.player.image}
          alt={item.player.title}
          layout="fill"
        />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

export default CarouselImage;
