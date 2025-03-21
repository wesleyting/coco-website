"use client";

export default function Header() {
  return (
    <header className="w-full relative z-30">
      <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto px-2 pt-4 md:px-4 md:py-6 font-semibold">
        {/* Top Row: Centered Logo */}
        <div className="relative flex items-center justify-center md:pb-2">
          <img
            src="/logo.png"
            alt="Coco Logo"
            className="h-16 sm:h-20 w-auto mx-auto lg:h-22"
          />
        </div>

        {/* Desktop Nav Only */}
        <nav className="mt-4 hidden lg:block">
          <ul className="flex flex-row justify-between items-center md:space-x-8 text-2xl font-semibold text-gray-800">
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
                href="#location"
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
