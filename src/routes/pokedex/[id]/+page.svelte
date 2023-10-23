<script lang="ts">
  export let data;

  $: ({
    seen,
    pokemon: {
      name,
      id,
      sprites: { front_default: src },
    },
  } = data);

  $: caught = seen.includes(id);
  $: displayedName = caught ? name : name.replace(/./g, "?");
  $: alt = caught ? name : `Pokémon inconnu nº${id}`;
</script>

<div class="Pokemon" class:caught>
  <p>#{id}</p>
  <img {src} {alt} />
  <p>{displayedName}</p>
</div>

<style>
  .Pokemon {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 15rem;
    margin: auto;
  }

  p {
    margin: 0;
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
