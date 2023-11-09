<script>
  export let data;
</script>

<p>{data.pokemon.id}</p>
<img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
<p>{data.pokemon.name}</p>
