<script lang="ts">
	import Prey from '$lib/components/Prey.svelte';
	import { getRandomNumber } from '$lib/helpers';
	import { onMount } from 'svelte';

	export let data;

	$: pokemons = data.pokemons;

	let preys: { id: number; uuid: number }[] = [];

	onMount(() => {
		const intervalId = setInterval(() => {
			const id = getRandomNumber(pokemons.length) + 1;
			preys = [...preys, { id, uuid: Date.now() }];
		}, 2000);

		return () => {
			clearInterval(intervalId);
		};
	});

	function removePrey(position: number) {
		preys = preys.filter(function (_, p) {
			return p !== position;
		});
	}
</script>

<h1>Attrapez les Pokémons</h1>

<!-- <section> -->
<div class="grass">
	{#each preys as prey, position (prey.uuid)}
		<Prey
			on:hide={() => {
				removePrey(position);
			}}
			on:click={() => {
				fetch(`/bag/${prey.id}`, { method: 'POST' });
			}}
			pokemon={data.pokemons[prey.id - 1]}
		/>
	{/each}
</div>

<!-- </section> -->

<style>
	h1 {
		text-align: center;
	}

	.grass {
		position: relative;
		height: 100%;
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
