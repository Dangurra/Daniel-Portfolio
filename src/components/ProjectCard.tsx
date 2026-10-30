import Image from "next/image";
import Link from "next/link";

import { PrivateNotice, Tag } from "./ui/Badge";
import { Icon } from "./ui/Icon";

export type ProjectSummary = {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  banner: string;
  access: "public" | "private";
};

export function ProjectRow({ project }: { project: ProjectSummary }) {
  const isPrivate = project.access === "private";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex w-full flex-col overflow-hidden border border-border-section md:flex-row"
    >
      <div className="relative h-[280px] w-full shrink-0 bg-[#111] md:h-[460px] md:w-[840px]">
        <Image
          src={project.banner}
          alt={`${project.company} banner`}
          fill
          sizes="(max-width: 768px) 100vw, 840px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6 md:p-12">
        <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted">
          <span>{project.company}</span>
          <span className="text-text-light">·</span>
          <span>{project.period}</span>
          {isPrivate && (
            <Image
              src="/images/icons/ui/private-icon.svg"
              alt=""
              width={14}
              height={14}
            />
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-[26px] leading-[1.2] text-text-primary md:text-[32px]">
            {project.title}
          </h3>
          <p className="font-sans text-[14px] leading-[22px] text-text-secondary">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        {isPrivate ? (
          <PrivateNotice />
        ) : (
          <span className="inline-flex items-center gap-[6px] font-sans text-[14px] font-medium text-foreground-supporting">
            View project
            <Icon name="trailing-arrow" size={16} />
          </span>
        )}
      </div>
    </Link>
  );
}

export function ProjectCarouselCard({ project }: { project: ProjectSummary }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex w-[300px] shrink-0 flex-col gap-4 md:w-[420px]"
    >
      <div className="relative h-[200px] w-full bg-[#111] md:h-[280px]">
        <Image
          src={project.banner}
          alt={`${project.company} banner`}
          fill
          sizes="(max-width: 768px) 300px, 420px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-heading text-[20px] leading-[1.3] text-text-primary">
          {project.title}
        </h4>
        <p className="font-sans text-[13px] leading-[1.4] text-text-secondary">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
