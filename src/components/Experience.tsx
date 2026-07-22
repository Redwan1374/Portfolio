import React from 'react';
import { Briefcase, Calendar, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { experienceList } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Organizing & Team Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Leadership & Project Coordination Experience
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Proven track record of managing logistics, leading humanitarian technology projects, and coordinating events.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceList.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Decorative Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-100">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.organization}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {exp.role}
                </h3>

                {exp.badge && (
                  <span className="inline-block mt-1 text-xs font-semibold text-slate-500">
                    Specialization: {exp.badge}
                  </span>
                )}

                {/* Responsibilities List */}
                <div className="mt-5 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-indigo-600" />
                  IEEE Leadership & Volunteering
                </span>
                <span className="text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Verified Experience <ArrowRight className="w-3 h-3" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
