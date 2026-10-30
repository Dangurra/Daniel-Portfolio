import Image from "next/image";

import { ContactEnding } from "@/components/ContactEnding";
import { ProjectRow } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { AvailabilityBadge } from "@/components/ui/Badge";
import { Button, IconLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/lib/site-data";
import { projects } from "@/lib/projects-data";

const COMPANIES = [
  { name: "SambaNova", wordmark: "/images/about/logos/sambanova-logo.webp" },
  { name: "Poseidon", wordmark: "/images/about/logos/poseidon-logo.webp" },
  { name: "Tex Software", wordmark: null },
  { name: "Albacore", wordmark: "/images/about/logos/albacore-logo.webp" },
  { name: "Plaid Again", wordmark: "/images/about/logos/plaid-again-logo.webp" },
  { name: "Tara Mind", wordmark: null },
  { name: "ConnexPay", wordmark: null },
];

const OTHER_WORK = [
  "plan-it-mockup",
  "buddy-phones",
  "buddy-dna-packaging",
  "teros-mockup",
  "landscape-photography",
  "privacy-poster",
  "come-together-red",
  "orange-landscape-illustration",
  "screwdriver-cad",
  "sambanova-illustration",
  "graphic-design-wizard",
  "come-together-green",
  "monsoon-beer-packaging",
  "monsoon-beer-packaging-1",
  "buddy-cad-model",
  "paint-bottle-organizer",
  "buddy-finished-render",
  "cap-illustration",
  "long-cad-object",
].map((slug) => `/images/home/other-work/${slug}.webp`);

export default function Home() {
  return (
    <>
      <Reveal
        as="section"
        y={20}
        className="flex w-full flex-col gap-6 px-6 pb-16 pt-12 md:gap-10 md:px-14 md:pb-24 md:pt-16"
      >
        <div className="flex flex-col gap-5 md:gap-6">
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
          <Button href="/contact">Contact Me</Button>
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
          {projects.map((project) => (
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
          stagger={0.05}
          y={14}
          className="grid grid-cols-2 border border-border-section md:grid-cols-4"
        >
          {COMPANIES.map((c) => (
            <div
              key={c.name}
              className="flex h-[90px] items-center justify-center border border-border-section md:h-[120px]"
            >
              {c.wordmark ? (
                <Image src={c.wordmark} alt={c.name} width={144} height={30} className="object-contain" />
              ) : (
                <span className="font-sans text-[14px] text-text-muted">{c.name}</span>
              )}
            </div>
          ))}
        </Reveal>
        <div className="flex items-center justify-between">
          <p className="font-sans text-[12px] text-text-muted">
            Selected clients &amp; collaborations
          </p>
          <a href="/resume.pdf" className="flex items-center gap-[6px] font-sans text-[12px] text-text-muted">
            Download résumé
            <Icon name="download" size={14} />
          </a>
        </div>
      </section>

      <section className="flex w-full flex-col gap-10 py-16 md:py-20">
        <div className="flex flex-col gap-3 px-6 md:px-14">
          <p className="font-mono text-[11px] text-text-muted">[ From the work ]</p>
          <h2 className="font-heading text-[28px] text-text-primary md:text-[40px]">
            A glimpse of my other work.
          </h2>
        </div>
        <Reveal
          targets=":scope > div"
          stagger={0.04}
          y={16}
          className="flex gap-3 overflow-x-auto px-6 pb-2 md:px-14 [&::-webkit-scrollbar]:hidden"
        >
          {OTHER_WORK.map((src) => (
            <div
              key={src}
              className="relative h-[220px] w-[260px] shrink-0 overflow-hidden md:h-[320px] md:w-[400px]"
            >
              <Image src={src} alt="" fill sizes="400px" className="object-cover" />
            </div>
          ))}
        </Reveal>
      </section>

      <ContactEnding />
    </>
  );
}
