<script>
	import Wave from './Wave.svelte';
	let currentHover = 'experience';
	/**
	 * @param {string} x
	 */
	function changeHover(x) {
		currentHover = x;
	}

	const skills = [
		{
			category: 'Languages',
			items: ['Java', 'Python', 'C/C++', 'JavaScript', 'HTML/CSS', 'Verilog', 'Bash']
		},
		{
			category: 'Frameworks',
			items: ['Node.js', 'Svelte-Kit', 'PyTorch (learning)']
		},
		{
			category: 'Developer Tools',
			items: ['Git', 'VS Code', 'Vim-motions', 'Linux']
		},
		{
			category: 'Libraries',
			items: ['pandas (learning)', 'NumPy (learning)']
		}
	];

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

<div class="h-screen flex-col items-center justify-center pt-10">
	<div class="w-full px-10 py-8">
		<main class="grid grid-cols-1 gap-5 sm:grid-cols-3">
			<!-- education section -->
			<section class="col-span-1">
				<header class="pb-5 pl-8 font-mono text-green-500">
					<h2 class="text-2xl font-bold">Education</h2>
				</header>
				<div class="h-full border-l-2 border-green-500 pl-8 pr-8">
					{#each education as edu}
						<div
							class="duration-400 mb-6 cursor-pointer border border-gray-200 bg-white p-5 transition-all hover:border-transparent hover:shadow-lg"
						>
							<h4 class="text-green-500">{edu.date}</h4>
							<h3 class="py-2 text-xl text-gray-700">{edu.degree}</h3>
							<p class="text-gray-500">{edu.school}</p>
							<p class="text-gray-500">{edu.description}</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- experience section (wider) -->
			<section class="col-span-1 sm:col-span-2">
				<header class="pb-5 pl-8 font-mono text-green-500">
					<h2 class="text-2xl font-bold">Experience</h2>
				</header>
<div class="grid h-full grid-cols-1 md:grid-cols-2 gap-5 border-l-2 border-green-500 pl-8 pr-8">
					{#each experiences as exp}
						<div
							class="duration-400 mb-6 flex cursor-pointer flex-col items-center justify-center border border-gray-200 bg-white p-5 transition-all hover:border-transparent hover:shadow-lg"
						>
							<h4 class="text-green-500">{exp.date}</h4>
							<h3 class="py-2 text-xl text-gray-700">{exp.title}</h3>
							<p class="text-gray-500">{exp.company}</p>
							<p class="text-gray-500">{exp.description}</p>
						</div>
					{/each}
				</div>
			</section>
		</main>
	</div>
	<Wave x={2000} />
</div>
