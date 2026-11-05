"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import { ProjectCarouselCard } from "./ProjectCard";
import { Icon } from "./ui/Icon";
import type { Project } from "@/lib/projects-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CARD_WIDTH = 420;
const MOBILE_CARD_WIDTH = 300;
const GAP = 24;
const PER_PAGE_DESKTOP = 3;

export function OtherProjects({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [needsScroll, setNeedsScroll] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const perPage = isMobile ? 1 : PER_PAGE_DESKTOP;
  const pageCount = Math.max(1, Math.ceil(projects.length / perPage));

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setIsMobile(mq.matches);
      setPage(0);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const check = () => setNeedsScroll(track.scrollWidth > track.clientWidth + 1);
    check();

    const observer = new ResizeObserver(check);
    observer.observe(track);
    window.addEventListener("resize", check);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [projects.length]);

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
    const cardWidth = isMobile ? MOBILE_CARD_WIDTH : CARD_WIDTH;
    track.scrollTo({
      left: next * (cardWidth + GAP) * perPage,
      behavior: "smooth",
    });
  }

  return (
    <section className="flex w-full flex-col gap-6 px-6 pb-14 pt-12 md:gap-8 md:px-14 md:pb-14 md:pt-[88px]">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
          Other projects
        </h2>
        <p className="font-sans text-[12px] leading-[18px] text-text-muted md:text-[14px] md:leading-normal">
          Explore more work across product design, illustration, and visual systems.
        </p>
      </div>
      <div
        ref={trackRef}
        className={`relative left-1/2 right-1/2 -mx-[50vw] flex w-screen gap-6 overflow-x-auto pb-2 pl-6 pr-6 [&::-webkit-scrollbar]:hidden md:pl-14 md:pr-14 ${
          needsScroll ? "justify-start" : "justify-center"
        }`}
      >
        {projects.map((p) => (
          <ProjectCarouselCard key={p.slug} project={p} />
        ))}
      </div>
      {needsScroll && pageCount > 1 && (
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
