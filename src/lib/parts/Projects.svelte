<script>
	let slideIndex = 1;
	let projects = [
		{
			projectName: 'Pomato',
			githubUrl: 'https://github.com/example/pomato',
			description: 'A project description for Pomato.'
		},
		{
			projectName: 'Tomato',
			githubUrl: 'https://github.com/example/tomato',
			description: 'A project description for Tomato.'
		},
		{
			projectName: 'Potato',
			githubUrl: 'https://github.com/example/potato',
			description: 'A project description for Potato.'
		}
	];

	function plusSlides(n) {
		slideIndex = ((slideIndex + n - 1 + projects.length) % projects.length) + 1;
	}

	function currentSlide(n) {
		slideIndex = n;
	}
</script>

<!-- Slideshow container -->
<div class="w-1/2 ">
	{#each projects as project, index}
		<div class={`mySlides fade ${index + 1 === slideIndex ? 'block' : 'hidden'}`}>
			<div class="rounded-lg bg-lightGray p-6 shadow-md transition-all hover:shadow-xl">
				<h3 class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-xl font-bold text-transparent">
					{project.projectName}
				</h3>
				<p class="text-md mt-2">
					<a href={project.githubUrl} target="_blank" class="text-blue-500 hover:underline">
						GitHub Link
					</a>
				</p>
				<p class="mt-3 text-white">{project.description}</p>
			</div>
		</div>
	{/each}

	<!-- Next & previous buttons -->
	<button
		class=" bg-black bg-opacity-50 text-white font-bold text-lg px-4 py-2 rounded-r hover:bg-opacity-70"
		on:click={() => plusSlides(-1)}
	>
		←
	</button>
	<button
		class="bg-black bg-opacity-50 text-white font-bold text-lg px-4 py-2 rounded-l hover:bg-opacity-70"
		on:click={() => plusSlides(1)}
	>
		→
	</button>
</div>


<style>
	/* Fading animation for the slides */
	.fade {
		animation: fade 1.5s;
	}

	@keyframes fade {
		from {
			opacity: 0.8;
		}
		to {
			opacity: 1;
		}
	}
</style>
