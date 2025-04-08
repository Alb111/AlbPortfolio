<script lang="ts">
  import { onMount } from 'svelte';
  import SideNav from './SideNav.svelte';

  let currentPage: number = 0;

  // Update the current page based on the URL
  onMount(() => {
    const path = window.location.pathname;
    if (path === "/") currentPage = 0;
    else if (path === "/exp") currentPage = 1;
    else if (path === "/projects") currentPage = 2;
    else if (path === "/contact") currentPage = 3;
  });

  function setCurrentPage(page: number) {
    currentPage = page;
  }
</script>

<div
  class="b-2 fixed top-0 flex w-screen items-baseline justify-between border-b border-black bg-white py-5"
>
  <h1 class="ml-10 text-3xl">
    Albert<span
      class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent"
      >.</span
    >
  </h1>

  <!-- Main Navigation (visible on larger screens) -->
  <nav class="mr-10 hidden sm:flex">
    <a href="/">
      <button class={currentPage === 0 ? 'underlined' : 'normal'} on:click={() => setCurrentPage(0)}>Home</button>
    </a>
    <a href="/exp">
      <button class={currentPage === 1 ? 'underlined' : 'normal'} on:click={() => setCurrentPage(1)}>Experience</button>
    </a>
    <a href="/projects">
      <button class={currentPage === 2 ? 'underlined' : 'normal'} on:click={() => setCurrentPage(2)}>Projects</button>
    </a>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScA2h7K9RGP_Tkt1NJAIRqkWUC2LlEpRWL5GUnfr-0a6fb48g/viewform?usp=dialog">
      <button class={currentPage === 3 ? 'underlined' : 'normal'} on:click={() => setCurrentPage(3)}>Contact</button>
    </a>
  </nav>

  <!-- Side Navigation (visible on small screens) -->
  <div class="sm:hidden">
    <SideNav />
  </div>
</div>

<div class="h-16 w-full"></div>

<style>
  .normal {
    @apply px-3 text-2xl;
  }

  .underlined {
    @apply bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text px-3 text-2xl font-bold text-transparent;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
  }

  button {
    transition: transform 0.2s ease;
  }

  button:hover {
    transform: scale(1.1);
  }
</style>
