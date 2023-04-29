<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	/**
	 * @type {{ name: any; _id:any;description: any; price: any; avgRating: any; noOfReviews: any; user: { username: any; }; createdAt: any; }}
	 */
	export let service;
	if (!service.user) {
		service.user = { username: '---' };
	}
	console.log(service);
</script>

<a class="unstyled" href={'/services/' + service['_id']}>
	<div class="card card-hover max-w-[320px] p-5 m-5 divide-y-2 divide-slate-600">
		<div class="mb-3">
			<p class="unstyled text-xl font-semibold text-center mb-5">{service.name}</p>
			<p class="unstyled italic text-sm">
				{service.description}
			</p>
			<p class="unstyled text-xl font-semibold my-2">₹{service.price}</p>
			<p>⭐{service.avgRating} ({service.noOfReviews})</p>
		</div>
		<div class="flex justify-between pt-4">
			<div class="flex">
				<Avatar initials={service.user?.username} width="w-10" />
				<p class="my-auto ml-2">{service.user.username}</p>
			</div>
			<p class="my-auto">On {new Date(service.createdAt).toLocaleDateString()}</p>
		</div>
	</div>
</a>
