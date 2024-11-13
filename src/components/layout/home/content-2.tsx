"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export function HistoryPage() {
  useEffect(() => {
    AOS.init({ 
      duration: 1500, 
      once: true, 
      easing: "ease-out-cubic", 
      offset: 100, 
    });
  }, []);

  return (
    <div className="relative bg-historyImg bg-cover bg-center h-screen flex items-center justify-end pr-10">
      <div
        className="absolute inset-0 bg-historyImg bg-cover bg-center h-full"
        data-aos="fade-up"
      ></div>
      <div className="relative z-8 max-w-[750px] w-full text-left text-white px-8 md:px-16 mt-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight font-playfair">
          SERVING SINCE 2019.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-opacity-90 font-roboto">
          We have dedicated the best part of 5 years to perfecting our company.
          Respect for the land runs deep through our veins, and the desire to
          produce only the best has been passed down by the generations before
          us.
        </p>
        
        <div className="mt-6">
          <Link 
            href="/about" 
            className="flex items-center text-3xl font-semibold text-green-500 hover:text-green-300 transform transition-all duration-300 gap-2"
          >
            <span>About Us</span>
            <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
