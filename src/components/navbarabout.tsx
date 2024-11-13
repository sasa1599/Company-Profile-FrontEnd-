import { useState, useEffect } from "react";

export default function NavbarAbout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-white p-1"></div>
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-opacity-90" : "bg-opacity-100"
        } bg-gradient-to-r from-green-700 to-teal-600 text-white py-4`}
      >
        <div className="container mx-auto flex justify-center items-center px-4 md:px-8">
          <div className="text-lg font-bold md:hidden">Agricore</div>
          <ul className="hidden md:flex items-center gap-8 text-lg font-semibold">
            <li>
              <a
                href="#history"
                className="hover:text-yellow-300 hover:scale-105 transition duration-300 ease-in-out transform"
              >
                OUR COMPANY
              </a>
            </li>
            <li>
              <a
                href="#leadership"
                className="hover:text-yellow-300 hover:scale-105 transition duration-300 ease-in-out transform"
              >
                OUR LEADERSHIP
              </a>
            </li>
            <li>
              <a
                href="#story"
                className="hover:text-yellow-300 hover:scale-105 transition duration-300 ease-in-out transform"
              >
                OUR HISTORY
              </a>
            </li>
            <li>
              <a
                href="#environment"
                className="hover:text-yellow-300 hover:scale-105 transition duration-300 ease-in-out transform"
              >
                ENVIRONMENT & SUSTAINABILITY
              </a>
            </li>
          </ul>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-green-800 text-white text-center py-4">
            <a
              href="#history"
              className="block py-2 text-lg font-semibold hover:text-yellow-300"
            >
              OUR COMPANY
            </a>
            <a
              href="#leadership"
              className="block py-2 text-lg font-semibold hover:text-yellow-300"
            >
              OUR LEADERSHIP
            </a>
            <a
              href="#story"
              className="block py-2 text-lg font-semibold hover:text-yellow-300"
            >
              OUR HISTORY
            </a>
            <a
              href="#environment"
              className="block py-2 text-lg font-semibold hover:text-yellow-300"
            >
              ENVIRONMENT & SUSTAINABILITY
            </a>
          </div>
        )}
      </div>
    </>
  );
}
