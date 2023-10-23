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

    <li class:caught={seen.includes(id)}>
      <a href="/pokedex/{id}">
        <img {src} alt={name} width="96" height="96" loading="lazy" />
      </a>
    </li>
  {:else}
    <p>Pas de pokémon</p>
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

  li {
    position: relative;
    margin: 1rem;
    cursor: pointer;
  }

  li img {
    filter: contrast(0%) brightness(200%);
  }

  li.caught img {
    filter: none;
  }

  li.caught:hover img {
    filter: drop-shadow(0px 0px 10px #333);
  }
</style>
