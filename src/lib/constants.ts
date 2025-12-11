export const EXPERIENCE = [
	{
		year: 2025,
		company: 'induced.ai',
		link: 'https://www.induced.ai',
		title: 'Software Engineer',
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
		title: 'Software Engineer II',
		points: [
			'After bluelearn shut down, i still wanted to get my hands dirty but with some real stakes this time',
			'Built tools that saved thousands of agent(human) hours',
			'Architected claim processing services integrated with 10+ insurance third parties',
			'Learned what it means to ship quality code when bugs actually cost money'
		],
		description:
			'after bluelearn shut down, i joined loop, a series-b healthtech with real stakes. built tools that saved thousands of agent hours, designed claim processing services integrated with 10+ third parties, and learned how to ship quality code under pressure when bugs actually cost money.'
	},
	{
		year: 2021,
		company: 'bluelearn',
		link: 'https://web.archive.org/web/20250117144119/https://www.bluelearn.in/',
		title: 'Founding Engineer',
		points: [
			'Built the entire platforms from scratch: infrastructure, APIs, frontends',
			'One of the first engineers; deployed to prod from day one',
			'Architected systems handling 500k+ traffic surges',
			'Grew and led a team of 4 engineers',
			'Shipped, scrapped, and rebuilt several products',
			'A perfect place for a generalist who likes getting their hands dirty'
		],
		description:
			'i officially started my career as one of the first engineers at bluelearn, where i built the entire platform from scratch - infrastructure, APIs, frontends, and everything in between. grew and led a team of 4 engineers, learning management the hard way: hiring, firing, mentoring, and running way too many interviews. it was the perfect place for a generalist: i got to deploy to prod from day one, architect systems handling 500k+ users, and ship (then scrap, then rebuild) several products in rapid succession'
	},
	{
		year: 2020,
		company: 'misc.',
		title: 'Freelance Developer',
		points: [
			'I started as a freelance developer for a year or so, designing & building websites for startups & small businesses.'
		]
	}
] as const;

export const TOOLS = [
	{ name: 'TypeScript', icon: 'logos:typescript-icon' },
	{ name: 'React', icon: 'logos:react' },
	{ name: 'Svelte', icon: 'logos:svelte-icon' },
	{ name: 'Node.js', icon: 'logos:nodejs-icon' },
	{ name: 'Go', icon: 'logos:go' },
	{ name: 'PostgreSQL', icon: 'logos:postgresql' },
	{ name: 'Redis', icon: 'logos:redis' },
	{ name: 'Docker', icon: 'logos:docker-icon' },
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
		caption: 'shaping "young minds"',
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
