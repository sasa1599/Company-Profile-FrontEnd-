import Image from "next/image";
import Marquee from "react-fast-marquee";

const carouselItems: Array<{ src: string; alt: string }> = [
  { src: "/ayam.jpeg", alt: "pic" },
  { src: "/buncis.jpeg", alt: "pic" },
  { src: "/ayam2.jpeg", alt: "pic" },
  { src: "/sawah.jpeg", alt: "pic" },
  { src: "/kol.jpeg", alt: "pic" },
  { src: "/ikan2.jpg", alt: "pic" },
];

const Carousel = () => (
  <Marquee className="bg-white py-6 px-6" speed={20} gradient={false}>
    <div className="carousel carousel-center gap-6 flex items-center bg-white">
      {carouselItems.map((item, index) => (
        <div
          className="carousel-item"
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: item.src === "/ikan2.jpg" || item.src === "/ayam.jpeg" ? "24px" : "0", 
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={200}
            height={200}
            className="w-auto h-[300px] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  </Marquee>
);

export default Carousel;
