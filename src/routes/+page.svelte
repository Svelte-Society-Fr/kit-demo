<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Prey from '$lib/components/Prey.svelte';
	import Teammate from '$lib/components/Teammate.svelte';
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

	async function gainExp(uuid: string, exp = 1) {
		await fetch(`/team/${uuid}/exp/${exp}`, { method: 'PATCH' }).then(() => {
			const pokemon = bag.find(pokemon => pokemon.uuid === uuid);

			if (pokemon) {
				pokemon.exp += exp;
				bag = bag;
			}
		});
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
	{#each team as { id, name, uuid, exp } (uuid)}
		{@const src = pokemons[id - 1].sprites.back_default}
		<li animate:flip>
			<Teammate {name} {src} {exp} on:fight={() => gainExp(uuid)} />
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

	section {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}

	p {
		margin: 0;
	}
</style>
