"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

export function MarqueeRow({
  images,
  heightClass,
  direction = "left",
  speed = 40,
}: {
  images: { src: string; ratio: number; type?: "image" | "video"; poster?: string; alt: string }[];
  heightClass: string;
  direction?: "left" | "right";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const videos = () => Array.from(row.querySelectorAll("video"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videos().forEach((v) => v.play().catch(() => {}));
        } else {
          videos().forEach((v) => v.pause());
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  // Repeated enough times that one full set always exceeds the widest
  // realistic viewport, so the seamless-loop reset point is never visible
  // as a gap on ultra-wide screens.
  const REPEATS = 6;

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const distance = track.scrollWidth / REPEATS;
      const duration = distance / speed;

      gsap.fromTo(
        track,
        { x: direction === "left" ? 0 : -distance },
        {
          x: direction === "left" ? -distance : 0,
          duration,
          ease: "none",
          repeat: -1,
        }
      );
    },
    { scope: trackRef, dependencies: [direction, speed] }
  );

  const repeated = Array.from({ length: REPEATS }, () => images).flat();

  return (
    <div ref={rowRef} className="flex w-full gap-3 overflow-hidden">
      <div ref={trackRef} className="flex gap-3 will-change-transform">
        {repeated.map((img, i) =>
          img.type === "video" ? (
            <div
              key={`${img.src}-${i}`}
              className={`relative shrink-0 overflow-hidden ${heightClass}`}
              style={{ aspectRatio: img.ratio }}
            >
              <video
                src={img.src}
                aria-label={img.alt}
                poster={img.poster}
                preload="none"
                loop
                muted
                playsInline
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          ) : (
            <div
              key={`${img.src}-${i}`}
              className={`relative shrink-0 overflow-hidden ${heightClass}`}
              style={{ aspectRatio: img.ratio }}
            >
              <Image src={img.src} alt={img.alt} fill sizes="500px" className="object-cover" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
