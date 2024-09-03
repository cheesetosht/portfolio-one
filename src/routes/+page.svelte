<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Icon from '@iconify/svelte';
	import MatterAnimation from '../components/matter-animation.svelte';
</script>

<MetaTags title="cheesetosht" />
<!-- <Icon class="h-14 w-14 mb-8 rotate-45" icon="ic:baseline-bug-report" /> -->
<svg
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
	role="img"
	class="h-14 w-14 mb-8 rotate-45"
	width="1em"
	height="1em"
	viewBox="0 0 24 24"
	><path
		fill="currentColor"
		d="M20 8h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41L15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3L7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20zm-6 8h-4v-2h4zm0-4h-4v-2h4z"
	></path></svg
>
<div class="bg-ivory-900 rounded-lg h-60 mb-8"></div>
<MatterAnimation />
<h1 class="font-display font-bold text-xl group lg:text-3xl select-none cursor-default mb-4">
	i'm vraj, an engineer. <br />i like my tech crafted than built.
</h1>
<!-- <h1 class="font-display font-bold text-xl group lg:text-3xl select-none cursor-default mb-6">
	en<span class="inline-block transition duration-200 lg:-rotate-12 lg:group-hover:-rotate-0"
		>g</span
	>ineering
	<br class="xl:hidden" />
	unreason<span
		class="inline-block transition origin-left duration-200 lg:rotate-12 lg:group-hover:rotate-0"
		>a</span
	>blely
</h1> -->

<!-- <h4 class="font-semibold text-base font-display">currently:</h4> -->
<p class="text-sm mb-4">
	building and breaking frontends, backends & wifi at <a
		href="https://www.bluelearn.in/?utm_source=cheesetosht"
		target="_blank">bluelearn</a
	>.
</p>
<p class="text-sm mb-4">
	like to play around with linuxes, computer networks, frontends and databases.
</p>
<p class="text-sm mb-4">overengineering is my goto way of learning.</p>
<h5
	class="font-display font-bold group text-base lg:text-lg select-none cursor-default mb-1 text-gray-500"
>
	about this site
</h5>
<p class="text-sm mb-4">
	this site is built on <a href="https://kit.svelte.dev/">sveltekit</a> and
	<a href="https://tailwindcss.com/">tailwind</a>. the
	<a href="/photography">photography section</a>
	uses data from a small
	<a href="https://github.com/cheesetosht/go-scripts/blob/main/crawlers/main.go">golang script</a>
	i wrote to fetch all the photos I post on my <a href="https://vsco.co/cheesetosht">VSCO</a>.
</p>

<!-- TODO: hobbies section -->
