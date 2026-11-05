import type { Metadata } from "next";

import { GoHomeLink } from "@/components/GoHomeLink";
import { Reveal } from "@/components/Reveal";
import { ResumeDocument } from "@/components/ResumeDocument";
import { ResumeDownloadButton } from "@/components/ResumeDownloadButton";
import { ResumePreviewMobile } from "@/components/ResumePreviewMobile";

export const metadata: Metadata = {
  title: "My Résumé",
  description: "Daniel Gur's résumé — experience, skills, and a downloadable PDF.",
};

export default function ResumePage() {
  return (
    <Reveal
      as="section"
      y={16}
      className="flex w-full flex-col gap-8 px-6 pb-10 pt-10 md:gap-[30px] md:px-14 md:pb-[88px] md:pt-12"
    >
      <GoHomeLink />

      <div className="flex w-full flex-col items-start gap-10 md:flex-row md:gap-[120px]">
        <div className="flex w-full flex-col gap-8 md:w-auto md:flex-1 md:pt-8">
          <div className="flex flex-col gap-5">
            <h1 className="font-heading text-[32px] leading-[1.15] text-text-primary md:text-[58px]">
              My résumé.
            </h1>
            <p className="max-w-[480px] font-sans text-[15px] leading-[26px] text-text-secondary md:text-[16px]">
              A closer look at my experience, education, and the tools I work
              with. Preview my résumé here, or download a copy to keep.
            </p>
          </div>
          <ResumeDownloadButton className="w-full md:w-[300px]" />
        </div>

        <div className="flex w-full flex-col gap-4 md:w-[720px] md:shrink-0">
          <div className="flex w-full items-center justify-between font-mono text-[12px] text-text-secondary">
            <span>[ Document preview ]</span>
            <span>1 / 1</span>
          </div>
          <div className="flex w-full items-center justify-center border border-[#ddd] bg-[#f7f7f5] p-4 md:p-10">
            <div className="w-full md:hidden">
              <ResumePreviewMobile />
            </div>
            <div className="hidden h-[792px] w-[612px] overflow-hidden drop-shadow-[0px_4px_8px_rgba(0,0,0,0.05)] md:block">
              <ResumeDocument />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
