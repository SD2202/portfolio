import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* 🔥 GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">

        {/* TOP LEFT */}
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-purple-500/30 blur-[150px]" />

        {/* BOTTOM RIGHT */}
        <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-pink-500/30 blur-[150px]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </div>

    </div>
  );
}
export default App;