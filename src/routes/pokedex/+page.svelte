<script>
	import Pokemon from '$lib/components/Pokemon.svelte';

	export let data;

	$: console.log('cuaght', data.caught);
</script>

<h1>Pokedex</h1>

<ul>
	{#each data.pokemons as pokemon}
		<Pokemon {pokemon} caught={data.caught.includes(pokemon.id)} />
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
		gap: 2rem;
	}
</style>
