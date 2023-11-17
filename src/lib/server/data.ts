import { getRandomNb } from '$lib/helpers';
import pokemons from '../../../data/pokemons.json';

export function fetchPokemon(id: number) {
  return Promise.resolve(pokemons[id - 1]);
}

export function fetchPokemons() {
  return Promise.resolve(pokemons);
}

export function fetchTotalPopulation() {
  return new Promise<number>(resolve =>
    setTimeout(() => resolve(getRandomNb(10 ** 4)), 4000),
  );
}
