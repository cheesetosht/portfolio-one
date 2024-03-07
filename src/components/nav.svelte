<script>
	import { page } from '$app/stores';
	import MdChevronRight from 'svelte-icons/md/MdChevronRight.svelte';

	const ROUTES = {
		'/': 'cheesetoast',
		'/work': 'work',
		'/library': 'library'
	};

	// @ts-ignore
	$: active_route = ROUTES[$page.url.pathname];
	$: expanded = false;

	function toggleNavbar() {
		expanded = !expanded;
	}
</script>

<aside id="nav" class="col-span-4 lg:col-span-1 lg:col-start-2 pt-6 lg:pt-24 pb-6">
	<!-- desktop -->
	<ul class="hidden lg:block space-y-2 tracking-wide text-right font-bold font-display">
		{#each Object.entries(ROUTES) as route}
			{@const active = route[0] == $page.url.pathname}
			<li class="flex items-center justify-end" class:text-gray-400={!active}>
				<a href={route[0]}>{route[1]}</a>
			</li>
		{/each}
	</ul>
	<!-- mobile -->
	<ul class="lg:hidden text-sm space-y-3 tracking-wide font-extrabold font-display">
		<li class="flex gap-1 items-center">
			<span>{active_route}</span>
			<button class="h-5 w-5" class:rotate-90={expanded} on:click={() => toggleNavbar()}>
				<MdChevronRight />
			</button>
		</li>
		{#each Object.entries(ROUTES) as route}
			{#if route[1] != active_route}
				<li class="text-gray-400" class:hidden={!expanded}>
					<a href={route[0]}>{route[1]}</a>
				</li>
			{/if}
		{/each}
	</ul>
</aside>
