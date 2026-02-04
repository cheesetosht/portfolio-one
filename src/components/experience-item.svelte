<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';

	export let year: number;
	export let company: string;
	export let title: string;
	export let points: string[];
	export let link: string | undefined = undefined;

	let isHovered = false;
</script>

<div
	class="group py-2 cursor-pointer select-none"
	role="button"
	tabindex="0"
	on:focus={() => (isHovered = true)}
	on:blur={() => (isHovered = false)}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
>
	<div class="flex items-baseline gap-2 sm:gap-4">
		<div class="text-2xs sm:text-xs text-muted-fg font-mono">{year}</div>
		<div class="flex-1 text-fg-secondary! hover:no-underline!">
			{company}
			{#if link}
				<a
					class="group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-opacity duration-300"
					href={link}
					target="_blank"
					><Icon
						icon="tabler:arrow-up-right"
						class="size-3.5 inline-block transition duration-300 hover:translate-x-0.5 hover:-translate-y-0.5"
					/></a
				>
			{/if}
		</div>
		<div class="text-xs text-fg-secondary text-right">{title}</div>
	</div>
	{#if isHovered}
		<ul
			class="text-sm text-muted-fg pt-2 pl-12 sm:pl-16 pr-4 whitespace-pre-wrap list-disc space-y-1"
			in:slide|local={{ duration: 400, easing: cubicOut }}
			out:slide|local={{ duration: 200, easing: cubicOut }}
		>
			{#each points as point}
				<li>{point}</li>
			{/each}
		</ul>
	{/if}
</div>
