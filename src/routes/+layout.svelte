<script lang="ts">
  import { bag } from '$lib/stores';
</script>

<header>
  <nav>
    <a href="/">Accueil</a>
    <a href="/pokedex">Pokedex</a>
    <a href="/faq">Info</a>
    <a href="/bag">Sac({$bag.length})</a>
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  header {
    padding: 1rem;
  }
  main {
    display: flex;
    overflow: auto;
    flex: 1;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }
</style>
