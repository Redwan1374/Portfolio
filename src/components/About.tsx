import React from 'react';
import { GraduationCap, Users, FileText, Briefcase, Check } from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-indigo-600 group-hover:text-white" />,
    Users: <Users className="w-6 h-6 text-indigo-600 group-hover:text-white" />,
    FileText: <FileText className="w-6 h-6 text-indigo-600 group-hover:text-white" />,
    Briefcase: <Briefcase className="w-6 h-6 text-indigo-600 group-hover:text-white" />,
  };

  return (
    <section id="about" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Background & Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5">
            {personalInfo.aboutText.map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-600 text-base leading-relaxed text-justify sm:text-left font-normal"
              >
                {paragraph}
              </p>
            ))}

            {/* Core Competencies Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <span className="p-1 rounded-md bg-emerald-100 text-emerald-700">
                  <Check className="w-4 h-4" />
                </span>
                <span>Team & Logistics Coordination</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                <span className="p-1 rounded-md bg-emerald-100 text-emerald-700">
                  <Check className="w-4 h-4" />
                </span>
                <span>Academic & Mixed-Method Research</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                <span className="p-1 rounded-md bg-emerald-100 text-emerald-700">
                  <Check className="w-4 h-4" />
                </span>
                <span>IEEE Student Branch Leadership</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                <span className="p-1 rounded-md bg-emerald-100 text-emerald-700">
                  <Check className="w-4 h-4" />
                </span>
                <span>Cross-Stakeholder Communication</span>
              </div>
            </div>
          </div>

          {/* 4 Highlight Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                  {iconMap[item.icon] || <Briefcase className="w-6 h-6 text-indigo-600 group-hover:text-white" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
