<script>
	import Wave from './Wave.svelte';
	import ProjectCard from './ProjectCard.svelte';
	let projects = [
		{
			projectName: 'Pomato',
			type: 'software',
			opensource: true,
			githubUrl: 'https://github.com/Alb111/Pomato_V1',
			skills: ['Svelte Kit', 'Supabase', 'Tailwind-CSS', 'Typescript', 'Skeleton UI'],
			date: 'dec 2024',
			description: [
				'Developing a full-stack web application using Supabase and Svelte-Kit to help users implement the Pomodoro technique for more efficient task completion',
				'Implementing OAuth to securely store user study sessions and track progress',
				'Creating features to display past user data, study sessions, and completed tasks, providing progress tracking and motivation'
			],
			img: ''
		},
		{
			projectName: 'Slug Assistant *Cruz Hacks Winner*',
			type: 'software',
			opensource: true,
			githubUrl: 'https://github.com/Sluggish-Solutions/Slug-Mommy',
			skills: ['Svelte Kit', 'Supabase', 'Tailwind-CSS', 'Typescript', 'Skeleton UI'],
			date: 'feb 2024',
			description: [
				'Lead front-end development to create a school mascot-themed AI assistant to help incoming college students better handle their daily schedules and responsibilities',
				'Effectively implemented OpenAI’s API and simple prompting to facilitate a welcoming tone of communication',
				'Devpost: https://devpost.com/software/slug-mommy'
			],
			img: ''
		},
		{
			projectName: 'Stop it Game',
			type: 'hardware',
			opensource: false,
			githubUrl: 'Can be shown on request currently private for academic purposes.',
			skills: ['Verilog', 'FPGA', 'Verible', 'Vivado'],
			date: 'July 2024',
			description: [
				'Developed a real-time timing game, Stop It, on an FPGA using Verilog, involving precise timing and control logic',
				'Implemented digital logic circuits to handle game state, timing, score, and user input for start/stop functionality on an LED display and a set of score LEDs',
				'Tested and debugged the system on FPGA hardware, ensuring reliable timing precision and responsive gameplay'
			],
			img: ''
		},
		{
			projectName: 'CLI-based Hangman',
			type: 'software',
			opensource: false,
			skills: ['C', 'Make'],
			githubUrl: 'Can be shown on request currently private for academic purposes.',
			date: 'Mar 2024',
			description: [
				'Developed a command-line interface (CLI) based Hangman game with ASCII art, providing a visually engaging user experience',
				'Implemented game logic for word selection, tracking player guesses, and managing game states such as wins/losses',
				'Created a robust input validation system to handle incorrect guesses and provide real-time feedback'
			],
			img: ''
		},
		{
			projectName: 'Dino Run Game (Offline Chrome Clone)',
			type: 'hardware',
			opensource: false,
			skills: ['Verilog', 'FPGA', 'Verible', 'Vivado'],
			githubUrl: 'Can be shown on request — currently private for academic purposes.',
			date: 'July 2024',
			description: [
				'Designed and implemented a hardware-based side-scrolling runner game inspired by Chrome’s offline Dino Run using Verilog on an FPGA',
				'Built real-time game logic including obstacle generation, collision detection, jump mechanics, and scoring on a VGA display',
				'Integrated user input, sprite animation, and frame-based timing to simulate smooth gameplay on FPGA hardware'
			],
			img: ''
		},
		{
			projectName: 'MNIST on FPGA',
			type: 'hardware',
			opensource: false,
			skills: ['Python', 'NumPy', 'Verilog', 'FPGA', 'Vivado'],
			githubUrl: 'Can be shown on request — currently private for academic purposes.',
			date: 'Apr 2025',
			description: [
				'Trained a 2-layer neural network in Python using NumPy to classify handwritten digits from the MNIST dataset',
				'Exported trained weights to be used in a hardware implementation on an FPGA',
				'Currently developing matrix multiplication and inference logic in Verilog to perform digit classification in hardware'
			],
			img: ''
		}
	];

	let categoryFilter = 'all'; // Default filter (all items)
	let filteredItems = projects;
	// Filter items based on the selected category filter
	function filterHardware() {
		categoryFilter = 'hardware';
	}
	function filterSoftware() {
		categoryFilter = 'software';
	}
	function filterAll() {
		categoryFilter = 'all';
	}

	$: filteredItems = projects.filter((item) => {
		return categoryFilter === 'all' || item.type === categoryFilter;
	});
</script>

<!-- Display filtered items -->
<main class="mx-4 mt-10 flex-col">
	<!-- Heading Section -->
	<aside class="flex w-full items-center justify-center space-x-1">
		<Wave x={700} y={100} z={20} />
		<div>
			<section class="mb-4 text-center">
				<h2 class="text-2xl font-semibold text-gray-700">My Projects</h2>
			</section>

			<!-- Filter Section -->
			<section class="mb-6 flex flex-wrap justify-center gap-3">
				<h1>Filter By -></h1>
				<button
					on:click={filterHardware}
					class="rounded-full border border-green-500 px-4 py-1 text-sm text-green-500 transition hover:bg-green-500 hover:text-white"
				>
					Hardware
				</button>
				<button
					on:click={filterSoftware}
					class="rounded-full border border-green-500 px-4 py-1 text-sm text-green-500 transition hover:bg-green-500 hover:text-white"
				>
					Software
				</button>
				<button
					on:click={filterAll}
					class="rounded-full border border-gray-300 px-4 py-1 text-sm text-gray-500 transition hover:bg-gray-200"
				>
					None
				</button>
			</section>
		</div>

		<Wave x={700} y={100} z={20} />
	</aside>
	<!-- Grid Sections -->
	<section>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each filteredItems as x}
				<ProjectCard data={x} />
			{/each}
		</div>
	</section>
</main>
