"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "About Me", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Download Resume", href: "/resume.pdf" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mx-auto w-full max-w-[1512px]">
      <div className="hidden w-full items-center gap-8 px-14 py-8 md:flex">
        <Link href="/" className="shrink-0 bg-brand-highlight px-0 py-0">
          <span className="font-mono text-[24px] leading-none text-text-primary">
            Daniel Gur
          </span>
        </Link>
        <div className="h-px flex-1 bg-surface-default-base" />
        <nav className="flex shrink-0 items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "bg-surface-action px-2 py-1 font-mono text-[16px] text-foreground-on-color"
                    : "font-mono text-[16px] text-foreground-primary hover:opacity-70"
                }
              >
                [ {item.label} ]
              </Link>
            );
          })}
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
        <nav className="flex flex-col gap-1 border-t border-border-section px-4 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-[16px] text-foreground-primary"
            >
              [ {item.label} ]
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
