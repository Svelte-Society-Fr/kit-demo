import { writeFileSync, readFileSync, unlinkSync } from 'fs';
import { randomUUID } from 'crypto';
import { addToSeen } from './seen';

import pokemons from '../../../../data/pokemons.json';

export type PokemonInBag = { id: number; uuid: string; name: string };

let bag: PokemonInBag[] = readBag();

export function addToBag(id: number) {
  const uuid = randomUUID();

  const siblings = bag.filter(pokemon => pokemon.id === id);

  const speciesName = pokemons[id - 1].name;
  const name = siblings.length
    ? `${speciesName} ${siblings.length + 1}`
    : speciesName;

  bag.push({
    id,
    uuid,
    name,
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
    return JSON.parse(readFileSync('./data/generated/bag.json').toString());
  } catch {
    return [];
  }
}
function saveBag(bag: { id: number; uuid: string }[]) {
  JSON.stringify(
    writeFileSync('./data/generated/bag.json', JSON.stringify(bag)),
  );
}
