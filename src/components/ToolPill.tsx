import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

const TOOLS_DIR = path.join(process.cwd(), "public/images/icons/tools");

function iconSrc(icon: string) {
  const file = path.join(TOOLS_DIR, `${icon}.png`);
  return fs.existsSync(file) ? `/images/icons/tools/${icon}.png` : "/images/icons/tools/tool-icon.png";
}

export function ToolPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border-default px-2 py-2 pr-3">
      <span className="flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full">
        <Image src={iconSrc(icon)} alt="" width={20} height={20} className="object-contain" />
      </span>
      <span className="font-sans text-[14px] text-text-supporting">{name}</span>
    </div>
  );
}

export function ToolTile({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex w-[96px] flex-col items-center gap-2">
      <span className="flex size-14 items-center justify-center">
        <Image src={iconSrc(icon)} alt="" width={56} height={56} className="object-contain" />
      </span>
      <span className="font-sans text-[12px] text-text-secondary">{name}</span>
    </div>
  );
}
