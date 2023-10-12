<script lang="ts">
  import { page } from '$app/stores';

  const links = [
    {
      label: 'Accueil',
      href: '/',
    },
    {
      label: 'Pokedex',
      href: '/pokedex',
    },
    {
      label: 'Info',
      href: '/faq',
    },
    {
      label: 'Sac',
      href: '/bag',
    },
  ];

  export let data;

  $: ({ bag, seen } = data);
</script>

<header>
  <nav>
    {#each links as { href, label: originalLabel }}
      {@const current = $page.url.pathname === href}
      {@const label =
        href === '/bag' && bag.length
          ? `${originalLabel}(${bag.length})`
          : originalLabel}
      <a {href} class:current>{label}</a>
    {/each}
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  header {
    padding: 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  main {
    display: flex;
    overflow: auto;
    flex: 1;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .current {
    color: #333;
  }
</style>
