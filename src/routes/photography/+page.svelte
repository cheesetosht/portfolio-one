<script>
	import { PHOTOS } from '../../lib/constants';
</script>

<h1 class="page-heading">photography</h1>
<p class="text-sm mb-6">aesthetik</p>

<div class="columns-2 lg:columns-3">
	{#each PHOTOS as photo}
		<div class="overflow-hidden">
			<img
				class="lg:hover:scale-100 scale-105 mb-6 lg:saturate-50 transition duration-700 lg:hover:saturate-100"
				loading="eager"
				src={`https://${photo}?w=180`}
				alt=""
			/>
		</div>
	{/each}
</div>
