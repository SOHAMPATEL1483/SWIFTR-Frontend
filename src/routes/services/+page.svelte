<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import ServiceCard from '$lib/service_card.svelte';

	export let data: PageData;
</script>

<div class="font-poppins flex flex-wrap justify-center">
	{#each data.services as service}
		<ServiceCard {service} />
	{/each}
</div>

<pre>
    {JSON.stringify(data, null, 4)}
</pre>
