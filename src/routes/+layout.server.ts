import { fetchPokemons } from '$lib/server/data';
import type { PokemonInBag } from '$lib/server/database.js';

export const load = ({ fetch, depends }) => {
  depends('bag:all');

  return {
    pokemons: fetchPokemons(),
    bag: fetch('/bag/all')
      .then(resp => resp.json())
      .then(bag => bag as PokemonInBag[]),
  };
};
