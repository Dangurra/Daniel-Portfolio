import { Reveal } from "./Reveal";
import { Button } from "./ui/Button";

export function ContactEnding() {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] flex w-screen flex-col gap-10 bg-surface-contact px-6 py-16 md:gap-10 md:px-14 md:py-[104px]">
      <div className="h-px w-full bg-surface-default-base" />
      <Reveal
        targets=":scope > *"
        y={16}
        className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-16"
      >
        <p className="font-mono text-[11px] text-text-on-color md:text-[13px]">
          [ Start a conversation ]
        </p>
        <div className="flex flex-1 flex-col gap-4 text-text-on-color">
          <p className="font-heading text-[32px] leading-[1.15] tracking-[-0.02em] md:text-[48px]">
            Have something in mind?
          </p>
          <p className="font-sans text-[15px] leading-[26px] md:text-[16px]">
            Let&apos;s talk about what you&apos;re building.
          </p>
        </div>
        <Button
          href="/contact"
          variant="secondary"
          icon="asterisk"
          iconTone="light"
          className="shrink-0 border-white !text-text-on-color transition-colors duration-200 hover:bg-white hover:!text-surface-action"
        >
          Contact Me
        </Button>
      </Reveal>
    </section>
  );
}
