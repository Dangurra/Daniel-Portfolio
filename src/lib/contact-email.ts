import { SIGNATURE_BLACK_B64, SIGNATURE_WHITE_B64 } from "./email-assets/signature";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const FONT_URL = "https://daniel-gur.vercel.app/fonts/geist-pixel.woff2";
const MONO_STACK = "'Geist Pixel Variable', 'SF Mono', 'Geist Mono', 'Courier New', monospace";
const SERIF_STACK = "Georgia, 'Times New Roman', serif";
const SANS_STACK = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

function field(label: string, value: string) {
  return `
    <tr>
      <td style="padding:0 0 20px 0;">
        <p class="text-muted" style="margin:0 0 8px 0;font-family:${SANS_STACK};font-size:13px;">${label}</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="field-box">
          <tr>
            <td class="field-box-cell" style="padding:12px 14px;font-family:${SANS_STACK};font-size:15px;line-height:1.5;">${value}</td>
          </tr>
        </table>
      </td>
    </tr>`;
}

export function contactEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <style>
      @font-face {
        font-family: 'Geist Pixel Variable';
        font-style: normal;
        font-weight: 400;
        src: url('${FONT_URL}') format('woff2-variations'), url('${FONT_URL}') format('woff2');
        font-display: swap;
      }
      .mono { font-variation-settings: "ELSH" 1; }

      body, .bg-canvas { background-color: #ffffff; }
      .text-primary { color: #111111; }
      .text-muted { color: #666666; }
      .border-line { border-color: #ebebeb !important; }
      .field-box { border: 1px solid #d9d9d9; }
      .field-box-cell { color: #111111; background-color: #ffffff; }
      .link-accent { color: #0b0dff; }
      .btn-reply { background-color: #0b0dff; border: 1px solid #d9d9d9; color: #ffffff !important; }
      .sig-light { display: inline-block; }
      .sig-dark { display: none; }

      @media (prefers-color-scheme: dark) {
        body, .bg-canvas { background-color: #111111 !important; }
        .text-primary { color: #f5f5f5 !important; }
        .text-muted { color: #999999 !important; }
        .border-line { border-color: #2e2e2e !important; }
        .field-box { border-color: #333333 !important; }
        .field-box-cell { color: #f5f5f5 !important; background-color: #1a1a1a !important; }
        .link-accent { color: #7b7dff !important; }
        .btn-reply { border-color: #0b0dff !important; }
        .sig-light { display: none !important; }
        .sig-dark { display: inline-block !important; }
      }
    </style>
  </head>
  <body class="bg-canvas" style="margin:0;padding:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="bg-canvas">
      <tr>
        <td align="center" style="padding:48px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

            <tr>
              <td style="padding-bottom:40px;">
                <span class="mono" style="display:inline-block;background-color:#e8ff00;padding:3px 8px;font-family:${MONO_STACK};font-size:20px;color:#111111;">Daniel Gur</span>
              </td>
            </tr>

            <tr>
              <td class="border-line" style="border-top:1px solid #ebebeb;padding:32px 0 32px 0;">
                <p class="text-muted mono" style="margin:0 0 12px 0;font-family:${MONO_STACK};font-size:12px;text-transform:uppercase;letter-spacing:0.04em;">[ New message ]</p>
                <h1 class="text-primary" style="margin:0;font-family:${SERIF_STACK};font-size:30px;line-height:1.2;font-weight:400;">
                  Someone wants to get in touch.
                </h1>
              </td>
            </tr>

            <tr>
              <td style="padding-bottom:8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${field("Name", safeName)}
                  ${field("Email", `<a href="mailto:${safeEmail}" class="link-accent" style="text-decoration:none;">${safeEmail}</a>`)}
                  ${field("Message", safeMessage)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 0 40px 0;">
                <a href="mailto:${safeEmail}" class="btn-reply mono" style="display:inline-block;font-family:${MONO_STACK};font-size:14px;text-decoration:none;padding:13px 20px;">
                  [ Reply to ${safeName} ]
                </a>
              </td>
            </tr>

            <tr>
              <td class="border-line" style="border-top:1px solid #ebebeb;padding-top:24px;">
                <img
                  src="data:image/png;base64,${SIGNATURE_BLACK_B64}"
                  alt="Daniel Gur"
                  width="54"
                  height="50"
                  class="sig-light"
                  style="display:inline-block;margin-bottom:16px;"
                />
                <img
                  src="data:image/png;base64,${SIGNATURE_WHITE_B64}"
                  alt="Daniel Gur"
                  width="54"
                  height="50"
                  class="sig-dark"
                  style="display:none;margin-bottom:16px;"
                />
                <p class="text-muted" style="margin:0;font-family:${SANS_STACK};font-size:12px;">Sent from the contact form at daniel-gur.com</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
