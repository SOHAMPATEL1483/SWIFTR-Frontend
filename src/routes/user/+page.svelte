<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex gap-28 mx-auto w-fit my-20 font-poppins">
	<div class="my-auto">
		<Avatar initials={data.user.username} width="w-20" />
	</div>
	<div class="my-auto">
		<p class="unstyled text-3xl font-bold">{data.user.username}</p>
		<p class="dark:text-slate-300">{data.user.roles}</p>
		{#if data.user.roles == 'provider'}
			<button class="btn variant-filled-primary my-5">Add Service</button>
		{/if}
	</div>
</div>

<pre>
    {JSON.stringify(data, null, 4)}
</pre>
