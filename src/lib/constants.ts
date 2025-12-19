export const LINKS = [
	{
		label: 'github',
		href: 'https://github.com/cheesetosht'
	},
	{
		label: 'twitter/x',
		href: 'https://x.com/cheesetosht'
	},
	{
		label: 'linkedin',
		href: 'https://www.linkedin.com/in/cheesetosht'
	},
	{
		label: 'resume',
		href: '/resume.pdf'
	}
] as const;

export const EXPERIENCE = [
	{
		year: 2025,
		company: 'induced.ai',
		link: 'https://www.induced.ai',
		title: 'Product Engineer',
		points: [
			'Small team of engineers hacking our way to an AI-native future, one product at a time',
			'Built AI-powered products across wildly different domains (financial research, healthcare, security)',
			'Complete ownership over product thinking, design, code & deployment with no dedicated designer or product manager'
		],
		description:
			'building ai-powered products across wildly different domains - research tools that turn weeks into minutes, healthcare platforms serving multi-state operations, and security infrastructure processing production ai traffic. the role requires complete ownership over product thinking, design, code & deployment'
	},
	{
		year: 2024,
		company: 'loop health',
		link: 'https://www.loophealth.com',
		title: 'SWE II',
		points: [
			'After bluelearn shut down, i still wanted to get my hands dirty but with some real stakes this time',
			'Built tools that saved thousands hours for support agents',
			'Architected claim processing services integrated with 10+ insurance third parties',
			'Learned what it means to ship quality code when bugs actually cost money'
		]
	},
	{
		year: 2021,
		company: 'bluelearn',
		link: 'https://web.archive.org/web/20250117144119/https://www.bluelearn.in/',
		title: 'Founding Engineer',
		points: [
			'One of the first engineers, deployed to prod from day one',
			'Built entire platforms from scratch: infrastructure, APIs, frontends',
			'Architected systems handling 500k+ traffic surges',
			'Grew and led a team of 4 engineers',
			'Shipped, scrapped, and rebuilt several products',
			'A perfect place for a generalist who likes getting their hands dirty'
		]
	},
	{
		year: 2020,
		company: 'freelancing',
		title: 'Freelance Dev',
		points: [
			'I started as a freelance developer for a year or so, designing & building websites for startups & small businesses'
		]
	},
	{
		year: 2020,
		company: 'hack club svit',
		title: 'Co-lead',
		link: 'https://apacdirectory.hackclub.com/club/svit',
		points: [
			'Drove a Hack Club chapter for our college from scratch',
			'Organized a national level in-person hackathon impacting 1000+ builders',
			'Led the development, design, branding & mentorship initiatives for multiple talks, workshops & hackathons',
			'I was also a Microsoft Learn Student Ambassador for a year'
		]
	}
] as const;

export const TOOLS = [
	{ name: 'TypeScript', icon: 'logos:typescript-icon' },
	{ name: 'React', icon: 'logos:react' },
	{ name: 'Next.js', icon: 'logos:nextjs-icon' },
	{ name: 'Svelte', icon: 'logos:svelte-icon' },
	{ name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
	{ name: 'Node.js', icon: 'logos:nodejs-icon' },
	{ name: 'PostgreSQL', icon: 'logos:postgresql' },
	{ name: 'Redis', icon: 'logos:redis' },
	{ name: 'Go', icon: 'logos:go' },
	{ name: 'Flutter', icon: 'logos:go' },
	{ name: 'Ruby on Rails', icon: 'logos:go' },
	// { name: 'Laravel', icon: 'logos:go' },
	{ name: 'Docker', icon: 'logos:docker-icon' },
	{ name: 'WAGMI', icon: 'logos:wagmi-icon' },
	{ name: 'Solidity', icon: 'logos:solidity-icon' },
	{ name: 'Vim', icon: 'logos:vim-icon' },
	{ name: 'Arch(Btw)', icon: 'logos:arch-linux-icon' }
];

export const PHOTOS = [
	{
		src: '/sales.webp',
		alt: 'hack svit marketing booth',
		caption: 'marketing 101',
		orientation: 'horizontal',
		class: 'aspect-4/3'
	},
	{
		src: '/wifi-guy.webp',
		alt: 'me fixing the office wifi',
		caption: 'infrastructure engineer\n(wifi guy)',
		orientation: 'vertical',
		class: 'aspect-3/4'
	},
	{
		src: '/inspiring.webp',
		alt: 'speaking at a bluelearn hackathon',
		caption: 'shaping the future xD',
		orientation: 'horizontal',
		class: 'aspect-4/3 sm:aspect-3/4'
	},
	{
		src: '/team.webp',
		alt: 'the team at bluelearn',
		caption: 'building with friends',
		orientation: 'horizontal',
		class: 'aspect-4/3'
	},
	{
		src: '/actor-1.webp',
		alt: 'me a bluelearn launch video',
		caption: 'professional actor',
		orientation: 'horizontal',
		class: 'aspect-4/3'
	},

	{
		src: '/actor-2.webp',
		alt: 'me in a bluelearn reel',
		caption: 'marketing prop',
		orientation: 'vertical',
		class: 'aspect-3/4'
	}
] as const;
