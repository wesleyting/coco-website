"use client";

import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden  md:px-4 select-none">
      <div className="relative max-w-[1300px] mx-auto md:h-[500px] lg:h-[600px] xl:h-[700px]">
        {/* Left: Text (absolute on desktop) */}
        <div className="relative  md:absolute md:top-[42%] md:left-[5%] md:translate-y-[-50%] z-20 max-w-[900px] text-center md:text-left">
          <h1
            className={`text-6xl sm:text-7xl lg:text-8xl  xl:text-[9rem] font-bold leading-tight text-white ${lobster.className}`}
          >
            Enjoy It Fresh
          </h1>
          <p className="mt-4 text-2xl lg:text-3xl lg:mt-8 font-semibold text-orange relative">
            Order Online Today!
          </p>
          <button
            onClick={() => {
              const section = document.getElementById("location");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 mb-8 lg:mt-20 px-8 py-4 lg:px-14 lg:py-6 text-xl lg:text-2xl bg-orange text-white rounded-lg font-semibold hover:bg-gray-800 transition relative z-20 cursor-pointer"
          >
            Order Now
          </button>
        </div>

        {/* Right: Image (absolute on desktop) */}
        <div className="relative md:absolute md:top-1/2 md:right-[0%] md:translate-y-[-50%] z-[30] max-w-[500px] md:max-w-[550px] lg:max-w-[70%] xl:max-w-[850px] mx-auto md:mx-0 ">
          <img
            src="/hero-image.png"
            alt="Hero Drink"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
