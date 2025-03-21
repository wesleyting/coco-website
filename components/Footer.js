import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#ffc93d] text-black px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Socials & Links */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <p className="text-lg font-semibold">Follow us on</p>
          <div className="flex space-x-6 text-black">
            <a
              href="https://www.facebook.com/CocoAlwaysFresh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 hover:opacity-80 transition" />
            </a>
            <a
              href="https://www.instagram.com/coco.malaysia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 hover:opacity-80 transition" />
            </a>
          </div>
          <div className="flex gap-4 text-sm font-medium flex-wrap justify-center lg:justify-start">
            <a href="#menu" className="hover:underline">
              Menu
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#location" className="hover:underline">
              Contact
            </a>
            <a href="#delivery" className="hover:underline">
              Delivery
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Rights - bottom on desktop */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right lg:justify-between flex-1">
          <div className="mt-auto text-sm">
            © 2025 Coco Always Fresh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
