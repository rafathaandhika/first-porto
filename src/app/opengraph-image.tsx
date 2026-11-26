import { ImageResponse } from "next/og";

export const alt = "Rafatha Andhika | Odoo & Python Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#07080c",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(24, 24, 27, 0.9)",
              border: "1px solid rgba(63, 63, 70, 0.8)",
              fontSize: "20px",
              color: "#d4d4d8",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "9999px",
                backgroundColor: "#10b981",
              }}
            />
            <span>AVAILABLE FOR FREELANCE &amp; PROJECTS</span>
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(168, 85, 247, 0.15)",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              fontSize: "20px",
              color: "#d8b4fe",
              fontWeight: 700,
            }}
          >
            rafathaandhika.vercel.app
          </div>
        </div>

        {/* Center Hero */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "#2dd4bf",
              fontWeight: 600,
              letterSpacing: "0.06em",
            }}
          >
            MUHAMMAD RAFATHA ANDHIKA RASYIDINPUTRA
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "74px",
              fontWeight: 900,
              lineHeight: 1.06,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            ODOO &amp; PYTHON DEVELOPER
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "#a1a1aa",
              maxWidth: "960px",
              lineHeight: 1.4,
            }}
          >
            Custom ERP Modules (v14–v18) • QWeb PDF &amp; Excel Reporting • REST API Integrations • Business Workflow Automation
          </div>
        </div>

        {/* Bottom Badges */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
          }}
        >
          {["Odoo ERP", "Python", "PostgreSQL", "QWeb PDF", "REST API"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: "12px",
                backgroundColor: "#111116",
                border: "1px solid #27272a",
                fontSize: "20px",
                color: "#e4e4e7",
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
