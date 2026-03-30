import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/mock";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-xl border border-[#1A1A1D] bg-[#111113] hover:border-[#C19A6B]/25 overflow-hidden transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120 + 200}ms` }}
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
              className="text-[10px] font-mono border-[#C19A6B]/25 text-[#C19A6B] uppercase tracking-wider mb-3"
            >
              {project.category}
            </Badge>
            <h3 className="text-lg font-bold text-white group-hover:text-[#C19A6B] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-white/30 font-medium mt-1">
              {project.company}
            </p>
          </div>
          <div className="p-2 rounded-lg border border-white/5 bg-white/[0.02] group-hover:border-[#C19A6B]/20 group-hover:bg-[#C19A6B]/5 transition-all duration-300">
            <ArrowUpRight
              size={16}
              className="text-white/20 group-hover:text-[#C19A6B] transition-colors duration-300"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/40 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[#C19A6B]/[0.08] text-[#C19A6B]/80 border border-[#C19A6B]/10"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[11px] font-mono text-white/30 bg-white/[0.03] rounded"
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
      className="relative py-24 lg:py-32 bg-[#0A0A0B]"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Things I've built
          </h2>
          <p className="text-sm text-white/30 mt-3 max-w-lg">
            Key systems and platforms I've designed, built, and led across different organizations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
