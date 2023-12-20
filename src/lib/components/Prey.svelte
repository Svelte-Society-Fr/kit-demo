<script lang="ts">
	import { getRandomNb } from '$lib/helpers';
	import { createEventDispatcher, onMount } from 'svelte';

	export let id: number;
	export let name: string;
	export let src: string;

	const dispatch = createEventDispatcher<{
		catch: number;
		disappear: void;
	}>();

	let innerHeight: number;
	let innerWidth: number;
	let top: number;
	let left: number;

	async function catchPokemon(id: number) {
		dispatch('catch', id);
		dispatch('disappear');
	}

	onMount(() => {
		top = getRandomNb(innerHeight);
		left = getRandomNb(innerWidth);
		const lifespan = getRandomNb(8 * 1000, 3 * 1000);

		const timeout = setTimeout(() => {
			dispatch('disappear');
		}, lifespan);

		return () => clearTimeout(timeout);
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div
	on:click={() => catchPokemon(id)}
	on:keydown={() => catchPokemon(id)}
	role="button"
	tabindex="0"
>
	<img
		{src}
		alt="Un {name} à attraper"
		style:top="{top}px"
		style:left="{left}px"
	/>
</div>

<style>
	img {
		position: fixed;
		/* width: 150px; */
	}

	img:hover {
		cursor: pointer;
	}
</style>
