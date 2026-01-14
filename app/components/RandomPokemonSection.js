"use client";

import { useState } from "react";
import Link from "next/link";

const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  psychic: "bg-pink-500",
  ice: "bg-cyan-400",
  dragon: "bg-purple-500",
  dark: "bg-gray-700",
  fairy: "bg-pink-300",
  fighting: "bg-orange-600",
  ground: "bg-yellow-600",
  rock: "bg-stone-500",
  bug: "bg-lime-500",
  ghost: "bg-indigo-500",
  steel: "bg-slate-400",
  normal: "bg-gray-500",
  flying: "bg-sky-400",
  poison: "bg-purple-400",
};

export default function RandomPokemonSection() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePokemon = async () => {
    setLoading(true);
    try {
      const randomId = Math.floor(Math.random() * 20) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#ffd700" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-black mb-8 text-center" style={{ fontFamily: "var(--font-press-start-2p)" }}>
              FIND OUT<br />WHICH<br />POKÉMON<br />YOU ARE!
            </h2>
            <div className="flex justify-center">
              <button
                onClick={generatePokemon}
                disabled={loading}
                className="px-8 py-3 border-4 border-black rounded-full font-bold text-black bg-yellow-300 hover:bg-yellow-200 transition-colors disabled:opacity-50"
              >
                {loading ? "LOADING..." : "GENERATE"}
              </button>
            </div>
          </div>

          <div className="flex-1">
            {loading && (
              <div className="flex items-center justify-center h-72">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="font-bold text-black">Generating Pokémon...</p>
                </div>
              </div>
            )}

            {pokemon && !loading && (
              <div className="rounded-3xl border-4 border-black p-4 bg-white">
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-lg font-black uppercase tracking-wide text-black text-center">
                    {pokemon.name}
                  </h3>

                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="h-24 w-24 object-contain"
                  />

                  <div className="w-full border-y-4 border-black py-3 flex items-center justify-center gap-3">
                    {pokemon.types.map((t) => {
                      const typeName = t.type.name;
                      const colorClass = typeColors[typeName] || "bg-gray-200";
                      return (
                        <span
                          key={typeName}
                          className={`px-3 py-1 text-sm font-semibold text-white rounded-full capitalize ${colorClass}`}
                        >
                          {typeName}
                        </span>
                      );
                    })}
                  </div>

                  <Link
                    href={`/pokemon/${pokemon.name.toLowerCase()}`}
                    className="inline-flex items-center justify-center px-6 py-2 bg-black text-white font-bold rounded-full text-sm tracking-wide hover:translate-y-0.5 transition-transform"
                  >
                    VIEW INFO
                  </Link>
                </div>
              </div>
            )}

            {!pokemon && !loading && (
              <div className="h-72 flex items-center justify-center border-4 border-black rounded-3xl bg-white">
                <p className="font-bold text-black text-center">Click GENERATE to find your Pokémon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
