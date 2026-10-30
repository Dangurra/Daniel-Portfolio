"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClasses =
  "w-full border border-border-default bg-transparent px-4 py-[14px] font-sans text-[15px] text-text-primary outline-none focus:border-surface-action";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-[1400px] flex-col gap-8">
      <p className="font-mono text-[12px] uppercase text-text-muted">[ Inquiry form ]</p>
      <div className="flex flex-col gap-6 md:flex-row">
        <label className="flex flex-1 flex-col gap-2">
          <span className="font-sans text-[14px] text-text-primary">Name</span>
          <input name="name" required className={fieldClasses} />
        </label>
        <label className="flex flex-1 flex-col gap-2">
          <span className="font-sans text-[14px] text-text-primary">Email</span>
          <input name="email" type="email" required className={fieldClasses} />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-sans text-[14px] text-text-primary">Message</span>
        <textarea name="message" required rows={6} className={fieldClasses} />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-fit items-center justify-center bg-surface-action px-6 font-mono text-[14px] text-foreground-on-color transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "sent" && (
        <p className="font-sans text-[14px] text-green-600">
          Thanks — I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="font-sans text-[14px] text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
