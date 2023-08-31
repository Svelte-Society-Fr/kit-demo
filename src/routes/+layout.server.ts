import { fetchPokemons } from '$lib/data';

export const load = () => {
  return {
    pokemons: fetchPokemons(),
  };
};
