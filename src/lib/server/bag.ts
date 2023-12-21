import { randomUUID } from 'crypto';
import { readFileSync, writeFileSync } from 'fs';

import pokemons from '../../../data/pokemons.json';

export type PokemonInBag = {
	id: number;
	uuid: string;
	name: string;
};

const bag: PokemonInBag[] = readBag();

export function readBag() {
	try {
		const dataString = readFileSync('./data/generated/bag.json').toString();
		return JSON.parse(dataString);
	} catch (e) {
		return [];
	}
}

export function addPokemonToBag(id: number) {
	const pokemon = {
		id,
		uuid: randomUUID(),
		name: pokemons[id - 1].name,
	};

	bag.push(pokemon);

	console.log('Bag length', bag.length);

	saveBag();
}

export function saveBag() {
	writeFileSync('./data/generated/bag.json', JSON.stringify(bag));
}
