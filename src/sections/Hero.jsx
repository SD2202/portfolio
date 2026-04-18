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
    <section ref={ref} className="h-[130vh] relative">

      {/* Cursor Glow */}
      <CursorGlow x={smooth.x} y={smooth.y} />

      {/* Hero Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* LEFT */}
        <motion.div
          style={{ x: leftX, scale, opacity }}
          className="absolute left-0 w-1/2 h-full flex items-center justify-end pr-2 z-20"
        >
          <h1 className="name-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SPARSH
          </h1>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          style={{ x: rightX, scale, opacity }}
          className="absolute right-0 w-1/2 h-full flex items-center justify-start pl-2 z-20"
        >
          <h1 className="name-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            DWIVEDI
          </h1>
        </motion.div>
        <motion.p
            style={{ opacity }}
                className="absolute bottom-32 text-gray-400 text-sm md:text-base tracking-wide text-center z-20"
                  >
                    Software Developer • Data Analyst • AI Automation
                    </motion.p>
                    </div>
                    </section>
                    
  );
}
    