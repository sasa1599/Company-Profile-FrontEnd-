export default function HistoryPage() {
  return (
    <>
      <div
        id="history"
        className="bg-gray-50 py-10 px-4 md:px-20 lg:px-40 flex items-center justify-center shadow-lg border border-dotted border-gray-300 mx-auto space-x-6"
      >
        <div className="flex flex-col items-center mr-6 text-gray-700 font-bold text-lg md:text-xl lg:text-2xl tracking-wider">
          {"OUR COMPANY".split("").map((letter, index) => (
            <span key={index} className="leading-none mb-1 md:mb-2">{letter}</span>
          ))}
        </div>
        <div className="text-center text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed space-y-4 max-w-2xl md:max-w-3xl lg:max-w-4xl">
          <p>
            Established in 2019, Kebun Koe Agricore is an Indonesian agricultural startup producer, and continues to operate the company locally.
          </p>
          <p>
            Currently, Agricore owns and operates several livestock such as chickens, fish, and agricultural land as the main source of production.
          </p>
          <p>
            Agricore specializes in the production of meat, healthy chicken eggs with brown rice feed, in addition to fresh fish, and fresh agricultural products.
          </p>
        </div>
      </div>
    </>
  );
}
