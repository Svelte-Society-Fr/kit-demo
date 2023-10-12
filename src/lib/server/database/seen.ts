import { writeFileSync, readFileSync } from 'fs';

let seen: number[] = [];

export function addToSeen(id: number) {
  seen.push(id);
  saveSeen(seen);

  return seen;
}

export function readSeen() {
  try {
    return JSON.parse(readFileSync('./data/generated/seen.json').toString());
  } catch {
    return [];
  }
}
function saveSeen(seen: number[]) {
  JSON.stringify(
    writeFileSync('./data/generated/seen.json', JSON.stringify(seen)),
  );
}
