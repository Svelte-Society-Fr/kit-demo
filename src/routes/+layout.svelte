<script lang="ts">
  import { enhance } from '$app/forms';
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

  let input: string;

  $: ({ bag, account } = data);
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

  <section>
    {#if account}
      <p>{account.name}</p>
      <form action="/account?/quit" method="POST" use:enhance>
        <button>Vider</button>
      </form>
    {:else}
      <form
        action="/account?/register"
        method="POST"
        use:enhance={() => {
          input = '';
        }}
      >
        <input id="name" name="name" type="text" bind:value={input} />
        <button disabled={!input}>S'inscrire</button>
      </form>
    {/if}
  </section>
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

  form {
    display: flex;
    align-items: stretch;
  }

  input {
    width: 10rem;
    line-height: 1.3rem;
  }

  input:focus {
    outline: none;
  }

  button[disabled]:hover {
    background: unset;
    color: #777;
    cursor: not-allowed;
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
    padding: 1rem;
  }

  section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .current {
    color: #333;
  }
</style>
