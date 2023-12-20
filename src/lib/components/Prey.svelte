<script lang="ts">
	import { getRandomNumber } from '$lib/helpers';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	let height: number;
	let width: number;

	export let pokemon: {
		id: number;
		name: string;
		sprites: { front_default: string };
	};

	onMount(() => {
		const lifespan = getRandomNumber(3000, 6000);

		setTimeout(() => {
			dispatch('hide');
		}, lifespan);
	});
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
<div class="Prey">
	<img src={pokemon.sprites.front_default} alt={pokemon.name} />
</div>
