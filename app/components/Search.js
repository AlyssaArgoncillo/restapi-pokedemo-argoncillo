"use client";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        placeholder="Search pokemon..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch(e.target.value.toLowerCase());
        }}
        className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base rounded-full border-2 border-black font-semibold text-black-800 placeholder-black-500 focus:outline-none focus:border-white"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-500 hover:text-white/20">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
}