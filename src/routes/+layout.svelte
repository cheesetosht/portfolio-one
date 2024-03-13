<script>
	import '@fontsource-variable/libre-franklin';
	import '../font.css';
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div class="transition-all duration-200 container">
	<div class="grid grid-cols-4 gap-x-5 lg:grid-cols-12">
		<Nav class="col-span-4 lg:col-span-2 lg:col-start-2" />
		<main
			id="content"
			class="relative col-span-4 col-start-1 lg:col-start-5 pt-2 lg:pt-24 pb-6 lg:col-span-6"
		>
			<slot />
		</main>
		<Footer class="lg:hidden col-span-4 col-start-1" />
	</div>
</div>
