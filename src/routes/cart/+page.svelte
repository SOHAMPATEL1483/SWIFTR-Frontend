<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import API_URL from '../../stores/store';
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	export let data: PageData;
	export let form: ActionData;
	//@ts-ignore
	$: if (form) toastStore.trigger({ message: form?.msg });

	const checkout = async () => {
		let res: Response = await fetch(`${API_URL}/api/v1/stripe/checkout/`, {
			method: 'POST',
			credentials: 'include',
			redirect: 'follow'
		});
		let data = await res.json();
		console.log(data.url);
		window.location = data.url;
	};
</script>

<div class="flex mx-5 mt-5 font-poppins justify-between">
	<p class="unstyled my-auto text-xl font-bold dark:text-slate-300">Your Cart</p>
	<button class="btn variant-filled-primary" on:click={checkout}>Checkout</button>
</div>
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
		<p class="unstyled text-xl mt-16 mx-auto">No items in Cart</p>
	{/each}
</div>

<!-- <pre>
    {JSON.stringify(data, null, 4)}
</pre> -->
