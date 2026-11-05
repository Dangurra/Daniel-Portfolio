"use client";

import Script from "next/script";
import { useState } from "react";

import { Icon } from "./ui/Icon";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClasses =
  "w-full border border-border-default bg-transparent px-4 py-[14px] font-sans text-[14px] text-text-primary outline-none focus:border-surface-action md:text-[15px]";

declare global {
  interface Window {
    turnstile?: { reset: (widget?: string | HTMLElement) => void };
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("Something went wrong. Please try again.");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data["cf-turnstile-response"]) {
      setErrorMessage("Please complete the verification check before sending.");
      setStatus("error");
      return;
    }

    setErrorMessage("Something went wrong. Please try again.");
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    window.turnstile?.reset();

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-[1400px] flex-col gap-8">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" async defer />
      <p className="font-mono text-[13px] text-text-muted md:text-[12px] md:uppercase">[ Send a message ]</p>
      <div className="flex flex-col gap-6 md:flex-row">
        <label className="flex flex-1 flex-col gap-2">
          <span className="font-mono text-[13px] text-text-primary md:font-sans md:text-[14px]">Name</span>
          <input name="name" placeholder="Your name" required className={fieldClasses} />
        </label>
        <label className="flex flex-1 flex-col gap-2">
          <span className="font-mono text-[13px] text-text-primary md:font-sans md:text-[14px]">Email</span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className={fieldClasses}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[13px] text-text-primary md:font-sans md:text-[14px]">Message</span>
        <textarea
          name="message"
          placeholder="Tell me a little about what you have in mind."
          required
          rows={6}
          className={`${fieldClasses} min-h-[132px] resize-y`}
        />
      </label>
      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-theme="light"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-fit items-center justify-center gap-2 border border-border-default bg-surface-action px-4 py-[10px] font-mono text-[14px] text-foreground-on-color transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        <span>{status === "sending" ? "[ Sending... ]" : "[ Send message ]"}</span>
        <Icon name="asterisk" size={18} tone="light" />
      </button>
      {status === "sent" && (
        <p className="font-sans text-[14px] text-green-600">
          Thanks. I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="font-sans text-[14px] text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
