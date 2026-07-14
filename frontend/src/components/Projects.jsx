import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/mock";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-xl border border-[#E4E4E7] bg-white hover:border-[#C19A6B]/30 hover:shadow-lg hover:shadow-[#C19A6B]/[0.06] hover:-translate-y-1 overflow-hidden transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? "0ms" : `${index * 120 + 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent bar */}
      <div
        className={`h-[2px] transition-all duration-500 ${
          isHovered
            ? "bg-gradient-to-r from-transparent via-[#C19A6B] to-transparent"
            : "bg-transparent"
        }`}
      />

      <div className="p-6 lg:p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge
              variant="outline"
              className="text-[10px] font-mono border-[#C19A6B]/30 text-[#C19A6B] uppercase tracking-wider mb-3"
            >
              {project.category}
            </Badge>
            <h3 className="text-lg font-bold text-[#18181B] group-hover:text-[#C19A6B] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-[#A1A1AA] font-medium mt-1">
              {project.company}
            </p>
          </div>
          <div className="p-2 rounded-lg border border-[#E4E4E7] bg-[#FAFAF9] group-hover:border-[#C19A6B]/25 group-hover:bg-[#C19A6B]/5 transition-all duration-300">
            <ArrowUpRight
              size={16}
              className="text-[#A1A1AA] group-hover:text-[#C19A6B] transition-colors duration-300"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#52525B] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[#C19A6B]/[0.08] text-[#C19A6B] border border-[#C19A6B]/15"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F4F4F5]">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[11px] font-mono text-[#71717A] bg-[#F4F4F5] rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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
      id="projects"
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
            // Projects
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#18181B] tracking-tight">
            Things I've built
          </h2>
          <p className="text-sm text-[#71717A] mt-3 max-w-lg">
            Key systems and platforms I've designed, built, and led across different organizations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
