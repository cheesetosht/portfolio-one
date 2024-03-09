<script>
	import Icon from '@iconify/svelte';

	const email = import.meta.env.VITE_EMAIL;
	const github = 'https://www.github.com/cheesetosht';
	const linkedin = 'https://www.linkedin.com/in/cheesetosht';
	const instagram = 'https://www.instagram.com/cheesetosht';
	const twitter = 'https://www.x.com/cheesetosht';
</script>

<div class="flex gap-2 items-center justify-end">
	<a title={`say ${email}`} target="_blank" href={`mailto:${email}`}>
		<Icon class="social-icon" icon="ph:envelope-simple-open-duotone" />
	</a>
	<!-- <a target="_blank" href={instagram}>
		<Icon class="social-icon" icon="ph:instagram-logo-duotone" />
	</a> -->
	<a title="linkedin" target="_blank" href={linkedin}>
		<Icon class="social-icon" icon="ph:linkedin-logo-duotone" />
	</a>
	<a title="the bird app" target="_blank" href={twitter}>
		<Icon class="social-icon" icon="ph:twitter-logo-duotone" />
	</a>
	<a title="github" target="_blank" href={github}>
		<Icon class="social-icon" icon="ph:github-logo-duotone" />
	</a>
</div>
