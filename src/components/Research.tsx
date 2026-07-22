import React, { useState } from 'react';
import { FileText, Award, Calendar, MapPin, ExternalLink, CheckCircle, Sparkles, BookOpen, X, Globe2 } from 'lucide-react';
import { researchList } from '../data/portfolioData';
import { ResearchPaper } from '../types';

export const Research: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  return (
    <section id="research" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mb-3 border border-indigo-100">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Key Strategic Strength
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Research & Publications
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            First-author conference presentations and data-driven academic research contributions addressing social, educational, and developmental challenges.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Publication Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchList.map((paper) => {
            const isFirstAuthor = paper.role.includes("First Author");
            return (
              <div
                key={paper.id}
                className={`rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between border relative bg-white shadow-sm hover:shadow-xl ${
                  isFirstAuthor
                    ? 'border-indigo-200 ring-1 ring-indigo-500/10'
                    : 'border-slate-200/80 hover:border-indigo-200'
                }`}
              >
                {/* Highlight Badge */}
                {isFirstAuthor && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>Featured Publication • First Author</span>
                  </div>
                )}

                <div>
                  {/* Conference & Meta Info */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                      <BookOpen className="w-3.5 h-3.5" />
                      {paper.role}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {paper.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5" />
                      {paper.location}
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h3 className="text-xl font-bold text-slate-900 leading-snug hover:text-indigo-600 transition-colors">
                    "{paper.title}"
                  </h3>

                  {/* Conference Name */}
                  <p className="text-xs font-semibold text-indigo-700 mt-2 flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{paper.conference}</span>
                  </p>

                  {/* SDG Badge if available */}
                  {paper.sdgTag && (
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        {paper.sdgTag}
                      </span>
                    </div>
                  )}

                  {/* Abstract preview */}
                  <p className="mt-4 text-xs text-slate-600 leading-relaxed line-clamp-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {paper.abstract}
                  </p>

                  {/* Key Highlights List */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Research Contributions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {paper.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Trigger Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Peer-Reviewed Conference Contribution
                  </span>
                  <button
                    onClick={() => setSelectedPaper(paper)}
                    className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Research Paper Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto text-slate-900">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                  {selectedPaper.role}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1 leading-snug">
                  {selectedPaper.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPaper(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div>
                  <span className="text-slate-400 block font-medium">Conference</span>
                  <span className="font-bold text-slate-900">{selectedPaper.conference}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Date & Location</span>
                  <span className="font-bold text-slate-900">{selectedPaper.date} ({selectedPaper.location})</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Abstract & Methodology</h4>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                  {selectedPaper.abstract}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Core Findings & SDG Impact</h4>
                <ul className="space-y-2">
                  {selectedPaper.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPaper(null)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-xs font-semibold shadow-md cursor-pointer"
              >
                Close Summary
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
