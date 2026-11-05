"use client";

import { useEffect, useRef, useState } from "react";

import { ResumeDocument } from "./ResumeDocument";

const DOC_WIDTH = 612;
const DOC_HEIGHT = 792;

export function ResumePreviewMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / DOC_WIDTH);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden drop-shadow-[0px_4px_8px_rgba(0,0,0,0.05)]"
      style={{ aspectRatio: `${DOC_WIDTH} / ${DOC_HEIGHT}` }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ transform: `scale(${scale})` }}
      >
        <ResumeDocument />
      </div>
    </div>
  );
}
