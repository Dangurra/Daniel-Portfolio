import { client } from "./client";

export async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc, _createdAt desc){
      _id,
      title,
      slug,
      summary,
      coverImage,
      tags,
      liveUrl,
      repoUrl
    }
  `);
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      summary,
      body,
      coverImage,
      tags,
      liveUrl,
      repoUrl
    }`,
    { slug }
  );
}

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0]{
      title,
      tagline,
      bio,
      avatar,
      socialLinks
    }
  `);
}
