import { defineCollection, z } from 'astro:content';
import { convertGermanToISODate } from '../utils'


const projects = defineCollection({
	type: 'content',
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
			live: z.optional(z.coerce.string().url()),
		}),
		image: z.object({
			filename: z.coerce.string(),
			alt: z.coerce.string(),
		})
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		isDraft: z.boolean().default(false),
		series: z.string().trim().optional(),
		part: z.number().optional(),
		title: z.string().trim().min(1).or(z.number()).transform(val => String(val)),
		subheading: z.string().trim().optional(),
		socialImage: z.object({
			filename: z.string(),
			alt: z.string()
		}),
		description: z.string().trim().min(1).or(z.number()).transform(val => String(val)).optional(),
		author: z.string().default('Tom'),
		tags: z.array(z.coerce.string()),
		footnote: z.string().optional(),
		pubDate: z.coerce.string().transform(convertGermanToISODate).pipe(z.date())
	}).superRefine(({ isDraft, pubDate }, ctx) => {
		if (!isDraft && pubDate === undefined) {
			ctx.addIssue({
				code: "custom",
				message: "pubDate is required when it's not a draft :)",
				path: ["pubDate"]
			});
		}
	})
});

export const collections = {
	projects, blog
};
