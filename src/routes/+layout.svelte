<script lang="ts">
  import { page } from '$app/stores';

  const links = [
    {
      label: 'Accueil',
      href: '/',
    },
    {
      label: 'Pokédex',
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

  $: ({ bag } = data);
</script>

<header>
  <nav>
    {#each links as { href, label: originalLabel }}
      {@const current = $page.url.pathname === href}
      {@const label =
        href === '/bag' && bag.length
          ? `${originalLabel}(${bag.length})`
          : originalLabel}
      <a {href} aria-current={current ? 'page' : null}>{label}</a>
    {/each}
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    height: 4rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding: 1rem;
  }

  [aria-current='page'] {
    color: #333;
  }
</style>
