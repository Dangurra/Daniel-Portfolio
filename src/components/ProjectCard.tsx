"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

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
  bannerAspect: number;
  carouselBanner: string;
  hoverVideo?: string;
  access: "public" | "private";
};

export function ProjectRow({ project }: { project: ProjectSummary }) {
  const isPrivate = project.access === "private";
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex w-full flex-col overflow-hidden border border-border-section bg-white transition-colors duration-200 hover:border-foreground-primary hover:bg-[#fafafa] md:flex-row"
      onMouseEnter={() => {
        setHovering(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setHovering(false);
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }}
    >
      <div
        className="relative w-full shrink-0 overflow-hidden bg-[#111] md:w-[840px]"
        style={{ aspectRatio: project.bannerAspect }}
      >
        <Image
          src={project.banner}
          alt={`${project.company} banner`}
          fill
          sizes="(max-width: 768px) 100vw, 840px"
          className="object-cover"
        />
        {project.hoverVideo && (
          <video
            ref={videoRef}
            src={project.hoverVideo}
            muted
            loop
            playsInline
            className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${hovering ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>
      <div className="flex w-full flex-col gap-5 p-6 md:w-[560px] md:shrink-0 md:basis-auto md:p-12">
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
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-[22px] leading-[1.2] text-text-primary md:text-[26px]">
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
            <span className="inline-flex">
              <Icon name="trailing-arrow" size={16} />
            </span>
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
      <div className="relative aspect-[3/2] w-full overflow-hidden border border-[#d9d9d9] bg-[#f2f2f2]">
        <Image
          src={project.carouselBanner}
          alt={`${project.company} banner`}
          fill
          sizes="(max-width: 768px) 300px, 420px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-heading text-[24px] leading-[1.15] text-text-primary md:text-[28px]">
          {project.company}
        </h4>
        <p className="line-clamp-2 font-sans text-[13px] leading-[1.5] text-text-secondary">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
