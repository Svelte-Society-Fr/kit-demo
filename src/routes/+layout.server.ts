import { fetchPokemons } from '$lib/server/data';
import type { PokemonInBag } from '$lib/server/database/bag.js';

export const load = ({ fetch, depends }) => {
  depends('bag:all');

  return {
    pokemons: fetchPokemons(),
    seen: fetch('/pokedex', {
      headers: {
        accept: 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(seen => seen as number[]),
    bag: fetch('/bag/all')
      .then(resp => resp.json())
      .then(bag => bag as PokemonInBag[]),
  };
};
