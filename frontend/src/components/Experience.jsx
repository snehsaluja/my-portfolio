import React, { useEffect, useRef, useState } from "react";
import { experiences } from "../data/mock";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "./ui/badge";

const ExperienceCard = ({ exp, index, isVisible }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative pl-8 lg:pl-12 pb-12 last:pb-0 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] lg:left-[19px] top-3 bottom-0 w-px bg-[#E4E4E7]" />
      {/* Timeline dot */}
      <div
        className={`absolute left-0 lg:left-2 top-2 w-[23px] h-[23px] rounded-full border-[3px] flex items-center justify-center ${
          exp.current
            ? "border-[#C19A6B] bg-[#C19A6B]/10"
            : "border-[#D4D4D8] bg-white"
        }`}
      >
        {exp.current && (
          <span className="w-2 h-2 rounded-full bg-[#C19A6B] animate-pulse" />
        )}
      </div>

      {/* Card */}
      <div className="group rounded-xl border border-[#E4E4E7] bg-white hover:border-[#C19A6B]/20 hover:shadow-lg hover:shadow-[#C19A6B]/[0.03] hover:-translate-y-1 transition-all duration-300 p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base font-bold text-[#18181B] group-hover:text-[#C19A6B] transition-colors duration-300">
              {exp.role}
            </h3>
            <p className="text-sm font-medium text-[#52525B] mt-0.5">
              {exp.company}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#A1A1AA] shrink-0">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {exp.location}
            </span>
            <span className="font-mono">{exp.period}</span>
          </div>
        </div>

        {/* Descriptions */}
        <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${exp.descriptions.length <= 2 ? "max-h-none" : expanded ? "max-h-[500px]" : "max-h-[60px]"}`}>
          {exp.descriptions.map((desc, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-[#52525B] leading-relaxed">
              <span className="text-[#C19A6B] mt-1.5 shrink-0">&#8226;</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {exp.descriptions.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-medium text-[#C19A6B] mt-3 hover:text-[#A88456] transition-colors"
          >
            {expanded ? (
              <>
                Show less <ChevronUp size={14} />
              </>
            ) : (
              <>
                Show more <ChevronDown size={14} />
              </>
            )}
          </button>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#F4F4F5]">
          {exp.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[11px] font-mono bg-[#F4F4F5] text-[#52525B] hover:bg-[#C19A6B]/10 hover:text-[#C19A6B] transition-colors duration-200 cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#17171C]"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[13px] font-mono text-[#C19A6B] tracking-widest uppercase mb-3">
            // Experience
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Where I've worked
          </h2>
          <p className="text-sm text-white/30 mt-3 max-w-lg">
            Over 12 years of building systems at scale — from banking to travel, e-commerce to IoT.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
