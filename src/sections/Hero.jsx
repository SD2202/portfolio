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

  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.15]);
  const leftX = useTransform(scrollYProgress, [0, 0.6], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);

  return (
    <section ref={ref} className="h-screen relative">

      {/* Cursor Glow (only visible on desktop) */}
      <div className="hidden md:block">
        <CursorGlow x={smooth.x} y={smooth.y} />
      </div>

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4">

        {/* Resume Button */}
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 z-30 px-4 py-2 text-xs md:text-sm border border-gray-700 rounded-full text-white hover:border-purple-400 hover:text-purple-400 transition backdrop-blur-md bg-white/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        >
          View Resume ↗
        </a>

        {/* 🔥 MOBILE VERSION */}
        <div className="flex flex-col items-center text-center md:hidden">
          <h1 className="name-font text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SPARSH
          </h1>

          <h1 className="name-font text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            DWIVEDI
          </h1>

          <p className="mt-3 text-gray-400 text-xs sm:text-sm tracking-wide px-2">
            Software Developer • Data Analyst • AI Automation
          </p>
        </div>

        {/* 🔥 DESKTOP VERSION */}
        <div className="hidden md:block">

          {/* LEFT */}
          <motion.div
            style={{ x: leftX, scale, opacity }}
            className="absolute left-0 w-1/2 h-full flex items-center justify-end pr-4 z-20"
          >
            <h1 className="name-font text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SPARSH
            </h1>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            style={{ x: rightX, scale, opacity }}
            className="absolute right-0 w-1/2 h-full flex items-center justify-start pl-4 z-20"
          >
            <h1 className="name-font text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              DWIVEDI
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            style={{ opacity }}
            className="absolute bottom-16 md:bottom-24 text-gray-400 text-sm md:text-base tracking-wide text-center z-20 w-full"
          >
            Software Developer • Data Analyst • AI Automation
          </motion.p>

        </div> {/* ✅ THIS WAS MISSING */}

      </div>
    </section>
  );
}
