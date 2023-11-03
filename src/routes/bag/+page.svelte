<script lang="ts">
  import { enhance } from '$app/forms';
  import { invalidate } from '$app/navigation';

  export let data;
  export let form;

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
      <p>{name}</p>
      <form method="POST" use:enhance>
        <input id="name" name="name" class:missing={form?.uuid === uuid} />
        <input class="hidden" id="id" name="id" value={uuid} />
        <button>Renommer</button>
      </form>
      <button on:click={() => release(uuid)}>Libérer</button>
    </li>
  {:else}
    <p class="info">Pas de pokémon</p>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 10rem);
    gap: 1rem;
    width: 100%;
    place-items: center;
    justify-content: center;
  }

  img {
    margin: auto;
  }

  a,
  form {
    display: flex;
    flex-flow: column;
    width: 10rem;
  }

  input {
    width: 100%;
  }
  .hidden {
    display: none;
  }
  .missing {
    background: coral;
  }

  li {
    display: flex;
    flex-flow: column;
  }

  li p {
    text-align: center;
  }

  .mini {
    position: relative;
    margin: 1rem;
    cursor: pointer;
  }

  .mini a:hover img {
    filter: drop-shadow(0px 0px 10px #333);
  }

  .info {
    text-align: center;
  }
</style>
