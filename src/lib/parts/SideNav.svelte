<script lang="ts">
	import { Menu, CircleX } from 'lucide-svelte';

	let x: number = 0;
	function underline(y: number) {
		x = y;
		closeNav();
	}
	// Set the width of the side navigation to 250px
	function openNav() {
		document.getElementById('mySidenav').classList.add('w-64');
	}

	// Set the width of the side navigation to 0
	function closeNav() {
		document.getElementById('mySidenav').classList.remove('w-64');
	}
</script>

<div
	id="mySidenav"
	class="fixed right-0 top-0 z-10 h-full w-0 overflow-x-hidden bg-darkGray pt-16 transition-all duration-500"
>
	<button class="absolute left-6 top-6 text-3xl text-white" on:click={closeNav}>
		<CircleX />
	</button>

	<a href="/">
		<button class={x == 0 ? 'underlined' : 'normal'} on:click={() => underline(0)}>Home</button>
	</a>
	<a href="/exp">
		<button class={x == 1 ? 'underlined' : 'normal'} on:click={() => underline(1)}
			>Experience</button
		>
	</a>
	<a href="/projects">
		<button class={x == 2 ? 'underlined' : 'normal'} on:click={() => underline(2)}>Projects</button>
	</a>
	<a href="/contact">
		<button class={x == 4 ? 'underlined' : 'normal'} on:click={() => underline(3)}>Contact</button>
	</a>
</div>

<!-- Use any element to open the sidenav -->
<button on:click={openNav}>
	<Menu class="mr-10" />
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
