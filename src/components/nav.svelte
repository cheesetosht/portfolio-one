<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import SocialLinks from './social-links.svelte';

	const ROUTES = {
		'/': 'cheesetosht',
		'/work': 'work'
		// '/library': 'library'
	};

	// @ts-ignore
	$: active_route = ROUTES[$page.url.pathname];
	$: expanded = false;

	function toggleNavbar(s?: boolean) {
		expanded = s ?? !expanded;
	}
	beforeNavigate(() => toggleNavbar(false));
</script>

<aside id="nav" class={`${$$restProps.class} pt-6 lg:pt-24 pb-6`}>
	<!-- desktop -->
	<div class="hidden select-none lg:block">
		<ul class="space-y-2 tracking-wider text-right font-bold font-display mb-4">
			{#each Object.entries(ROUTES) as route}
				{@const active = route[0] == $page.url.pathname}
				<li class="flex items-center justify-end" class:text-gray-400={!active}>
					<a href={route[0]} on:click={() => toggleNavbar()}>{route[1]}</a>
				</li>
			{/each}
		</ul>
		<SocialLinks />
		<p class="my-4 text-sm text-right text-gray-400">Bengaluru, IN</p>
	</div>

	<!-- mobile -->
	<div class="lg:hidden text-sm tracking-wide font-bold font-display">
		<button class="flex gap-1 items-center" on:click={() => toggleNavbar()}>
			<span>{active_route}</span>
			<div class="h-4 w-4 transition-all duration-300" class:rotate-90={expanded}>
				<Icon height="100%" width="100%" icon="carbon:chevron-right" />
			</div>
		</button>

		{#if expanded}
			<ul class="text-gray-400" transition:slide={{ axis: 'y', duration: 150 }}>
				{#each Object.entries(ROUTES) as route}
					{#if route[0] != $page.url.pathname}
						<li class="mt-3">
							<a href={route[0]}>{route[1]}</a>
						</li>
					{/if}
				{/each}
			</ul>
		{/if}
	</div>
</aside>
