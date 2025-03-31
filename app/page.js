import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Fruits from "../components/Fruits";
import Menu from "../components/Menu";
import AboutUsSection from "../components/AboutUsSection";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div>
      <main>
        <section className="relative bg-turquoise overflow-hidden px-4">
          <div className="relative max-w-[1400px] mx-auto">
            <Fruits />
            <Header />
            <Hero />
          </div>
        </section>

        {/* Test */}

        <Menu />
        <AboutUsSection />
        <LocationSection />
        <Footer />
      </main>
      <Analytics />
    </div>
  );
}
