"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function BracketLink({
  href,
  label,
  active = false,
  onClick,
  className = "",
  revealDelay = 0,
}: {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  revealDelay?: number;
}) {
  const rootRef = useRef<HTMLAnchorElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.fromTo(
      root,
      { opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.7,
        delay: revealDelay,
        ease: "power2.out",
      }
    );

    if (active) return;

    const enter = () => {
      gsap.to(leftRef.current, { x: -3, duration: 0.25, ease: "power3.out" });
      gsap.to(rightRef.current, { x: 3, duration: 0.25, ease: "power3.out" });
    };
    const leave = () => {
      gsap.to(leftRef.current, { x: 0, duration: 0.25, ease: "power3.out" });
      gsap.to(rightRef.current, { x: 0, duration: 0.25, ease: "power3.out" });
    };

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
      href={href}
      onClick={onClick}
      className={`inline-block px-[6px] py-[2px] font-mono text-[13px] ${
        active
          ? "bg-surface-action text-foreground-on-color"
          : "text-foreground-primary"
      } ${className}`}
    >
      <span ref={leftRef} className="inline-block">
        [
      </span>{" "}
      {label}{" "}
      <span ref={rightRef} className="inline-block">
        ]
      </span>
    </Link>
  );
}
