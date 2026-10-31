"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

import { Icon } from "./ui/Icon";

gsap.registerPlugin(useGSAP);

function NavSide({
  slug,
  direction,
}: {
  slug: string;
  direction: "previous" | "next";
}) {
  const rootRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    const icon = iconRef.current;
    if (!root || !icon) return;

    const dx = direction === "previous" ? -4 : 4;
    const enter = () => gsap.to(icon, { x: dx, duration: 0.3, ease: "power3.out" });
    const leave = () => gsap.to(icon, { x: 0, duration: 0.3, ease: "power3.out" });

    root.addEventListener("mouseenter", enter);
    root.addEventListener("mouseleave", leave);
    return () => {
      root.removeEventListener("mouseenter", enter);
      root.removeEventListener("mouseleave", leave);
    };
  });

  return (
    <Link
      ref={rootRef}
      href={`/projects/${slug}`}
      className="flex items-center gap-[6px] font-mono text-[14px] text-foreground-primary"
    >
      {direction === "previous" && (
        <span ref={iconRef} className="inline-flex">
          <Icon name="arrow-left" size={16} />
        </span>
      )}
      <span>{direction === "previous" ? "Previous project" : "Next project"}</span>
      {direction === "next" && (
        <span ref={iconRef} className="inline-flex">
          <Icon name="arrow-right" size={16} />
        </span>
      )}
    </Link>
  );
}

export function ProjectNav({
  previousSlug,
  nextSlug,
  showToTop = false,
}: {
  previousSlug?: string;
  nextSlug?: string;
  showToTop?: boolean;
}) {
  return (
    <div className="flex w-full items-center justify-between">
      {previousSlug ? <NavSide slug={previousSlug} direction="previous" /> : <span />}
      {showToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-[6px] font-mono text-[14px] text-foreground-primary"
        >
          <Icon name="arrow-left" size={16} className="rotate-90" />
          <span>To Top</span>
        </button>
      )}
      {nextSlug ? <NavSide slug={nextSlug} direction="next" /> : <span />}
    </div>
  );
}
