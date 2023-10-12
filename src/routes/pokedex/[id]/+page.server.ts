import { fetchPokemon } from '$lib/server/data';

export const load = async ({ params: { id } }) => {
  const pokemon = await fetchPokemon(parseInt(id));

  return { pokemon };
};
