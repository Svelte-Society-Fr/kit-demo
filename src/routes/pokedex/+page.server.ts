import { readBag } from '$lib/server/bag';
import pokemons from '../../../data/pokemons.json';

export function load() {
	const caught = readBag().map(pokemon => pokemon.id);
	return {
		pokemons,
		caught,
	};
}
