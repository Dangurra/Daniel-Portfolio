"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function GsapHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-hero-item]", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <h1 data-hero-item className="text-4xl font-semibold tracking-tight sm:text-6xl">
        {title}
      </h1>
      {subtitle ? (
        <p data-hero-item className="mt-4 max-w-xl text-lg text-neutral-500">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
