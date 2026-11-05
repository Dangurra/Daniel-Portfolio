import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconData = await readFile(join(process.cwd(), "src/app/apple-icon.png"));
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <img
              src={iconSrc}
              alt=""
              width={84}
              height={84}
              style={{ borderRadius: 16 }}
            />
            <span
              style={{
                fontSize: 30,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#666666",
              }}
            >
              Product Designer
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontSize: 108,
                fontWeight: 600,
                color: "#111111",
                letterSpacing: -2,
              }}
            >
              Daniel&nbsp;
            </span>
            <span
              style={{
                fontSize: 108,
                fontWeight: 600,
                color: "#111111",
                backgroundColor: "#e8ff00",
                padding: "0 14px",
                letterSpacing: -2,
              }}
            >
              Gur
            </span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <span style={{ fontSize: 32, color: "#444444", maxWidth: 900 }}>
            Working across web apps, 3D modeling, and code.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
