


export function HeroPage() {


  return (
    <>
      <div className="bg-bannerImg bg-cover bg-center h-screen relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="w-full h-full flex items-end relative z-10">
          <div className="container mx-auto mb-40 px-4">
            <h1 className="text-white text-5xl font-bold drop-shadow-md">
              Kebun Koe Agricore.
            </h1>
            <h2 className="text-white text-[18px] mt-3 font-bold drop-shadow-md">
              Never Stop Exploring World
            </h2>
            <p className="text-white text-[17px] font-medium w-full max-w-2xl my-4 drop-shadow-md">
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
