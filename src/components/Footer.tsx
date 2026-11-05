import Image from "next/image";
import Link from "next/link";

import { Icon } from "./ui/Icon";

const SOCIAL_LINKS = [
  { label: "itch.io", href: "https://dangurra.itch.io" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-gur-846499223/" },
  { label: "Instagram", href: "https://www.instagram.com/danlel_gur/" },
];

const SITE_LINKS = [
  { label: "Projects", href: "/#work" },
  { label: "About Me", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1512px] flex-col items-center gap-10 border-t border-border-section px-6 pb-6 pt-8 md:gap-[53px] md:px-14 md:pt-8">
      <div className="bg-brand-highlight">
        <Image
          src="/images/icons/ui/portfolio-signature.svg"
          alt="Daniel Gur"
          width={495}
          height={71}
          className="h-auto w-[260px] md:w-[495px]"
        />
      </div>

      <div className="flex w-full max-w-[1072px] flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
        <div className="flex flex-col items-center gap-3 md:w-[275px]">
          <p className="font-mono text-[12px] text-text-muted">Download</p>
          <Link
            href="/resume"
            className="flex items-center gap-[6px] font-sans text-[14px] text-foreground-link"
          >
            Download résumé
            <Icon name="download" size={16} />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-3 md:w-[275px]">
          <p className="font-mono text-[12px] text-text-muted">Elsewhere</p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-[15px] text-foreground-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 md:w-[275px]">
          <p className="font-mono text-[12px] text-text-muted">Explore</p>
          <div className="flex items-center gap-3 font-sans text-[15px] text-text-link">
            {SITE_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-6 font-sans text-[13px] text-text-muted md:gap-[53px]">
        <p>&copy; {new Date().getFullYear()} Daniel Gur.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
