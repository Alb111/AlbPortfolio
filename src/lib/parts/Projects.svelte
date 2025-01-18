<script>
	let slideIndex = 1;
	let projects = [
		{
			projectName: 'Pomato',
			githubUrl: 'https://github.com/Alb111/Pomato_V1',
			description: `Pomato | Svelte Kit, Supabase, Tailwind-CSS, Typescript, Skeleton UI (Sept 2024 – Present)<br>
• Developing a full-stack web application using Supabase and Svelte-Kit to help users implement the Pomodoro technique for more efficient task completion.<br>
• Implementing OAuth to securely store user study sessions and track progress.<br>
• Creating features to display past user data, study sessions, and completed tasks, providing progress tracking and motivation.`
		},
		{
			projectName: 'Slug Assistant *Cruz Hacks Winner*',
			githubUrl: 'https://github.com/Sluggish-Solutions/Slug-Mommy',
			description: `Slug Assistant *Cruz Hacks Winner* | Svelte Kit, Supabase, Tailwind-CSS, Typescript, Skeleton UI (Feb 2024)<br>
• Lead front-end development to create a school mascot-themed AI assistant to help incoming college students better handle their daily schedules and responsibilities.<br>
• Effectively implemented OpenAI’s API and simple prompting to facilitate a welcoming tone of communication.<br>
• Repo: https://github.com/Sluggish-Solutions/Slug-Mommy<br>
• Devpost: https://devpost.com/software/slug-mommy`
		},
		{
			projectName: 'Stop it Game',
			githubUrl: 'Can be shown on request currently private for academic purposes.',
			description: `Stop It Game | Verilog, FPGA, Verible, Vivado (July 2024)<br>
• Developed a real-time timing game, Stop It, on an FPGA using Verilog, involving precise timing and control logic.<br>
• Implemented digital logic circuits to handle game state, timing, score, and user input for start/stop functionality on an LED display and a set of score LEDs.<br>
• Tested and debugged the system on FPGA hardware, ensuring reliable timing precision and responsive gameplay.`
		},
		{
			projectName: 'CLI-based Hangman',
			githubUrl: 'Can be shown on request currently private for academic purposes.',
			description: `CLI-based Hangman | C (May 2024)<br>
• Developed a command-line interface (CLI) based Hangman game with ASCII art, providing a visually engaging user experience.<br>
• Implemented game logic for word selection, tracking player guesses, and managing game states such as wins/losses.<br>
• Created a robust input validation system to handle incorrect guesses and provide real-time feedback.`
		}
	];

	function plusSlides(n) {
		slideIndex = ((slideIndex + n - 1 + projects.length) % projects.length) + 1;
	}

	function currentSlide(n) {
		slideIndex = n;
	}
</script>


<div class="max-w-screen px-10">
	<div class="w-full">
		{#each projects as project, index}
			<div class={`mySlides fade ${index + 1 === slideIndex ? 'block' : 'hidden'}`}>
				<div class="h-52 rounded-lg bg-lightGray p-6">
					<h3
						class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-xl font-bold text-transparent"
					>
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
			class=" rounded-r bg-black bg-opacity-50 px-4 py-2 text-lg font-bold text-white hover:bg-opacity-70"
			on:click={() => plusSlides(-1)}
		>
			←
		</button>
		<button
			class="rounded-l bg-black bg-opacity-50 px-4 py-2 text-lg font-bold text-white hover:bg-opacity-70"
			on:click={() => plusSlides(1)}
		>
			→
		</button>
	</div>
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
