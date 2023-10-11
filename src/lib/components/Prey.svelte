<script lang="ts">
  import { getRandomNb } from '$lib/helpers';
  import { bag } from '$lib/stores';
  import { createEventDispatcher, onMount } from 'svelte';

  export let id: number;
  export let position: number;
  export let name: string;
  export let src: string;

  const dispatch = createEventDispatcher<{
    disappear: number;
  }>();

  let innerHeight: number;
  let innerWidth: number;
  let top: number;
  let left: number;

  onMount(() => {
    top = getRandomNb(innerHeight);
    left = getRandomNb(innerWidth);
    const lifespan = getRandomNb(8 * 1000, 3 * 1000);

    setTimeout(() => {
      dispatch('disappear', position);
    }, lifespan);
  });
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<span
  on:click={() => bag.catch(id)}
  on:keydown={() => bag.catch(id)}
  role="button"
  tabindex="0"
>
  <img
    {src}
    alt="Un {name} à attraper"
    style:top="{top}px"
    style:left="{left}px"
  />
</span>

<style>
  img {
    position: fixed;
    width: 150px;
  }

  img:hover {
    cursor: pointer;
  }
</style>
