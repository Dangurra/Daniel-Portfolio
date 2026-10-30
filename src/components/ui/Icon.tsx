import Image from "next/image";

const ICONS = {
  "trailing-arrow": "/images/icons/ui/trailing-icon.svg",
  "arrow-right": "/images/icons/ui/arrow-right.svg",
  private: "/images/icons/ui/private-icon.svg",
  "status-dot": "/images/icons/ui/status-dot.svg",
  download: "/images/icons/ui/download-icon.svg",
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 16,
  className = "",
  tone = "dark",
}: {
  name: IconName;
  size?: number;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Image
      src={ICONS[name]}
      alt=""
      width={size}
      height={size}
      className={`${tone === "light" ? "invert" : ""} ${className}`}
    />
  );
}
