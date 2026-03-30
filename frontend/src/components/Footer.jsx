import React from "react";
import { personalInfo } from "../data/mock";
import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17171C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-white/60">
              <span className="text-[#C19A6B]">{"<"}</span>
              {personalInfo.firstName}
              <span className="text-white/30">{personalInfo.lastName}</span>
              <span className="text-[#C19A6B]">{" />"}</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/5 bg-white/[0.02] text-white/30 hover:text-[#C19A6B] hover:border-[#C19A6B]/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/5 bg-white/[0.02] text-white/30 hover:text-[#C19A6B] hover:border-[#C19A6B]/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full border border-white/5 bg-white/[0.02] text-white/30 hover:text-[#C19A6B] hover:border-[#C19A6B]/20 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/20 flex items-center gap-1">
            &copy; {currentYear} {personalInfo.name}. Built with
            <Heart size={12} className="text-[#C19A6B]/50 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
