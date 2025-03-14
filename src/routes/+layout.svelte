<script>
	import '@fontsource/barlow';
	import '@fontsource/karla';
	import '@fontsource/karla/500';
	import '../app.css';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="cheesetosht"
	titleTemplate="%s • cheesetosht"
	description="hey, i'm vraj! a generalist product engineer based out of India"
	openGraph={{
		title: 'cheesetosht',
		description: "hey, i'm vraj! a generalist product engineer based out of India"
	}}
	keywords={['cheesetosht', 'cheesetoast', 'vraj shah', 'cheese toast']}
/>
<div class="transition-all duration-200 max-w-screen-md mx-auto">
	<slot />
</div>
