"use client";

import Link from "next/link";

import { Icon } from "./ui/Icon";

function NavSide({
  slug,
  direction,
}: {
  slug: string;
  direction: "previous" | "next";
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="flex items-center gap-[6px] -mx-2 -my-1 px-2 py-1 font-mono text-[14px] text-foreground-primary transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-surface-action"
    >
      {direction === "previous" && (
        <span className="inline-flex">
          <Icon name="arrow-left" size={16} />
        </span>
      )}
      <span>{direction === "previous" ? "Previous project" : "Next project"}</span>
      {direction === "next" && (
        <span className="inline-flex">
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
          className="flex items-center gap-[6px] -mx-2 -my-1 px-2 py-1 font-mono text-[14px] text-foreground-primary transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-surface-action"
        >
          <Icon name="arrow-left" size={16} className="rotate-90" />
          <span>To Top</span>
        </button>
      )}
      {nextSlug ? <NavSide slug={nextSlug} direction="next" /> : <span />}
    </div>
  );
}
