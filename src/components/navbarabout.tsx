export default function NavbarAbout() {
  return (
    <>
      <div className="bg-white p-1"></div>
      <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-4">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 text-base md:text-lg lg:text-xl font-semibold">
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
      </div>
    </>
  );
}
