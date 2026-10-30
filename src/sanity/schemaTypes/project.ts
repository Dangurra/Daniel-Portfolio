import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "period", title: "Period", type: "string" }),
    defineField({ name: "description", title: "Card description", type: "text", rows: 2 }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "banner", title: "Banner image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "access",
      title: "Access",
      type: "string",
      options: { list: ["public", "private"] },
      initialValue: "public",
    }),
    defineField({
      name: "projectType",
      title: "Project type",
      type: "string",
      options: { list: ["standard", "game", "locked"] },
      initialValue: "standard",
    }),
    defineField({ name: "landerLaptop", title: "Lander image (laptop)", type: "image" }),
    defineField({ name: "landerMobile", title: "Lander image (mobile)", type: "image" }),
    defineField({ name: "body", title: "Body copy", type: "text", rows: 6 }),
    defineField({
      name: "tools",
      title: "Tools used",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({
      name: "gallery",
      title: "Gallery sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "gallerySection",
          fields: [
            defineField({ name: "title", title: "Section title", type: "string" }),
            defineField({
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "galleryImage",
                  fields: [
                    defineField({ name: "laptop", title: "Laptop image", type: "image" }),
                    defineField({ name: "mobile", title: "Mobile image", type: "image" }),
                    defineField({ name: "alt", title: "Alt text", type: "string" }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: {
    select: { title: "title", media: "banner" },
  },
});
