export default function CursorGlow({ x, y }) {
  return (
    <div
      className="pointer-events-none fixed z-[999] w-[300px] h-[300px] rounded-full blur-3xl will-change-transform"
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.35), rgba(168,85,247,0.35), rgba(236,72,153,0.35), transparent 60%)",
      }}
    />
  );
}
