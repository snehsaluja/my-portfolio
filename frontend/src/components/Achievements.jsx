import React, { useEffect, useRef, useState } from "react";
import { achievements } from "../data/mock";
import { Award, TrendingUp } from "lucide-react";

const Achievements = () => {
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
      id="achievements"
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
            // Achievements
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#18181B] tracking-tight">
            Career highlights
          </h2>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { label: "Years Experience", value: "12" },
            { label: "Companies", value: "6" },
            { label: "Domains Covered", value: "7" },
            { label: "Cloud Platforms", value: "3" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl border border-[#E4E4E7] bg-white text-center"
            >
              <p className="text-2xl lg:text-3xl font-bold text-[#C19A6B] font-mono">
                {stat.value}
              </p>
              <p className="text-xs text-[#71717A] mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`group p-6 rounded-xl border border-[#E4E4E7] bg-white hover:border-[#C19A6B]/20 hover:shadow-lg hover:shadow-[#C19A6B]/[0.03] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#C19A6B]/10 group-hover:bg-[#C19A6B]/15 transition-colors duration-300 shrink-0">
                  <Award size={20} className="text-[#C19A6B]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-bold text-[#18181B] group-hover:text-[#C19A6B] transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <span className="text-[10px] font-mono font-semibold text-[#C19A6B] bg-[#C19A6B]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {achievement.metric}
                    </span>
                  </div>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
