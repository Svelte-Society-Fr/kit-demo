<script lang="ts">
  import { invalidate } from '$app/navigation';
  import Prey from '$lib/components/Prey.svelte';
  import { getRandomNb } from '$lib/helpers.js';
  import { onMount } from 'svelte';

  export let data;

  let visible: { id: number; key: number }[] = [];

  $: ({
    pokemons,
    heavy: { population },
  } = data);

  function remove(position: number) {
    visible = visible.filter((_, i) => i !== position);
  }

  async function putInBag(id: number) {
    await fetch(`/bag/${id}`, { method: 'POST' });
    invalidate('bag:all');
  }

  onMount(() => {
    const addInterval = setInterval(() => {
      visible = [
        ...visible,
        { id: getRandomNb(pokemons.length) + 1, key: Date.now() },
      ];
    }, 2000);

    return () => {
      clearInterval(addInterval);
    };
  });
</script>

<h1>Attrapez les Pokémons</h1>

<div class="grass">
  {#each visible as { id, key }, position (key)}
    {@const { sprites, name } = pokemons[id - 1]}
    <Prey
      {id}
      {name}
      src={sprites.front_default}
      on:disappear={() => remove(position)}
      on:catch={({ detail }) => putInBag(detail)}
    />
  {/each}
  <section>
    {#await population}
      <p>Scan de la zone...</p>
    {:then nb}
      <p>{nb} pokémons présents</p>
    {/await}
  </section>
</div>

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
