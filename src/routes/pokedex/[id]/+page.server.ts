import pokemons from '../../../../data/pokemons.json';

export function load({ params }) {
  const id = params.id;

  return {
    pokemon: pokemons[Number(id) - 1],
  };
}
