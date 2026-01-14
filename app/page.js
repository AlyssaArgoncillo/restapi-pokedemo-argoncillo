import Navbar from "./components/Navbar";
import Link from "next/link";
import RandomPokemonSection from "./components/RandomPokemonSection";

async function fetchFeaturedPokemon() {
  const ids = [1, 7, 12];
  const promises = ids.map((id) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { cache: "no-store" }).then((r) => r.json())
  );
  return Promise.all(promises);
}

export default async function Page() {
  const featured = await fetchFeaturedPokemon();

  return (
    <main>
      <Navbar />
      <section className="py-12 px-6 text-center min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#d80032" }}>
        <img src="/Hero.svg" alt="Hero" className="w-full max-w-5xl" />
        <h1 className="text-6xl font-black text-white mb-6 tracking-wider">POKÉDEX ONLINE</h1>
        <p className="text-xl text-white max-w-3xl mx-auto mb-12">Explore this online index catalogue with its Pokémon stats, types, and abilities. Discover your favorite Pokémon today!</p>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-blue-600 text-center mb-12 tracking-wider">SEARCH FOR POKÉMON<br />IN THE INDEX</h2>
          
          <div className="flex items-center justify-center gap-8 mb-8">
            {featured.map((pokemon, index) => {
              const borderColors = ["border-green-500", "border-blue-600", "border-pink-500"];
              const artwork = pokemon.sprites.other?.["official-artwork"]?.front_default ||
              pokemon.sprites.front_default;
              return (
                <div key={pokemon.id} className={`border-4 ${borderColors[index]} rounded-2xl p-4 bg-white w-48 h-48 flex items-center justify-center`}>
                  <img
                    src={artwork}
                    alt={pokemon.name}
                    className="h-45 w-45 object-contain"
                  />
                </div>
              );
            })}

            <Link
              href="/index"
              className="flex items-center gap-2 px-6 py-3 border-2 border-black rounded-full font-bold bg-white hover:bg-gray-100 transition-colors"
            >
              INDEX
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      <RandomPokemonSection />
    </main>
  );
}