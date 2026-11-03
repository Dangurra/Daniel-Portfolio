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
      [ {label} ]
    </Link>
  );
}
