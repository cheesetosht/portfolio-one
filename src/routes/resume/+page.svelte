<script>
	import { MetaTags } from 'svelte-meta-tags';
	import ResumeContent from '../../components/resume.md';
</script>

<MetaTags title="resume" />
<h1 class="page-heading">resume</h1>
<h2 class="inline-block lg:hidden font-display print:font-serif text-2xl font-bold">Vraj Shah</h2>
<i class="print:font-serif text-sm">Software Engineer</i>
<div class="resume mt-1 mb-6">
	<ResumeContent />
</div>
<div class="print:hidden text-center mx-auto w-fit">
	<button
		class="mb-2 text-gray-900 text-lg font-display underline decoration-dashed decoration-gray-300 underline-offset-2 mx-auto"
		on:click={() => window.print()}>Download resume</button
	>
	&nbsp;
	<kbd
		class="px-2 py-1 text-xs font-semibold text-gray-50 bg-gray-800 ring-2 ring-gray-300 rounded-lg"
		>Cmd</kbd
	>
	+
	<kbd
		class="px-2 py-1 text-xs font-semibold text-gray-50 bg-gray-800 ring-2 ring-gray-300 rounded-lg"
		>P</kbd
	>
</div>
