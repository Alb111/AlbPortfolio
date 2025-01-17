<script lang="ts">
	import Hero from "$lib/parts/Hero.svelte";
	import Header from "$lib/parts/Header.svelte";
	import WorkExp from "$lib/parts/WorkExperience.svelte";
	import Education from "$lib/parts/Education.svelte";
	import Projects from "$lib/parts/Projects.svelte";
</script>

<Header/>
<Hero/>
<div class="flex flex-col lg:flex-row">
<WorkExp/>
<Education/>
</div>
<Projects/>