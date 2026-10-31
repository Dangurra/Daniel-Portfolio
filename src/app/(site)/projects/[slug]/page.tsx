import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ContactEnding } from "@/components/ContactEnding";
import { OtherProjects } from "@/components/OtherProjects";
import { ProjectNav } from "@/components/ProjectNav";
import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/RichText";
import { ToolPill } from "@/components/ToolPill";
import { Button } from "@/components/ui/Button";
import { getAdjacentProjects, getOtherProjects, getProject, projects } from "@/lib/projects-data";

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
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <Reveal
        as="section"
        y={16}
        className="flex w-full flex-col gap-10 px-6 pb-10 pt-10 md:px-14 md:pb-12 md:pt-12"
      >
        <ProjectNav previousSlug={previous?.slug} nextSlug={next?.slug} />
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-col gap-4 md:max-w-[620px]">
            <h1 className="font-heading text-[36px] leading-[1.2] text-text-primary md:text-[48px]">
              {project.pageHeading ?? project.company}
            </h1>
            <p className="font-sans text-[16px] leading-[24px] text-text-secondary">
              {project.description}
            </p>
          </div>
          {project.type === "locked" && (
            <p className="shrink-0 font-mono text-[13px] text-text-muted">
              [ Private case study ]
            </p>
          )}
        </div>
      </Reveal>

      {project.type === "locked" ? (
        <LockedProjectBody project={project} />
      ) : (
        <StandardProjectBody project={project} />
      )}

      <section className="w-full px-6 md:px-14">
        <ProjectNav previousSlug={previous?.slug} nextSlug={next?.slug} showToTop />
      </section>

      <OtherProjects projects={otherProjects} />
      <ContactEnding />
    </>
  );
}

function StandardProjectBody({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
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
        <div className="flex flex-1 flex-col gap-14">
          {project.sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              {section.title && (
                <h2 className="font-heading text-[28px] text-text-primary md:text-[34px]">
                  {section.title}
                </h2>
              )}
              <div className="flex max-w-[760px] flex-col gap-4 font-sans text-[15px] leading-[1.55] text-text-secondary">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full shrink-0 flex-col gap-5 border-t border-border-section pt-8 md:w-[398px] md:border-t-0 md:border-l md:pl-[86px] md:pt-0">
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center justify-between">
              <p className="font-sans text-[18px] font-semibold text-text-primary">Tools</p>
              <p className="font-sans text-[10px] font-medium uppercase tracking-wide text-text-muted">
                {project.tools.length} Tools
              </p>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              {project.tools.map((tool) => (
                <ToolPill key={tool.name} name={tool.name} icon={tool.icon} />
              ))}
            </div>
          </div>
          {project.skills && (
            <div className="flex flex-col gap-[6px]">
              <p className="font-sans text-[11px] text-text-secondary">Skills</p>
              <p className="font-sans text-[14px] text-text-primary">{project.skills}</p>
            </div>
          )}
          {project.timeline && (
            <div className="flex flex-col gap-[6px]">
              <p className="font-sans text-[11px] text-text-secondary">Timeline</p>
              <p className="font-sans text-[14px] text-text-primary">{project.timeline}</p>
            </div>
          )}
          {project.role && (
            <div className="flex flex-col gap-[6px]">
              <p className="font-sans text-[11px] text-text-secondary">Role</p>
              <p className="font-sans text-[14px] text-text-primary">{project.role}</p>
            </div>
          )}
          {project.collaborators && (
            <div className="flex flex-col gap-[6px]">
              <p className="font-sans text-[11px] text-text-secondary">Collaborators</p>
              <p className="font-sans text-[14px] text-text-primary">{project.collaborators}</p>
            </div>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} external className="w-full">
              {project.visitLabel}
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
    <section className="flex w-full flex-col gap-6 border-t border-border-section px-6 py-12 md:gap-8 md:px-14 md:py-16">
      <h2 className="font-heading text-[26px] text-text-primary md:text-[32px]">
        Playable Game (On PC/MAC)
      </h2>
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

function LockedProjectBody({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  return (
    <section className="w-full px-6 py-12 md:px-14 md:py-16">
      <div className="relative flex h-[420px] w-full flex-col items-center justify-center gap-4 overflow-hidden border border-border-section bg-[#ececec] md:h-[620px]">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] grayscale">
          <Image
            src={project.banner}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <Image
            src="/images/icons/ui/private-icon.svg"
            alt=""
            width={24}
            height={24}
          />
          <p className="font-sans text-[16px] font-medium text-text-primary">
            Private content
          </p>
          <p className="max-w-[380px] font-sans text-[14px] text-text-secondary">
            This case study is locked and not available for public viewing.
          </p>
        </div>
      </div>
    </section>
  );
}
