<script lang="ts">
    import Typewriter from 'svelte-typewriter'
</script>


<main class="">
	<section class="flex w-full flex-col sm:flex-row">
		<div class="flex w-full flex-col items-center justify-center p-10 sm:w-1/2">
 				<h1 class="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent sm:text-7xl"
					>Hello, Im
				</h1>
	           <Typewriter cursor={false} interval={50} mode=cascade>
			<h1 class="text-4xl font-bold text-white sm:text-7xl">
			Albert Felix
			</h1>
</Typewriter>
			<p class="py-10 text-center text-xl">
				Im an apsiring hardware engineer, which intrests in ASIC design, AI, FGPAs, and Ditigal
				System Design.
			</p>
			<div class="flex space-x-4">
				<!-- Hire Me Button -->
				<button
					class="border-gradient-to-r rounded-full border-2 from-blue-500 to-green-500 px-6 py-2 text-white transition duration-300 hover:bg-gradient-to-l "
				>
					Hire Me
				</button>

				<!-- Download CV Button -->
				<button
					class="border-gradient-to-r rounded-full border-2 from-blue-500 to-green-500 px-6 py-2 text-white transition duration-300 hover:bg-gradient-to-l "
				>
					Download CV
				</button>
			</div>
		</div>
		<div class="flex w-full justify-center p-10 sm:w-1/2">
			<img class="rounded-xl" src="image.png" alt="akdjfalkdsjf;lk" />
		</div>
	</section>
</main>
