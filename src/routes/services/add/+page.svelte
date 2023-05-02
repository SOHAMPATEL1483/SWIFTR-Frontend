<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	// export let form: ActionData;
	//@ts-ignore
	// $: if (form) toastStore.trigger({ message: form?.msg, background: 'variant-filled-error' });
</script>

<div class="w-full mx-auto font-poppins my-16">
	<div class="card w-1/3 p-5 mx-auto">
		<!-- heading -->
		<p class="text-center font-bold font-poppins text-4xl unstyled">Add New Service</p>
		<!-- form -->
		<form action="?/AddService" method="post" use:enhance>
			<label class="name">
				<span>Name</span>
				<input class="input rounded-md" type="text" placeholder="name" name="name" required />
			</label>
			<label class="description">
				<span>Description</span>
				<textarea
					class="textarea"
					rows="2"
					placeholder="Enter description for your service"
					name="description"
					required
				/>
			</label>
			<label class="category">
				<span>Category</span>
				<input
					class="input rounded-md"
					type="text"
					placeholder="category"
					name="category"
					required
				/>
			</label>
			<label class="price">
				<span>price</span>
				<input class="input rounded-md" type="number" placeholder="price" name="price" required />
			</label>
			<label class="image">
				<span>Image</span>
				<input class="input rounded-md" name="image" type="file" />
			</label>
			<input type="hidden" name="avgRating" value={0} />
			<input type="hidden" name="noOfReviews" value={0} />
			<input type="hidden" name="createdAt" value={new Date().toISOString()} />
			<input type="hidden" name="updatedAt" value={new Date().toISOString()} />

			<button type="submit" class="btn variant-filled-primary w-full">Create Service</button>
		</form>
	</div>
</div>

<style>
	label {
		margin-top: 0.75rem /* 20px */;
		margin-bottom: 0.75rem /* 20px */;
	}
	input,
	textarea {
		margin-top: 0.5rem;
		padding: 5px;
	}
</style>
