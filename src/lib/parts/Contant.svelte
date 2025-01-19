
<script>
  let name = "";
  let email = "";
  let message = "";
  $: prefilledLink ="https://docs.google.com/forms/d/e/1FAIpQLScA2h7K9RGP_Tkt1NJAIRqkWUC2LlEpRWL5GUnfr-0a6fb48g/formResponse?usp=pp_url&entry.777116445=" + name + "&entry.267190402=" + email + "&entry.1466495126="+ message + "&submit=Submit"
</script>


<div class="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
  <form class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        bind:value="{name}"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="name@email.com"
        bind:value="{email}"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700">
        Message
      </label>
      <input
        type="text"
        id="message"
        placeholder="Reason for contact"
        bind:value="{message}"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
      />
    </div>

    <div class="pt-4">
      <a
        href="{prefilledLink}"
        target="_blank"
        class="inline-block w-full text-center py-2 px-4 rounded-md bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </a>
    </div>
  </form>
</div>
