import Image from "next/image";
import type { Metadata } from "next";

import { ContactEnding } from "@/components/ContactEnding";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { Button, IconLink } from "@/components/ui/Button";
import { ToolTile } from "@/components/ToolPill";
import { aboutIntro, experience, faq, toolCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Me — Daniel Gur",
};

export default function AboutPage() {
  return (
    <>
      <Reveal
        as="section"
        y={16}
        className="flex w-full flex-col gap-10 px-6 pb-12 pt-10 md:px-14 md:pb-16 md:pt-12"
      >
        <IconLink href="/">Go Home</IconLink>
        <h1 className="max-w-[1187px] font-heading text-[36px] leading-[1.15] text-text-primary md:text-[58px]">
          About Me
        </h1>
      </Reveal>

      <Reveal
        as="section"
        targets=":scope > *"
        className="flex w-full flex-col gap-10 border-t border-border-section px-6 py-12 md:flex-row md:gap-14 md:px-14 md:py-16"
      >
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
            Hi, I&apos;m Daniel.
          </h2>
          <p className="max-w-[651px] font-sans text-[16px] leading-[26px] text-text-secondary">
            {aboutIntro}
          </p>
          <div className="flex items-center gap-7">
            <Button href="/contact">Contact Me</Button>
            <a
              href="/resume.pdf"
              className="font-sans text-[14px] font-medium text-foreground-supporting"
            >
              Download résumé
            </a>
          </div>
        </div>
        <div className="relative aspect-square w-full shrink-0 bg-[#f2f2f2] md:w-[554px]">
          <Image
            src="/images/about/daniel-portrait.webp"
            alt="Daniel Gur"
            fill
            sizes="(max-width: 768px) 100vw, 554px"
            className="object-cover"
          />
        </div>
      </Reveal>

      <section className="flex w-full flex-col gap-8 border-t border-border-section px-6 py-12 md:gap-10 md:px-14 md:py-16">
        <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">My Toolkit</h2>
        <div className="flex flex-col gap-10">
          {toolCategories.map((cat) => (
            <Reveal
              key={cat.category}
              targets=":scope > div"
              stagger={0.03}
              y={10}
              className="flex flex-col gap-4"
            >
              <p className="font-mono text-[12px] uppercase text-text-muted">{cat.category}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-6 md:gap-x-9">
                {cat.tools.map((tool) => (
                  <ToolTile key={tool.name} name={tool.name} icon={tool.icon} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-8 border-t border-border-section px-6 py-12 md:gap-10 md:px-14 md:py-16">
        <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">Experience</h2>
        <Reveal
          as="div"
          targets=":scope > div"
          stagger={0.06}
          y={14}
          className="flex flex-col divide-y divide-border-section border-t border-border-section"
        >
          {experience.map((role) => (
            <div
              key={role.company}
              className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-8"
            >
              <div className="flex h-[80px] w-full items-center justify-center bg-[#f7f7f7] md:h-[108px] md:w-[180px]">
                <Image
                  src={role.logo}
                  alt={role.company}
                  width={120}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-[20px] text-text-primary">{role.title}</h3>
                  <span className="font-sans text-[13px] text-text-muted">{role.date}</span>
                </div>
                <p className="font-sans text-[14px] text-text-muted">{role.company}</p>
                <p className="font-sans text-[14px] leading-[22px] text-text-secondary">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <Reveal
        as="section"
        targets=":scope > *"
        className="flex w-full flex-col gap-8 border-t border-border-section px-6 py-12 md:gap-10 md:px-14 md:py-16"
      >
        <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
          Common Questions
        </h2>
        <FaqAccordion items={faq} />
      </Reveal>

      <ContactEnding />
    </>
  );
}
