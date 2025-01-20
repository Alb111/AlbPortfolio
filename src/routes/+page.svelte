<script lang="ts">
	import Hero from '$lib/parts/Hero.svelte';
	import Header from '$lib/parts/Header.svelte';
	import WorkExp from '$lib/parts/WorkExperience.svelte';
	import Projects from '$lib/parts/Projects.svelte';
	import Contant from '$lib/parts/Contant.svelte';

	// References to components
	let heroRef: HTMLElement;
	let workExpRef: HTMLElement;
	let projectsRef: HTMLElement;
	let contactRef: HTMLElement;

	// Scroll-to function
	function scrollToSection(section: HTMLElement) {
		section?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}
</script>

<Header
	{scrollToSection}
	sections={{
		home: heroRef,
		experience: workExpRef,
		projects: projectsRef,
		contact: contactRef
	}}
/>
<div bind:this={heroRef}>
	<Hero />
</div>
<div class="h-32"></div>
<div bind:this={workExpRef}>
	<WorkExp />
</div>
<div class="h-32"></div>
<div bind:this={projectsRef}>
	<Projects />
</div>
<div class="h-52"></div>
<div bind:this={contactRef}>
	<Contant />
</div>
<div class="h-44"></div>
