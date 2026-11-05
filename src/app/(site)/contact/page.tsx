import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { GoHomeLink } from "@/components/GoHomeLink";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Daniel Gur about a project or collaboration.",
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
        <GoHomeLink />
        <div className="flex flex-col gap-4">
          <h1 className="max-w-[1080px] font-heading text-[32px] leading-[1.15] text-text-primary md:text-[58px]">
            Let&apos;s get in touch.
          </h1>
          <p className="max-w-[660px] font-sans text-[15px] leading-[26px] text-text-secondary md:text-[16px]">
            Have a project in mind, or are you hiring? I&apos;m open to full-time design roles
            and creative collaborations. Tell me what you&apos;re working on. I&apos;d love to
            hear from you.
          </p>
        </div>
      </div>

      <div className="border-t border-border-section pt-10">
        <ContactForm />
      </div>
    </Reveal>
  );
}
