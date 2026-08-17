import React from 'react';
import { Presentation, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  viewMode: 'slides' | 'doc';
  setViewMode: (mode: 'slides' | 'doc') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ viewMode, setViewMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/90 backdrop-blur-2xl border-b border-amber-500/20 px-4 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setViewMode('slides')}>
          <div className="p-2.5 bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-300 rounded-2xl text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            <Sparkles className="w-5 h-5 font-extrabold" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-white text-base tracking-wider font-mono">TOP SCHOLAR</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold uppercase tracking-wider">
                ENTERPRISE AI OS
              </span>
            </div>
            <p className="text-[11px] text-gray-400">企业数字大脑与各部门专属业务哨兵 · 2026-08-18 行动方案</p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1 bg-[#0e121b] p-1 rounded-2xl border border-amber-500/20 shadow-inner">
            <button
              onClick={() => setViewMode('slides')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'slides'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                  : 'text-gray-400 hover:text-amber-300'
              }`}
            >
              <Presentation className="w-4 h-4" />
              <span>幻灯片 Present 模式</span>
            </button>
            <button
              onClick={() => setViewMode('doc')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'doc'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                  : 'text-gray-400 hover:text-amber-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>行动方案全景报告</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1 text-xs text-amber-300 px-3 py-1.5 bg-amber-950/30 rounded-2xl border border-amber-500/30 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>内部最高决策材料</span>
          </div>
        </div>
      </div>
    </header>
  );
};

