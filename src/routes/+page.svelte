<script>
	import { onMount } from 'svelte';
	import { EXPERIENCE, TOOLS, PHOTOS, LINKS } from '$lib/constants';
	import Icon from '@iconify/svelte';
	import Eyes from '../components/eyes.svelte';
	import ExperienceItem from '../components/experience-item.svelte';
	import Tooltip from '../components/tooltip.svelte';
</script>

<header class="border-y border-border border-dashed flex h-16 sm:h-24 mt-24 sm:mt-32">
	<div class="size-16 sm:size-24">
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
			class="select-none cursor-default text-lg sm:text-xl font-semibold tracking-wide leading-none mb-0.5"
		>
			vraj shah
		</h1>
		<p class="cursor-default select-none text-fg-secondary text-xs sm:text-sm">product engineer</p>
	</div>
	<div class="relative flex justify-center items-center size-16 sm:size-24">
		<Eyes />
		<span
			class="hint-fade text-right w-16 absolute -top-8 right-2 text-2xs text-forest-400 italic sm:hidden"
		>
			tap anywhere</span
		>
	</div>
</header>
<main>
	<section class="py-6 px-4 sm:px-6">
		<!-- <h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-1 sm:mb-2">
			currently
		</h2> -->
		<p class="text-fg-secondary mb-2">
			currently working at <a href="https://www.induced.ai" target="_blank">induced.ai</a>
		</p>
		<p class="text-fg-secondary">a generalist engineer who ships 0→1 products with taste & speed</p>
	</section>
	<section class="border-y border-border border-dashed py-4 px-4 sm:px-6">
		<div class="text-xs font-mono font-medium leading-normal flex gap-3 items-center flex-wrap">
			{#each LINKS as link}
				<a class="group hover:no-underline!" href={link.href} target="_blank">
					{link.label}
					<Icon
						icon="tabler:arrow-up-right"
						class="size-3 inline-block group-hover:rotate-45 transition-transform duration-300"
					/>
				</a>
			{/each}
		</div>
	</section>
	<section class="px-4 sm:px-6 pt-6">
		<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-1">work</h2>
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
	<section class="px-4 sm:px-6 py-6">
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

	<section class="px-4 sm:px-6 pb-6">
		<h2 class="cursor-default select-none text-sm text-muted-fg tracking-wider mb-2">
			side-quests & projects
		</h2>
		<ul class="pl-3 list-disc space-y-0.5 sm:space-y-1 text-fg-secondary">
			<li>
				<a href="https://github.com/cheesetosht/dooreye-app" target="_blank">dooreye</a> - a privacy-focused
				neighborhood security app
			</li>
			<li>
				<a href="https://github.com/cheesetosht/hackathon-backend" target="_blank"
					>hackathon checkin app</a
				> - a react native x go app to power qr-based checkins for our hackathons
			</li>
			<li>i like tinkering with databases, networks & linuxes</li>
		</ul>
	</section>
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
</main>

<footer class="py-6 sm:py-8 px-4 sm:px-6 border-t border-border border-dashed">
	<h6 class="text-xs text-muted-fg">thanks for visiting!</h6>
	<div class="flex items-center gap-2 justify-between">
		<small class="text-2xs text-muted-fg font-light">(last updated: 2025-12-11)</small>
		<small class="text-2xs text-muted-fg font-light"
			>built with sveltekit&nbsp;<Icon
				icon="ri:svelte-line"
				class="size-3 inline-block align-bottom"
			/></small
		>
	</div>
</footer>

<style>
	.hint-fade {
		animation: hintFade 5s ease-in-out forwards;
	}

	@keyframes hintFade {
		0% {
			opacity: 0;
		}
		15% {
			opacity: 1;
		}
		30% {
			opacity: 0.6;
		}
		45% {
			opacity: 1;
		}
		60% {
			opacity: 0.6;
		}
		75% {
			opacity: 1;
		}
		90% {
			opacity: 0.6;
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
