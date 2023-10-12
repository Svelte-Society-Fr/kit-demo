import { writeFileSync, readFileSync, unlinkSync } from 'fs';

export type Account = { name: string };

export function register(name: string) {
  JSON.stringify(
    writeFileSync('./data/generated/account.json', JSON.stringify({ name })),
  );
}

export function deleteAccount() {
  try {
    unlinkSync('./data/generated/account.json');
  } catch {}
  try {
    unlinkSync('./data/generated/seen.json');
  } catch {}
  try {
    unlinkSync('./data/generated/bag.json');
  } catch {}
}

export function login() {
  try {
    return JSON.parse(readFileSync('./data/generated/account.json').toString());
  } catch {
    return null;
  }
}
