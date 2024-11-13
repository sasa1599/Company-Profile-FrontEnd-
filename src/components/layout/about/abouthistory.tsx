"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const historyItems = [
  {
    src: "/sasa.jpg",
    year: "2019",
    text: "Shania Azzahra Establishes Kebun Koe Agricore",
    desc: "Shania Azzahra founded Kebun Koe in 2019 before the pandemic hit, graduate Department of Agriculture, Padjadjaran University. Initially focused on small-scale farming activities in the home environment, then expanded into large-scale farming, chickens and fish.",
  },
  {
    src: "/our1.jpeg",
    year: "2020",
    text: "Local harvest, a community passion",
    desc: "During college, I have often done agricultural activities, from vegetable and fruit plants. However, it is only a hobby, and a local business around the house. Many neighbors are enthusiastic about selling vegetable products.",
  },
  {
    src: "/our2.jpeg",
    year: "2021",
    text: "Home-raised chickens, eggs and meats for the community",
    desc: "Interest in the world of agriculture is not only in agriculture, although the founder has a background as an agricultural graduate but wants to explore livestock, especially for laying hens and broilers. Products such as eggs and chicken meat are sold to greengrocers.",
  },
  {
    src: "/our3.jpeg",
    year: "2022",
    text: "Front yard fish, fresh for locals",
    desc: "Not only in the agricultural and livestock aspects, the founder expanded his reach to fisheries, especially to fish that are popular in the community such as catfish and tilapia. Fish farming is done in a bucket in front of the house yard, still on a small scale.",
  },
  {
    src: "/our4 (2) (1).jpg",
    year: "2023",
    text: "Farmland expansion",
    desc: "In mid-2023, the founder expanded the scale of the business in agriculture. Land with an area of ​​20,000 square meters or 2 Ha.",
  },
  {
    src: "/kopiabout.webp",
    year: "2024",
    text: "Growing coffee: beans and husk potential",
    desc: "Land expansion provides opportunities for founders to expand exploration of agricultural products, one of which is popular in Indonesia, namely coffee. Coffee plants not only have beans with economic value, but the skin of the coffee is used as a new opportunity.",
  },
];

export function OurHistory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % historyItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + historyItems.length) % historyItems.length
    );
  };

  return (
    <div
      id="story"
      className="bg-gray-900 text-white py-4 md:py-8 px-2 md:px-4"
    >
      <h2 className="text-center text-xl md:text-2xl font-bold mb-4">
        Our History
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 p-1.5 bg-gray-700 hover:bg-gray-600 rounded-full text-white z-10 shadow-lg"
        >
          <FaArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
        </button>

        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-[1000ms] ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {historyItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg min-w-full"
              >
                <p className="text-base md:text-lg font-semibold text-teal-400 mb-1">
                  {item.year}
                </p>

                <div className="w-full max-w-xl mx-auto">
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={500}
                    height={200}
                    className="w-full h-[150px] md:h-[250px] object-cover rounded-md mb-2 shadow-xl"
                  />
                </div>

                <h3 className="text-sm md:text-base font-bold text-indigo-400 max-w-xl mb-1">
                  {item.text}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 italic max-w-xl mx-auto line-clamp-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 p-1.5 bg-gray-700 hover:bg-gray-600 rounded-full text-white z-10 shadow-lg"
        >
          <FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  );
}