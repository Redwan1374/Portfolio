import React, { useState } from 'react';
import { X, Image as ImageIcon, Link as LinkIcon, Upload, Check, Trash2 } from 'lucide-react';

interface PhotoEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhotoUrl: string | null;
  onSavePhotoUrl: (url: string | null) => void;
}

export const PhotoEditorModal: React.FC<PhotoEditorModalProps> = ({
  isOpen,
  onClose,
  currentPhotoUrl,
  onSavePhotoUrl
}) => {
  if (!isOpen) return null;

  const [inputUrl, setInputUrl] = useState(currentPhotoUrl || '');
  const [activeTab, setActiveTab] = useState<'url' | 'upload'>('url');

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      onSavePhotoUrl(inputUrl.trim());
    } else {
      onSavePhotoUrl(null);
    }
    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onSavePhotoUrl(reader.result);
          onClose();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    onSavePhotoUrl(null);
    setInputUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <ImageIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Custom Profile Photo
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-xl mt-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              activeTab === 'url' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Image Link URL
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              activeTab === 'upload' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Upload File
          </button>
        </div>

        {/* Tab 1: Image URL Input */}
        {activeTab === 'url' && (
          <form onSubmit={handleSaveUrl} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Paste Image Direct URL:
              </label>
              <div className="relative">
                <input
                  type="url"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://example.com/my-photo.jpg"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 text-xs text-slate-800 outline-none"
                />
                <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleResetPhoto}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset Default</span>
              </button>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Save Image</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: File Upload */}
        {activeTab === 'upload' && (
          <div className="mt-4 space-y-4">
            <label className="border-2 border-dashed border-indigo-200 hover:border-indigo-500 bg-indigo-50/50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors text-center">
              <Upload className="w-8 h-8 text-indigo-600 mb-2" />
              <span className="text-xs font-bold text-slate-800">Click to Select Portrait Image</span>
              <span className="text-[11px] text-slate-500 mt-1">Supports JPG, PNG, WEBP files</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={handleResetPhoto}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset Photo</span>
              </button>
              <button
                onClick={onClose}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
