<script>
	let currentHover = 'experience';
	/**
	 * @param {string} x
	 */
	function changeHover(x) {
		currentHover = x;
	}

	let education = [
		{
			school: 'UC Santa Cruz',
			degree: 'Bachelor of Science in Computer Engineering',
			date: 'Expected Graduation: June 2026',
			description:
				'Focused on Digital System Design, Analog Electronics, VLSI Design, and AI agents.'
		},
		{
			school: 'Folsom High School',
			degree: 'High School Diploma',
			date: 'Graduated: June 2023',
			description:
				'Excelled in mathematics and science courses, led many student-run clubs and played tennis.'
		}
	];

	let experiences = [
		{
			title: 'CSE 101: DSA Group Tutor',
			company: 'UC Santa Cruz',
			date: 'Jan 2025 - present',
			description:
				'Provided one-on-one and group tutoring sessions in Data Structures and Algorithms (DSA) to students, helping them grasp key concepts and improve problem-solving skills. Created customized learning plans to address individual student needs and tracked progress to ensure continuous improvement. Fostered a deep understanding of algorithmic principles through hands-on exercises and real-world examples'
		},
		{
			title: 'Undergraduate Research Assistant',
			company: 'ConnectifyAI',
			date: 'Dec 2024 - Aug 2025',
			description:
				'Led and contributed to the design of the front-end for a full-stack web application using Svelte-Kit, Tailwind, and Typescript, enabling researchers to better document and standardize multi-model AI architectures. Also worked on methods to store and build upon these multi-model systems efficiently, fostering greater collaboration in research.'
		}
	];
</script>

<main class="flex w-full h-3/4 items-center">
	<!-- SelectorPart -->
	<div class="h-full w-1/2 flex flex-col items-center justify-center space-y-4 px-10">
		<h1 class="text-4xl font-bold">Why me?</h1>
		<h2 class=""> Use the selector to navigate my credentials and experience.</h2>
		<button class={currentHover == 'experience' ? 'underlined' : 'normal'} on:click={() => changeHover('experience')}>Experience</button>
		<button class={currentHover == 'education' ? 'underlined' : 'normal'} on:click={() => changeHover('education')}>Education</button>
		<button class={currentHover == 'skills' ? 'underlined' : 'normal'} on:click={() => changeHover('skills')}>Skills</button>
	</div>

	<!-- Conditional Display -->
	{#if currentHover === 'experience'}
		<!-- WorkExp Part -->
		<div class="mx-auto w-1/2 px-10 py-12">
			<div class="space-y-8">
				{#each experiences as experience}
					<div class="rounded-lg bg-lightGray p-6">
						<h3
							class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-xl font-bold text-transparent"
						>
							{experience.title}
						</h3>
						<p class="text-md">{experience.company}</p>
						<p class="text-md">{experience.date}</p>
						<p class="mt-3">{experience.description}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if currentHover === 'education'}
		<!-- EducationPart -->
		<div class="mx-auto w-1/2 px-6 py-12">
			<div class="space-y-8">
				{#each education as edu}
					<div class="rounded-lg bg-lightGray p-6">
						<h3
							class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-xl font-bold text-transparent"
						>
							{edu.degree}
						</h3>
						<p class="text-md">{edu.school}</p>
						<p class="text-md">{edu.date}</p>
						<p class="mt-3">{edu.description}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if currentHover === 'skills'}
		<!-- Skills Placeholder -->
		<div class="mx-auto w-1/2 px-6 py-12">
			<h2 class="mb-8 text-center text-3xl font-semibold">Skills</h2>
			<p class="text-center">Coming soon...</p>
		</div>
	{/if}
</main>

<style>
	.normal {
		@apply py-3 text-2xl w-full  rounded-lg bg-lightGray ;
	}

	.underlined {
		@apply py-3 text-2xl bg-gradient-to-r from-blue-500 to-green-500 w-full rounded-lg;
		transition: background-color 0.3s ease, transform 0.2s ease;
	}

	button {
		transition: transform 0.2s ease;
	}

	button:hover {
		transform: scale(1.05);
	}
</style>

