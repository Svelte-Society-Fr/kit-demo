import { writable } from 'svelte/store';
import type { PokemonInBag } from './server/database';
import { browser } from '$app/environment';

const { subscribe, set } = writable<PokemonInBag[]>([], set => {
  if (browser) {
    fetch('/bag/all')
      .then(resp => resp.json())
      .then(set);
  }
});

export const bag = {
  subscribe,
  catch: async (id: number) => {
    const updatedBag = await fetch(`/bag/${id}`, { method: 'POST' }).then(
      resp => resp.json(),
    );

    set(updatedBag);
  },
};
