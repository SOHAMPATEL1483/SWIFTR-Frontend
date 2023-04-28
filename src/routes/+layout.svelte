<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.css';
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	class="px-20 font-poppins"
>
	<svelte:fragment slot="lead">
		<a
			href="/"
			class="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white"
			>SWIFTR</a
		></svelte:fragment
	>
	<div class="flex gap-7 font-medium">
		<a href="/" class="hover:text-primary-500">Home</a>
		<a href="/" class="hover:text-primary-500">Search</a>
		<a href="/" class="hover:text-primary-500">About</a>
	</div>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<a href="/login" class="btn variant-filled-primary">Login</a>
	</svelte:fragment>
</AppBar>

<slot />
