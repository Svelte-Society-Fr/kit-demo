import { writeFileSync, readFileSync, unlinkSync } from 'fs';

let seen: number[] = [];

export function addToSeen(id: number) {
  seen.push(id);
  saveSeen(seen);

  return seen;
}

export function clearSeen() {
  try {
    unlinkSync('./data/generated/seen.json');
    seen = [];
  } catch {
    console.error('Impossible de vider le pokedex');
  }
}

export function readSeen() {
  try {
    return JSON.parse(
      readFileSync('./data/generated/seen.json').toString(),
    ) as number[];
  } catch {
    return [] as number[];
  }
}
function saveSeen(seen: number[]) {
  JSON.stringify(
    writeFileSync('./data/generated/seen.json', JSON.stringify(seen)),
  );
}
