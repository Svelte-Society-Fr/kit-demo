<script lang="ts">
  export let data;

  $: ({
    name,
    id,
    sprites: { front_default: src },
  } = data);
</script>

<div class="Pokemon">
  <div class="id">#{id}</div>
  <img {src} alt={name} />
  <div class="name">{name}</div>
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
</style>
