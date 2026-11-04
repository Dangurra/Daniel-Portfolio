import { NextResponse } from "next/server";

import { contactEmailHtml } from "@/lib/contact-email";
import { resend } from "@/lib/resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyTurnstile(token: string, remoteIp: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = await res.json().catch(() => null);
  return Boolean(data?.success);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message, "cf-turnstile-response": turnstileToken } =
    body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  if (typeof turnstileToken !== "string" || !turnstileToken) {
    return NextResponse.json({ error: "Verification required" }, { status: 400 });
  }

  const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const verified = await verifyTurnstile(turnstileToken, remoteIp);

  if (!verified) {
    return NextResponse.json({ error: "Verification failed" }, { status: 403 });
  }

  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!to || !from) {
    return NextResponse.json(
      { error: "Email routing is not configured" },
      { status: 500 }
    );
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: message,
    html: contactEmailHtml({ name, email, message }),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
