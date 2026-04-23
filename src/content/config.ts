import { defineCollection, z, reference } from 'astro:content';

// Voice: "reportage" = STATE-style, named speakers, first-person editorial allowed.
// Voice: "architecture" = SURFACE/RUNTIME-style, declarative third-person, heavily cited.
const voice = z.enum(['reportage', 'architecture']);

const issues = defineCollection({
  type: 'content',
  schema: z.object({
    vertical: z.enum(['state', 'surface', 'runtime', 'harness', 'local', 'wire']),
    issue_number: z.number().int().positive(),
    issue_title: z.string(),
    subtitle: z.string(),
    published: z.date(),
    voice: voice,
    tagline: z.string(),
    summary: z.string().optional(),
    cross_refs: z
      .array(
        z.object({
          vertical: z.string(),
          issue: z.number().int().positive(),
          reason: z.string(),
        })
      )
      .optional(),
    cover_color: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    issue: z.string(), // slug reference, e.g. "surface-01"
    section_number: z.number(),
    section_marker: z.string().optional(), // §, §∞, Editor's Note, etc.
    title: z.string(),
    summary: z.string(),
    sources: z
      .array(
        z.object({
          type: z.enum(['talk', 'blog-post', 'paper', 'repo', 'spec', 'article']),
          slug: z.string(),
        })
      )
      .optional(),
    concepts: z.array(z.string()).optional(),
    pull_quote: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const sources = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['talk', 'blog-post', 'paper', 'repo', 'spec', 'article']),
    title: z.string(),
    author: z.string().optional(),
    speaker: z.string().optional(),
    venue: z.string().optional(),
    date: z.date().optional(),
    url: z.string().url().optional(),
    excerpt: z.string().optional(),
    key_claims: z.array(z.string()).optional(),
    referenced_in: z.array(z.string()).optional(),
  }),
});

const concepts = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    aliases: z.array(z.string()).optional(),
    short_definition: z.string(),
    first_coined_by: z.string().optional(),
    related: z.array(z.string()).optional(),
    referenced_in: z.array(z.string()).optional(),
  }),
});

export const collections = {
  issues,
  sections,
  sources,
  concepts,
};
