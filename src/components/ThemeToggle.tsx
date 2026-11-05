"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () => setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    sync();
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggle}
      className={`inline-flex items-center gap-2 font-mono text-[14px] ${className}`}
    >
      <span className={isDark ? "text-text-muted" : "text-foreground-primary"}>Light</span>
      <span className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-border-default bg-surface-default-base transition-colors duration-200">
        <span
          className={`inline-block size-[14px] rounded-full bg-foreground-primary transition-transform duration-200 ${
            isDark ? "translate-x-[18px]" : "translate-x-[3px]"
          }`}
        />
      </span>
      <span className={isDark ? "text-foreground-primary" : "text-text-muted"}>Dark</span>
    </button>
  );
}
