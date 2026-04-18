import { useRef } from "react";
import profile from "../assets/images/profile.jpeg";

export default function About() {
  const imageRef = useRef();

  return (
    <section className="text-white py-10 md:py-16 px-4 md:px-6">

      {/* 🔹 Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* 🖼️ Profile */}
        <div
          ref={imageRef}
          className="relative flex justify-center group"
        >
          <img
            src={profile}
            alt="profile"
            className="w-[200px] md:w-[280px] h-[200px] md:h-[280px] object-cover rounded-2xl border border-gray-800 transition duration-300 group-hover:scale-105"
          />

          {/* Glow */}
          <div className="absolute w-[220px] md:w-[300px] h-[220px] md:h-[300px] bg-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
        </div>

        {/* 🧠 Content */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            About Me
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I’m a Computer Science Engineering student focused on building
            scalable web applications and data-driven systems. I enjoy
            blending clean UI with efficient backend logic.
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-3 md:mt-4">
            My work spans full-stack development, analytics dashboards,
            and AI-driven workflows. I aim to build solutions that are both
            functional and visually refined.
          </p>

          {/* 🔥 Current Work */}
          <div className="mt-5 md:mt-6 p-4 border border-gray-800 rounded-xl bg-white/5">
            <h3 className="text-xs md:text-sm text-gray-300 mb-2">
              Currently Working On
            </h3>
            <p className="text-xs md:text-sm text-gray-400">
              Building scalable full-stack applications, improving UI/UX
              interactions, and exploring AI-powered analytics systems.
            </p>
          </div>

        </div>
      </div>

      {/* 📊 Skills */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-20">

        <h3 className="text-xl md:text-2xl font-semibold mb-8 md:mb-10 text-center">
          Skills
        </h3>

        <div className="space-y-5 md:space-y-6">

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

              <div className="flex justify-between mb-1 text-xs md:text-sm">
                <span>{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 group-hover:scale-x-105 origin-left"
                  style={{ width: `${skill.level}%` }}
                />

              </div>

            </div>

          ))}

        </div>

        {/* 🎯 Skill Tags */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10 md:mt-12 px-2">

          {[
            "Python, JavaScript, Java",
            "FastAPI, REST APIs, MERN Stack",
            "MySQL, MongoDB",
            "AWS, Vercel, Netlify, Render",
            "Pandas, NumPy, PowerBI, Tableau",
            "SDLC, Agile",
            "AI Automation & Prompt Engineering",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm border border-gray-700 rounded-full transition 
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
