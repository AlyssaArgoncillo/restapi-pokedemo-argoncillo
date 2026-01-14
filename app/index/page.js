import ClientWrapper from "../components/ClientWrapper";

async function fetchPokemon(limit = 20) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const list = await res.json();

  const detailed = await Promise.all(
    list.results.map(async (p) => {
      const res = await fetch(p.url);
      return res.json();
    })
  );

  return detailed;
}

export default async function IndexPage() {
  const data = await fetchPokemon(20);

  return (
    <main>
      <ClientWrapper data={data} />
    </main>
  );
}
