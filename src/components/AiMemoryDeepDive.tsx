import React, { useState } from 'react';
import { Database, Clock, Brain, ShieldCheck, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { AI_MEMORY_TRIO } from '../data/presentationData';

export const AiMemoryDeepDive: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('FalkorDB');

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      case 'Brain': return <Brain className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  const activeComp = AI_MEMORY_TRIO.find(item => item.techName === selectedTech) || AI_MEMORY_TRIO[0];

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 border border-purple-500/30 shadow-2xl space-y-6">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-800 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" />
            <span>AI Memory 核心技术三剑客深度解构</span>
          </div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            FalkorDB + Graphiti + Hindsight 协同逻辑
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            通俗化解说与专业分析结合：三层互不替代，共同防止 AI 幻觉，赋予企业大脑持久生命力
          </p>
        </div>

        <span className="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-xl text-xs font-semibold">
          数据 100% 本地私有化
        </span>
      </div>

      {/* 3-Pillar Tab Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {AI_MEMORY_TRIO.map((item) => (
          <div
            key={item.techName}
            onClick={() => setSelectedTech(item.techName)}
            className={`glass-card p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
              selectedTech === item.techName
                ? `border-purple-500 bg-purple-950/30 shadow-xl shadow-purple-500/10 scale-[1.02]`
                : 'border-gray-800 bg-slate-900/40 hover:border-gray-700 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}>
                {getTechIcon(item.icon)}
              </div>
              <span className="text-[11px] font-mono font-bold text-gray-400 uppercase">
                {item.techName}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
            <p className="text-xs font-semibold text-purple-300 mb-2">{item.metaphor}</p>
            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{item.role}</p>
          </div>
        ))}
      </div>

      {/* Selected Tech Deep Dive Card */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-purple-500/40 bg-slate-950/60">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${activeComp.color} text-white shadow-lg`}>
              {getTechIcon(activeComp.icon)}
            </div>
            <div>
              <div className="text-xs font-bold text-purple-400 font-mono">{activeComp.layerName}</div>
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                {activeComp.name} ({activeComp.techName})
              </h3>
            </div>
          </div>

          <div className="px-4 py-2 bg-purple-950/40 border border-purple-500/30 rounded-xl text-xs text-purple-200 font-medium">
            通俗比喻：<strong className="text-amber-300">{activeComp.metaphor}</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 7 cols: Analysis & Why Needed */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-400" />
                技术定位与核心职责
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed bg-blue-950/20 p-4 rounded-xl border border-blue-500/20">
                {activeComp.techDetails}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                为什么不可或缺？(商业与技术价值)
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed bg-emerald-950/20 p-4 rounded-xl border border-emerald-500/20">
                {activeComp.whyNeeded}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-purple-400" />
                服务器部署方案
              </h4>
              <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 text-xs font-mono text-gray-300">
                {activeComp.deployment}
              </div>
            </div>
          </div>

          {/* Right 5 cols: Key Features List */}
          <div className="lg:col-span-5 glass-card rounded-xl p-5 border border-purple-500/20 bg-purple-950/10 space-y-4">
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              {activeComp.techName} 核心特性列表
            </h4>

            <div className="space-y-2.5">
              {activeComp.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3 bg-gray-950/80 rounded-xl border border-gray-800 text-xs text-gray-200 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison: Why 3-Tier engine is superior */}
      <div className="p-5 bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-900/40 rounded-2xl border border-purple-500/30">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          对比：为什么传统简单搜索会失败，而 3 剑客组合完美解决？
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-red-950/20 rounded-xl border border-red-500/20 text-gray-300 space-y-1.5">
            <div className="font-bold text-red-400">❌ 传统普通向量/关键词搜索痛点：</div>
            <p className="text-gray-400">无时间线观念、无法关联网状上下文。把“学员3个月前的成绩”和“现在的表现”混为一谈，导致答非所问，AI 容易盲目产生幻觉。</p>
          </div>

          <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/20 text-gray-200 space-y-1.5">
            <div className="font-bold text-emerald-400">✓ FalkorDB + Graphiti + Hindsight 解决之道：</div>
            <p className="text-gray-300">FalkorDB 秒级搜关系，Graphiti 追踪时间历史，Hindsight 复盘记录人工纠错。精准理解业务演进，越用越符合 Top Scholar 的实际标准。</p>
          </div>
        </div>
      </div>
    </div>
  );
};
