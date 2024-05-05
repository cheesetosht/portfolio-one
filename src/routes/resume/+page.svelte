<script>
	import { MetaTags } from 'svelte-meta-tags';
	import ResumeContent from '../../components/resume.md';
	import Icon from '@iconify/svelte';
</script>

<MetaTags title="resume" />
<h1 class="page-heading">resume</h1>
<h2 class="inline-block lg:hidden font-display print:font-serif text-2xl font-bold">Vraj Shah</h2>
<i class="print:font-serif text-sm">Software Engineer</i>
<p class="print:text-xs text-gray-900 print:font-serif mb-1">
	Some long ass intro Some long ass intro Some long ass intro Some long ass intro Some long ass
	intro Some long ass intro
</p>
<div class="flex items-end gap-x-2 flex-wrap text-sm print:text-xs">
	<p class="flex gap-1 items-center text-gray-900 print:font-serif">
		<Icon icon="ph:globe-simple-bold" />
		<a href="http://www.linkedin.com/in/cheesetosht">cheesetosht.xyz</a>
	</p>
	<p class="flex gap-1 items-center text-gray-900 print:font-serif">
		<Icon icon="ph:linkedin-logo-bold" />
		<a href="http://www.linkedin.com/in/cheesetosht">Linkedin</a>
	</p>
	<p class="flex gap-1 items-center text-gray-900 print:font-serif">
		<Icon icon="ph:github-logo-bold" />
		<a href="http://www.github.com/cheesetosht">GitHub</a>
	</p>
	<p class="flex gap-1 items-center text-gray-900 print:font-serif">
		<Icon icon="ph:envelope-bold" />
		<a href="mailto:cheesetosht@gmail.com">cheesetosht@gmail.com</a>
	</p>
	<p class="flex gap-1 items-center text-gray-900 print:font-serif">
		<Icon icon="ph:phone-bold" />
		<a href="tel:+919727057419">97270 57419</a>
	</p>
</div>
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
