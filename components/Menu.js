"use client";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import MenuBackgroundBlob from "./MenuBackgroundBlob";

const menuSlides = [
  {
    title: "Rainbow Drinks",
    image: "/menu/rainbow-drinks.png",
    bgColor: "text-[rgb(247,119,54)]", // 🍊 Bright & fun
    items: [
      "Passion Fruit",
      "Blueberry",
      "Sky Blue",
      "Honeydew",
      "Peach",
      "Orange",
      "Kiwi",
      "Grape",
      "Pineapple",
      "Lychee",
      "Strawberry",
      "Mango",
      "Green Apple",
    ],
  },
  {
    title: "Signature Mains",
    image: "/menu/signature-mains.png",
    bgColor: "text-[rgb(239,159,65)]", // 🧀 Warm golden
    items: [
      "Chicken CheeseBurger",
      "Cheesy Sausage Sandwich",
      "Curry Puff",
      "Fried Wanton",
      "Spring Rolls",
      "Salad Rolls",
      "Chicken Satay Burger",
    ],
  },
  {
    title: "Paratha",
    image: "/menu/paratha.png",
    bgColor: "text-[rgb(214,125,40)]", // 🫓 Rich toasty orange-brown
    items: ["Chicken Floss", "Kaya Cheese", "Chicken Cheese"],
  },
  {
    title: "Specialty Fruit Mix",
    image: "/menu/fruit-mix.png",
    bgColor: "text-[rgb(255,183,94)]", // 🍋 Lively tropical yellow-orange
    items: ["Blue Lemonade Berry", "Strawberry Popping Boba", "Ice Lemon Tea"],
  },
  {
    title: "Ice Cream Bun",
    image: "/menu/ice-cream-bun.png",
    bgColor: "text-[rgb(136,118,112)]", // 🍦 Cool muted chocolate
    items: [
      "Vanilla",
      "Chocolate",
      "Chocolate Ripple",
      "Strawberry",
      "Peppermint",
    ],
  },
  {
    title: "Chocolate & Others",
    image: "/menu/chocolate.png",
    bgColor: "text-[rgb(119,69,60)]", // 🍫 Deep chocolate brown
    items: [
      "Chocolate",
      "Cappucino",
      "Matcha Milk Tea",
      "Latte",
      "Mocha",
      "Bubble Green Milk Tea",
      "Thai Milk Tea",
      "Bubble Milk Tea",
      "Coffee",
    ],
  },
  {
    title: "Corndog",
    image: "/menu/corndog.png",
    bgColor: "text-[rgb(223,121,45)]", // 🌭 Rich cheddar-orange
    items: [
      "Original",
      "French Fries",
      "Mamee",
      "Cheese Bomb",
      "Chocolate Cheese",
    ],
  },
  {
    title: "Smoothies",
    image: "/menu/smoothies.png",
    bgColor: "text-[rgb(222,203,163)]", // 🍓 Creamy beige
    items: [
      "Original Coconut",
      "Strawberry",
      "Mango",
      "Chocolate",
      "Peppermint",
      "Coffee",
    ],
  },
  {
    title: "Snacks",
    image: "/menu/snacks.png",
    bgColor: "text-[rgb(249,203,112)]", // 🍟 Buttery golden yellow
    items: [
      "Fries",
      "Wedges",
      "Chicken Popcorn",
      "Chicken Nuggets",
      "Mini Chicken Sausage",
      "Fish Nuggets",
      "Crabsticks",
      "Fish Ball",
    ],
  },
  {
    title: "Parfait",
    image: "/menu/parfait.png",
    bgColor: "text-[rgb(27,15,15)]", // 🍇 Dark indulgent
    items: ["Mango & Strawberry", "Gula Apong Boba", "Blueberry Oreo"],
  },
];

export default function OurMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentBgColor = menuSlides[currentIndex].bgColor;

  return (
    <section id="menu" className="bg-white py-12">
      <div className="w-full text-center relative mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#e54500] xl:mb-4">
          Our Menu
        </h2>

        <div className="relative overflow-visible flex justify-center py-12">
          <MenuBackgroundBlob className={currentBgColor} />

          <div className="w-full">
            <Splide
              options={{
                type: "loop",
                perPage: 5,
                focus: "center",
                arrows: true,
                pagination: false,
                gap: "0rem",
                padding: "0",
                breakpoints: {
                  1024: {
                    perPage: 3,
                  },
                  768: {
                    perPage: 3,
                  },
                },
              }}
              onMoved={(splide) => setCurrentIndex(splide.index)}
              className="relative z-10"
            >
              {menuSlides.map((slide, index) => (
                <SplideSlide key={index}>
                  <div className="flex items-center justify-center">
                    <div className="">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>

        {/* Item Details */}
        <div className="transition-all duration-300 relative z-20 max-w-2xl mx-auto px-12 md:px-6">
          <h3 className="text-3xl lg:text-4xl text-black font-semibold mb-8">
            {menuSlides[currentIndex].title}
          </h3>
          <ul className="grid grid-cols-2 gap-x-6 text-base text-gray-800 list-none text-center overflow-hidden">
            {menuSlides[currentIndex].items.map((item, idx) => (
              <li className="font-semibold text-xl lg:text-2xl mb-4" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
