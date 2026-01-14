"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import PokemonCard from "./PokemonCard";
import Search from "./Search";

export default function ClientWrapper({ data }) {
  const [query, setQuery] = useState("");

  const filtered = data.filter((p) => p.name.includes(query));

  return (
    <>
      <Navbar />
      
      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6" style={{ backgroundColor: "#1e88e5" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">THE INDEX</h1>
            <div className="w-full sm:w-64">
              <Search onSearch={setQuery} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((p) => (
              <PokemonCard key={p.id} pokemon={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}