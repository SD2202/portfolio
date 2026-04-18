export default function CertificateCard({ cert }) {
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative overflow-hidden rounded-xl border border-gray-800 hover:border-gray-600 transition">

        {/* Image */}
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
          <h3 className="text-sm font-semibold">{cert.title}</h3>
          <p className="text-xs text-gray-400">{cert.issuer}</p>
        </div>

      </div>
    </a>
  );
}