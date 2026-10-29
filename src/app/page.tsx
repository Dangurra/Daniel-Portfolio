import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { GsapHero } from "@/components/GsapHero";
import { getProjects } from "@/sanity/lib/queries";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  summary?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

async function fetchProjects(): Promise<Project[]> {
  try {
    return await getProjects();
  } catch {
    // Sanity project not configured yet — render without CMS content.
    return [];
  }
}

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-24">
      <GsapHero
        title="Daniel Gur"
        subtitle="Building things on the web. This is a work in progress — projects below are pulled live from Sanity."
      />

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Projects
        </h2>
        {projects.length === 0 ? (
          <p className="mt-4 text-neutral-500">
            No projects yet — add some in the{" "}
            <Link href="/studio" className="underline underline-offset-4">
              Sanity Studio
            </Link>
            .
          </p>
        ) : (
          <ul className="mt-6 flex flex-col gap-8">
            {projects.map((project) => (
              <li key={project._id}>
                <h3 className="text-xl font-medium">{project.title}</h3>
                {project.summary ? (
                  <p className="mt-1 text-neutral-500">{project.summary}</p>
                ) : null}
                <div className="mt-2 flex gap-4 text-sm">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4"
                    >
                      Live
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4"
                    >
                      Code
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          Contact
        </h2>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
