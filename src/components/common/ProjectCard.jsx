export default function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition">

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">

        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-1">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mt-2 text-xs text-gray-500">
          {project.tech.join(" • ")}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-3 text-sm">
          <a href={project.live} target="_blank" className="hover:underline">
            Live
          </a>
          <a href={project.github} target="_blank" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}