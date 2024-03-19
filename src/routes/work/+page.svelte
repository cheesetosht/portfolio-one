<script>
	import { EXPERIENCES } from '$lib/constants';
</script>

<h1 class="page-heading">work</h1>
<p class="text-sm mb-6">a brief summary of my work so far</p>
{#each EXPERIENCES as experience}
	<div class="space-y-3 [&_p]:text-sm mb-6">
		<h4 class="font-semibold text-lg font-display">
			<a
				class="underline decoration-dotted underline-offset-4 decoration-gray-400"
				href={experience.url}>{experience.company_or_project}</a
			>
			&bull; <br class="sm:hidden" />{experience.start_year} - {experience.end_year ?? 'present'}
			{#if experience.tag}<span class="text-sm">({experience.tag})</span>{/if}
		</h4>

		{#each experience.description as description}
			<p>
				{@html description}
			</p>
		{/each}

		<!-- <p>as one of the founding engineers at bluelearn, i got to dabble into a lot of things:</p>
		<ul
			role="list"
			class="marker:text-gray-400 marker:text list-disc ml-6"
			style="list-style-type: '&#8277; ';"
		>
			<li>build a robust web infrastructure from ground-up</li>
			<li>
				worked on architecting 5 major reworks targetting optimisations in performance, reliability,
				execution time and developer experience individually
			</li>
			<li>
				worked on Dx & project management techniques that reduced development-time from months to
				weeks
			</li>
			<li></li>
		</ul> -->
	</div>
{/each}

<hr class="mb-2 border-dashed" />
<p class="italic text-sm">
	didn't manage to document rest of my projects, feel free to drop by on my <a
		href="https://github.com/cheesetosht"
		target="_blank">github</a
	>.
	<br />
	if you're a recuiter, here's my <a href="/resume.pdf" target="_blank">resume</a>.
</p>
