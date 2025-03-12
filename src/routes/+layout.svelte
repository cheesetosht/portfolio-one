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
	description="i'm vraj, an engineer. i like my tech crafted than built"
	openGraph={{
		title: 'cheesetosht',
		description: "i'm vraj, an engineer. i like my tech crafted than built."
	}}
	keywords={['cheesetosht', 'cheesetoast', 'vraj shah', 'cheese toast']}
/>
<div class="transition-all duration-200 max-w-screen-md mx-auto">
	<slot />
</div>
