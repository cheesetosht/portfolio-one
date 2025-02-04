<script>
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="cheesetosht" />

<main class="grid" id="home_grid">
	<div id="eyes"></div>
	<div id="logo"></div>
	<div id="about"></div>
	<div id="intro"></div>
	<div id="projects"></div>
	<div id="work"></div>
	<div id="blogs"></div>
	<div id="music"></div>
	<div id="socials"></div>
	<div id="other"></div>
</main>

<style>
	#home_grid {
		display: grid;
		padding: 24px;
		grid-template-areas:
			'eyes logo about'
			'projects intro about'
			'projects music work'
			'socials blogs other';
	}
	#home_grid div {
		border: 1px black solid;
		margin-top: -1px;
		margin-left: -1px;
		margin-bottom: -1px;
	}
	#eyes {
		grid-area: eyes;
		aspect-ratio: 1/1;
	}
	#logo {
		grid-area: logo;
		aspect-ratio: 1/1;
		background: #ec5751;
	}
	#about {
		grid-area: about;
		aspect-ratio: 1/2;
		background: #3e6917;
	}
	#intro {
		grid-area: intro;
		aspect-ratio: 1/1;
		background: #98d3d9;
	}
	#projects {
		grid-area: projects;
		aspect-ratio: 1/2;
		background: #ff9ef3;
	}
	#work {
		grid-area: work;
		aspect-ratio: 1/1;
		background: #fff16c;
	}
	#blogs {
		grid-area: blogs;
		aspect-ratio: 1/1;
		background: #aea8d4;
	}
	#music {
		grid-area: music;
		aspect-ratio: 1/1;
	}
	#socials {
		grid-area: socials;
		aspect-ratio: 1/1;
	}
	#other {
		grid-area: other;
		aspect-ratio: 1/1;
	}
	@media only screen and (max-width: 600px) {
		#home_grid {
			height: auto;
			grid-template-areas:
				'eyes logo'
				'intro music'
				'projects blogs'
				'projects work'
				'socials about'
				'other about';
		}
	}
</style>
