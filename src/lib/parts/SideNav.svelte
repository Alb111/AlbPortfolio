<script lang="ts">
	export let sections: {
		home: HTMLElement;
		experience: HTMLElement;
		projects: HTMLElement;
		contact: HTMLElement;
	};

	import { Menu, CircleX } from 'lucide-svelte';

	let x: number = 0;
	function underline(y: number, toMove: HTMLElement) {
		x = y;
		scrollToSection(toMove);
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

	function scrollToSection(section: HTMLElement) {
		if (section) {
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
		}
	}
</script>

<div
	id="mySidenav"
	class="fixed right-0 top-0 z-10 h-full w-0 overflow-x-hidden bg-darkGray pt-16 transition-all duration-500"
>
	<button class="absolute left-6 top-6 text-3xl text-white" on:click={closeNav}>
		<CircleX />
	</button>

	<button class={x == 0 ? 'underlined' : 'normal'} on:click={() => underline(0, sections.home)}
		>Home</button
	>
	<button
		class={x == 1 ? 'underlined' : 'normal'}
		on:click={() => underline(1, sections.experience)}>Experience</button
	>
	<button class={x == 2 ? 'underlined' : 'normal'} on:click={() => underline(2, sections.projects)}
		>Projects</button
	>
	<button class={x == 4 ? 'underlined' : 'normal'} on:click={() => underline(3, sections.contact)}
		>Contact</button
	>
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
