import Image from "next/image";

export function ServicePage() {
  return (
    <div className="bg-white py-10 px-6">
      <div className="text-center mb-12">
        <p className="text-red-600 font-extrabold">WHAT WE DO</p>
        <h1 className="text-black text-4xl font-bold my-4">
          INSPIRING GROWTH, FOSTERING SUSTAINABILITY
        </h1>
        <p className="text-gray-700 font-bold max-w-2xl mx-auto">
          THE EXCELLENCE AND CHARACTER START WITH OUR PROFESSIONAL
          LAND MANAGEMENT CARE.
        </p>
        <p className="text-black mt-4">
          We are a start-up specializing in{" "}
          <span className="text-red-500 font-semibold underline">
            modern environmentally friendly
          </span>{" "}
          farming.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg shadow-green-400 rounded-lg overflow-hidden p-6 flex flex-col items-center text-center">
          <Image
            src="/clown-fish.png"
            alt="Fresh Fish"
            width={400}
            height={250}
            className="w-auto h-[100px] object-cover rounded-lg mb-4"
          />
          <h3 className="text-black font-semibold text-lg">Fresh Fish Today and Tomorrow</h3>
          <p className="text-gray-700 mt-2">
            We are implementing various fish management programs that meet local standards—from catching, preparing, storing, to processing.
          </p>
        </div>

        <div className="bg-white shadow-lg shadow-green-400 rounded-lg overflow-hidden p-6 flex flex-col items-center text-center">
          <Image
            src="/chicken.png"
            alt="Growing Chicken"
            width={400}
            height={250}
            className="w-auto h-[100px] object-cover rounded-lg mb-4"
          />
          <h3 className="text-black font-semibold text-lg">Growing Chicken High Quality Meat</h3>
          <p className="text-gray-700 mt-2">
            We only sell quality chicken meat from healthy chickens according to local standards, from seeds, nutritious feed, Islamic standard cutting, to storage.
          </p>
        </div>

        <div className="bg-white shadow-lg shadow-green-400 rounded-lg overflow-hidden p-6 flex flex-col items-center text-center">
          <Image
            src="/stalls.png"
            alt="Good Product"
            width={400}
            height={250}
            className="w-auto h-[100px] object-cover rounded-lg mb-4"
          />
          <h3 className="text-black font-semibold text-lg">Good Product Live Longer</h3>
          <p className="text-gray-700 mt-2">
            Signs of freshness such as bright, lively color. The excellence and character of our products start with our professional management care.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/product"
          className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition-transform duration-300 hover:scale-105 inline-block"
        >
          Our Product
        </a>
      </div>
    </div>
  );
}
