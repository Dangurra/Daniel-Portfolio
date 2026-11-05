"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { type MouseEvent, useEffect, useRef } from "react";

import { Button } from "./ui/Button";

const RESUME_URL = "/resume.pdf";
const RESUME_FILENAME = "Daniel-Gur-Resume.pdf";

export function ResumeDownloadButton({ className = "" }: { className?: string }) {
  const shareableFile = useRef<File | null>(null);

  // Safari only opens the share sheet straight after a tap, so the file has
  // to be in memory before the tap. Touch devices only: desktop downloads.
  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches || !navigator.canShare) return;

    const controller = new AbortController();

    fetch(RESUME_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Résumé fetch failed: ${response.status}`);
        return response.blob();
      })
      .then((blob) => {
        const file = new File([blob], RESUME_FILENAME, { type: "application/pdf" });
        if (navigator.canShare({ files: [file] })) shareableFile.current = file;
      })
      // Without a file the button stays a plain download link.
      .catch(() => {});

    return () => controller.abort();
  }, []);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const file = shareableFile.current;

    if (!file) {
      sendGAEvent("event", "resume_download", { method: "button" });
      return;
    }

    event.preventDefault();
    navigator
      .share({ files: [file] })
      .then(() => sendGAEvent("event", "resume_download", { method: "share" }))
      .catch((error: unknown) => {
        // AbortError means the visitor dismissed the share sheet.
        if (error instanceof DOMException && error.name === "AbortError") return;
        sendGAEvent("event", "resume_download", { method: "button" });
        // A static file, not a Next.js page, so the router can't serve it.
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
        window.location.assign(RESUME_URL);
      });
  };

  return (
    <Button
      href={RESUME_URL}
      download={RESUME_FILENAME}
      icon="download"
      className={className}
      onClick={handleClick}
    >
      Download résumé
    </Button>
  );
}
