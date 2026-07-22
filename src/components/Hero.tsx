import React from 'react';
import {
  FileText,
  Briefcase,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Linkedin,
  Github,
  Facebook
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../../assets/profile-photo.jpg';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCVModal
}) => {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Default fallback avatar styling with initials or image (imported so Vite includes it)
  const defaultAvatar = profilePhoto;

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Information Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-indigo-100">{personalInfo.name}</span>
              </h1>
              <p className="mt-3 text-base sm:text-lg text-indigo-300 font-medium leading-snug max-w-2xl">
                {personalInfo.title}
              </p>
            </div>

            {/* Concise Introduction */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Target Position Tags (Recruiter At a Glance) */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Target Roles:
              </span>
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                {personalInfo.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => handleScrollTo('experience')}
                id="hero-view-experience-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>View My Experience</span>
              </button>

              <button
                onClick={onOpenCVModal}
                id="hero-download-cv-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold text-sm border border-slate-700 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                id="hero-contact-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm border border-slate-700/50 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Contact & Info Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3 text-xs text-slate-400">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 hover:text-indigo-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.email}</span>
                </a>
                <span className="hidden sm:inline text-slate-700">•</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-2 hover:text-indigo-300 transition-colors"
                >
                  <span className="font-semibold text-indigo-400">Phone:</span>
                  <span>{personalInfo.phone}</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-1">
                {personalInfo.socialLinks.facebook && (
                  <a
                    href={personalInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/80 transition-all hover:scale-105"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
                {personalInfo.socialLinks.linkedin && (
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/80 transition-all hover:scale-105"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {personalInfo.socialLinks.github && (
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/80 transition-all hover:scale-105"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Contact"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/80 transition-all hover:scale-105"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Profile Photo Area */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Photo Frame Container */}
              <div className="relative bg-slate-800 rounded-2xl p-3 border border-slate-700 shadow-2xl overflow-hidden">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center border border-slate-700/80">
                  <img
                    src={defaultAvatar}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full bg-gradient-to-b from-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center';
                      fallback.innerHTML = `
                        <div class="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-inner mb-3">RR</div>
                        <h3 class="text-white font-bold text-lg">${personalInfo.name}</h3>
                        <p class="text-xs text-indigo-300 mt-1">CSE Student & Project Coordinator</p>
                        <p class="text-[11px] text-slate-400 mt-2 italic">Click "Update Photo" to attach your portrait</p>
                      `;
                      e.currentTarget.parentElement?.appendChild(fallback);
                    }}
                  />

                  {/* Photo Customizer Overlay Button */}
                </div>

                {/* Profile Card Footer Stats */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs pt-3 border-t border-slate-700/60">
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                    <span className="block font-bold text-indigo-300 text-sm">3.68 / 4.00</span>
                    <span className="text-[10px] text-slate-400">DIU CSE CGPA</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                    <span className="block font-bold text-emerald-400 text-sm">First Author</span>
                    <span className="text-[10px] text-slate-400">ICSD 2026 Paper</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Credibility Badge */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Academic & IEEE Student Leadership Credentials</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
