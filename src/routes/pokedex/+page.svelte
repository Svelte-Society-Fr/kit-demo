<script>
  import Pokemon from '$lib/components/Pokemon.svelte';

  export let data;
</script>

<h1>Pokedex</h1>

<ul>
  {#each data.pokemons as pokemon}
    <Pokemon {pokemon} />
  {/each}
</ul>
