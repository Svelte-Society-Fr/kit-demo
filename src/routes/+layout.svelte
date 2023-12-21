<script>
	export let data;
</script>

<menu>
	<nav>
		<a href="/">Accueil</a>
		<a href="/bag">Sac ({data.bagSize})</a>
		<a href="/pokedex">Pokédex</a>
		<a href="/faq">FAQ</a>
	</nav>
</menu>

<main><slot /></main>

<style>
	menu {
		width: 100%;
		background-color: #bbb;
		margin: 0;
		padding: 1rem;
		position: sticky;
		top: 0;
	}
	main {
		display: flex;
		flex-flow: column;
		padding: 1rem;
		height: 100%;
	}
</style>
