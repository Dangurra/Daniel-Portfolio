"use client";

import Image from "next/image";
import { useState } from "react";

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
        className="relative mx-auto w-full overflow-hidden bg-[#151515]"
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
      className="relative flex h-[320px] w-full items-center justify-center overflow-hidden bg-[#151515] md:h-[480px]"
    >
      <Image src={posterSrc} alt={posterAlt} fill className="object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/60" />
      <span className="relative z-10 inline-flex h-12 items-center justify-center bg-surface-action px-6 font-mono text-[14px] text-foreground-on-color hover:opacity-85">
        Play Braze
      </span>
    </button>
  );
}
