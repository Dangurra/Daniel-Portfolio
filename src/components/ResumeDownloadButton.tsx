"use client";

import { sendGAEvent } from "@next/third-parties/google";

import { Button } from "./ui/Button";

export function ResumeDownloadButton({ className = "" }: { className?: string }) {
  return (
    <Button
      href="/resume.pdf"
      external
      icon="download"
      className={className}
      onClick={() => sendGAEvent("event", "resume_download", { method: "button" })}
    >
      Download résumé
    </Button>
  );
}
