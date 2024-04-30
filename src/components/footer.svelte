<script>
	import { page } from '$app/stores';
	import { ROUTES } from '$lib/constants';
	import SocialLinks from './social-links.svelte';
</script>

<footer class={`${$$restProps.class}`}>
	<hr />
	<div class="pt-6 flex justify-between items-start">
		<SocialLinks />
		<ul class="text-right text-sm font-bold font-display mb-4">
			{#each Object.entries(ROUTES) as route}
				{@const active = route[0] == $page.url.pathname}
				{#if !active}
					<li class="pb-2 text-gray-400">
						<a href={route[0]}>{route[1]}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</footer>
