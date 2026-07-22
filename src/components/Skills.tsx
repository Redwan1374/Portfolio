import React, { useState } from 'react';
import {
  FolderKanban,
  Microscope,
  Users2,
  Code2,
  Wrench,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const iconMap: Record<string, React.ReactNode> = {
    FolderKanban: <FolderKanban className="w-6 h-6 text-indigo-600" />,
    Microscope: <Microscope className="w-6 h-6 text-indigo-600" />,
    Users2: <Users2 className="w-6 h-6 text-indigo-600" />,
    Code2: <Code2 className="w-6 h-6 text-indigo-600" />,
    Wrench: <Wrench className="w-6 h-6 text-indigo-600" />,
  };

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Capabilities Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Core Skills
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Categorized technical, organizational, research, and interpersonal proficiencies for entry-level and project roles.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    {iconMap[category.iconName] || <Wrench className="w-6 h-6 text-indigo-600" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-400">
                      {category.skills.length} Competencies
                    </span>
                  </div>
                </div>

                {/* Skill Tags List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-800 border border-slate-200/80 hover:border-indigo-200 transition-colors shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-400 flex items-center justify-between">
                <span>Verified Aptitude</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
