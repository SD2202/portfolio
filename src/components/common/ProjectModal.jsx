import { useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  if (!project) return null;

  const next = () =>
    setIndex((prev) => (prev + 1) % project.gallery.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );

  return (
    <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ✕
      </button>

      {/* Image */}
      <img
        src={project.gallery[index]}
        alt="project"
        className="max-w-[90%] max-h-[80%] object-contain rounded-lg"
      />

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-6 text-white text-3xl"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-6 text-white text-3xl"
      >
        →
      </button>

    </div>
  );
}