import Head from "next/head";

export default function HeroTeam() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/path-to-your-optimized-team-image.jpg"
          as="image"
          media="(min-width: 640px)" 
          type="image/jpeg"
        />
      </Head>
      <div className="bg-teamImg w-full bg-cover bg-center h-[300px] md:h-[400px] relative flex items-end justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-white font-extrabold pb-10 text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-center">
          <p>Our Expert Team: Decades of Trusted Experience</p>
        </div>
      </div>
    </>
  );
}
