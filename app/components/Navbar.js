"use client";

import Link from "next/link";

export default function Navbar({ onSearch }) {
  return (
    <nav className="border-t-4 border-indigo-500 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/favicon.ico" alt="Pokédex Online Logo" className="h-10 w-10" />
          <h1 className="text-3xl font-black text-blue-600 tracking-wider">POKÉDEX</h1>
        </div>
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-black font-medium hover:text-blue-600 transition-colors duration-200"
          >
            HOME
          </Link>

          <Link
            href="/index"
            className="text-black font-medium hover:text-blue-600 transition-colors duration-200"
          >
            INDEX
          </Link>
        </div>
      </div>
    </nav>
  );
}