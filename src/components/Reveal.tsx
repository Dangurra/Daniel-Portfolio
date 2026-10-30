"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode, type Ref } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  /** CSS selector (relative to the wrapper) for the items to stagger. Defaults to direct children. */
  targets?: string;
  stagger?: number;
  y?: number;
  as?: "div" | "section";
  className?: string;
};

export function Reveal({
  children,
  targets = ":scope > *",
  stagger = 0.08,
  y = 28,
  as = "div",
  className,
}: RevealProps) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const els = container.current?.querySelectorAll(targets);
      if (!els || els.length === 0) return;

      gsap.set(els, { opacity: 0, y });
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: container }
  );

  const Tag = as;
  return (
    <Tag ref={container as Ref<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
