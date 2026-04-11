import React, { useEffect, useRef, useState } from "react";
import { personalInfo, hobbies, education, domains } from "../data/mock";
import { GraduationCap, Globe, Aperture, Crosshair, PenTool, Sparkles } from "lucide-react";

const quirkyDecorations = {
  Photography: (
    <>
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full border-2 border-[#C19A6B]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-45">
        <Aperture size={14} className="text-[#C19A6B]" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded border border-dashed border-[#C19A6B]/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-30 transition-all duration-700">
        <Crosshair size={10} className="text-[#C19A6B]" />
      </div>
    </>
  ),
  Gaming: (
    <>
      <div className="absolute top-2 right-3 flex gap-1 opacity-0 group-hover:opacity-40 transition-all duration-500">
        <span className="w-1.5 h-1.5 rounded-sm bg-[#C19A6B]" />
        <span className="w-1.5 h-1.5 rounded-sm bg-[#C19A6B]/60" />
        <span className="w-1.5 h-1.5 rounded-sm bg-[#C19A6B]/30" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg border border-[#C19A6B]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" />
      <div className="absolute bottom-2 right-8 opacity-0 group-hover:opacity-25 transition-all duration-700">
        <span className="text-[10px] font-mono text-[#C19A6B] tracking-wider">GG</span>
      </div>
      <div className="absolute top-4 right-10 opacity-0 group-hover:opacity-20 transition-all duration-600">
        <Sparkles size={10} className="text-[#C19A6B]" />
      </div>
    </>
  ),
  "Sketching & Painting": (
    <>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:-rotate-12">
        <PenTool size={12} className="text-[#C19A6B]" />
      </div>
      <div className="absolute -bottom-1.5 right-4 w-10 h-[2px] bg-gradient-to-r from-[#C19A6B]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-14" />
      <div className="absolute bottom-5 -right-1 w-3 h-3 rounded-full bg-[#C19A6B]/10 opacity-0 group-hover:opacity-100 transition-all duration-600 group-hover:scale-150" />
      <div className="absolute top-8 right-6 w-2 h-2 rounded-full bg-[#C19A6B]/15 opacity-0 group-hover:opacity-100 transition-all duration-700" />
    </>
  ),
};

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#FAFAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[13px] font-mono text-[#C19A6B] tracking-widest uppercase mb-3">
            // About Me
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#18181B] tracking-tight">
            Get to know me
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Photo + Quick Info */}
          <div
            className={`lg:col-span-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Photo */}
            <div className="relative group mb-8">
              <div className="aspect-[4/5] rounded-2xl border border-[#E4E4E7] overflow-hidden">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              {/* Decorative border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#C19A6B]/15 -z-10" />
            </div>

            {/* Education card */}
            <div className="rounded-xl border border-[#E4E4E7] bg-white p-5 hover:border-[#C19A6B]/30 hover:shadow-md hover:shadow-[#C19A6B]/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#C19A6B]/10">
                  <GraduationCap size={18} className="text-[#C19A6B]" />
                </div>
                <h3 className="text-sm font-semibold text-[#18181B]">Education</h3>
              </div>
              <p className="text-sm font-medium text-[#18181B]">{education.degree}</p>
              <p className="text-xs text-[#71717A] mt-1">{education.institution}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-[#A1A1AA]">{education.period}</span>
              </div>
            </div>
          </div>

          {/* Right: Bio + Details */}
          <div
            className={`lg:col-span-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-6">
              <p className="text-base lg:text-lg text-[#3F3F46] leading-relaxed">
                {personalInfo.about}
              </p>
              <p className="text-base lg:text-lg text-[#52525B] leading-relaxed">
                {personalInfo.aboutExtended}
              </p>
            </div>

            {/* Domain Exposure */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#C19A6B]/10">
                  <Globe size={18} className="text-[#C19A6B]" />
                </div>
                <h3 className="text-sm font-semibold text-[#18181B]">Domain Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <span
                    key={domain}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#18181B] text-[#FAFAF9] tracking-wide"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-[#18181B] mb-4">When I'm Not Coding</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {hobbies.map((hobby) => {
                  const Icon = hobby.icon;
                  return (
                    <div
                      key={hobby.name}
                      className="group relative p-5 rounded-xl border border-[#E4E4E7] bg-white hover:border-[#C19A6B]/30 hover:shadow-md hover:shadow-[#C19A6B]/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      {/* Quirky decorations */}
                      {quirkyDecorations[hobby.name]}
                      <Icon
                        size={22}
                        className="text-[#C19A6B] mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      />
                      <h4 className="text-sm font-semibold text-[#18181B] mb-1">
                        {hobby.name}
                      </h4>
                      <p className="text-xs text-[#71717A] leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Note */}
            <div className="mt-10 p-4 rounded-xl border border-[#C19A6B]/15 bg-[#C19A6B]/[0.03]">
              <p className="text-xs text-[#71717A] leading-relaxed">
                <span className="font-semibold text-[#C19A6B]">Open to opportunities:</span>{" "}
                {personalInfo.openToRelocation}. {personalInfo.workAuth}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
