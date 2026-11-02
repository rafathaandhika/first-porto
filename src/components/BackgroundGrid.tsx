export default function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#07080c]"
    >
      {/* 1. Base Elegant Grid Pattern (Kotak-kotak presisi) */}
      <div className="absolute inset-0 bg-grid-elegant opacity-100" />

      {/* 2. Top-Center Ambient Glow (Violet / Purple) */}
      <div
        className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] 
        rounded-full bg-gradient-to-b from-purple-600/18 via-indigo-500/10 to-transparent 
        blur-[120px] transform-gpu pointer-events-none"
      />

      {/* 3. Mid-Left Subtle Cyan/Teal Accent */}
      <div
        className="absolute top-[40%] -left-[120px] w-[500px] h-[500px] 
        rounded-full bg-teal-500/10 blur-[130px] transform-gpu pointer-events-none"
      />

      {/* 4. Bottom-Right Ambient Indigo Glow */}
      <div
        className="absolute bottom-[10%] -right-[100px] w-[600px] h-[550px] 
        rounded-full bg-purple-600/12 blur-[140px] transform-gpu pointer-events-none"
      />

      {/* 5. Radial Vignette Overlay: membuat motif kotak tetap terlihat tegas dan menyatu alami */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_40%,#07080c_95%)] opacity-50"
      />
    </div>
  );
}
