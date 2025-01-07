<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { Download, Linkedin, GithubIcon } from 'lucide-svelte';
</script>

<section class="flex w-full flex-col md:flex-row">
	<div class="flex w-full flex-col items-center justify-center p-10 md:w-1/2">
		<h1 class="text-4xl font-bold md:text-7xl">Hello, Im</h1>
		<Typewriter cursor={false} interval={50} mode="cascade">
			<h1
				class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent md:text-7xl"
			>
				Albert Felix
			</h1>
		</Typewriter>
		<p class=" py-10 text-center text-sm md:text-xl">
			I am an aspiring hardware engineer, with interests in ASIC design, AI, FPGAs, and Digital
			System Design. I also enjoy learning about low-level software development and computer
			architecture.
		</p>
		<div class="flex space-x-4">
			<!-- Download CV Button -->
			<button
				class="border-gradient-to-r flex rounded-full border-2 from-blue-500 to-green-500 px-5 py-2 text-xl text-white transition duration-300 hover:bg-gradient-to-l"
			>
				Download CV
				<Download class="ml-2" />
			</button>
			<!-- Socail Media Links -->
			<button
				class="border-gradient-to-r flex rounded-full border-2 from-blue-500 to-green-500 px-5 py-2 text-xl text-white transition duration-300 hover:bg-gradient-to-l"
			>
				<Linkedin />
			</button>
			<button
				class="border-gradient-to-r flex rounded-full border-2 from-blue-500 to-green-500 px-5 py-2 text-xl text-white transition duration-300 hover:bg-gradient-to-l"
			>
				<GithubIcon />
			</button>
		</div>
	</div>
	<div class="flex w-full h-full justify-center p-10 md:w-1/2">
		<img class="rounded-xl" src="image.png" alt="akdjfalkdsjf;lk" />
	</div>
</section>
