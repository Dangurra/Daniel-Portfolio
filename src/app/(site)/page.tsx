import Image from "next/image";
import Link from "next/link";

import { ContactEnding } from "@/components/ContactEnding";
import { MarqueeRow } from "@/components/MarqueeRow";
import { ProjectRow } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { AvailabilityBadge } from "@/components/ui/Badge";
import { Button, IconLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/lib/site-data";
import { getHomeOrderedProjects } from "@/lib/projects-data";

const COMPANIES_ROW_1: { name: string; wordmark: string | null; width?: number }[] = [
  { name: "SambaNova", wordmark: "/images/about/logos/sambanova-logo.webp" },
  { name: "Poseidon", wordmark: "/images/about/logos/poseidon-logo.webp" },
  { name: "Tex Software", wordmark: "/images/about/logos/tex-software-logo.webp", width: 190 },
];

const COMPANIES_ROW_2: { name: string; wordmark: string | null; width?: number }[] = [
  { name: "Albacore", wordmark: "/images/about/logos/albacore-logo.webp" },
  { name: "Plaid Again", wordmark: "/images/about/logos/plaid-again-logo.webp" },
  { name: "Tara Mind", wordmark: "/images/about/logos/tara-mind-logo.webp" },
  { name: "ConnexPay", wordmark: "/images/about/logos/connexpay-logo.webp" },
];

type RailImage = { slug?: string; src?: string; ratio: number; video?: boolean };
type Rail = { heightClass: string; images: RailImage[] };

const OTHER_WORK_RAILS_RAW: Rail[] = [
  {
    heightClass: "h-[220px] md:h-[340px]",
    images: [
      { src: "/videos/other-work/plan-it.mp4", ratio: 1208 / 680, video: true },
      { slug: "buddy-phones", ratio: 1400 / 921 },
      { slug: "buddy-dna-packaging", ratio: 1400 / 933 },
      { src: "/videos/other-work/space-marine.mp4", ratio: 506 / 900, video: true },
      { slug: "teros-mockup", ratio: 1400 / 787 },
      { src: "/videos/generated-landscape.mp4", ratio: 1052 / 700, video: true },
    ],
  },
  {
    heightClass: "h-[240px] md:h-[380px]",
    images: [
      { slug: "privacy-poster", ratio: 934 / 1400 },
      { slug: "come-together-red", ratio: 1400 / 989 },
      { slug: "orange-landscape-illustration", ratio: 1400 / 1081 },
      { src: "/videos/other-work/screwdriver.mp4", ratio: 1268 / 760, video: true },
      { slug: "sambanova-illustration", ratio: 1400 / 938 },
    ],
  },
  {
    heightClass: "h-[200px] md:h-[320px]",
    images: [
      { slug: "graphic-design-wizard", ratio: 1400 / 950 },
      { slug: "come-together-green", ratio: 1400 / 933 },
      { src: "/videos/other-work/monsoon.mp4", ratio: 1138 / 640, video: true },
      { slug: "monsoon-beer-packaging-1", ratio: 1400 / 879 },
    ],
  },
  {
    heightClass: "h-[190px] md:h-[300px]",
    images: [
      { slug: "buddy-cad-model", ratio: 1400 / 1049 },
      { slug: "paint-bottle-organizer", ratio: 1050 / 1400 },
      { slug: "buddy-finished-render", ratio: 1400 / 1049 },
      { slug: "cap-illustration", ratio: 1400 / 1400 },
      { slug: "long-cad-object", ratio: 1400 / 1049 },
    ],
  },
];

const OTHER_WORK_RAILS = OTHER_WORK_RAILS_RAW.map((rail) => ({
  ...rail,
  images: rail.images.map((img) => ({
    src: img.src ?? `/images/home/other-work/${img.slug}.webp`,
    ratio: img.ratio,
    type: img.video ? ("video" as const) : undefined,
  })),
}));

export default function Home() {
  return (
    <>
      <Reveal
        as="section"
        y={20}
        className="flex w-full flex-col gap-6 px-6 pb-16 pt-12 md:gap-10 md:px-14 md:pb-24 md:pt-16"
      >
        <div className="flex flex-col items-start gap-5 md:gap-6">
          <AvailabilityBadge />
          <h1 className="max-w-[1187px] font-heading text-[36px] leading-[1.15] text-text-primary md:text-[58px]">
            {hero.tagline}
          </h1>
          <p className="font-mono text-[11px] uppercase text-black md:text-[12px]">
            {hero.specialties}
          </p>
          <p className="max-w-[640px] font-sans text-[16px] leading-[26px] text-text-secondary">
            {hero.bio}
          </p>
        </div>
        <div className="flex items-center gap-7">
          <Button href="/contact" icon="asterisk">Contact Me</Button>
          <IconLink href="/about">View About Me</IconLink>
        </div>
      </Reveal>

      <section id="work" className="flex w-full flex-col gap-6 px-6 pb-16 md:gap-6 md:px-14 md:pb-24">
        <div className="flex flex-col gap-4 border-t border-surface-default-base pt-6 md:pb-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-heading text-[28px] text-text-primary md:text-[40px]">
              Selected work
            </h2>
            <span className="font-sans text-[13px] text-text-muted">Six projects</span>
          </div>
        </div>
        <Reveal targets=":scope > a" stagger={0.1} className="flex flex-col gap-6">
          {getHomeOrderedProjects().map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </Reveal>
      </section>

      <section className="flex w-full flex-col gap-8 border-t border-border-section px-6 py-12 md:gap-12 md:px-14 md:py-16">
        <h2 className="font-heading text-[28px] text-text-primary md:text-[40px]">
          Companies &amp; clients
        </h2>
        <Reveal
          targets=":scope > div"
          stagger={0.04}
          y={14}
          className="flex flex-col divide-y divide-border-section border-y border-border-section"
        >
          <div className="grid grid-cols-2 divide-x divide-border-section md:grid-cols-3">
            {COMPANIES_ROW_1.map((c) => (
              <div
                key={c.name}
                className="flex h-[90px] items-center justify-center md:h-[120px]"
              >
                {c.wordmark ? (
                  <Image
                    src={c.wordmark}
                    alt={c.name}
                    width={c.width ?? 144}
                    height={30}
                    className="object-contain"
                  />
                ) : (
                  <span className="font-sans text-[14px] text-text-muted">{c.name}</span>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-border-section md:grid-cols-4">
            {COMPANIES_ROW_2.map((c) => (
              <div
                key={c.name}
                className="flex h-[90px] items-center justify-center md:h-[120px]"
              >
                {c.wordmark ? (
                  <Image
                    src={c.wordmark}
                    alt={c.name}
                    width={c.width ?? 144}
                    height={30}
                    className="object-contain"
                  />
                ) : (
                  <span className="font-sans text-[14px] text-text-muted">{c.name}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
        <div className="flex items-center justify-between">
          <p className="font-sans text-[12px] text-text-muted">
            Selected clients &amp; collaborations
          </p>
          <Link href="/resume" className="flex items-center gap-[6px] font-sans text-[12px] text-text-muted">
            Download résumé
            <Icon name="download" size={14} />
          </Link>
        </div>
      </section>

      <section className="flex w-full flex-col gap-10 py-16 md:py-20">
        <div className="flex flex-col gap-3 px-6 md:px-14">
          <p className="font-mono text-[11px] text-text-muted">[ From the work ]</p>
          <h2 className="font-heading text-[28px] text-text-primary md:text-[40px]">
            A glimpse of my other work.
          </h2>
        </div>
        <div className="relative left-1/2 right-1/2 -mx-[50vw] flex w-screen flex-col gap-3">
          {OTHER_WORK_RAILS.map((rail, railIndex) => (
            <MarqueeRow
              key={railIndex}
              images={rail.images}
              heightClass={rail.heightClass}
              direction={railIndex % 2 === 0 ? "left" : "right"}
              speed={railIndex % 2 === 0 ? 36 : 44}
            />
          ))}
        </div>
      </section>

      <ContactEnding />
    </>
  );
}
