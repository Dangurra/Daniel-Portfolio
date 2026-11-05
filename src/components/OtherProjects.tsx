"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

import { ProjectCarouselCard } from "./ProjectCard";
import { Icon } from "./ui/Icon";
import type { Project } from "@/lib/projects-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CARD_WIDTH = 420;
const GAP = 24;
const PER_PAGE_DESKTOP = 3;

export function OtherProjects({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(projects.length / PER_PAGE_DESKTOP));

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const cards = trackRef.current?.querySelectorAll(":scope > a");
      if (!cards || cards.length === 0) return;

      gsap.set(cards, { opacity: 0, y: 16 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: trackRef.current, start: "top 85%", once: true },
      });
    },
    { scope: trackRef }
  );

  function go(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.min(Math.max(page + direction, 0), pageCount - 1);
    setPage(next);
    track.scrollTo({
      left: next * (CARD_WIDTH + GAP) * PER_PAGE_DESKTOP,
      behavior: "smooth",
    });
  }

  return (
    <section className="flex w-full flex-col gap-6 px-6 pb-14 pt-12 md:gap-8 md:px-14 md:pb-14 md:pt-[88px]">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
          Other projects
        </h2>
        <p className="font-sans text-[14px] text-text-muted">
          Explore more work across product design, illustration, and visual systems.
        </p>
      </div>
      <div
        ref={trackRef}
        className="relative left-1/2 right-1/2 -mx-[50vw] flex w-screen gap-6 overflow-x-auto pb-2 pl-6 pr-6 [&::-webkit-scrollbar]:hidden md:pl-14 md:pr-14 min-[1513px]:static min-[1513px]:left-auto min-[1513px]:right-auto min-[1513px]:mx-0 min-[1513px]:w-full min-[1513px]:pl-0 min-[1513px]:pr-0"
      >
        {projects.map((p) => (
          <ProjectCarouselCard key={p.slug} project={p} />
        ))}
      </div>
      {pageCount > 1 && (
        <div className="flex w-full items-center justify-between">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={page === 0}
            className="flex items-center gap-[6px] -mx-2 -my-1 px-2 py-1 font-mono text-[14px] text-foreground-primary transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-surface-action disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground-primary"
          >
            <Icon name="arrow-left" size={16} />
            Previous
          </button>
          <p className="font-mono text-[12px] text-text-muted">
            {String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={page === pageCount - 1}
            className="flex items-center gap-[6px] -mx-2 -my-1 px-2 py-1 font-mono text-[14px] text-foreground-primary transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-surface-action disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground-primary"
          >
            Next
            <Icon name="arrow-right" size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
