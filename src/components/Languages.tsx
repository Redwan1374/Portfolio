import React from 'react';
import { Languages as LanguagesIcon, CheckCircle2, MessageSquareText, Globe } from 'lucide-react';
import { languagesList } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Multilingual Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Languages
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Language proficiencies tailored for technical communication, academic writing, and international engagement.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Language Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languagesList.map((item, idx) => {
            const isEnglish = item.language === 'English';
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isEnglish
                    ? 'bg-indigo-900 text-white border-indigo-800 shadow-lg'
                    : 'bg-slate-50 text-slate-900 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold">{item.language}</span>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                        isEnglish
                          ? 'bg-white text-indigo-900'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      }`}
                    >
                      {item.proficiency}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed ${isEnglish ? 'text-indigo-100' : 'text-slate-600'}`}>
                    {item.notes}
                  </p>

                  {/* Highlight English Specifics */}
                  {isEnglish && (
                    <div className="mt-4 pt-3 border-t border-indigo-800 space-y-1.5 text-[11px] text-indigo-100">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                        <span>Academic & Technical Writing</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                        <span>Conference Presentations</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                        <span>International Collaboration</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className={`mt-6 pt-3 border-t ${isEnglish ? 'border-indigo-800 text-indigo-200' : 'border-slate-200 text-slate-400'} text-[11px] font-medium flex items-center justify-between`}>
                  <span>Communication Readiness</span>
                  <Globe className={`w-3.5 h-3.5 ${isEnglish ? 'text-indigo-300' : 'text-indigo-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
