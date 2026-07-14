import React, { useEffect, useRef, useState } from "react";
import { personalInfo } from "../data/mock";
import { Mail, MapPin, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

const Contact = () => {
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

  const socials = [
    { name: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
    { name: "GitHub", href: personalInfo.github, icon: Github },
    { name: "Instagram", href: personalInfo.instagram, icon: Instagram },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[13px] font-mono text-[#C19A6B] tracking-widest uppercase mb-3">
            // Contact
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#18181B] tracking-tight">
            Let's connect
          </h2>
          <p className="text-base text-[#71717A] mt-4 max-w-md mx-auto leading-relaxed">
            Have an interesting project or opportunity? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-[#E4E4E7] bg-[#FAFAF9] hover:border-[#C19A6B]/30 hover:shadow-md hover:shadow-[#C19A6B]/5 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="p-2 rounded-lg bg-[#C19A6B]/10 group-hover:bg-[#C19A6B]/15 transition-colors">
              <Mail size={18} className="text-[#C19A6B]" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-[#A1A1AA] font-medium uppercase tracking-wider">Email</p>
              <p className="text-sm font-medium text-[#18181B] group-hover:text-[#C19A6B] transition-colors">
                {personalInfo.email}
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#E4E4E7] bg-[#FAFAF9] w-full sm:w-auto">
            <div className="p-2 rounded-lg bg-[#C19A6B]/10">
              <MapPin size={18} className="text-[#C19A6B]" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-[#A1A1AA] font-medium uppercase tracking-wider">Location</p>
              <p className="text-sm font-medium text-[#18181B]">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs text-[#A1A1AA] font-medium uppercase tracking-widest mb-5">
            Find me on
          </p>
          <div className="flex items-center justify-center gap-4">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-[#E4E4E7] bg-[#FAFAF9] hover:border-[#C19A6B]/30 hover:shadow-md hover:shadow-[#C19A6B]/5 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={18} className="text-[#71717A] group-hover:text-[#C19A6B] transition-colors" />
                <span className="text-sm font-medium text-[#52525B] group-hover:text-[#18181B] transition-colors hidden sm:inline">
                  {name}
                </span>
                <ArrowUpRight size={14} className="text-[#A1A1AA] group-hover:text-[#C19A6B] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
