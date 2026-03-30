import React, { useEffect, useRef, useState } from "react";
import { skillCategories, coreSkills } from "../data/mock";
import { Sparkles } from "lucide-react";

const Skills = () => {
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
      id="skills"
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
            // Skills
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#18181B] tracking-tight">
            Technical toolkit
          </h2>
        </div>

        {/* Core Skills */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-[#C19A6B]" />
            <h3 className="text-sm font-semibold text-[#18181B]">Core Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium rounded-full bg-[#18181B] text-[#FAFAF9] hover:bg-[#C19A6B] transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group p-6 rounded-xl border border-[#E4E4E7] bg-white hover:border-[#C19A6B]/20 hover:shadow-lg hover:shadow-[#C19A6B]/[0.03] transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 80 + 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#C19A6B]/10 group-hover:bg-[#C19A6B]/15 transition-colors duration-300">
                    <Icon size={18} className="text-[#C19A6B]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#18181B]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono text-[#52525B] bg-[#F4F4F5] rounded-md hover:bg-[#C19A6B]/10 hover:text-[#C19A6B] transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
