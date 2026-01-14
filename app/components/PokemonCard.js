"use client";

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

export default function PokemonCard({ pokemon }) {
  return (
    <article className="rounded-3xl border-4 border-black p-4 bg-white">
      <div className="flex flex-col items-center gap-4 rounded-2xl">
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
          href={`/pokemon/${encodeURIComponent(pokemon.name.toLowerCase())}`}
          className="mt-2 inline-flex items-center justify-center px-6 py-2 bg-black text-white font-bold rounded-full text-sm tracking-wide hover:translate-y-0.5 transition-transform"
        >
          STAT INFO
        </Link>
      </div>
    </article>
  );
}