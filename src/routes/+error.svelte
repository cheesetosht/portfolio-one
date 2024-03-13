<script>
	import { page } from '$app/stores';
</script>

<h1 class="font-display font-bold">{$page.status}</h1>
<p class="text-sm">{$page.error?.message || ':/'}</p>
