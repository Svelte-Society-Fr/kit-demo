<script lang="ts">
  export let pokemon: {
    id: number;
    name: string;
    sprites: { front_default: string };
  };
</script>

<li>
  <a href="/pokedex/{pokemon.id}">
    <p>{pokemon.id}</p>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <p>{pokemon.name}</p>
  </a>
</li>
