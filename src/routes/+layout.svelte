<script>
	import '@fontsource/manrope';
	import '../font.css';
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<title>cheesetosht</title>
	<meta name="description" content="unreasonable engineer" />
	<meta name="og:title" content="cheesetosht" />
	<meta name="og:description" content="unreasonable engineer" />
	<meta name="og:url" content="cheesetosht.xyz" />
	<meta property="og:type" content="website" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
<div class="transition-all duration-200 container">
	<div class="grid grid-cols-4 gap-x-5 lg:grid-cols-12">
		<Nav class="col-span-4 lg:col-span-2 lg:col-start-2" />
		<main
			id="content"
			class="relative col-span-4 col-start-1 lg:col-start-5 pt-6 lg:pt-24 pb-6 lg:col-span-6"
		>
			<slot />
		</main>
		<Footer class="lg:hidden col-span-4 col-start-1" />
	</div>
</div>
