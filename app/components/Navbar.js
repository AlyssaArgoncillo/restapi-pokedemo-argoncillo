"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-t-4 border-indigo-500 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="/favicon.ico" alt="Pokédex Online Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-blue-600 tracking-wider">POKÉDEX</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            href="/"
            className="text-black text-base font-medium hover:text-blue-600 transition-colors duration-200"
          >
            HOME
          </Link>

          <Link
            href="/index"
            className="text-black text-base font-medium hover:text-blue-600 transition-colors duration-200"
          >
            INDEX
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-gray-200 bg-white">
          <div className="flex flex-col px-4 py-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-black text-base font-medium hover:text-blue-600 transition-colors duration-200 py-3 border-b border-gray-100"
            >
              HOME
            </Link>

            <Link
              href="/index"
              onClick={() => setIsOpen(false)}
              className="text-black text-base font-medium hover:text-blue-600 transition-colors duration-200 py-3"
            >
              INDEX
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}