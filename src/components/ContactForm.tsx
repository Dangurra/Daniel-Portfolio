"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

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
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <input
        name="name"
        placeholder="Name"
        required
        className="rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-transparent"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-transparent"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={4}
        className="rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-transparent"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-neutral-900 px-4 py-2 text-white disabled:opacity-50 dark:bg-white dark:text-neutral-900"
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-green-600">Thanks — I&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
