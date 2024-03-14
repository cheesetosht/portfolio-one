<script>
	import { PHOTOS } from '../../lib/constants';
</script>

<h1 class="page-heading">photography</h1>
<p class="text-sm mb-6">aesthetik</p>

<div class="columns-2 lg:columns-3">
	{#each PHOTOS as photo}
		<img class="mb-6" loading="eager" src={`https://${photo}?w=160`} alt="" />
	{/each}
</div>
