"use client";

import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Image from "next/image";

export default function EnvironmentPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-20 lg:px-40">
      <div data-aos="fade-up">
        <h1 className="flex items-center justify-center font-bold text-gray-800 text-xl md:text-3xl lg:text-4xl my-8">
          <hr id="environment" className="flex-grow border-t-2 border-gray-700 mx-4" />
          ENVIRONMENT & SUSTAINABILITY
          <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
        </h1>
      </div>
      <div
        data-aos="fade-right"
        className="text-center text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed space-y-4 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto"
      >
        <p>
          Kebun Koe Agricore is committed to innovative environmental management which protects the resources on which our production systems are based.
        </p>
        <p>
          Our environment and sustainability initiatives are driven by a dedicated and skilled Rangelands team who are committed to best practices and support our people to deliver on environmental compliance.
        </p>
      </div>
      <div
        data-aos="fade-right"
        className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 mt-12"
      >
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start px-4">
          <Image
            src="/sus.webp" 
            alt="Sustainability Image"
            width={600}
            height={400}
            className="w-full lg:w-auto h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-full lg:w-2/3 px-4 text-center lg:text-center">
          <p className="text-lg text-gray-700 leading-relaxed bg-pastel-pink p-6 rounded-md shadow-md">
            Our focus on sustainability is not only about protecting the environment but also about ensuring that our communities thrive and future generations inherit a healthier planet.
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="mt-12 px-4 text-center text-gray-600"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          What Drives Us
        </h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
          We believe in long-term, sustainable practices that will not only ensure the environmental sustainability of our operations but also support the well-being of our employees, customers, and communities.
        </p>
      </div>
    </div>
  );
}
