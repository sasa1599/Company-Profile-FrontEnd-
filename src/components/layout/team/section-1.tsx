import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionTeam() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-[300px]] bg-white">
      <div
        className="bg-white text-gray-800 p-6 md:p-10 rounded-lg  w-11/12 sm:w-10/12 md:w-3/4 lg:w-1/2 text-center"
        data-aos="fade-up" 
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-800">
          What Sets Us Apart
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-green-700">
          We prioritize innovation and efficiency with dedicated teams for technology and food safety.
          Our comprehensive expertise ensures that we deliver top-notch solutions and services,
          all while prioritizing the well-being of the people we work with.
        </p>
      </div>
    </div>
  );
}
