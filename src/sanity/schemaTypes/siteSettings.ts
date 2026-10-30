import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site title", type: "string" }),
    defineField({ name: "tagline", title: "Hero headline", type: "text", rows: 2 }),
    defineField({ name: "specialties", title: "Specialties line", type: "string" }),
    defineField({ name: "bio", title: "Hero bio", type: "text", rows: 4 }),
    defineField({ name: "aboutIntro", title: "About page introduction", type: "text", rows: 8 }),
    defineField({ name: "avatar", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({
      name: "toolCategories",
      title: "Tool categories",
      type: "array",
      of: [
        {
          type: "object",
          name: "toolCategory",
          fields: [
            defineField({ name: "category", title: "Category", type: "string" }),
            defineField({ name: "tools", title: "Tools", type: "array", of: [{ type: "string" }] }),
          ],
        },
      ],
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          type: "object",
          name: "role",
          fields: [
            defineField({ name: "company", title: "Company", type: "string" }),
            defineField({ name: "title", title: "Role title", type: "string" }),
            defineField({ name: "date", title: "Date range", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "logo", title: "Company logo", type: "image" }),
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
