import Link from "next/link";
import type { ReactNode } from "react";

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
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-surface-action text-foreground-on-color border-border-default",
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
}: ButtonProps) {
  const classes = `inline-flex h-12 items-center justify-center gap-2 border px-4 py-[10px] font-mono text-[14px] transition-opacity hover:opacity-85 disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          size={20}
          tone={iconTone ?? (variant === "primary" ? "light" : "dark")}
        />
      )}
    </>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
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
  const classes = `inline-flex items-center gap-[6px] font-sans text-[14px] font-medium text-foreground-supporting hover:text-foreground-primary ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      <span>{children}</span>
      <Icon name="trailing-arrow" size={16} />
    </a>
  ) : (
    <Link href={href} className={classes}>
      <span>{children}</span>
      <Icon name="trailing-arrow" size={16} />
    </Link>
  );
}
