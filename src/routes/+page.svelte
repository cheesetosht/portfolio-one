<script lang="ts">
	import './page.css';
	import { MetaTags } from 'svelte-meta-tags';
	import Eyes from '../components/eyes.svelte';
	import Dots from '../components/dots.svelte';
</script>

<MetaTags title="cheesetosht" />
<main id="home_grid">
	<div id="logo" role="group" class="grid-box group bg-brick-600 text-tan-100">
		<div class="relative cursor-pointer font-barlow">
			<h1>CHEESE</h1>
			<h1 style="letter-spacing: 0.16em; text-indent: 0.16em;">TOSHT</h1>
			<div id="hero-tag">product engineer</div>
		</div>
	</div>
	<Eyes />
	<div id="intro" class="grid-box relative overflow-hidden">
		<h3>hey, i'm vraj!</h3>
		<p class="mb-2">
			a generalist product engineer based out of India with 5 years of full-stack experience.
		</p>
		<div class="absolute left-8 -bottom-20 sm:left-8 right-0 text-brick-600">
			<Dots />
		</div>
	</div>
	<div id="about" class="grid-box">
		<h3>about me</h3>
		<p class="mb-2">
			i grew up tinkering with slow pcs with no internet. creating is what i've always enjoyed, be
			it videos, designs or software.
		</p>
		<p class="mb-2">
			spent my time in college configuring linux distros (arch btw), participating in &amp;
			organising hackathons, rest of the time I was building bluelearn (no, i didn't attend
			classes). and now i work at loop.
		</p>
		<p>
			having worked at diverse scales, i always prioritise user experience, delivery and
			maintainability over standards or frameworks.
		</p>
	</div>
	<div id="projects" class="grid-box">
		<h3>projects</h3>
		<ul class="space-y-1">
			<li>
				> <a target="_blank" href="https://github.com/cheesetosht/portfolio-one">this website</a>
			</li>
			<li>
				> <a target="_blank" href="https://github.com/cheesetosht/dooreye-backend">dooreye</a> &middot;
				a privacy-focused neighborhood security system
			</li>
			<li>
				> <a target="_blank" href="https://github.com/cheesetosht/portfolio-one/tree/2024">
					previous version of this website
				</a>
			</li>
			<li>
				> <a target="_blank" href="https://hack-svit.pages.dev/">hacksvit</a> &middot; organised a national
				level hackathon from scratch
			</li>
			<li>
				> <a target="_blank" href="https://thevrajshah.pages.dev/"> og version of this website </a>
			</li>
		</ul>
	</div>
	<div id="blog" class="grid-box flex flex-col justify-between">
		<div>
			<h3>blog</h3>
			<p>coming soon...</p>
		</div>
		<p>
			<i>"Patience is the art of hoping."</i>
			<br />
			<small class="mt-1 opacity-60">Luc de Clapiers</small>
		</p>
	</div>
	<div id="career" class="grid-box [&_h4]:font-semibold">
		<h3>career</h3>
		<h4><b>software engineer</b></h4>
		<p class="mb-1 sm:mb-2">
			<a target="_blank" href="https://loophealth.com">loop health</a> &middot; 2024—present
		</p>
		<h4><b>founding engineer</b></h4>
		<p class="mb-4 sm:mb-8">
			<a target="_blank" href="https://bluelearn.in">bluelearn</a> &middot; 2020—24
		</p>
		<h4><b>consulting & freelance</b></h4>
		<p>
			<a target="_blank" href="https://hypersift.ai">hypersift</a> &middot;
			<a target="_blank" href="https://enclave.money">enclave money</a>
		</p>
	</div>
	<div id="vouch" class="grid-box">
		<h3 class="!mb-1">i've worked with them, you should too</h3>
		<small class="mb-2">if you're in search of some crazy talent to collaborate with...</small>
		<ul class="space-y-1">
			<li>
				<a href="https://www.behance.net/disha-dsgn">disha</a> &middot; visual designer
			</li>
			<li><a href="https://dhrumil.framer.website/">dhrumil</a> &middot; product designer</li>
			<li><a href="https://github.com/LOLwierd">ayaan</a> &middot; engineer</li>
		</ul>
	</div>
	<div id="other" class="grid-box">
		<h3>want to hire me?</h3>
		<p class="mb-2">
			well, first of all, I'm flattered. secondly, here's my email -
			<a target="_blank" href="mailto:cheesetosht@gmail.com" class="break-all inline-block">
				cheesetosht@gmail.com
			</a>
		</p>
		<p>
			in case you're a resume person, here's mine - <a target="_blank" href="/resume.pdf">resume</a>
		</p>
	</div>
	<div id="links" class="grid-box relative overflow-hidden">
		<h3>linksss</h3>
		<p class="[&_a]:block text-xl">
			<a target="_blank" href="https://github.com/cheesetosht">github</a>
			<a target="_blank" href="https://x.com/cheesetosht">the bird app</a>
			<!-- <a target="_blank" href="https://bsky.app/profile/cheesetosht.bsky.social">bluesky</a> -->
			<a target="_blank" href="https://linkedin.com/in/cheesetosht">linkedin</a>
		</p>
		<div class="absolute left-8 -bottom-16 sm:left-8 right-0 text-brick-600">
			<Dots />
		</div>
	</div>
</main>
