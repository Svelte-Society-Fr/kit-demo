import { fetchPokemon } from "$lib/server/data";

export const load = async ({ params: { id } }) => {
  return {
    pokemon: fetchPokemon(parseInt(id)),
  };
};
