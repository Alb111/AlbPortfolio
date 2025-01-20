<script lang="ts">
	export let scrollToSection: (section: HTMLElement) => void;
	export let sections: {
		home: HTMLElement;
		experience: HTMLElement;
		projects: HTMLElement;
		contact: HTMLElement;
	};

	import SideNav from './SideNav.svelte';
	let x: number = 0;
	function underlineAndScroll(y: number, too: HTMLElement) {
		x = y;
		scrollToSection(too)
	}
</script>

<div
	class="fixed top-2 z-10 flex w-full items-baseline justify-between rounded-xl bg-darkGray py-2 outline sm:py-5"
>
	<h1 class="ml-10 text-3xl">
		Albert<span
			class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent"
			>.</span
		>
	</h1>

	<!-- Main Navigation (visible on larger screens) -->
	<nav class="mr-10 hidden sm:flex">
		<button class={x == 0 ? 'underlined' : 'normal'} on:click={() => underlineAndScroll(0, sections.home) }>Home</button>
		<button class={x == 1 ? 'underlined' : 'normal'} on:click={() => underlineAndScroll(1, sections.experience)}
			>Experience</button
		>
		<button class={x == 2 ? 'underlined' : 'normal'} on:click={() => underlineAndScroll(2, sections.projects)}>Projects</button>
		<button class={x == 3 ? 'underlined' : 'normal'} on:click={() => underlineAndScroll(3, sections.contact)}>Contact</button>
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
