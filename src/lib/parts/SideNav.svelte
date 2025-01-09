<script lang="ts">
	import { Menu, CircleX  } from 'lucide-svelte';
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
	<button class="absolute left-6 top-0 text-3xl text-white" on:click={closeNav}> <CircleX/> </button>
	<a href="#" class="block px-8 py-2 text-xl"
		>About</a
	>
	<a href="#" class="block px-8 py-2 text-xl"
		>Services</a
	>
	<a href="#" class="block px-8 py-2 text-xl"
		>Clients</a
	>
	<a href="#" class="block px-8 py-2 text-xl"
		>Contact</a
	>
</div>

<!-- Use any element to open the sidenav -->
<button on:click={openNav}>
    <Menu class="mr-10"/>
</button>
