import { Reveal } from "./Reveal";
import { Button } from "./ui/Button";

export function ContactEnding() {
  return (
    <section className="flex w-full flex-col gap-10 bg-surface-contact px-6 py-14 md:gap-10 md:px-14 md:py-[88px]">
      <div className="h-px w-full bg-surface-default-base" />
      <Reveal
        targets=":scope > *"
        y={16}
        className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16"
      >
        <p className="font-mono text-[13px] text-text-on-color">
          [ Start a conversation ]
        </p>
        <div className="flex flex-1 flex-col gap-4 text-text-on-color">
          <p className="font-heading text-[32px] leading-[1.15] tracking-[-0.02em] md:text-[48px]">
            Have something in mind?
          </p>
          <p className="font-sans text-[16px] leading-[26px]">
            Let&apos;s talk about what you&apos;re building.
          </p>
        </div>
        <Button
          href="/contact"
          variant="secondary"
          iconTone="light"
          className="shrink-0 !text-text-on-color border-border-default"
        >
          Contact Me
        </Button>
      </Reveal>
    </section>
  );
}
