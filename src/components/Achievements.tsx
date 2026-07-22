import React from 'react';
import { Trophy, Medal, GraduationCap, Calendar, Sparkles, Building2 } from 'lucide-react';
import { achievementList } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-7 h-7 text-amber-500" />;
      case 'medal':
        return <Medal className="w-7 h-7 text-indigo-600" />;
      case 'scholarship':
        return <GraduationCap className="w-7 h-7 text-emerald-600" />;
      default:
        return <Trophy className="w-7 h-7 text-indigo-600" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'trophy':
        return 'bg-amber-50 border-amber-200 text-amber-800';
      case 'medal':
        return 'bg-indigo-50 border-indigo-200 text-indigo-800';
      case 'scholarship':
        return 'bg-emerald-50 border-emerald-200 text-emerald-800';
      default:
        return 'bg-slate-50 border-slate-200 text-slate-800';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Recognition & Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Achievements & Awards
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Honors celebrating competitive excellence, international government scholarships, and personal development.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementList.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Icon & Date Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs group-hover:scale-110 transition-transform">
                    {getAchievementIcon(item.iconType)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                {/* Award Title */}
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                {/* Organizer */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 mt-2 mb-3">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.organizer}</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${getBadgeColor(item.iconType)}`}>
                  Official Honor
                </span>
                <Sparkles className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
