"use client"

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

export function LeaderShip() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <div id="leadership" className="bg-gray-50 py-10 px-4 md:px-20 lg:px-40">
        <div data-aos="fade-up">
          <h1 className="flex items-center justify-center font-bold text-gray-800 text-xl md:text-3xl lg:text-4xl my-8">
            <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
            Our Leadership
            <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
          </h1>
        </div>
        <div data-aos="fade-up">
          <p className="text-center text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Kebun Koe Agricore leaders are skilled and passionate about our industry. Each
            are required to hold themselves accountable for contributing to the
            success of the Company, to make safety and our people a priority and
            to work with integrity.
          </p>
        </div>
        <div className="text-center mt-6" data-aos="fade-up">
          <Link href="/team" className="bg-green-200 p-2 rounded-lg text-[13px] font-bold text-blue-800 hover:text-teal-800 transition-colors duration-300">
          Kebun Koe Agricore Team
          </Link>
        </div>
      </div>
    </>
  );
}
