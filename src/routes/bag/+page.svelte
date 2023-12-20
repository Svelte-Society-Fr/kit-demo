<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import { flip } from 'svelte/animate';

	export let data;
	export let form;

	$: ({ pokemons, bag } = data);
	$: team = bag.filter(p => p.inTeam);
	$: bench = bag.filter(p => !p.inTeam);
	$: teamSize = team.length;

	async function release(uuid: string) {
		await fetch(`/bag/${uuid}`, { method: 'DELETE' });

		invalidate('bag:all');
	}

	async function toggleFromTeam(uuid: string) {
		await fetch(`/team/${uuid}`, { method: 'PATCH' });

		invalidate('bag:all');
	}
</script>

<ul>
	{#each [...team, ...bench] as { id, uuid, name, inTeam } (uuid)}
		{@const src = pokemons[id - 1].sprites.front_default}

		<li class="mini" class:team={inTeam} animate:flip={{ duration: 200 }}>
			<a href="/pokedex/{id}">
				<img {src} alt={name} />
			</a>
			<p>{name}</p>
			<form method="POST" use:enhance>
				<input name="name" class:missing={form?.uuid === uuid} />
				<input type="hidden" name="id" value={uuid} />
				<button>Renommer</button>
			</form>
			{#if inTeam}
				<button on:click={() => toggleFromTeam(uuid)}>Reposer</button>
			{/if}
			{#if !inTeam && teamSize < 6}
				<button on:click={() => toggleFromTeam(uuid)}>Utiliser</button>
			{/if}
			<button on:click={() => release(uuid)}>Libérer</button>
		</li>
	{:else}
		<p class="info">Pas de pokémon</p>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, 10rem);
		gap: 1rem;
		width: 100%;
		place-items: center;
		justify-content: center;
	}

	img {
		margin: auto;
	}

	a,
	form {
		display: flex;
		flex-flow: column;
		width: 10rem;
	}

	input {
		width: 100%;
	}
	.missing:not(:focus) {
		background: coral;
	}

	li {
		display: flex;
		flex-flow: column;
	}

	li p {
		text-align: center;
	}

	.mini {
		position: relative;
		margin: 1rem;
		cursor: pointer;
	}

	.mini a:hover img {
		filter: drop-shadow(0px 0px 10px #333);
	}

	.info {
		text-align: center;
	}

	.team {
		background-color: lightgrey;
		border: 1px solid black;
	}
</style>
