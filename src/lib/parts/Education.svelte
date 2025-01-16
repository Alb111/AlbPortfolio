<script>
	let education = [
		{
			school: "UC Santa Cruz",
			degree: "Bachelor of Science in Computer Engineering",
			date: "Expected Graduation: June 2026",
			description: "Focused on Ditial System Design, Analog Electronics, VLSI Design, and AI agents." 
		},
		{
			school: "Folsom High School",
			degree: "High School Diploma",
			date: "Graduated: June 2023",
			description: "Excelled in mathematics and science courses, led many student run clubs and played tennis."
		}
	];
</script>

<div class="mx-auto max-w-4xl px-6 py-12">
	<h2 class="mb-8 text-center text-3xl font-semibold">Education</h2>
	<div class="space-y-8">
		{#each education as edu}
			<div class="rounded-lg bg-lightGray p-6 shadow-md transition-all hover:shadow-xl">
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

