import Link from "next/link";

export default function NavProduct() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 md:p-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">What We Grow</h1>
          <h2 className="text-lg md:text-xl font-semibold">
            Dedicated to providing the highest quality crops
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="#product-0"
            className="text-lg md:text-xl font-medium bg-white text-green-700 hover:bg-green-700 hover:text-white py-2 px-6 rounded-lg transition-all duration-300"
          >
            Our Fresh Products
          </Link>
          <Link
            href="#product-18"
            className="text-lg md:text-xl font-medium bg-white text-blue-700 hover:bg-blue-700 hover:text-white py-2 px-6 rounded-lg transition-all duration-300"
          >
            Fresh Fish Product
          </Link>
          <Link
            href="#product-15"
            className="text-lg md:text-xl font-medium bg-white text-yellow-700 hover:bg-yellow-700 hover:text-white py-2 px-6 rounded-lg transition-all duration-300"
          >
            High Quality Chicken Product
          </Link>
        </div>
      </div>
    </div>
  );
}
