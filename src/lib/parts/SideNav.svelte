<script lang="ts">
  import { Menu, CircleX } from 'lucide-svelte';

  let activeLink = 0;
  let navOpen = false;

  // Update the active link when clicked
  function underline(index: number) {
    activeLink = index;
    navOpen = false;  // Close the menu when a link is clicked
  }

  // Set the active link based on the current path
  import { onMount } from 'svelte';
  onMount(() => {
    const path = window.location.pathname;
    if (path === "/") activeLink = 0;
    else if (path === "/exp") activeLink = 1;
    else if (path === "/projects") activeLink = 2;
    else if (path === "/contact") activeLink = 3;
  });
</script>

<!-- Side Navigation -->
<div
  class="h-full w-0 overflow-x-hidden bg-darkGray pt-16 transition-all duration-500 fixed top-0 right-0"
  class:w-52={navOpen}
  class:w-0={!navOpen}
>
  <!-- Close Button -->
  <button class="absolute left-6 top-6 text-3xl text-white" on:click={() => (navOpen = false)}>
    <CircleX />
  </button>

  <!-- Nav Links -->
  <a href="/">
    <button class={activeLink === 0 ? 'underlined' : 'normal'} on:click={() => underline(0)}>
      Home
    </button>
  </a>
  <a href="/exp">
    <button class={activeLink === 1 ? 'underlined' : 'normal'} on:click={() => underline(1)}>
      Experience
    </button>
  </a>
  <a href="/projects">
    <button class={activeLink === 2 ? 'underlined' : 'normal'} on:click={() => underline(2)}>
      Projects
    </button>
  </a>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScA2h7K9RGP_Tkt1NJAIRqkWUC2LlEpRWL5GUnfr-0a6fb48g/viewform?usp=dialog">
    <button class={activeLink === 3 ? 'underlined' : 'normal'} on:click={() => underline(3)}>
      Contact
    </button>
  </a>
</div>

<!-- Open Button -->
<button on:click={() => (navOpen = !navOpen)} class="mr-10">
  <Menu />
</button>

<style>
  .normal {
    @apply block px-8 py-2 text-xl;
    color: white;
    transition: all 0.3s ease-in-out;
  }

  .underlined {
    @apply block px-8 py-2 text-xl font-bold;
    background: linear-gradient(to right, #3b82f6, #10b981);
    -webkit-background-clip: text;
    color: transparent;
    transition: all 0.3s ease-in-out;
  }
</style>
