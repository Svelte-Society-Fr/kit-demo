<script lang="ts">
  import { navigating } from '$app/stores';
</script>

<nav>
  <a href="/">Accueil</a>
  <a href="/pokedex">Pokedex</a>
  <a href="/faq">Info</a>
  <a href="/sac">Sac</a>
</nav>

{#if $navigating}
  <div>Chargement</div>
{/if}

<slot />
