"use client";

import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="w-full bg-turquoise relative overflow-hidden">
      <div className="relative max-w-xl sm:max-w-3xl md:max-w-3xl lg:max-w-6xl mx-auto px-4 pb-10 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8">
        {/* Left: Text */}
        <div className="relative z-20 text-center md:text-left max-w-md mx-auto md:mx-0">
          <h1
            className={`text-7xl md:text-8xl lg:text-7xl font-bold leading-tight text-white ${lobster.className}`}
          >
            Enjoy It <span className="relative z-30 inline-block">Fresh</span>
          </h1>
          <p className="mt-4 text-2xl font-semibold text-orange max-w-md mx-auto md:mx-0 relative z-20">
            Order Online Today!
          </p>
          <button className="mt-6 px-6 py-4 text-xl bg-orange text-white rounded-lg font-semibold hover:bg-gray-800 transition relative z-20">
            Order Now
          </button>
        </div>

        {/* Right: Image */}
        <div className="relative z-10 md:absolute md:top-[30%] md:right-[-80px] md:w-[60%] lg:w-[50%] pointer-events-none">
          <img
            src="/hero-image.png"
            alt="Hero Drink"
            className="w-[100%] sm:w-[600px] lg:w-[500px] h-auto object-contain md:-translate-y-[20%]"
          />
        </div>
      </div>
    </section>
  );
}
