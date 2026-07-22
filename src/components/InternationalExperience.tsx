import React from 'react';
import { Globe2, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { internationalExperiences } from '../data/portfolioData';

export const InternationalExperience: React.FC = () => {
  return (
    <section id="international" className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Map Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Global Perspective
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            International Experience & Exposure
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Demonstrated readiness for multinational teams, cross-cultural collaboration, and international academic dialogues.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internationalExperiences.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-100">
                    <Globe2 className="w-3.5 h-3.5" />
                    {item.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Key Highlight Banner */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-indigo-900 font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Cross-Border Exposure
                </span>
                <span className="text-indigo-600 font-semibold">Global Ready</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
