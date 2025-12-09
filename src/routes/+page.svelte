<script>
	import { onMount } from 'svelte';
	import { EXPERIENCE, TOOLS } from '$lib/constants';
	import Icon from '@iconify/svelte';
	import Eyes from '../components/eyes.svelte';

	let isDark = false;

	onMount(() => {
		// Check for saved preference or system preference
		const savedTheme = localStorage.getItem('theme');
		// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		isDark = savedTheme === 'dark';
		// || (!savedTheme && prefersDark);
		updateTheme();
	});

	function updateTheme() {
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	function toggleDark() {
		isDark = !isDark;
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
		updateTheme();
	}
</script>

<header class="relative border-b border-border border-dashed py-6 sm:py-8 px-4 sm:px-6">
	<div class="flex items-start gap-2">
		<div class="pl-1 sm:pl-2 py-4 sm:py-6 flex-1 flex items-center gap-3">
			<Eyes />
			<span class="hint-fade text-2xs text-muted-fg italic sm:hidden">tap anywhere to move</span>
		</div>
		<button
			on:click={toggleDark}
			class="rounded-full border border-border p-1.5 hover:bg-border/20"
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{#if isDark}
				<Icon icon="fluent:weather-sunny-32-regular" class="size-3 text-muted-fg" />
			{:else}
				<Icon icon="fluent:weather-moon-32-regular" class="size-3 text-muted-fg" />
			{/if}
		</button>
	</div>
	<div class="flex justify-between items-start mb-2">
		<h1
			class="select-none cursor-default text-2xl sm:text-4xl font-semibold tracking-wide leading-none"
		>
			vraj shah
		</h1>
		<p class="text-right text-2xs sm:text-xs leading-normal text-muted-fg font-mono">
			(bengaluru, india)
			<br />
			<!-- local indian time -->
			<span class="uppercase text-2xs sm:text-xs text-muted-fg font-mono">
				<Icon icon="fluent:clock-12-regular" class="size-3 -mr-0.5 mb-0.5 inline-block" />
				{new Date().toLocaleString('en-IN', {
					timeZone: 'Asia/Kolkata',
					hour: '2-digit',
					minute: '2-digit'
				})}
			</span>
		</p>
	</div>
	<p class="cursor-default sm:text-lg select-none text-fg-secondary">
		i craft soulful products, fast.
	</p>
</header>
<main class="space-y-4 sm:space-y-6 py-6 sm:py-8 px-4 sm:px-6">
	<section>
		<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-1 sm:mb-2">
			what i do
		</h2>
		<p class="text-fg-secondary">
			i'm currently a software engineer at <a href="https://www.induced.ai" target="_blank"
				>induced.ai</a
			>, building ai-powered products for high-stakes industries. i build frontends, architect
			backends, configure databases, and deploy infrastructure at intense speeds. craft is the only
			thing consistent about my work.
		</p>
	</section>
	<section>
		<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-1 sm:mb-2">
			background
		</h2>
		<div class="space-y-2 sm:space-y-3">
			<p class="text-fg-secondary">
				i started my career as one of the first engineers at <a
					href="https://web.archive.org/web/20250117144119/https://www.bluelearn.in/"
					target="_blank">bluelearn</a
				>, where i built the entire platform from scratch - infrastructure, APIs, frontends, and
				everything in between. grew and led a team of 4 engineers, learning management the hard way:
				hiring, firing, mentoring, and running way too many interviews. it was the perfect place for
				a generalist: i got to deploy to prod from day one, architect systems handling 500k+ users,
				and ship (then scrap, then rebuild) several products in rapid succession.
			</p>
			<p class="text-fg-secondary">
				after bluelearn shut down, i joined <a href="https://www.loophealth.com" target="_blank"
					>loop health</a
				>, a series-b healthtech with real stakes. built tools that saved thousands of agent hours,
				designed claim processing services integrated with 10+ third parties, and learned how to
				ship quality code under pressure when bugs actually cost money.
			</p>
			<p class="text-fg-secondary">
				currently at induced.ai, where i'm building ai-powered products across wildly different
				domains - research tools that turn weeks into minutes, healthcare platforms serving multi-
				state operations, and security infrastructure processing production ai traffic. full
				ownership: product thinking, design, code, deployment.
			</p>
		</div>
	</section>
	<section>
		<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-0.5 sm:mb-1">
			experience
		</h2>
		{#each EXPERIENCE as experience}
			<div class="flex items-baseline gap-2 sm:gap-4 py-2 cursor-pointer select-none">
				<div class="text-xs text-muted-fg font-mono">{experience.year}</div>
				<div class="flex-1 text-fg-secondary">{experience.company}</div>
				<div class="text-xs text-muted-fg text-right">{experience.title}</div>
			</div>
		{/each}
	</section>
	<section>
		<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-1 sm:mb-2">
			side-quests & projects
		</h2>
		<ul class="pl-3 list-disc space-y-0.5 sm:space-y-1 text-fg-secondary">
			<li>i like tinkering with server infra & linux distros</li>
			<li>
				<a href="https://hack-svit.pages.dev/" target="_blank">hack svit</a> - organized a national level
				hackathon impacting 1000+ builders
			</li>
			<li>
				<a href="https://github.com/cheesetosht/hackathon-backend" target="_blank"
					>hackathon checkin app</a
				> - a react native x go app to power qr-based checkins for our hackathons
			</li>
		</ul>
	</section>
</main>
<section class="border-y border-border border-dashed px-4 sm:px-6 py-3 overflow-hidden">
	<div class="marquee font-mono text-2xs uppercase text-muted-fg space-x-1.5 sm:space-x-3">
		<div class="marquee-content space-x-1.5 sm:space-x-3">
			{#each TOOLS as tool}
				<span>{tool.name}</span>
				<span>&#10033;</span>
			{/each}
		</div>
		<div class="marquee-content space-x-1.5 sm:space-x-3" aria-hidden="true">
			{#each TOOLS as tool}
				<span>{tool.name}</span>
				<span>&#10033;</span>
			{/each}
		</div>
	</div>
</section>
<section class="py-6 sm:py-8 px-4 sm:px-6">
	<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-0.5 sm:mb-1">
		links
	</h2>
	<div class="text-xs font-mono font-medium leading-normal">
		<a href="https://github.com/cheesetosht" target="_blank">github</a>
		&middot;
		<a href="https://x.com/cheesetosht" target="_blank">twitter/x</a>
		&middot;
		<a href="https://www.linkedin.com/in/cheesetosht" target="_blank">linkedin</a>
	</div>
</section>
<footer class="py-6 sm:py-8 px-4 sm:px-6 border-t border-border border-dashed">
	<h6 class="text-xs text-muted-fg">thanks for visiting!</h6>
</footer>

<style>
	.hint-fade {
		animation: hintFade 3s ease-out forwards;
	}

	@keyframes hintFade {
		0% {
			opacity: 0;
		}
		15% {
			opacity: 1;
		}
		70% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.marquee {
		cursor: pointer;
		display: flex;
		width: max-content;
		animation: marquee 20s linear infinite;
	}

	.marquee:hover {
		animation-play-state: paused;
	}

	.marquee-content {
		display: flex;
		flex-shrink: 0;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
