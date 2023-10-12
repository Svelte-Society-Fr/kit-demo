<script lang="ts">
  import Prey from '$lib/components/Prey.svelte';
  import { getRandomNb } from '$lib/helpers.js';
  import { onMount } from 'svelte';

  export let data;

  let visible: number[] = [];

  $: ({ pokemons } = data);

  function remove(position: number) {
    visible = visible.filter((_, i) => i !== position);
  }

  onMount(() => {
    const addInterval = setInterval(() => {
      visible = [...visible, getRandomNb(pokemons.length) + 1];
    }, 2000);

    return () => {
      clearInterval(addInterval);
    };
  });
</script>

<h1>Attrapez les Pokemons</h1>

<div class="grass">
  {#each visible as id, position (id)}
    {@const { sprites, name } = pokemons[id - 1]}
    <Prey
      {id}
      {position}
      {name}
      src={sprites.front_default}
      on:disappear={({ detail }) => remove(detail)}
    />
  {/each}
</div>
