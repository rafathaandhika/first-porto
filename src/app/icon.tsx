import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
          border: "1px solid rgba(168, 85, 247, 0.55)",
          color: "#ffffff",
          fontSize: 18,
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
