import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { IconLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact — Daniel Gur",
};

export default function ContactPage() {
  return (
    <Reveal
      as="section"
      targets=":scope > div"
      y={20}
      className="flex w-full flex-1 flex-col gap-12 px-6 py-10 md:gap-16 md:px-14 md:py-12"
    >
      <div className="flex flex-col gap-10">
        <IconLink href="/">Go Home</IconLink>
        <div className="flex flex-col gap-4">
          <h1 className="max-w-[1080px] font-heading text-[40px] leading-[1.15] text-text-primary md:text-[58px]">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p className="max-w-[660px] font-sans text-[16px] leading-[26px] text-text-secondary">
            Tell me a bit about the project and I&apos;ll get back to you within a couple of
            days.
          </p>
        </div>
      </div>

      <div className="border-t border-border-section pt-10">
        <ContactForm />
      </div>
    </Reveal>
  );
}
