<script lang="ts">
	export let caption: string;
	let className = '';
	export { className as class };
</script>

<div class="relative group outline-none {className}" tabindex="0" role="button">
	<slot />
	<div
		class="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-200 bg-charcoal-800 px-1.5 py-1 shadow-lg z-10 pointer-events-none w-max whitespace-pre-wrap text-2xs font-mono text-muted-fg"
	>
		{caption}
	</div>
</div>
