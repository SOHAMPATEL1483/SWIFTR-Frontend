<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	// export let data: PageData;
</script>

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
				<input class="input rounded-md" type="email" placeholder="email" name="email" />
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
				/>
			</label>
			<label class="state">
				<span>State</span>
				<input class="input rounded-md" type="text" placeholder="state" name="state" required />
			</label>
			<label class="City">
				<span>City</span>
				<input class="input rounded-md" type="text" placeholder="city" name="City" required />
			</label>
			<button type="submit" class="btn variant-filled-primary w-full">Signup</button>
		</form>
		<p class="mt-5">Already have an Account? <a href="/signin">Signin</a></p>
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
