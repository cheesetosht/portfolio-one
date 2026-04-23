import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
	type: 'content',
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
