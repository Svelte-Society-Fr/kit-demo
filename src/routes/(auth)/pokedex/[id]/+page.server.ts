import { fetchPokemon } from '$lib/data';

export const load = async ({ params: { id } }) => {
  const data = await fetchPokemon(parseInt(id));

  return { ...data };
};
