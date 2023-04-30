<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	export let form: ActionData;
	//@ts-ignore
	$: if (form) toastStore.trigger({ message: form?.msg, background: 'variant-filled-error' });
</script>

<pre>
    {JSON.stringify(form, null, 4)}
</pre>
<div class="w-full mx-auto font-poppins my-16">
	<div class="card w-1/3 p-5 mx-auto">
		<!-- heading -->
		<p class="text-center font-bold font-poppins text-4xl unstyled">Sign up</p>
		<!-- form -->
		<form action="?/signup" method="post" use:enhance>
			<label class="username">
				<span>Username</span>
				<input
					class="input rounded-md"
					type="text"
					placeholder="Username"
					name="username"
					required
				/>
			</label>
			<label class="email">
				<span>Email</span>
				<input class="input rounded-md" type="email" placeholder="email" name="email" required />
			</label>
			<label class="Password">
				<span>Password</span>
				<input
					class="input rounded-md"
					type="password"
					placeholder="Password"
					name="password"
					required
				/>
			</label>
			<label class="Phone No.">
				<span>Phone No.</span>
				<input
					class="input rounded-md"
					type="number"
					placeholder="Phone No."
					name="phone"
					required
				/>
			</label>
			<label class="address">
				<span>Address</span>
				<textarea
					class="textarea"
					rows="2"
					placeholder="Enter your full address here"
					name="address"
					required
				/>
			</label>
			<label for="roles" class="flex gap-5">
				<span class="my-auto">Role:</span>
				<select class="select" name="roles">
					<option value="user">User</option>
					<option value="provider">Provider</option>
				</select>
			</label>
			<label class="state">
				<span>State</span>
				<input class="input rounded-md" type="text" placeholder="state" name="state" required />
			</label>
			<label class="city">
				<span>City</span>
				<input class="input rounded-md" type="text" placeholder="city" name="city" required />
			</label>
			<button type="submit" class="btn variant-filled-primary w-full">Signup</button>
		</form>
		<p class="mt-5">Already have an Account? <a href="/login">Signin</a></p>
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
