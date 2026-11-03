import Link from "next/link";

import { Icon } from "./ui/Icon";

export function GoHomeLink() {
  return (
    <Link
      href="/"
      className="flex w-fit items-center gap-[6px] -mx-2 -my-1 px-2 py-1 font-mono text-[14px] text-foreground-primary transition-colors duration-200 hover:bg-[#f5f5f5] hover:text-surface-action"
    >
      <Icon name="arrow-left" size={16} />
      Go Home
    </Link>
  );
}
