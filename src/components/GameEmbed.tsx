"use client";

import { useState } from "react";

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
      className="relative mx-auto flex w-full max-w-[900px] items-center justify-center overflow-hidden bg-[#111]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <FadeImage src={posterSrc} alt={posterAlt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/10" />
      <span className="relative z-10 inline-flex h-12 items-center justify-center gap-2 border border-border-default bg-surface-action px-6 font-mono text-[14px] text-foreground-on-color transition-colors duration-200 hover:bg-[#111111]">
        Play Braze
      </span>
    </button>
  );
}
