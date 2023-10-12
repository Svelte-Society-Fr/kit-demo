<script lang="ts">
  import { invalidate } from '$app/navigation';

  export let data;

  $: ({ pokemons, bag } = data);

  async function release(uuid: string) {
    await fetch(`/bag/${uuid}`, { method: 'DELETE' });

    invalidate('bag:all');
  }
</script>

<ul>
  {#each bag as { id, uuid, name } (uuid)}
    {@const src = pokemons[id - 1].sprites.front_default}

    <li class="mini">
      <a href="/pokedex/{id}">
        <img {src} alt={name} />
      </a>
      <button on:click={() => release(uuid)}>Libérer</button>
    </li>
  {:else}
    <p class="info">Pas de pokémons</p>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    gap: 1rem;
    width: 100%;
    place-items: center;
    justify-content: center;
  }

  .mini {
    position: relative;
    margin: 1rem;
    cursor: pointer;
  }

  .mini:hover img {
    filter: drop-shadow(0px 0px 10px #333);
  }

  .info {
    text-align: center;
  }
</style>
