<script>
	import { navItems } from '$lib';
	import FloatingNavbar from '$lib/components/ui/FloatingNavbar.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import RecentProject from '$lib/components/RecentProject.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main
	class="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black px-5 sm:px-10"
>
	<div class="w-full max-w-7xl">
		<Hero />
		<FloatingNavbar className="" {navItems} />
		<Grid />
		<RecentProject />
		<Footer />
	</div>
</main>
