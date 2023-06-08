import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.coerce.string(),
		description: z.coerce.string(),
		tags: z.object({
			skills: z.array(z.coerce.string()),
			tech: z.array(z.coerce.string()),
		}),
		links: z.object({
			repo: z.coerce.string().url(),
			live: z.coerce.string().url(),
		}),
		image: z.object({
			filename: z.coerce.string(),
			alt: z.coerce.string(),
		})
	}),
});

export const collections = {
	projects
};
