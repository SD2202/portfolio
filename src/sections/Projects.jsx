import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const closeModal = () => {
    setSelected(null);
    setIndex(0);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % selected.gallery.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? selected.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section className="text-white py-12 px-6">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((proj, i) => (
          <div
            key={i}
            onClick={() => {
              setSelected(proj);
              setIndex(0);
            }}
            className="cursor-pointer group rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {proj.description}
              </p>

              <div className="text-xs text-gray-500 mt-2">
                {proj.tech.join(" • ")}
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* 🔥 Modal Gallery */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">

          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={selected.gallery[index]}
            alt="project"
            className="max-w-[90%] max-h-[80%] object-contain rounded-lg"
          />

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-6 text-white text-3xl"
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-6 text-white text-3xl"
          >
            →
          </button>

        </div>
      )}
    </section>
  );
}