import React from 'react';
import { Compass, Search, Award, MessageSquare } from 'lucide-react';
import { valueCards } from '../data/portfolioData';

export const ProfessionalValue: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-7 h-7 text-indigo-600" />,
    Search: <Search className="w-7 h-7 text-indigo-600" />,
    Award: <Award className="w-7 h-7 text-indigo-600" />,
    MessageSquare: <MessageSquare className="w-7 h-7 text-indigo-600" />,
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I Bring
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Key professional pillars that enable me to add immediate value to project management, research, and operational teams.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {iconMap[card.iconName]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-indigo-600">
                <span>Value Pillar {idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
