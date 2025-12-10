<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';

	export let year: number;
	export let company: string;
	export let title: string;
	export let description: string;
	export let link: string;

	let isHovered = false;
</script>

<div
	class="group py-2 cursor-pointer select-none"
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
	role="button"
	tabindex="0"
	on:focus={() => (isHovered = true)}
	on:blur={() => (isHovered = false)}
>
	<div class="flex items-baseline gap-2 sm:gap-4">
		<div class="text-xs text-muted-fg font-mono">{year}</div>
		<div class="flex-1 text-fg-secondary! hover:no-underline!">
			{company}
			<a
				class="group-hover:opacity-100 opacity-0 transition-opacity duration-300"
				href={link}
				target="_blank"><Icon icon="radix-icons:external-link" class="size-3.5 inline-block" /></a
			>
		</div>
		<div class="text-xs text-fg-secondary text-right">{title}</div>
	</div>
	{#if isHovered}
		<p
			class="text-sm text-muted-fg pt-1 pl-8 sm:pl-12 pr-4 whitespace-pre-wrap"
			transition:slide={{ duration: 400, easing: cubicOut }}
		>
			{description}
		</p>
	{/if}
</div>
