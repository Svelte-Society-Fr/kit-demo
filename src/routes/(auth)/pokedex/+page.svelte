<script lang="ts">
  export let data;

  $: ({ pokemons } = data);
</script>

<ul>
  {#each pokemons as pokemon (pokemon.id)}
    {@const {
      id,
      name,
      sprites: { front_default: src },
    } = pokemon}

    <li class="mini">
      <a href="/pokedex/{id}">
        <img {src} alt={name} />
      </a>
    </li>
  {:else}
    <p class="info">Pas de pokémons</p>
  {/each}
</ul>
