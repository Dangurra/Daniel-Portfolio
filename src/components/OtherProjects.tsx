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
    <section className="flex w-full flex-col gap-6 border-t border-border-section px-6 py-12 md:gap-8 md:px-14 md:py-16">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
          Other projects
        </h2>
        <p className="font-sans text-[14px] text-text-muted">More from the archive</p>
      </div>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <ProjectCarouselCard key={p.slug} project={p} />
        ))}
      </div>
      {pageCount > 1 && (
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={page === 0}
            className="flex items-center gap-2 font-sans text-[14px] text-text-primary disabled:opacity-30"
          >
            <Icon name="arrow-right" size={14} className="rotate-180" />
            Previous
          </button>
          <p className="font-mono text-[12px] text-text-muted">
            {String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={page === pageCount - 1}
            className="flex items-center gap-2 font-sans text-[14px] text-text-primary disabled:opacity-30"
          >
            Next
            <Icon name="arrow-right" size={14} />
          </button>
        </div>
      )}
    </section>
  );
}
