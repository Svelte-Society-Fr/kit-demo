import { fetchPokemon } from '$lib/server/data';

export const load = async ({ params: { id } }) => {
  const data = await fetchPokemon(parseInt(id));

  return { ...data };
};
