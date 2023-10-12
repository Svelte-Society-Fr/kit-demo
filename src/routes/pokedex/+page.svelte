<script lang="ts">
  export let data;

  $: ({ pokemons, seen } = data);
</script>

<ul>
  {#each pokemons as pokemon (pokemon.id)}
    {@const {
      id,
      name,
      sprites: { front_default: src },
    } = pokemon}

    <li class="mini" class:caught={seen.find(id => id === pokemon.id)}>
      <a href="/pokedex/{id}">
        <img {src} alt={name} />
      </a>
    </li>
  {:else}
    <p class="info">Pas de pokémons</p>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: auto;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
  }

  .mini {
    position: relative;
    margin: 1rem;
    cursor: pointer;
  }

  .mini img {
    filter: contrast(0%) brightness(200%);
  }

  .mini.caught img {
    filter: none;
  }

  .mini.caught:hover img {
    filter: drop-shadow(0px 0px 10px #333);
  }
</style>
