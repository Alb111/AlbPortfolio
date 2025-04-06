<!-- GOT THIS FROM CHATGPT -->
<script lang="ts">
	import type { NumericRange } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	export let x: number = 600;
	export let y: number = 200;
	export let z: number = 40;

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	const width = x;
	const height = y;

	let t = 0;
	let freq = 0.5; // Hz
	let amplitude = z;
	let speed = 1; // animation speed multiplier

	function drawSquareWave(time: number) {
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();
		ctx.moveTo(0, height / 2);

		const dt = 1 / 60;
		let x = 0;
		const period = 1 / freq;
		const halfPeriod = period / 2;
		let currentTime = time;

		while (x < width) {
			const y =
				Math.floor(currentTime / halfPeriod) % 2 === 0
					? height / 2 - amplitude
					: height / 2 + amplitude;

			ctx.lineTo(x, y);
			x += 5;
			currentTime += dt * 5 * speed;
		}

		ctx.strokeStyle = '#4ade80';
		ctx.lineWidth = 2;
		ctx.stroke();
	}

	function animate() {
		t += (1 / 60) * speed;
		drawSquareWave(t);
		requestAnimationFrame(animate);
	}

	onMount(() => {
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		animate();
	});
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<canvas bind:this={canvas} {width} {height} class="transparent-canvas" />

<style>
	.transparent-canvas {
		background: transparent;
		width: screen;
	}
</style>
