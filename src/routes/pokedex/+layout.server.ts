import { readSeen } from '$lib/server/database/seen';

export const load = ({ depends }) => {
  depends('pokedex:seen');

  console.log('LOAD SEEN');

  return {
    seen: readSeen(),
  };
};
