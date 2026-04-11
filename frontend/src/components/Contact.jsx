import React, { useEffect, useRef, useState } from "react";
import { personalInfo } from "../data/mock";
import { Mail, MapPin, Send, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, formData);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } catch (err) {
      const detail = err.response?.data?.detail;
      toast({
        title: "Something went wrong",
        description: typeof detail === "string" ? detail : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#17171C]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[13px] font-mono text-[#C19A6B] tracking-widest uppercase mb-3">
            // Contact
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Let's connect
          </h2>
          <p className="text-sm text-white/30 mt-3 max-w-lg">
            Have an interesting project or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Email */}
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#C19A6B]/10">
                  <Mail size={16} className="text-[#C19A6B]" />
                </div>
                <span className="text-xs text-white/30 font-medium uppercase tracking-wider">Email</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base text-white/70 hover:text-[#C19A6B] transition-colors duration-300 font-medium"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#C19A6B]/10">
                  <MapPin size={16} className="text-[#C19A6B]" />
                </div>
                <span className="text-xs text-white/30 font-medium uppercase tracking-wider">Location</span>
              </div>
              <p className="text-base text-white/70 font-medium">
                {personalInfo.location}
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-xs text-white/30 font-medium uppercase tracking-wider">Social</p>
              <div className="space-y-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#C19A6B]/20 hover:bg-[#C19A6B]/5 transition-all duration-300 group/link"
                >
                  <Linkedin size={18} className="text-white/40 group-hover/link:text-[#C19A6B] transition-colors" />
                  <span className="text-sm text-white/50 group-hover/link:text-white/80 transition-colors flex-1">LinkedIn</span>
                  <ArrowUpRight size={14} className="text-white/20 group-hover/link:text-[#C19A6B] transition-colors" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#C19A6B]/20 hover:bg-[#C19A6B]/5 transition-all duration-300 group/link"
                >
                  <Github size={18} className="text-white/40 group-hover/link:text-[#C19A6B] transition-colors" />
                  <span className="text-sm text-white/50 group-hover/link:text-white/80 transition-colors flex-1">GitHub</span>
                  <ArrowUpRight size={14} className="text-white/20 group-hover/link:text-[#C19A6B] transition-colors" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#C19A6B]/20 hover:bg-[#C19A6B]/5 transition-all duration-300 group/link"
                >
                  <Instagram size={18} className="text-white/40 group-hover/link:text-[#C19A6B] transition-colors" />
                  <span className="text-sm text-white/50 group-hover/link:text-white/80 transition-colors flex-1">Instagram</span>
                  <ArrowUpRight size={14} className="text-white/20 group-hover/link:text-[#C19A6B] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-white/30 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-[#C19A6B]/40 focus:ring-[#C19A6B]/20 h-12"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/30 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-[#C19A6B]/40 focus:ring-[#C19A6B]/20 h-12"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-white/30 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={6}
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-[#C19A6B]/40 focus:ring-[#C19A6B]/20 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto h-12 px-8 bg-[#C19A6B] text-[#17171C] font-semibold hover:bg-[#A88456] transition-colors duration-300 rounded-lg"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#17171C]/20 border-t-[#17171C] rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
