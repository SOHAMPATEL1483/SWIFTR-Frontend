<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
	// https://res.cloudinary.com/dnteevm9m/image/upload/v1682842511/swiftr/testing/m6ch0bqzgjte47pw8rqf.png
</script>

<div class="flex gap-28 mx-auto w-fit my-20 font-poppins">
	<div class="my-auto">
		<Avatar initials={data.user.username} width="w-20" />
	</div>
	<div class="my-auto">
		<p class="unstyled text-3xl font-bold">{data.user.username}</p>
		<p class="dark:text-slate-300">{data.user.roles}</p>
		{#if data.user.roles != 'user'}
			<a href="/services/add" class="btn variant-filled-primary my-5">Add Service</a>
		{/if}
	</div>
</div>
<p class="unstyled my-auto text-xl font-bold dark:text-surface-400 font-poppins ml-5">
	Your Orders:
</p>

<div class=" font-poppins flex flex-wrap">
	{#each data.orders as order}
		<div class="card card-hover w-[46%] p-5 m-5 font-poppins divide-y-2 divide-surface-700">
			<div class="pb-3">
				<p class="unstyled text-xl font-bold mb-3">ORDER ID: {order._id}</p>
				<div class="flex divide-x-2 divide-slate-500">
					<p class="mr-6">
						Order date: {new Date(order.createdAt).toLocaleDateString()}
					</p>
					<p class="text-primary-500 pl-6">
						Estimated Delivery: {new Date(order.deliver_date).toLocaleDateString()}
					</p>
				</div>
			</div>
			{#each order.orderItems as curr}
				<div class="py-3 flex justify-between">
					<div class="flex">
						<img src={curr.image} alt="" class="object-contain w-16" />
						<p class="unstyled my-auto text-md font-semibold ml-5">{curr.name}</p>
					</div>
					<div class="mr-3">
						<p class="unstyled text-lg font-semibold">₹{curr.price}</p>
						<p>Qty: {curr.qty}</p>
					</div>
				</div>
			{/each}
			<div class="flex justify-between py-4">
				<div>
					<p class="unstyled font-semibold text-center">Delivery</p>
					<p>{order.address}</p>
				</div>
				<div class="w-1/2">
					<p class="unstyled font-semibold text-center">Order Summary</p>
					<div class="flex justify-between my-2">
						<p>Summary</p>
						<p>₹{order.subtotal}</p>
					</div>
					<div class="flex justify-between my-2">
						<p>Delivery</p>
						<p>₹0</p>
					</div>
					<hr />
					<div class="flex justify-between my-2">
						<p>Total</p>
						<p>₹{order.total}</p>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
<!-- <pre>
    {JSON.stringify(data, null, 4)}
</pre> -->
