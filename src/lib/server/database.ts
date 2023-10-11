import { writeFileSync, readFileSync } from 'fs';
import { randomUUID } from 'crypto';

export type PokemonInBag = { id: number; uuid: string };

let bag: PokemonInBag[] = readBag();

export function addToBag(id: number) {
  bag.push({
    id,
    uuid: randomUUID(),
  });
  saveBag(bag);

  return bag;
}

export function removeFromBag(uuid: string) {
  bag = bag.filter(pokemon => pokemon.uuid !== uuid);
  saveBag(bag);

  return bag;
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
