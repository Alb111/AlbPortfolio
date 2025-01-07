<script lang="ts">
	let x: number = 0;
	function underline(y: number) {
		x = y;
	}
</script>

<div
	class="sticky top-2 m-2 flex items-baseline justify-between rounded-xl bg-darkGray py-5 outline"
>
	<h1 class="ml-10 text-3xl">
		Albert<span
			class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent"
			>.</span
		>
	</h1>
	<nav class="mr-10">
		<button class={x == 0 ? 'underlined' : 'normal'} on:click={() => underline(0)}>Home</button>
		<button class={x == 1 ? 'underlined' : 'normal'} on:click={() => underline(1)}>Experience</button>
		<button class={x == 2 ? 'underlined' : 'normal'} on:click={() => underline(2)}>Projects</button>
		<button class={x == 3 ? 'underlined' : 'normal'} on:click={() => underline(3)}>Resume</button>
		<button class={x == 4 ? 'underlined' : 'normal'} on:click={() => underline(4)}>Contact</button>
	</nav>
</div>

<style>
	.normal {
		@apply px-3 text-2xl;
	}
	.underlined {
		@apply px-3 text-2xl underline;
	}
</style>
