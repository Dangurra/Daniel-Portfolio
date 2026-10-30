import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ContactEnding } from "@/components/ContactEnding";
import { OtherProjects } from "@/components/OtherProjects";
import { Reveal } from "@/components/Reveal";
import { Button, IconLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Badge";
import { getOtherProjects, getProject, projects } from "@/lib/projects-data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Daniel Gur` : "Project — Daniel Gur" };
}

function ResponsiveImage({
  laptop,
  mobile,
  alt,
  className = "",
}: {
  laptop: string;
  mobile: string;
  alt: string;
  className?: string;
}) {
  return (
    <div>
      <Image
        src={laptop}
        alt={alt}
        width={1400}
        height={800}
        className={`hidden w-full md:block ${className}`}
      />
      <Image
        src={mobile}
        alt={alt}
        width={700}
        height={500}
        className={`block w-full md:hidden ${className}`}
      />
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = getOtherProjects(project.slug);

  return (
    <>
      <Reveal
        as="section"
        y={16}
        className="flex w-full flex-col gap-10 px-6 pb-10 pt-10 md:px-14 md:pb-12 md:pt-12"
      >
        <IconLink href="/#work">Back to work</IconLink>
        <div className="flex flex-col gap-4 md:max-w-[620px]">
          <h1 className="font-heading text-[36px] leading-[1.2] text-text-primary md:text-[48px]">
            {project.title}
          </h1>
          <p className="font-sans text-[16px] leading-[24px] text-text-secondary">
            {project.description}
          </p>
        </div>
      </Reveal>

      {project.type === "locked" ? (
        <LockedProjectBody project={project} />
      ) : (
        <StandardProjectBody project={project} />
      )}

      <OtherProjects projects={otherProjects} />
      <ContactEnding />
    </>
  );
}

function StandardProjectBody({ project }: { project: ReturnType<typeof getProject> }) {
  if (!project) return null;

  return (
    <>
      <Reveal as="section" y={24} className="w-full px-6 md:px-14">
        <ResponsiveImage {...project.lander} alt={`${project.title} hero`} />
      </Reveal>

      <Reveal
        as="section"
        targets=":scope > div"
        y={18}
        className="flex w-full flex-col gap-10 border-t border-border-section px-6 py-12 md:flex-row md:gap-16 md:px-14 md:py-16"
      >
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="font-heading text-[26px] text-text-primary md:text-[32px]">
            About the project
          </h2>
          <p className="max-w-[760px] font-sans text-[16px] leading-[26px] text-text-secondary">
            {project.body}
          </p>
        </div>
        <div className="flex w-full flex-col gap-8 md:w-[398px]">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[12px] uppercase text-text-muted">Tools</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Tag key={tool} label={tool} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[12px] uppercase text-text-muted">Company</p>
            <p className="font-sans text-[15px] text-text-primary">{project.company}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[12px] uppercase text-text-muted">Year</p>
            <p className="font-sans text-[15px] text-text-primary">{project.period}</p>
          </div>
          {project.liveUrl && (
            <Button href={project.liveUrl} external>
              {project.type === "game" ? "Play on itch.io" : "Visit live site"}
            </Button>
          )}
        </div>
      </Reveal>

      {project.type === "game" && <GameShell project={project} />}

      {project.gallery.map((section) => (
        <section
          key={section.title}
          className="flex w-full flex-col gap-6 border-t border-border-section px-6 py-12 md:gap-8 md:px-14 md:py-16"
        >
          <h2 className="font-heading text-[26px] text-text-primary md:text-[32px]">
            {section.title}
          </h2>
          <Reveal targets=":scope > div" y={20} className="flex flex-col gap-4">
            {section.images.map((img, i) => (
              <ResponsiveImage key={i} {...img} />
            ))}
          </Reveal>
        </section>
      ))}
    </>
  );
}

function GameShell({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  return (
    <section className="w-full border-t border-border-section px-6 py-12 md:px-14 md:py-16">
      <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden bg-[#151515] md:h-[480px]">
        <Image
          src={project.lander.laptop}
          alt="Braze game artwork"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/60" />
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 inline-flex h-12 items-center justify-center bg-surface-action px-6 font-mono text-[14px] text-foreground-on-color hover:opacity-85"
        >
          Play Braze on itch.io
        </a>
      </div>
    </section>
  );
}

function LockedProjectBody({ project }: { project: ReturnType<typeof getProject> }) {
  if (!project) return null;

  return (
    <section className="w-full px-6 py-12 md:px-14 md:py-16">
      <div className="relative flex h-[420px] w-full flex-col items-center justify-center gap-4 overflow-hidden border border-border-section md:h-[620px]">
        <Image
          src={project.lander.laptop}
          alt=""
          fill
          className="object-cover blur-xl scale-110"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <Image
            src="/images/icons/ui/private-icon.svg"
            alt=""
            width={24}
            height={24}
          />
          <p className="font-sans text-[16px] font-medium text-text-primary">
            Private — under contract
          </p>
          <p className="max-w-[380px] font-sans text-[14px] text-text-secondary">
            {project.body}
          </p>
        </div>
      </div>
    </section>
  );
}
