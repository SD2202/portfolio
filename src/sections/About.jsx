import { useRef } from "react";
import profile from "../assets/images/profile.jpeg";

export default function About() {
  const imageRef = useRef();

  return (
    <section className="text-white py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🖼️ Profile with Cursor Glow */}
        <div
          ref={imageRef}
          className="relative flex justify-center group"
        >
          <img
            src={profile}
            alt="profile"
            className="w-[280px] h-[280px] object-cover rounded-2xl border border-gray-800 transition duration-300 group-hover:scale-105"
          />

          {/* Glow on hover */}
          <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
        </div>

        {/* 🧠 Content */}
        <div>

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I’m a Computer Science Engineering student focused on building
            scalable web applications and data-driven systems. I enjoy
            blending clean UI with efficient backend logic.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            My work spans full-stack development, analytics dashboards,
            and AI-driven workflows. I aim to build solutions that are both
            functional and visually refined.
          </p>

          {/* 🔥 Currently Working On */}
          <div className="mt-6 p-4 border border-gray-800 rounded-xl bg-white/5">
            <h3 className="text-sm text-gray-300 mb-2">
              Currently Working On
            </h3>
            <p className="text-sm text-gray-400">
              Building scalable full-stack applications, improving UI/UX
              interactions, and exploring AI-powered analytics systems.
            </p>
          </div>

        </div>
      </div>

      {/* 📊 Skills Section */}
      <div className="max-w-6xl mx-auto mt-20">

        <h3 className="text-2xl font-semibold mb-10 text-center">
          Skills
        </h3>

        <div className="space-y-6">

          {[
            { name: "Programming Languages", level: 85 },
            { name: "Web & Backend Development", level: 80 },
            { name: "Databases", level: 75 },
            { name: "Cloud & Deployment", level: 70 },
            { name: "Data Analytics & Visualization", level: 75 },
            { name: "Software Development Practices", level: 80 },
            { name: "AI and Automation", level: 90 },
          ].map((skill, i) => (

            <div key={i} className="group">

              {/* Skill Name */}
              <div className="flex justify-between mb-1 text-sm">
                <span>{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 group-hover:scale-x-105 origin-left"
                  style={{ width: `${skill.level}%` }}
                />

              </div>

            </div>

          ))}

        </div>

        {/* 🎯 Skill Tags (with hover glow) */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">

          {[
            "Programming Languages: Python, JavaScript,Java",
            " Web & Backend Development: FastAPI, REST API Development, HTML, Tailwind CSS, MERN Stack",
            "Databases: MySQL, MongoDB (NoSQL Databases)",
            "Cloud & Deployment: Render, netlify, vercel, AWS",
            "Data Analytics & Visualization: Pandas, NumPy, PowerBI, Tableau",
            "Software Development Practices: SoftwareEngineering, SDLC, Agile Methodologies",
            "AI and Automation: Prompt Engineering & Conversational Workflow Design",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm border border-gray-700 rounded-full transition 
              hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] 
              hover:scale-105"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}