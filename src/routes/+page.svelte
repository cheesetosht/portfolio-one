<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Eyes from '../components/eyes.svelte';
	import './page.css';
</script>

<MetaTags title="cheesetosht" />

<main id="home_grid">
	<Eyes />
	<div
		id="logo"
		class="grid-box group relative flex flex-col justify-center items-center text-center bg-carmine-600 text-oasis-100 [&_h1]:text-4xl"
	>
		<div class="relative cursor-pointer">
			<h1>CHEESE</h1>
			<h1 style="letter-spacing: 0.16em; text-indent: 0.16em;">TOSHT</h1>
			<div
				class="absolute text-xs w-28 bg-oasis-100 text-carmine-600 rounded-full font-serif italic transition duration-300 -rotate-3 group-hover:-rotate-1 border border-carmine-600"
				style="top: 92%; left:24%; box-shadow: 0 0 0 2px #FFF2D3;"
			>
				product engineer
			</div>
		</div>
	</div>
	<div id="about" class="grid-box">
		<h2>quick facts</h2>
	</div>
	<div id="intro" class="grid-box"></div>
	<div id="projects" class="grid-box">
		<h2>projects</h2>
	</div>
	<div id="music" class="grid-box"></div>
	<div id="work" class="grid-box">
		<h2>work</h2>
	</div>
	<div id="blogs" class="grid-box"></div>
	<div id="socials" class="grid-box"></div>
	<div id="other" class="grid-box"></div>
</main>
