<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<pre>
	{JSON.stringify(data.user)}
</pre>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1>Let's get cracking bones!</h1>
		<p>Start by exploring:</p>
		<ul>
			<li>
				<code>/src/routes/+layout.svelte</code> - barebones layout, the CSS import order is critical!
			</li>
			<li>
				<code>/src/app.postcss</code> - minimal css to make the page full screen, may not be relevant
				for your project
			</li>
			<li><code>/src/routes/+page.svelte</code> - this page, you can replace the contents</li>
		</ul>
		<!-- <div class="card p-5"> -->
		<label class="label">
			<span>Input</span>
			<input class="input rounded-md" type="text" placeholder="Input" />
		</label>

		<label class="label">
			<span>Select</span>
			<select class="select">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
				<option value="4">Option 4</option>
				<option value="5">Option 5</option>
			</select>
		</label>
		<button class="btn variant-filled-secondary">Button</button>
	</div>
	<!-- </div> -->
</div>

<div class="card max-w-fit">
	<header class="card-header">(header)</header>
	<section class="p-4">(content)</section>
	<footer class="card-footer">(footer)</footer>
</div>

<Avatar initials="JD" background="bg-primary-500" />
