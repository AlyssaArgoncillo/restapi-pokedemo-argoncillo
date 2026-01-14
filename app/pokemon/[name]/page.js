import Link from "next/link";
import StatsChartClient from "../../components/StatsChartClient";

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

async function fetchPokemon(name) {
  const slug = Array.isArray(name) ? name[0] : name;
  if (!slug || typeof slug !== "string") return null;

  const apiName = decodeURIComponent(slug).toLowerCase();

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${apiName}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

function getStatValue(pokemon, key) {
  return (
    pokemon.stats.find((s) => s.stat.name === key)?.base_stat ?? "-"
  );
}

export default async function PokemonDetail({ params }) {
  const resolvedParams = typeof params?.then === "function" ? await params : params;
  const pokemon = await fetchPokemon(resolvedParams?.name);

  if (!pokemon) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-yellow-200">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold">Pokémon not found.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-full font-semibold"
          >
            Go Back
          </Link>
        </div>
      </main>
    );
  }

  const statOrder = [
    { key: "hp", label: "Health" },
    { key: "attack", label: "Attack" },
    { key: "defense", label: "Defense" },
    { key: "special-attack", label: "Sp-Attack" },
    { key: "special-defense", label: "Sp-Defense" },
    { key: "speed", label: "Speed" },
  ];

  const artwork =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.front_default;

  return (
    <main
      className="min-h-screen py-6 sm:py-10 px-4"
      style={{ backgroundColor: "#f2c618" }}
    >
      <div className="max-w-5xl mx-auto bg-white border-4 border-black rounded-3xl overflow-hidden">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Pokemon Name */}
          <div className="border-black border-b-4 flex items-center justify-center px-4 py-4">
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-center">{pokemon.name}</h1>
          </div>
          
          {/* Pokemon Image */}
          <div className="border-black border-b-4 flex items-center justify-center p-6 bg-white">
            <img
              src={artwork}
              alt={pokemon.name}
              className="h-40 w-40 sm:h-48 sm:w-48 object-contain"
            />
          </div>
          
          {/* Type */}
          <div className="border-black border-b-4 px-4 py-3 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center">
            <span className="text-lg sm:text-xl font-black uppercase tracking-wide">Type:</span>
            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
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
          </div>
          
          {/* Stats */}
          <div className="flex flex-col border-black">
            {statOrder.map(({ key, label }, index) => {
              const isLast = index === statOrder.length - 1;
              return (
                <div
                  key={key}
                  className={`p-3 sm:p-4 text-center bg-white border-black ${isLast ? "" : "border-b-4"}`}
                >
                  <div className="text-sm sm:text-lg font-black uppercase tracking-wide">{label}:</div>
                  <div className="text-lg sm:text-xl font-bold mt-1 sm:mt-2">{getStatValue(pokemon, key)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 bg-white border-black">
          <div className="border-black border-r-4 border-b-4 flex items-center justify-center px-4 py-4">
            <h1 className="text-2xl font-black uppercase tracking-wide">{pokemon.name}</h1>
          </div>
          <div className="col-span-2 border-black border-b-4 px-4 py-3 flex items-center gap-3 justify-start">
            <span className="text-xl font-black uppercase tracking-wide">Type:</span>
            <div className="flex gap-3 flex-wrap">
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
          </div>

          <div className="row-span-3 border-black border-r-4 flex items-center justify-center p-6 bg-white">
            <img
              src={artwork}
              alt={pokemon.name}
              className="h-48 w-48 object-contain"
            />
          </div>

          <div className="col-span-2 grid grid-cols-2 border-black">
            {statOrder.map(({ key, label }, index) => {
              const isLeft = index % 2 === 0;
              const isBottom = index >= statOrder.length - 2;
              return (
                <div
                  key={key}
                  className={`p-4 text-center bg-white border-black ${isLeft ? "border-r-4" : ""} ${isBottom ? "" : "border-b-4"}`}
                >
                  <div className="text-lg font-black uppercase tracking-wide">{label}:</div>
                  <div className="text-xl font-bold mt-2">{getStatValue(pokemon, key)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 bg-white border-4 border-black rounded-3xl overflow-hidden">
        <div className="border-b-4 border-black px-4 py-3">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-center">Stats Chart</h2>
        </div>
        <div className="p-4">
          <StatsChartClient pokemon={pokemon} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 flex justify-center sm:justify-end">
        <Link
          href="/index"
          className="inline-flex items-center justify-center px-5 py-2 bg-black text-white font-semibold rounded-full hover:translate-y-0.5 transition-transform"
        >
          Back to list
        </Link>
      </div>
    </main>
  );
}
