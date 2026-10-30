"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { PrivateNotice, Tag } from "./ui/Badge";
import { Icon } from "./ui/Icon";

gsap.registerPlugin(useGSAP);

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

function useCardHover() {
  const rootRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return;

    const enter = () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, { scale: 1.06, duration: 0.6, ease: "power3.out" });
      }
      if (arrowRef.current) {
        gsap.to(arrowRef.current, { x: 4, duration: 0.3, ease: "power3.out" });
      }
    };
    const leave = () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, { scale: 1, duration: 0.6, ease: "power3.out" });
      }
      if (arrowRef.current) {
        gsap.to(arrowRef.current, { x: 0, duration: 0.3, ease: "power3.out" });
      }
    };

    root.addEventListener("mouseenter", enter);
    root.addEventListener("mouseleave", leave);
    return () => {
      root.removeEventListener("mouseenter", enter);
      root.removeEventListener("mouseleave", leave);
    };
  });

  return { rootRef, imageRef, arrowRef };
}

export function ProjectRow({ project }: { project: ProjectSummary }) {
  const isPrivate = project.access === "private";
  const { rootRef, imageRef, arrowRef } = useCardHover();

  return (
    <Link
      ref={rootRef}
      href={`/projects/${project.slug}`}
      className="flex w-full flex-col overflow-hidden border border-border-section md:flex-row"
    >
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-[#111] md:h-[340px] md:w-[600px]">
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src={project.banner}
            alt={`${project.company} banner`}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
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
            <span ref={arrowRef} className="inline-flex">
              <Icon name="trailing-arrow" size={16} />
            </span>
          </span>
        )}
      </div>
    </Link>
  );
}

export function ProjectCarouselCard({ project }: { project: ProjectSummary }) {
  const { rootRef, imageRef } = useCardHover();

  return (
    <Link
      ref={rootRef}
      href={`/projects/${project.slug}`}
      className="flex w-[300px] shrink-0 flex-col gap-4 md:w-[420px]"
    >
      <div className="relative h-[200px] w-full overflow-hidden bg-[#111] md:h-[280px]">
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src={project.banner}
            alt={`${project.company} banner`}
            fill
            sizes="(max-width: 768px) 300px, 420px"
            className="object-cover"
          />
        </div>
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
