import type { APIRoute } from 'astro';
import { EXPERIENCE, TOOLS, LINKS } from '../lib/constants';

export const GET: APIRoute = () => {
	const experienceSection = EXPERIENCE.map((exp) => {
		const header = `### ${exp.company} — ${exp.title} (${exp.year})`;
		const link = exp.link ?? '';
		const description = 'description' in exp && exp.description ? `\n${exp.description}` : '';
		const points = exp.points.map((p) => `- ${p}`).join('\n');
		return [header, link, description, points].filter(Boolean).join('\n');
	}).join('\n\n');

	const toolsLine = TOOLS.map((t) => t.name).join(', ');

	const socialLines = LINKS.map((l) => {
		const href = l.href.trim().startsWith('/')
			? `https://vrajshah.in${l.href.trim()}`
			: l.href.trim();
		return `- ${l.label}: ${href}`;
	}).join('\n');

	const content = `# Vraj Shah

> product engineer

i ship 0→1 products with taste & speed. experienced in edtech, healthcare, ai & web3.

## Work Experience

${experienceSection}

## Tools & Technologies

${toolsLine}

## Projects & Side-Quests

- startup simulator (https://startup-simulator.cheesetoast.workers.dev) - a quirky game
- dooreye (https://github.com/cheesetosht/dooreye-app) - a privacy focused neighborhood security app
- hackathon checkin app (https://github.com/cheesetosht/hackathon-backend) - react native + go, qr based checkins for hackathons
- freelance work:
  - wavelength (https://heywavelength.com)
  - hypersift.ai (https://hypersift.ai)
  - fibswap dex (https://www.fibswap.io/swap)
  - present storie (https://presentstorie.vercel.app)

## Links

${socialLines}`;

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
