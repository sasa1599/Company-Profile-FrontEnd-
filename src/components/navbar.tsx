"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 right-0 w-full flex items-center justify-center px-8 py-4 bg-transparent z-20">
      <div className="flex items-center space-x-6">
        <div className="text-[22px] hidden md:flex space-x-4">
          <Link href="/" className="text-white font-bold hover:text-blue-400" aria-current="page">
            Home
          </Link>
          <Link href="/about" className="text-white font-bold hover:text-blue-400">
            About Us
          </Link>
        </div>
        <div className="flex flex-col items-center mx-4">
          <Image
            src="/Logo.png"
            width={80}
            height={40}
            alt="Agricore Logo"
            priority 
            className="w-[64px] h-[32px] md:w-[80px] md:h-[40px]" 
          />
          <span className="text-lg md:text-xl font-semibold text-white">Agricore</span>
        </div>
        <div className="text-[22px] hidden md:flex space-x-4">
          <Link href="/product" className="text-white font-bold hover:text-blue-400">
            Product
          </Link>
          <Link href="/team" className="text-white font-bold hover:text-blue-400">
            Our Team
          </Link>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-green-700 text-center py-4 md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold py-2 hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold py-2 hover:text-blue-400"
          >
            About Us
          </Link>
          <Link
            href="/product"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold py-2 hover:text-blue-400"
          >
            Product
          </Link>
          <Link
            href="/team"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold py-2 hover:text-blue-400"
          >
            Our Team
          </Link>
        </div>
      )}
    </nav>
  );
}
