import pokemons from '../../../data/pokemons.json';

export async function fetchPokemon(id: number) {
  return Promise.resolve(pokemons[id - 1]);
}

export function fetchPokemons() {
  return Promise.resolve(pokemons);
}
