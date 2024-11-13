import Image from "next/image";
import Link from "next/link";

export function FounderPage() {
  return (
    <div className="bg-white py-12 px-6">
      <div className="mb-8 text-center">
        <p className="font-extrabold text-3xl bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
          OUR FOUNDER
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative border-2 border-gray-200 rounded-lg p-6 bg-pink-50 shadow-lg">
        <div className="flex-shrink-0 relative z-10">
          <Image
            src="/founder2.jpeg"
            alt="Founder"
            width={600}
            height={400}
            className="w-full max-w-xl h-[400px] object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="text-center md:text-left flex-1 relative z-20 mt-4 md:mt-0">
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
            &quot;Our founder Shania Azzahra has a background as an agricultural
            graduate from the faculty of agrotechnology who discusses a lot
            about the origin of an agricultural product until it reaches the
            hands of consumers. The inspiration to start this company was due to
            self-awareness of the quality of a product from agriculture in
            Indonesia.&quot;
          </p>
        </div>
      </div>
      <div className="mt-6 text-right">
        <Link
          href="/team"
          className="flex items-center text-2xl font-semibold text-green-800 hover:text-green-600 transform transition-all duration-300 gap-2"
        >
          <span>Get to know our team</span>
          <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
