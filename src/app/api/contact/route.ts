import { NextResponse } from "next/server";

import { resend } from "@/lib/resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

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
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
