<script lang="ts">
	export let data: any;
</script>

<div
	class="mb-4 cursor-pointer rounded-lg border border-gray-200 bg-white p-3 transition-all duration-300 hover:border-transparent hover:shadow-md"
>
	<h4 class="pb-1 text-lg font-medium text-gray-700">{data.projectName}</h4>

	<h3 class="break-all text-sm text-green-500">
		{data.opensource ? data.githubUrl : 'source code private for academic purposes'}
	</h3>

	<div class="py-1">
		<h4 class="text-sm font-semibold text-gray-500">Skills:</h4>
		<div class="flex justify-center gap-1 pt-1">
			{#each data.skills as skill}
				<p class="flex items-center rounded-xl border border-green-500 px-2 py-0.5 text-xs text-green-500">{skill}</p>
			{/each}
		</div>
	</div>

	<div class="pt-2">
		<h4 class="text-sm font-semibold text-gray-500">Description:</h4>
		<div class="mt-1 space-y-1">
			{#each data.description as bulletpoint}
				<p class="text-sm text-gray-500">{bulletpoint}</p>
			{/each}
		</div>
	</div>
</div>
