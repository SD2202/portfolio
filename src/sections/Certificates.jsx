import { certificates } from "../data/certificates";
import CertificateCard from "../components/common/CertificateCard";

export default function Certificates() {
  return (
    <section className="text-white py-20 px-6">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Certificates
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </div>
    </section>
  );
}