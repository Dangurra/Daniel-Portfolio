"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

import { Icon, type IconName } from "./Icon";

gsap.registerPlugin(useGSAP);

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  icon?: IconName | null;
  iconTone?: "dark" | "light";
  disabled?: boolean;
  className?: string;
  external?: boolean;
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-surface-action text-foreground-on-color border-border-default",
  secondary: "bg-transparent text-foreground-primary border-border-default",
};

function useButtonMotion(iconRef: React.RefObject<HTMLSpanElement | null>) {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const root = rootRef.current;
    const icon = iconRef.current;
    if (!root) return;

    const enter = () => {
      gsap.to(root, { scale: 1.035, duration: 0.3, ease: "power3.out" });
      if (icon) gsap.to(icon, { x: 4, duration: 0.3, ease: "power3.out" });
    };
    const leave = () => {
      gsap.to(root, { scale: 1, duration: 0.3, ease: "power3.out" });
      if (icon) gsap.to(icon, { x: 0, duration: 0.3, ease: "power3.out" });
    };
    const down = () => gsap.to(root, { scale: 0.97, duration: 0.15, ease: "power2.out" });
    const up = () => gsap.to(root, { scale: 1.035, duration: 0.2, ease: "back.out(2)" });

    root.addEventListener("mouseenter", enter);
    root.addEventListener("mouseleave", leave);
    root.addEventListener("mousedown", down);
    root.addEventListener("mouseup", up);

    return () => {
      root.removeEventListener("mouseenter", enter);
      root.removeEventListener("mouseleave", leave);
      root.removeEventListener("mousedown", down);
      root.removeEventListener("mouseup", up);
    };
  });

  return rootRef;
}

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  icon = "trailing-arrow",
  iconTone,
  disabled = false,
  className = "",
  external = false,
}: ButtonProps) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const rootRef = useButtonMotion(iconRef);

  const classes = `inline-flex h-12 items-center justify-center gap-2 border px-4 py-[10px] font-mono text-[14px] disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span ref={iconRef} className="inline-flex">
          <Icon
            name={icon}
            size={20}
            tone={iconTone ?? (variant === "primary" ? "light" : "dark")}
          />
        </span>
      )}
    </>
  );

  if (href) {
    return external ? (
      <a
        ref={rootRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {content}
      </a>
    ) : (
      <Link
        ref={rootRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={rootRef as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}

export function IconLink({
  children,
  href,
  external = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const rootRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    const icon = iconRef.current;
    const underline = underlineRef.current;
    if (!root) return;

    gsap.set(underline, { scaleX: 0, transformOrigin: "left center" });

    const enter = () => {
      if (icon) gsap.to(icon, { x: 4, duration: 0.3, ease: "power3.out" });
      if (underline) gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power3.out" });
    };
    const leave = () => {
      if (icon) gsap.to(icon, { x: 0, duration: 0.3, ease: "power3.out" });
      if (underline) gsap.to(underline, { scaleX: 0, duration: 0.25, ease: "power3.in" });
    };

    root.addEventListener("mouseenter", enter);
    root.addEventListener("mouseleave", leave);
    return () => {
      root.removeEventListener("mouseenter", enter);
      root.removeEventListener("mouseleave", leave);
    };
  });

  const classes = `relative inline-flex w-fit items-center gap-[6px] font-sans text-[14px] font-medium text-foreground-supporting hover:text-foreground-primary ${className}`;

  const content = (
    <>
      <span className="relative">
        {children}
        <span
          ref={underlineRef}
          className="absolute -bottom-[2px] left-0 h-px w-full bg-foreground-primary"
        />
      </span>
      <span ref={iconRef} className="inline-flex">
        <Icon name="trailing-arrow" size={16} />
      </span>
    </>
  );

  return external ? (
    <a ref={rootRef} href={href} target="_blank" rel="noreferrer" className={classes}>
      {content}
    </a>
  ) : (
    <Link ref={rootRef} href={href} className={classes}>
      {content}
    </Link>
  );
}
