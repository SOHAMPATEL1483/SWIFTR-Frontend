<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
</script>

<div class=" font-poppins flex flex-wrap">
	{#each data.data as item}
		<div class="card card-hover max-w-[320px] p-5 m-5 divide-y-2 divide-slate-600">
			<div class="mb-3">
				<a class="unstyled" href={'/services/' + item.services['_id']}>
					<p class="unstyled text-xl font-semibold text-center mb-5">{item.services.name}</p>
					<p class="unstyled italic text-sm">
						{item.services.description}
					</p>
					<p class="unstyled text-xl font-semibold my-2">₹{item.services.price}</p>
					<p>⭐{item.services.avgRating} ({item.services.noOfReviews})</p>
					<p class="my-2">On {new Date(item.services.createdAt).toLocaleDateString()}</p>
				</a>
			</div>
			<div class="flex justify-between pt-4">
				<p class="my-auto">Quantity : {item.quantity}</p>
				<form action="?/removeItem" method="post" use:enhance>
					<input type="hidden" name="id" value={item.services._id} />
					<button type="submit" class="btn variant-filled-error rounded-lg font-poppins"
						>Remove</button
					>
				</form>
			</div>
		</div>
	{:else}
		<p>No items in Cart</p>
	{/each}
</div>

<pre>
    {JSON.stringify(data, null, 4)}
</pre>
