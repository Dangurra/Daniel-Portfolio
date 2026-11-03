import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

const TOOLS_DIR = path.join(process.cwd(), "public/images/icons/tools");

function iconSrc(icon: string) {
  const file = path.join(TOOLS_DIR, `${icon}.png`);
  return fs.existsSync(file) ? `/images/icons/tools/${icon}.png` : "/images/icons/tools/tool-icon.png";
}

export function ToolPill({
  name,
  icon,
  size = "sm",
}: {
  name: string;
  icon: string;
  size?: "sm" | "lg";
}) {
  if (size === "lg") {
    return (
      <div className="inline-flex h-12 items-center gap-[10px] rounded-full border border-[#dddddd] bg-white py-1 pl-1 pr-4">
        <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#ddd] bg-[#f2f2f2]">
          <Image src={iconSrc(icon)} alt="" width={22} height={22} className="object-contain" />
        </span>
        <span className="font-sans text-[16px] font-semibold text-text-primary">{name}</span>
      </div>
    );
  }

  return (
    <div className="inline-flex h-9 items-center gap-[6px] rounded-full border border-[#dddddd] bg-white pl-2 pr-3">
      <span className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-[#f2f2f2]">
        <Image src={iconSrc(icon)} alt="" width={14} height={14} className="object-contain" />
      </span>
      <span className="font-sans text-[14px] font-semibold text-text-primary">{name}</span>
    </div>
  );
}

export function ToolTile({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex w-[96px] flex-col items-center gap-2">
      <span className="flex size-14 items-center justify-center rounded-xl border border-[#ddd] bg-[#f2f2f2] p-3">
        <Image src={iconSrc(icon)} alt="" width={32} height={32} className="object-contain" />
      </span>
      <span className="font-sans text-[12px] text-text-secondary">{name}</span>
    </div>
  );
}
