<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { navigating } from '$app/stores';

	export let data: PageData;
	export let form: ActionData;
	//@ts-ignore
	$: if (form) toastStore.trigger({ message: form?.msg });
	if (!data.service.user) {
		data.service.user = { username: '---' };
	}
</script>

<div class="flex gap-28 mx-auto w-fit my-20 font-poppins">
	<div class="my-auto w-1/2">
		<img src={data.service.image} alt="" class="object-contain w-full rounded-md" />
	</div>
	<div class="my-auto">
		<p class="unstyled text-3xl font-semibold text-center mb-5">{data.service.name}</p>
		<p class="unstyled italic">
			{data.service.description}
		</p>
		<p class="unstyled text-3xl font-bold my-4">₹{data.service.price}</p>
		<p class="unstyled">
			<span class="bg-green-700 p-1 rounded-md mr-2">⭐{data.service.avgRating} </span>
			{data.service.noOfReviews} Ratings
		</p>
		<div>
			<p class="my-4">On {new Date(data.service.createdAt).toLocaleDateString()}</p>
		</div>
		<div class="flex my-2">
			<p class="my-auto mr-6">Offered by :</p>
			<Avatar initials={data.service.user?.username} width="w-10" />
			<p class="my-auto ml-2">{data.service.user.username}</p>
		</div>
		<div class="flex gap-6 my-4">
			<form action="" method="post" use:enhance>
				<button type="submit" class="btn btn-lg variant-filled-primary">Place Order</button>
			</form>
			<form action="?/AddCartItem" method="post" use:enhance>
				<button type="submit" class="btn btn-lg variant-soft-secondary">Add to Cart</button>
			</form>
			{#if data.user._id === data.service.user._id || data.user.roles === 'admin'}
				<form action="?/RemoveService" method="post" use:enhance>
					<button type="submit" class="btn btn-lg variant-filled-error">Remove Service</button>
				</form>
			{/if}
		</div>
	</div>
</div>
<div class="font-poppins max-w-6xl mx-auto">
	<form action="?/PostReview" method="post" use:enhance>
		<p class="unstyled text-3xl font-bold my-5">Reviews</p>
		<input type="hidden" name="services" value={data.slug} />
		<textarea class="textarea p-3" rows="4" placeholder="Write your review here" name="review" />

		<label for="roles" class="flex gap-5">
			<span class="my-auto">Rating:</span>
			<select class="select w-16 p-2" name="rating">
				<option value="1"> 1⭐</option>
				<option value="2"> 2⭐</option>
				<option value="3"> 3⭐</option>
				<option value="4"> 4⭐</option>
				<option value="5"> 5⭐</option>
			</select>
		</label>
		<button type="submit" class="btn variant-filled-secondary my-5">Post Comment</button>
	</form>
	{#each data.service.reviews as review}
		<div class="card p-5 my-4">
			<div class="flex gap-3 mb-4">
				<Avatar initials={review.user} width="w-8" />
				<p class="my-auto">{review.user}</p>
				<p class="my-auto dark:text-slate-400">
					{new Date(review.createdAt).toLocaleDateString()}
				</p>
			</div>
			<p class="unstyled dark:text-slate-300">
				<span class="bg-green-700 p-1 rounded-md mr-2">⭐{review.rating} </span>
				{review.review}
			</p>
		</div>
	{:else}
		<p class="mb-16">No reviews on this service</p>
	{/each}
</div>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>
