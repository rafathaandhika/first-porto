export default function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#f8fafc] dark:bg-[#07080c]"
    >
      {/* 1. Base Elegant Grid Pattern */}
      <div className="absolute inset-0 bg-grid-elegant" />

      {/* 2. Top-Center Ambient Glow (Zero-cost radial gradient, no heavy GPU blur) */}
      <div
        className="absolute inset-0 opacity-100 dark:opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(147, 51, 234, 0.16), transparent 70%), radial-gradient(circle 420px at 5% 45%, rgba(20, 184, 166, 0.10), transparent 70%), radial-gradient(circle 480px at 95% 85%, rgba(147, 51, 234, 0.11), transparent 70%)",
        }}
      />

      {/* 3. Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_40%,#f8fafc_95%)] dark:bg-[radial-gradient(circle_at_50%_40%,transparent_40%,#07080c_95%)] opacity-55 dark:opacity-50" />
    </div>
  );
}
