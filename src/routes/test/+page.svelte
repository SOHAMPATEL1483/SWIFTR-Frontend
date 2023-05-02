<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	const img = async () => {
		const fileInput = document.querySelector('#in');
		const formData = new FormData();
		// @ts-ignore
		formData.append('image', fileInput?.files[0]);

		let res: Response = await fetch('http://localhost:5000/api/v1/uploadImage/', {
			method: 'POST',
			body: formData,
			credentials: 'include'
		});
		console.log(await res.json());
	};
</script>

<input type="file" id="in" />
<button on:click={img}>click me</button>

<form action="http://localhost:5000/api/v1/uploadImage" method="POST" enctype="multipart/form">
	<input type="submit" value="submit" />
</form>
