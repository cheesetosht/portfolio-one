<script>
	import { onMount } from 'svelte';
	import { EXPERIENCE, TOOLS, PHOTOS } from '$lib/constants';
	import Icon from '@iconify/svelte';
	import Eyes from '../components/eyes.svelte';
	import ExperienceItem from '../components/experience-item.svelte';
	import Tooltip from '../components/tooltip.svelte';
</script>

<header class="border-y border-border border-dashed flex h-20 sm:h-24 mt-24 sm:mt-32">
	<div class="size-20 sm:size-24">
		<img
			src="/illustration.png"
			alt="illustration"
			class="size-full object-cover mix-blend-multiply"
		/>
	</div>
	<div
		class="flex-1 border-x border-border border-dashed px-4 sm:px-6 flex flex-col justify-center"
	>
		<h1
			class="select-none cursor-default text-lg sm:text-xl font-semibold tracking-wide leading-none"
		>
			vraj shah
		</h1>
		<p class="cursor-default select-none text-fg-secondary">product engineer</p>
	</div>
	<div class="relative flex justify-center items-center size-20 sm:size-24">
		<Eyes />
		<span
			class="hint-fade text-right w-40 absolute top-1/2 -translate-y-1/2 -left-44 text-2xs text-muted-fg italic sm:hidden"
			>tap anywhere</span
		>
	</div>
</header>
<main class="space-y-6 py-8 px-4 sm:px-6">
	<section>
		<!-- <h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-1 sm:mb-2">
			what i do
		</h2> -->
		<p class="text-fg-secondary">
			currently working at <a href="https://www.induced.ai" target="_blank">induced.ai</a>
		</p>
		<!-- <p class="text-fg-secondary text-xs font-mono">web, ai, infrastructure</p> -->
	</section>
	<section>
		<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-0.5 sm:mb-1">
			experience
		</h2>
		{#each EXPERIENCE as experience, index}
			<ExperienceItem
				{index}
				year={experience.year}
				company={experience.company}
				title={experience.title}
				points={experience.points}
				link={experience.link}
			/>
		{/each}
	</section>
	<section>
		<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-1 sm:mb-2">
			side-quests & projects
		</h2>
		<ul class="pl-6 list-disc space-y-0.5 sm:space-y-1 text-fg-secondary">
			<li>i like tinkering with databases, networks & linuxes</li>
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
	<section class="">
		<!-- <h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-2 sm:mb-4">
		photos
	</h2> -->
		<div class="columns-2 sm:columns-3 gap-2 space-y-2">
			{#each PHOTOS as photo}
				<div class="break-inside-avoid relative overflow-hidden">
					<Tooltip caption={photo.caption} class="w-full h-full text-center leading-3">
						<img
							src={photo.src}
							alt={photo.alt}
							class={'w-full object-cover grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-600 group-hover:scale-105 group-focus:scale-105 ' +
								photo.class}
						/>
					</Tooltip>
				</div>
			{/each}
		</div>
	</section>
</main>
<section class="border-y border-border border-dashed px-4 sm:px-6 py-3 overflow-hidden">
	<div class="marquee font-mono text-2xs uppercase text-muted-fg space-x-1.5 sm:space-x-3">
		<div class="marquee-content space-x-3">
			{#each TOOLS as tool}
				<span>{tool.name}</span>
				<span>&#10033;</span>
			{/each}
		</div>
		<div class="marquee-content space-x-3" aria-hidden="true">
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
	<div class="flex items-center gap-2 justify-between">
		<small class="text-2xs text-muted-fg font-light">(last updated: 2025-12-11)</small>
		<small class="text-2xs text-muted-fg font-light"
			>built with sveltekit&nbsp;<Icon
				icon="logos:svelte-icon"
				class="size-3 inline-block grayscale align-bottom"
			/></small
		>
	</div>
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
