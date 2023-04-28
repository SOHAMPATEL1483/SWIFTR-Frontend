<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	// export let data: PageData;
</script>

<div class="container h-full mx-auto flex justify-center items-center font-poppins">
	<div class="card w-1/4 p-5">
		<!-- heading -->
		<p class="text-center font-bold font-poppins text-4xl unstyled">Sign in</p>
		<!-- form -->
		<form action="?/signin" method="post" use:enhance>
			<label class="username my-5">
				<span>Username</span>
				<input
					class="input rounded-md"
					type="text"
					placeholder="Username"
					name="username"
					required
				/>
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
			<button type="submit" class="btn variant-filled-primary w-full">Signin</button>
		</form>
		<p class="mt-5">Don't have Account? <a href="/signup">Signup</a></p>
	</div>
</div>

<style>
	label {
		margin-top: 1.25rem /* 20px */;
		margin-bottom: 1.25rem /* 20px */;
	}
	input {
		margin-top: 0.5rem;
		padding: 5px;
	}
</style>
