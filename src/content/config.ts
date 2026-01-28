import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('CONKRET'),
        image: z.string().optional(),
        tags: z.array(z.string()).default([]),
        isDraft: z.boolean().default(false),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    'blog': blogCollection,
};
