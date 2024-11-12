"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function HeroPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav id= "home" className="absolute top-0 left-0 w-full flex items-center justify-center px-8 py-4 bg-transparent z-20">
        <div className="flex items-center space-x-6">
          <div className=" text-[20px] hidden md:flex space-x-4">
            <Link
              href="#home"
              className="text-white font-bold hover:text-blue-400"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white font-bold hover:text-blue-400"
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col items-center mx-4">
            <Image src="/Logo.png" width={80} height={40} alt="Agricore Logo" />
            <span className="text-xl font-semibold text-white">Agricore</span>
          </div>

          <div className="text-[20px] hidden md:flex space-x-4">
            <Link
              href="/product"
              className="text-white font-bold hover:text-blue-400"
            >
              Product
            </Link>
            <Link
              href="/team"
              className="text-white font-bold hover:text-blue-400"
            >
              Our Team
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 text-white py-4 flex flex-col items-center space-y-4 md:hidden z-10">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-blue-400"
          >
            About Us
          </Link>
          <Link
            href="/product"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Product
          </Link>
          <Link
            href="/team"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Our Team
          </Link>
        </div>
      )}

      <div className="bg-bannerImg bg-cover bg-center h-screen relative">
        <div className="w-full h-full flex items-end bg-blackOverlay">
          <div className="container mx-auto mb-40 px-4">
            <h1 className="text-white text-5xl font-bold">
              Kebun Koe Agricore.
            </h1>
            <h2 className="text-white mt-3 font-bold">
              Never Stop Exploring World
            </h2>
            <p className="text-white  font-medium w-full max-w-2xl my-4">
              We prioritize environmental stewardship and community engagement,
              fostering a harmonious relationship between nature and
              agriculture. Join us on our journey to redefine
              agricultural standards and cultivate a brighter future for all.
            </p>
            <a
              href="/about"
              className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition-all inline-block hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
