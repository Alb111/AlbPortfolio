<script lang="ts">
	import SideNav from "./SideNav.svelte";
	let x: number = 0;
	function underline(y: number) {
		x = y;
	}
</script>

<div
	class="sticky top-2 m-2 flex items-baseline justify-between rounded-xl bg-darkGray py-2 sm:py-5 outline"
>
	<h1 class="ml-10 text-3xl">
		Albert<span
			class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent"
			>.</span
		>
	</h1>

	<!-- Main Navigation (visible on larger screens) -->
	<nav class="hidden sm:flex mr-10">
		<button class={x == 0 ? 'underlined' : 'normal'} on:click={() => underline(0)}>Home</button>
		<button class={x == 1 ? 'underlined' : 'normal'} on:click={() => underline(1)}>Experience</button>
		<button class={x == 2 ? 'underlined' : 'normal'} on:click={() => underline(2)}>Projects</button>
		<button class={x == 3 ? 'underlined' : 'normal'} on:click={() => underline(3)}>Resume</button>
		<button class={x == 4 ? 'underlined' : 'normal'} on:click={() => underline(4)}>Contact</button>
	</nav>

	<!-- Side Navigation (visible on small screens) -->
	<div class="sm:hidden">
		<SideNav/>
	</div>
</div>

<style>
	.normal {
		@apply px-3 text-2xl;
	}

	.underlined {
		@apply px-3 text-2xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text font-bold text-transparent;
		transition: background-color 0.3s ease, transform 0.2s ease;
	}

	button {
		transition: transform 0.2s ease;
	}

	button:hover {
		transform: scale(1.1);
	}
</style>
