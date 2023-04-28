<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	// export let data: PageData;
	// const temp = async () => {
	// 	let res: Response = await fetch(`http://localhost:3000/`, {
	// 		method: 'GET',
	// 		credentials: 'include'
	// 	});
	// 	let data = await res.json();
	// 	console.log(data);
	// };
	const login = async () => {
		let data = { username: 'naineel7', password: 'naineel123' };
		let res: Response = await fetch(`http://localhost:5000/api/v1/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(data)
		});
		console.log(await res.json());
	};
	const checkcookie = async () => {
		let res: Response = await fetch(`http://localhost:5000/api/v1/getCart`, {
			method: 'GET',
			credentials: 'include'
		});
		let data = await res.json();
		console.log(data);
	};
	onMount(() => {
		// login();
		checkcookie();
	});
</script>

<h1>test route</h1>

<form action="?/testaction" method="post" use:enhance>
	<input class="btn variant-glass-primary" type="submit" value="submit" />
</form>
<form action="?/setcookie" method="post" use:enhance>
	<input class="btn variant-glass-primary" type="submit" value="setcookie" />
</form>
