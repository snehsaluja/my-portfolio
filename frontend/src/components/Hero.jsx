import React, { useEffect, useRef } from "react";
import { ArrowDown, MapPin, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data/mock";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-[#17171C] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C19A6B, transparent 70%)",
          transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))",
          transition: "transform 0.6s ease-out",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8B7355, transparent 70%)",
          transform: "translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))",
          transition: "transform 0.8s ease-out",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[13px] text-white/50 font-medium tracking-wide">
            Currently at Booking.com, India
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6 animate-fadeInUp">
          <span className="block">{personalInfo.firstName}</span>
          <span className="block text-[#C19A6B]">{personalInfo.lastName}</span>
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-white/40 font-medium tracking-wide mb-4 animate-fadeInUp animation-delay-200">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/25 leading-relaxed mb-10 animate-fadeInUp animation-delay-400">
          {personalInfo.subtitle}
        </p>

        {/* Location & Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fadeInUp animation-delay-600">
          <span className="flex items-center gap-2 text-sm text-white/30">
            <MapPin size={14} className="text-[#C19A6B]/60" />
            {personalInfo.location}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/40 hover:text-[#C19A6B] hover:border-[#C19A6B]/30 hover:bg-[#C19A6B]/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/40 hover:text-[#C19A6B] hover:border-[#C19A6B]/30 hover:bg-[#C19A6B]/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={scrollToAbout}
          className="inline-flex flex-col items-center gap-2 text-white/20 hover:text-[#C19A6B]/60 transition-colors duration-300 group animate-fadeInUp animation-delay-800"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Explore</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
