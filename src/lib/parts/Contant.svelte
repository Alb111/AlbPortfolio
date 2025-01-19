<script>
	let name = '';
	let email = '';
	let message = '';
	$: prefilledLink =
		'https://docs.google.com/forms/d/e/1FAIpQLScA2h7K9RGP_Tkt1NJAIRqkWUC2LlEpRWL5GUnfr-0a6fb48g/formResponse?usp=pp_url&entry.777116445=' +
		name +
		'&entry.267190402=' +
		email +
		'&entry.1466495126=' +
		message +
		'&submit=Submit';
</script>

<h1 class="py-5 text-4xl font-bold text-white">Contact Me</h1>
<div class="h-1/2 flex justify-center items-center">
	<div class="mx-auto w-3/4 rounded-lg bg-lightGray p-6 shadow-lg">
		<form class="space-y-4">
			<div>
				<label for="name" class="text-md block font-medium text-white"> Name </label>
				<input
					type="text"
					id="name"
					placeholder="Enter your name"
					bind:value={name}
					class="mt-1 block w-full rounded-md border-white text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div>
				<label for="email" class="text-md block font-medium text-white"> Email </label>
				<input
					type="email"
					id="email"
					placeholder="name@email.com"
					bind:value={email}
					class="mt-1 block w-full rounded-md border-white text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div>
				<label for="message" class="text-md block font-medium text-white"> Message </label>
				<input
					type="text"
					id="message"
					placeholder="Reason for contact"
					bind:value={message}
					class="mt-1 block w-full rounded-md border-white text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div class="pt-4">
				<a
					href={prefilledLink}
					target="_blank"
					class="inline-block w-full rounded-md border border-white from-blue-500 to-green-500 px-4 py-2 text-center font-medium text-white shadow-md hover:bg-gradient-to-r"
				>
					Submit
				</a>
			</div>
		</form>
	</div>
</div>
