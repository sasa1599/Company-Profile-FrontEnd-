"use client";
import { IoIosStar } from "react-icons/io";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    src: "/user.png",
    year: "2019",
    name: "Abdul Kamaru",
    desc: "Absolutely love these fresh products! The quality is unmatched, and everything is packed with natural flavor. Highly recommended!",
  },
  {
    src: "/user.png",
    year: "2019",
    name: "Shinta Lulapita",
    desc: "The fish is always so fresh, and I appreciate the high quality. It's perfect for a healthy meal. I'll definitely be ordering again!",
  },
  {
    src: "/user.png",
    year: "2020",
    name: "Kim Soo Hyun",
    desc: "I can't get over the freshness of these vegetables! The crisp texture and vibrant colors make every meal a delight.",
  },
  {
    src: "/user.png",
    year: "2020",
    name: "Deddy Makmur",
    desc: "I'm thrilled with the chicken products! They are tender, flavorful, and much better quality than what you find in stores. Five stars!",
  },
  {
    src: "/user.png",
    year: "2021",
    name: "Susi Susanti",
    desc: "These products have taken my cooking to the next level. I love knowing that I'm using ingredients that are responsibly grown and truly fresh.",
  },
  {
    src: "/user.png",
    year: "2021",
    name: "Tutik",
    desc: "The taste and freshness of this produce make a noticeable difference. It’s been a pleasure to cook with such quality ingredients.",
  },
  {
    src: "/user.png",
    year: "2021",
    name: "Abdel Mantadel",
    desc: "High-quality, farm-fresh products at a great price! I've tried the vegetables and the chicken, and both were fantastic. I’m a customer for life!",
  },
  {
    src: "/user.png",
    year: "2022",
    name: "Yasmine Razaq",
    desc: "The fish was absolutely delicious, and the vegetables were some of the best I’ve had. You can really taste the quality!",
  },
  {
    src: "/user.png",
    year: "2023",
    name: "Paralita Luna",
    desc: "Super impressed with the quality here! The chicken is so fresh, and the vegetables are crisp and flavorful. My family loved every bite.",
  },
  {
    src: "/user.png",
    year: "2024",
    name: "Amien Yasin",
    desc: "I’m so glad I found these products. The fresh fish and high-quality chicken were amazing, and everything arrived in perfect condition.",
  },
];

export default function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Discover why our customers love our fresh products!
        </p>
      </div>

      <div className="relative max-w-md mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            } flex flex-col items-center text-center`}
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, starIndex) => (
                <IoIosStar
                  key={starIndex}
                  className="text-yellow-400 text-xl"
                />
              ))}
            </div>
            <div className="w-24 h-24 mb-4">
              <Image
                src={item.src}
                alt={item.name}
                height={200}
                width={200}
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <p className="text-teal-600 font-semibold">{item.year}</p>
            <h2 className="text-lg font-bold text-gray-800 mt-1">
              {item.name}
            </h2>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-pink-300 hover:bg-pink-400 text-white p-2 rounded-full transition duration-300"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-pink-300 hover:bg-pink-400 text-white p-2 rounded-full transition duration-300"
        >
          ›
        </button>
      </div>
    </div>
  );
}
