<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import SocialLinks from './social-links.svelte';
	import { ROUTES } from '$lib/constants';

	// @ts-ignore
	$: active_route = ROUTES[$page.url.pathname];
	$: expanded = false;

	function toggleNavbar(s?: boolean) {
		expanded = s ?? !expanded;
	}
	beforeNavigate(() => toggleNavbar(false));
</script>

<aside id="nav" class={`${$$restProps.class} pt-6 lg:pt-24 pb-4 sticky top-0 bg-ivory-50 z-10`}>
	<!-- desktop -->
	<div class="hidden select-none lg:block">
		<ul class="space-y-2 text-right font-bold text-xl font-display mb-4">
			{#each Object.entries(ROUTES) as route}
				{@const active = route[0] == $page.url.pathname}
				<li class="flex items-center justify-end" class:text-gray-400={!active}>
					<a href={route[0]}>{route[1]}</a>
				</li>
			{/each}
		</ul>
		<SocialLinks />
		<h5 class="mt-4 text-sm text-right font-medium text-ivory-700">Bengaluru, IN</h5>
		<!-- <h5 class="mt-4 text-sm text-right font-medium text-ivory-700">
			Open to work
			<span class="relative align-middle inline-flex h-2.5 w-2.5 items-center justify-center">
				<span
					class="animate-ping absolute inline-flex h-full w-full rounded-full bg-ivory-400 opacity-75"
				></span>
				<span class="relative inline-flex rounded-full h-2 w-2 bg-ivory-500"></span>
			</span>
		</h5> -->
	</div>

	<!-- mobile -->
	<div class="lg:hidden font-bold font-display">
		<button class="flex gap-1 items-center" on:click={() => toggleNavbar()}>
			<span class="pb-1">{active_route}</span>
			<div class="w-4 transition-all text-ivory-900 duration-300" class:rotate-90={expanded}>
				<Icon height="100%" width="100%" icon="ph:caret-right-duotone" />
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
