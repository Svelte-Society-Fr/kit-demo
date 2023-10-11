import { fetchPokemons } from '$lib/server/data';

export const load = () => {
  return {
    pokemons: fetchPokemons(),
  };
};
