<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Prey from '$lib/components/Prey.svelte';
	import { getRandomNb } from '$lib/helpers.js';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';

	export let data;

	let visible: { id: number; key: number }[] = [];

	$: ({
		pokemons,
		heavy: { population },
		bag,
	} = data);

	$: team = bag.filter(p => p.inTeam);

	function remove(position: number) {
		visible = visible.filter((_, i) => i !== position);
	}

	async function putInBag(id: number) {
		await fetch(`/bag/${id}`, { method: 'POST' });
		invalidate('bag:all');
	}

	onMount(() => {
		const addInterval = setInterval(() => {
			visible = [
				...visible,
				{ id: getRandomNb(pokemons.length) + 1, key: Date.now() },
			];
		}, 2000);

		return () => {
			clearInterval(addInterval);
		};
	});
</script>

<h1>Attrapez les Pokémons</h1>

<ul class="team">
	{#each team as { id, name, uuid } (uuid)}
		{@const src = pokemons[id - 1].sprites.back_default}
		<li animate:flip>
			<img {src} alt={name} />
			<p>{name}</p>
		</li>
	{/each}
</ul>
<div class="grass">
	{#each visible as { id, key }, position (key)}
		{@const { sprites, name } = pokemons[id - 1]}
		<Prey
			{id}
			{name}
			src={sprites.front_default}
			on:disappear={() => remove(position)}
			on:catch={({ detail }) => putInBag(detail)}
		/>
	{/each}
	<section>
		{#await population}
			<p>Scan de la zone...</p>
		{:then nb}
			<p>{nb} pokémons présents</p>
		{/await}
	</section>
</div>

<style>
	h1 {
		text-align: center;
	}

	.team {
		display: flex;
		gap: 1rem;
	}

	.team li img {
		height: 100px;
		width: 100px;
	}

	.team li {
		display: flex;
		background-color: lightgrey;
		flex-flow: column;
		padding: 0.5rem;
		border-radius: 5px;
		border: 1px solid black;
		align-items: center;
	}

	section {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}

	p {
		margin: 0;
	}
</style>
