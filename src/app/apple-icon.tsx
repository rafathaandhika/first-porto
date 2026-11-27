import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)",
          borderRadius: "36px",
          border: "4px solid rgba(168, 85, 247, 0.55)",
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 900,
          fontFamily: "sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        <span>R</span>
        <span style={{ color: "#10b981" }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
