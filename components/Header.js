"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full relative z-30 bg-turquoise">
      <div className="max-w-xl lg:max-w-5xl mx-auto px-4 py-4 font-semibold">
        {/* Top Row: Centered Logo + Hamburger */}
        <div className="relative flex items-center justify-center">
          {/* Logo centered */}
          <img
            src="/logo.png"
            alt="Coco Logo"
            className="h-16 w-auto mx-auto"
          />

          {/* Hamburger Icon (absolute right) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="absolute right-0 md:hidden text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav (absolute overlay) */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-md z-20 md:hidden">
            <ul className="flex flex-col items-center py-4 text-lg font-semibold text-gray-800">
              <li className="mb-2">
                <a
                  href="#menu"
                  className="hover:text-primary transition-colors"
                >
                  Menu
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#delivery"
                  className="hover:text-primary transition-colors"
                >
                  Delivery
                </a>
              </li>
            </ul>
          </nav>
        )}

        {/* Desktop Nav */}
        <nav className="hidden md:block mt-4">
          <ul className="flex flex-row justify-between items-center md:space-x-8 text-lg font-semibold text-gray-800">
            <li>
              <a href="#menu" className="hover:text-primary transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#delivery"
                className="hover:text-primary transition-colors"
              >
                Delivery
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
