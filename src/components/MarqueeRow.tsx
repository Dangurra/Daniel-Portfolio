"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function MarqueeRow({
  images,
  heightClass,
  direction = "left",
  speed = 40,
}: {
  images: string[];
  heightClass: string;
  direction?: "left" | "right";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const distance = track.scrollWidth / 2;
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

  const doubled = [...images, ...images];

  return (
    <div className="flex w-full gap-3 overflow-hidden">
      <div ref={trackRef} className="flex gap-3 will-change-transform">
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`relative aspect-[4/3] shrink-0 overflow-hidden ${heightClass}`}
          >
            <Image src={src} alt="" fill sizes="500px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
