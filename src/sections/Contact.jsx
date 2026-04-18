export default function Contact() {
  return (
    <section className="text-white py-20 px-6 border-t border-gray-800">

      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          Let’s Connect
        </h2>

        <p className="text-gray-400 mb-10">
          I’m always open to discussing new opportunities, projects, or ideas.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Email */}
          <a
            href="mailto:sparsh0302@gmail.com"
            className="p-5 border border-gray-800 rounded-xl hover:border-purple-500 transition group"
          >
            <h3 className="text-sm text-gray-400">Email</h3>
            <p className="text-lg font-medium group-hover:text-purple-400 transition">
              sparsh0302@gmail.com
            </p>
          </a>

          {/* Phone */}
          <div className="p-5 border border-gray-800 rounded-xl">
            <h3 className="text-sm text-gray-400">Phone</h3>
            <p className="text-lg font-medium">
              +91 98792 72738
            </p>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sparsh-dwivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 border border-gray-800 rounded-xl hover:border-purple-500 transition group"
          >
            <h3 className="text-sm text-gray-400">LinkedIn</h3>
            <p className="text-lg font-medium group-hover:text-purple-400 transition">
              linkedin.com/in/sparsh-dwivedi
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SD2202"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 border border-gray-800 rounded-xl hover:border-purple-500 transition group"
          >
            <h3 className="text-sm text-gray-400">GitHub</h3>
            <p className="text-lg font-medium group-hover:text-purple-400 transition">
              github.com/SD2202
            </p>
          </a>

        </div>

        {/* Resume Button */}
        <div className="mt-10">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            className="inline-block px-6 py-3 border border-gray-700 rounded-full hover:border-purple-500 hover:text-purple-400 transition"
          >
            View Resume
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-16">
        © {new Date().getFullYear()} Sparsh Dwivedi
      </div>

    </section>
  );
}