import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";
import useSmoothCursor from "../hooks/useSmoothCursor";
import CursorGlow from "../components/effects/cursorGlow";

export default function Hero() {
  const ref = useRef();

  const mouse = useMousePosition();
  const smooth = useSmoothCursor(mouse);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const leftX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-80%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

  return (
    <section ref={ref} className="h-screen relative flex items-center justify-center overflow-hidden">

      {/* Cursor Glow */}
      <div className="hidden md:block">
        <CursorGlow x={smooth.x} y={smooth.y} />
      </div>

      {/* Resume Button */}
      <a
        href="/assets/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 right-6 z-30 px-4 py-2 text-xs md:text-sm border border-gray-700 rounded-full text-white hover:border-purple-400 hover:text-purple-400 transition backdrop-blur-md bg-white/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
      >
        View Resume ↗
      </a>

      {/* 🔥 MOBILE */}
      <div className="flex flex-col items-center text-center md:hidden z-20">
        <h1 className="name-font text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          SPARSH
        </h1>
        <h1 className="name-font text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          DWIVEDI
        </h1>

        <p className="mt-3 text-gray-400 text-xs sm:text-sm">
          Software Developer • Data Analyst • AI Automation
        </p>
      </div>

      {/* 🔥 DESKTOP */}
      <div className="hidden md:flex items-center justify-center w-full h-full relative">

        {/* LEFT */}
        <motion.div
          style={{ x: leftX, scale, opacity }}
          className="absolute left-1/2 -translate-x-full flex items-center"
        >
          <h1 className="name-font text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SPARSH
          </h1>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          style={{ x: rightX, scale, opacity }}
          className="absolute left-1/2 flex items-center"
        >
          <h1 className="name-font text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            DWIVEDI
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          style={{ opacity }}
          className="absolute bottom-20 text-gray-400 text-sm md:text-base text-center"
        >
          Software Developer • Data Analyst • AI Automation
        </motion.p>

      </div>

    </section>
  );
}
