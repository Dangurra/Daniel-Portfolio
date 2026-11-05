import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex w-full flex-1 flex-col items-start justify-center gap-6 px-6 py-24 md:px-14">
      <p className="font-mono text-[13px] uppercase text-text-muted">[ 404 ]</p>
      <h1 className="font-heading text-[40px] leading-[1.15] text-text-primary md:text-[58px]">
        This page doesn&apos;t exist.
      </h1>
      <p className="max-w-[480px] font-sans text-[16px] leading-[26px] text-text-secondary">
        The page you&apos;re looking for may have been moved or never existed.
      </p>
      <Button href="/">Go Home</Button>
    </section>
  );
}
