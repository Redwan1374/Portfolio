import React from 'react';
import { GraduationCap, Award, Calendar, Building2, CheckCircle } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Consistent academic excellence spanning Computer Science and Science tracks.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {educationList.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Badge */}
                  <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg border-4 border-white z-10">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Card Content Area */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all group">
                      
                      {/* Period & Status Pills */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <Award className="w-3.5 h-3.5" />
                          {item.grade}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution Name */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mt-1 mb-3">
                        <Building2 className="w-4 h-4 text-slate-500" />
                        <span>{item.institution}</span>
                        {item.status && (
                          <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                            {item.status}
                          </span>
                        )}
                      </div>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1.5 pt-3 border-t border-slate-200/80 text-xs text-slate-600">
                          {item.highlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
