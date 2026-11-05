import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { ContactEnding } from "@/components/ContactEnding";
import { FaqAccordion } from "@/components/FaqAccordion";
import { GoHomeLink } from "@/components/GoHomeLink";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ToolPill, ToolTile } from "@/components/ToolPill";
import {
  aboutHeadline,
  aboutIntroParagraphs,
  aboutSubhead,
  experience,
  faq,
  toolCategories,
  toolsIntro,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Me",
  description: "The story, tools, and experience behind Daniel Gur's design work.",
};

export default function AboutPage() {
  return (
    <>
      <Reveal
        as="section"
        y={16}
        className="flex w-full flex-col gap-10 px-6 pb-12 pt-10 md:px-14 md:pb-16 md:pt-12"
      >
        <GoHomeLink />
        <h1 className="max-w-[1187px] font-heading text-[28px] leading-[1.15] text-text-primary md:text-[58px]">
          {aboutHeadline}
        </h1>
      </Reveal>

      <Reveal
        as="section"
        targets=":scope > *"
        className="flex w-full flex-col gap-10 border-t border-border-section px-6 py-12 md:flex-row md:gap-14 md:px-14 md:py-16"
      >
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
            {aboutSubhead}
          </h2>
          <div className="flex max-w-[651px] flex-col gap-4 font-sans text-[15px] leading-[26px] text-text-secondary md:text-[16px]">
            {aboutIntroParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Image
            src="/images/about/daniel-signature.svg"
            alt=""
            width={54}
            height={49}
          />
          <div className="flex items-center gap-7">
            <Button href="/contact" icon="asterisk">Contact Me</Button>
            <Link
              href="/resume"
              className="flex items-center gap-[6px] font-sans text-[14px] font-medium text-foreground-supporting"
            >
              Download résumé
              <Icon name="download" size={16} />
            </Link>
          </div>
        </div>
        <div className="relative order-first aspect-square w-full shrink-0 bg-surface-default-base md:order-none md:w-[554px]">
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
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
            My Tool Kit
          </h2>
          <p className="max-w-[700px] font-sans text-[15px] leading-[26px] text-text-secondary md:text-[16px]">
            {toolsIntro}
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {toolCategories.map((cat) => (
            <Reveal
              key={cat.category}
              targets=":scope > div"
              stagger={0.03}
              y={10}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <p className="shrink-0 font-mono text-[12px] text-text-muted">
                  [ {cat.category} ]
                </p>
                <div className="h-px flex-1 bg-border-section" />
              </div>
              <div className="hidden flex-wrap gap-x-6 gap-y-6 md:flex md:gap-x-9">
                {cat.tools.map((tool) => (
                  <ToolTile key={tool.name} name={tool.name} icon={tool.icon} />
                ))}
              </div>
              <div className="flex flex-wrap gap-3 md:hidden">
                {cat.tools.map((tool) => (
                  <ToolPill key={tool.name} name={tool.name} icon={tool.icon} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-8 border-t border-border-section px-6 py-12 md:gap-10 md:px-14 md:py-16">
        <div className="flex items-center gap-4 md:hidden">
          <h2 className="shrink-0 font-mono text-[11px] text-text-muted">[ Experience ]</h2>
          <div className="h-px flex-1 bg-border-section" />
        </div>
        <h2 className="hidden font-heading text-text-primary md:block md:text-[32px]">Experience</h2>
        <Reveal
          as="div"
          targets=":scope > div"
          stagger={0.06}
          y={14}
          className="flex flex-col gap-6"
        >
          {experience.map((role) => (
            <div key={role.company} className="flex flex-col gap-6 md:flex-row">
              <div className="flex h-[131px] w-full items-center justify-center border border-border-default md:w-[520px]">
                <Image
                  src={role.logo}
                  alt={role.company}
                  width={220}
                  height={56}
                  className="object-contain dark:hidden"
                />
                <Image
                  src={role.logo.replace(/\.webp$/, "-light.svg")}
                  alt={role.company}
                  width={220}
                  height={56}
                  className="hidden object-contain dark:block"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-[20px] text-text-primary">{role.title}</h3>
                  <span className="shrink-0 bg-brand-highlight px-2 py-[2px] font-sans text-[13px] text-text-secondary">
                    {role.date}
                  </span>
                </div>
                <p className="font-sans text-[13px] font-semibold text-text-primary">
                  {role.company}
                </p>
                <p className="font-sans text-[15px] leading-[26px] text-text-secondary md:text-[13px] md:leading-[1.6]">
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
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[11px] text-text-muted md:hidden">[ FAQ ]</p>
          <h2 className="font-heading text-[28px] text-text-primary md:text-[32px]">
            Common Questions
          </h2>
          <p className="max-w-[700px] font-sans text-[15px] leading-[26px] text-text-secondary md:text-[16px]">
            Quick answers about me, besides just design.
          </p>
        </div>
        <FaqAccordion items={faq} />
      </Reveal>

      <ContactEnding />
    </>
  );
}
