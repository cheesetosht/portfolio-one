<script>
	import { FINDS } from '$lib/constants';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="finds" />
<h1 class="page-heading">finds</h1>
<small class="italic text-xs text-gray-400">*cool links*</small>
<div class="space-y-2">
	{#each FINDS as find}
		<div class="">
			<p class="text-gray-700 text-base font-semibold"><a href={find.url}>{find.title}</a></p>
			<p class="text-gray-400 text-xs">{find.date}</p>
		</div>
	{/each}
</div>
