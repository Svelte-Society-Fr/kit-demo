const url = 'https://pokeapi.co/api/v2/pokemon';

function normalize(data: any) {
  const copy = structuredClone(data);

  delete copy.moves;
  delete copy.abilities;
  delete copy.game_indices;

  return copy;
}

export async function fetchPokemon(id: number) {
  // await new Promise(resolve => {
  //   setTimeout(resolve, 2000);
  // });

  return fetch(`${url}/${id}`)
    .then(r => r.json())
    .then(normalize);
}

export function fetchPokemons() {
  return Promise.all([...Array(151).keys()].map(x => x + 1).map(fetchPokemon));
}
