import { ProjectCarouselCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import type { Project } from "@/lib/projects-data";

export function OtherProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="flex w-full flex-col gap-6 border-t border-border-section px-6 py-12 md:gap-8 md:px-14 md:py-16">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
          Other projects
        </h2>
        <p className="font-sans text-[14px] text-text-muted">More from the archive</p>
      </div>
      <Reveal
        targets=":scope > a"
        stagger={0.06}
        y={16}
        className="flex gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <ProjectCarouselCard key={p.slug} project={p} />
        ))}
      </Reveal>
    </section>
  );
}
