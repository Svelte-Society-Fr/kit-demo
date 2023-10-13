import { writeFileSync, readFileSync, unlinkSync } from 'fs';
import { clearBag } from './bag';
import { clearSeen } from './seen';

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
  clearSeen();
  clearBag();
}

export function login() {
  try {
    return JSON.parse(readFileSync('./data/generated/account.json').toString());
  } catch {
    return null;
  }
}
