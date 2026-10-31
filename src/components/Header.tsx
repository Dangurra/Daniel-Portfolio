"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { BracketLink } from "./BracketLink";

gsap.registerPlugin(useGSAP);

const NAV_ITEMS = [
  { label: "About Me", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Download Resume", href: "/resume.pdf" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const hidden = useRef(false);

  useGSAP(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const pastThreshold = y > 96;

      if (goingDown && pastThreshold && !hidden.current) {
        hidden.current = true;
        gsap.to(headerRef.current, { y: "-100%", duration: 0.4, ease: "power3.inOut" });
      } else if ((!goingDown || !pastThreshold) && hidden.current) {
        hidden.current = false;
        gsap.to(headerRef.current, { y: "0%", duration: 0.4, ease: "power3.inOut" });
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-border-section"
    >
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="relative mx-auto w-full max-w-[1512px]">
        <div className="hidden w-full items-center gap-8 px-14 py-8 md:flex">
          <Link href="/" className="shrink-0 bg-brand-highlight px-0 py-0">
            <span className="font-mono text-[24px] leading-none text-text-primary">
              Daniel Gur
            </span>
          </Link>
          <div className="h-px flex-1 bg-surface-default-base" />
          <nav className="flex shrink-0 items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <BracketLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
              />
            ))}
          </nav>
        </div>

        <div className="flex w-full items-center justify-between px-4 py-[18px] md:hidden">
          <Link href="/" className="bg-brand-highlight">
            <span className="font-mono text-[18px] leading-none text-text-primary">
              Daniel Gur
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="font-mono text-[14px] text-foreground-primary"
          >
            [ {open ? "Close" : "Menu"} ]
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border-section bg-white px-4 py-4 md:hidden">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 font-mono text-[14px] text-foreground-primary"
              >
                [ {item.label} ]
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
