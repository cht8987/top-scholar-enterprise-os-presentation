import React from 'react';
import { Presentation, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  viewMode: 'slides' | 'doc';
  setViewMode: (mode: 'slides' | 'doc') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ viewMode, setViewMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-gray-800 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setViewMode('slides')}>
          <div className="p-2 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-white text-base tracking-tight">TOP SCHOLAR</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                ENTERPRISE OS
              </span>
            </div>
            <p className="text-[11px] text-gray-400">企业数字大脑与全员 AI 岗位分身</p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1 bg-gray-900 p-1 rounded-xl border border-gray-800">
            <button
              onClick={() => setViewMode('slides')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'slides'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Presentation className="w-4 h-4" />
              <span>幻灯片 Present 模式</span>
            </button>
            <button
              onClick={() => setViewMode('doc')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'doc'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>策略全景文档</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1 text-xs text-emerald-400 px-3 py-1.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4" />
            <span>数据主权受保护</span>
          </div>
        </div>
      </div>
    </header>
  );
};
