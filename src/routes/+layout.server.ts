import { readBag } from '$lib/server/bag';
import pokemons from '../../data/pokemons.json';

export function load() {
	return { pokemons, bagSize: readBag().length };
}
