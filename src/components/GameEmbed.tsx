"use client";

import { useEffect, useState } from "react";

import { FadeImage } from "./FadeImage";

export function GameEmbed({
  embedUrl,
  posterSrc,
  posterAlt,
  width = 960,
  height = 600,
}: {
  embedUrl: string;
  posterSrc: string;
  posterAlt: string;
  width?: number;
  height?: number;
}) {
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (playing) {
    return (
      <div
        className="relative mx-auto w-full max-w-[900px] overflow-hidden bg-[#151515]"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <iframe
          src={embedUrl}
          title={posterAlt}
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      disabled={isMobile}
      aria-disabled={isMobile}
      className="relative mx-auto flex w-full max-w-[900px] items-center justify-center overflow-hidden bg-[#111] disabled:cursor-not-allowed disabled:grayscale"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <FadeImage src={posterSrc} alt={posterAlt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40 md:bg-black/10" />
      <span className="relative z-10 inline-flex h-12 items-center justify-center gap-2 border border-border-default bg-surface-action px-6 font-mono text-[14px] text-foreground-on-color opacity-60 transition-colors duration-200 md:opacity-100 md:hover:bg-[#111111]">
        <span className="md:hidden">Desktop only</span>
        <span className="hidden md:inline">Play Braze</span>
      </span>
    </button>
  );
}
