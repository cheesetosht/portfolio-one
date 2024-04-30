<script>
	// @ts-nocheck
	import '@fontsource/manrope';
	import '../font.css';
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import Icon from '@iconify/svelte';

	const MS_CLARITY_ID = import.meta.env.VITE_MS_CLARITY_ID;
	onMount(() => {
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', MS_CLARITY_ID);
	});
</script>

<MetaTags
	title="cheesetosht"
	titleTemplate="%s • cheesetosht"
	description="i'm vraj, an engineer. i like my tech crafted than built"
	openGraph={{
		title: 'cheesetosht',
		description: "i'm vraj, an engineer. i like my tech crafted than built",
		images: [{ url: '/images/og-img.webp' }]
	}}
	keywords={['cheesetosht', 'cheesetoast', 'vraj shah', 'cheese toast']}
/>
<div class="transition-all duration-200 container">
	<div class="grid grid-cols-4 items-start gap-x-5 lg:grid-cols-12">
		<Nav class="col-span-4 lg:col-span-2 lg:col-start-2" />
		<main
			id="content"
			class="relative col-span-4 col-start-1 lg:col-start-5 lg:pt-24 pb-6 lg:col-span-6"
		>
			<slot />
		</main>
		<Footer class="lg:hidden col-span-4 col-start-1" />
		<!-- <div
			class="col-span-4 col-start-1 lg:col-start-5 text-center lg:text-left text-gray-400 text-xs pb-4 lg:col-span-6"
		>
			built with <strong>svelte<Icon class="inline-block" icon="carbon:logo-svelte" /></strong>
		</div> -->
	</div>
</div>
