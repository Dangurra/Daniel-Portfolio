"use client";

import Link from "next/link";
import { type ReactNode } from "react";

import { Icon, type IconName } from "./Icon";

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
  align?: "center" | "start";
  onClick?: () => void;
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-surface-action text-foreground-on-color border-border-default transition-colors duration-200 hover:bg-[#111111]",
  secondary: "bg-transparent text-foreground-primary border-border-default",
};

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
  align = "center",
  onClick,
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const resolvedTone = iconTone ?? (isPrimary ? "light" : "dark");
  const invertsOnHover = !isPrimary && resolvedTone === "light";

  const classes = `group inline-flex h-12 items-center ${align === "start" ? "justify-between" : "justify-center"} gap-2 border px-4 py-[10px] font-mono text-[14px] disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span
          className={`inline-flex ${invertsOnHover ? "transition-[filter] duration-200 group-hover:brightness-0 group-hover:invert-0" : ""}`}
        >
          <Icon name={icon} size={18} tone={resolvedTone} />
        </span>
      )}
    </>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={classes} onClick={onClick}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
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
  const classes = `relative inline-flex w-fit items-center gap-[6px] font-sans text-[14px] font-medium text-foreground-supporting transition-colors duration-200 hover:text-foreground-primary ${className}`;

  const content = (
    <>
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      <span className="inline-flex">
        <Icon name="trailing-arrow" size={16} />
      </span>
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={`group ${classes}`}>
      {content}
    </a>
  ) : (
    <Link href={href} className={`group ${classes}`}>
      {content}
    </Link>
  );
}
