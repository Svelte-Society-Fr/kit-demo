<script lang="ts">
  import Pokemon from '$lib/components/Pokemon.svelte';
  import { getRandomNumber } from '$lib/helpers';
  import { onMount } from 'svelte';

  export let data;

  $: pokemons = data.pokemons;

  let ids: number[] = [];

  onMount(() => {
    const intervalId = setInterval(() => {
      const id1 = getRandomNumber(pokemons.length) + 1;
      const id2 = getRandomNumber(pokemons.length) + 1;
      const id3 = getRandomNumber(pokemons.length) + 1;
      ids = [id1, id2, id3];
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<h1>Attrapez les Pokémons</h1>

{#each ids as id}
  <Pokemon pokemon={data.pokemons[id - 1]} />
{/each}

<style>
  h1 {
    text-align: center;
  }

  section {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  p {
    margin: 0;
  }
</style>
