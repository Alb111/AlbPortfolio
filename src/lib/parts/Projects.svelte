<script>
	let slideIndex = 1;
	let projects = [
		{
			projectName: 'Pomato',
			opensource: true,
			githubUrl: 'https://github.com/Alb111/Pomato_V1',
			skills: ['Svelte Kit', 'Supabase', 'Tailwind-CSS', 'Typescript', 'Skeleton UI'],
			date: 'dec 2024',
			description: [
				'• Developing a full-stack web application using Supabase and Svelte-Kit to help users implement the Pomodoro technique for more efficient task completion',
				'• Implementing OAuth to securely store user study sessions and track progress',
				'• Creating features to display past user data, study sessions, and completed tasks, providing progress tracking and motivation'
			],
			img: ''
		},
		{
			projectName: 'Slug Assistant *Cruz Hacks Winner*',
			opensource: true,
			githubUrl: 'https://github.com/Sluggish-Solutions/Slug-Mommy',
			skills: ['Svelte Kit', 'Supabase', 'Tailwind-CSS', 'Typescript', 'Skeleton UI'],
			date: 'feb 2024',
			description: [
				'• Lead front-end development to create a school mascot-themed AI assistant to help incoming college students better handle their daily schedules and responsibilities',
				'• Effectively implemented OpenAI’s API and simple prompting to facilitate a welcoming tone of communication',
				'• Devpost: https://devpost.com/software/slug-mommy'
			],
			img: ''
		},
		{
			projectName: 'Stop it Game',
			opensource: false,
			githubUrl: 'Can be shown on request currently private for academic purposes.',
			skills: ['Verilog', 'FPGA', 'Verible', 'Vivado'],
			date: 'July 2024',
			description: [
				'• Developed a real-time timing game, Stop It, on an FPGA using Verilog, involving precise timing and control logic',
				'• Implemented digital logic circuits to handle game state, timing, score, and user input for start/stop functionality on an LED display and a set of score LEDs',
				'• Tested and debugged the system on FPGA hardware, ensuring reliable timing precision and responsive gameplay'
			],
			img: ''
		},
		{
			projectName: 'CLI-based Hangman',
			opensource: false,
			skills: ['C', 'Make'],
			githubUrl: 'Can be shown on request currently private for academic purposes.',
			date: 'Mar 2024',
			description: [
				'• Developed a command-line interface (CLI) based Hangman game with ASCII art, providing a visually engaging user experience',
				'• Implemented game logic for word selection, tracking player guesses, and managing game states such as wins/losses',
				'• Created a robust input validation system to handle incorrect guesses and provide real-time feedback'
			],
			img: ''
		}
	];

	/**
	 * @param {number} n
	 */
	function plusSlides(n) {
		slideIndex = ((slideIndex + n - 1 + projects.length) % projects.length) + 1;
	}

	/**
	 * @param {number} n
	 */
	function currentSlide(n) {
		slideIndex = n;
	}
</script>

<main class="h-3/4">
	<h1 class="py-10 text-4xl font-bold">Projects</h1>
	<div class="flex h-1/2 w-full items-center justify-center px-10">
		{#each projects as project, index}
			<div class={`mySlides fade ${index + 1 === slideIndex ? 'block' : 'hidden'} flex`}>
				<div class="w-1/2 rounded-lg bg-lightGray p-6">
					<h1
						class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-2xl font-bold text-transparent"
					>
						{project.projectName}
					</h1>
					<div class="text-md mt-2">
						{#if project.opensource}
							<a href={project.githubUrl} target="_blank" class="text-blue-500 hover:underline">
								GitHub Link
							</a>
						{/if}
						{#if !project.opensource}
							<h1 class="text-blue-500 hover:underline">
								Source Code can be shown on request currently private for academic purposes
							</h1>
						{/if}
					</div>
					{#each project.description as bulletpoint}
						<p class="mt-3 text-white">{bulletpoint}</p>
					{/each}
				</div>
				<div class="mx-5 flex w-1/2 justify-center rounded-lg bg-lightGray">
					<img src={project.img} alt="not found" />
				</div>
			</div>
		{/each}
	</div>

	<!-- Next & previous buttons -->
	<div class="py-5 w-full flex justify-evenly">
		<button
			class=" rounded-r bg-lightGray from-blue-500 to-green-500 px-4 py-2 text-lg font-bold text-white hover:bg-gradient-to-r"
			on:click={() => plusSlides(-1)}
		>
			←
		</button>
		<button
			class="rounded-l bg-lightGray from-blue-500 to-green-500 px-4 py-2 text-lg font-bold text-white hover:bg-gradient-to-r"
			on:click={() => plusSlides(1)}
		>
			→
		</button>
	</div>
</main>

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
