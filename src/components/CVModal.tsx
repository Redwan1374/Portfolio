import React from 'react';
import { X, ExternalLink, FileText } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Check if PDF exists
  const cvPdfPath = "/assets/cv.pdf";

  const handleOpenPdf = () => {
    window.open(cvPdfPath, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-screen h-screen flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Toolbar Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between gap-4 border-b border-slate-800 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white leading-none">
                Official Curriculum Vitae
              </h3>
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Formatted for Job Applications & Academic Review
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenPdf}
              id="cv-modal-open-pdf-btn"
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-slate-100">
          <iframe 
            src={`${cvPdfPath}#toolbar=1`}
            title="Curriculum Vitae PDF"
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end no-print">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-xl text-xs font-semibold"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};
