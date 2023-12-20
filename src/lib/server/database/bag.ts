import { randomUUID } from 'crypto';
import { readFileSync, unlinkSync, writeFileSync } from 'fs';
import { addToSeen } from './seen';

import pokemons from '../../../../data/pokemons.json';

export type PokemonInBag = {
	id: number;
	uuid: string;
	name: string;
	inTeam: boolean;
};

let bag: PokemonInBag[] = readBag();

export function addToBag(id: number) {
	const uuid = randomUUID();

	const siblings = bag.filter(pokemon => pokemon.id === id);

	const speciesName = pokemons[id - 1].name;
	const name = siblings.length
		? `${speciesName} ${siblings.length + 1}`
		: speciesName;

	const teamSize = bag.filter(p => p.inTeam).length;

	bag.push({
		id,
		uuid,
		name,
		inTeam: teamSize < 6,
	});
	saveBag(bag);
	addToSeen(id);

	return bag;
}

export function removeFromBag(uuid: string) {
	bag = bag.filter(pokemon => pokemon.uuid !== uuid);
	saveBag(bag);

	return bag;
}

export function clearBag() {
	try {
		unlinkSync('./data/generated/bag.json');
		bag = [];
	} catch {
		console.error('Impossible de vider le bag');
	}
}

export function readBag() {
	try {
		return JSON.parse(
			readFileSync('./data/generated/bag.json').toString(),
		) as PokemonInBag[];
	} catch {
		console.error('Could not read bag');
		return [] as PokemonInBag[];
	}
}

export function rename(uuid: string, name: string) {
	const pokemon = bag.find(pokemon => pokemon.uuid === uuid);
	if (pokemon) {
		pokemon.name = name;
		saveBag(bag);
	}
}

export function toggleFromTeam(uuid: string) {
	const pokemon = bag.find(pokemon => pokemon.uuid === uuid);
	if (pokemon) {
		pokemon.inTeam = !pokemon.inTeam;
		saveBag(bag);
	}
}

function saveBag(bag: { id: number; uuid: string }[]) {
	JSON.stringify(
		writeFileSync('./data/generated/bag.json', JSON.stringify(bag)),
	);
}
