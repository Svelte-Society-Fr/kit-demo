<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher<{
		fight: void;
	}>();

	export let name: string;
	export let src: string;
	export let exp: number;

	onMount(() => {
		const interval = setInterval(() => {
			dispatch('fight');
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<div class="Teammate">
	<img {src} alt={name} />
	<p>{name}</p>
	<p>{exp ?? 0} pts</p>
</div>

<style>
	.Teammate {
		display: flex;
		background-color: lightgrey;
		flex-flow: column;
		padding: 0.5rem;
		border-radius: 5px;
		border: 1px solid black;
		align-items: center;
	}

	img {
		height: 100px;
		width: 100px;
	}
</style>
