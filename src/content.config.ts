import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writings = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		type: z.enum(['article', 'blog', 'thought', 'note']).default('article')
	})
});

export const collections = { writings };
