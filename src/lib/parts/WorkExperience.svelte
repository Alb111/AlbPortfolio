<script>
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
				' Led and contributed to the design of the front-end for a full-stack web application using Svelte-Kit, Tailwind, and Typescript, enabling researchers to better document and standardize multi-model AI architectures Also worked on methods to store and build upon these multi-model systems efficiently, fostering greater collaboration in research.'
		}
	];
</script>

<div class="mx-auto max-w-4xl px-6 py-12">
	<h2 class="mb-8 text-center text-3xl font-semibold">Work Experience</h2>
	<div class="space-y-8">
		{#each experiences as experience}
			<div class="rounded-lg bg-lightGray p-6 shadow-md transition-all hover:shadow-xl">
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
