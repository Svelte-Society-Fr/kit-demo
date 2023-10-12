<script lang="ts">
  export let data;

  $: ({
    bag,
    pokemon: {
      name,
      id,
      sprites: { front_default: src },
    },
  } = data);

  $: caught = bag.find(i => i.id === id);
  $: displayedName = caught ? name : name.replace(/./g, '?');
  $: alt = caught ? name : `Pokémon inconnu nº${id}`;
</script>

<div class="Pokemon" class:caught>
  <div class="id">#{id}</div>
  <img {src} {alt} />
  <div class="name">{displayedName}</div>
</div>

<style>
  .Pokemon {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 15rem;
    margin: auto;
  }

  .name,
  .id {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .caught img {
    filter: none;
  }

  img {
    height: 15rem;
    object-fit: cover;
    filter: contrast(0%) brightness(200%);
  }
</style>
