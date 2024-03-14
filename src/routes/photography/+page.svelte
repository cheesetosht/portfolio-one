<script>
	import { PHOTOS } from '../../lib/constants';
</script>

<h1 class="page-heading">photography</h1>
<p class="text-sm mb-6">aesthetik</p>

<div class="columns-2 lg:columns-3">
	{#each PHOTOS as photo}
		<div class="overflow-hidden">
			<img
				class="hover:scale-105 mb-6 saturate-50 w-full transition duration-500 hover:saturate-100"
				loading="eager"
				src={`https://${photo}?w=160`}
				alt=""
			/>
		</div>
	{/each}
</div>
