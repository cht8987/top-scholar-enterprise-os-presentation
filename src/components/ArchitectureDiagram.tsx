import React, { useState } from 'react';
import { Database, Brain, Sparkles, UserCheck, ShieldCheck, ArrowDown, Cpu, Clock, Layers } from 'lucide-react';
import { AiMemoryDeepDive } from './AiMemoryDeepDive';

export const ArchitectureDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'static' | 'dynamic' | 'deepdive'>('all');

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-purple-500/20 shadow-2xl relative overflow-hidden space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            Top Scholar 企业智脑「双保险」架构
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              通俗解构 + AI Memory 技术全解析
            </span>
          </h3>
          <p className="text-sm text-gray-400">人类权威保障底线，FalkorDB + Graphiti + Hindsight 赋能 AI 动态记忆演进</p>
        </div>

        <div className="flex flex-wrap gap-1 bg-gray-900/80 p-1 rounded-xl border border-gray-800">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'all' ? 'bg-purple-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            双层整体架构
          </button>
          <button
            onClick={() => setActiveTab('static')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'static' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            高亮：静态真相库
          </button>
          <button
            onClick={() => setActiveTab('dynamic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'dynamic' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            高亮：动态学习网
          </button>
          <button
            onClick={() => setActiveTab('deepdive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'deepdive' ? 'bg-amber-600 text-white shadow' : 'text-amber-400 hover:text-amber-200'
            }`}
          >
            ★ AI Memory 技术深挖 (FalkorDB/Graphiti/Hindsight)
          </button>
        </div>
      </div>

      {activeTab === 'deepdive' ? (
        <AiMemoryDeepDive />
      ) : (
        /* Main Diagram */
        <div className="space-y-6">
          {/* Layer 4: Top - User & AI Assistants */}
          <div className="glass-card rounded-xl p-4 border border-indigo-500/30 bg-indigo-950/20">
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" />
              L4 界面与全员 AI 数字助理阵列 (Human & AI Interaction)
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {[
                { label: '营销 AI 助手', sub: '爆款文案/竞品', color: 'border-purple-500/40 bg-purple-500/10 text-purple-300' },
                { label: '销售 AI 助手', sub: '报价/闭单话术', color: 'border-amber-500/40 bg-amber-500/10 text-amber-300' },
                { label: '客服 AI 助手', sub: '红黄绿灯/关怀', color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300' },
                { label: '教务 AI 助手', sub: '批改评语/教材', color: 'border-violet-500/40 bg-violet-500/10 text-violet-300' },
                { label: '运营/IT 助手', sub: '自动发号/排错', color: 'border-slate-500/40 bg-slate-500/10 text-slate-300' },
                { label: '高管仪表盘', sub: '全局 ROI/看板', color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' }
              ].map((item, idx) => (
                <div key={idx} className={`p-2.5 rounded-lg border text-center ${item.color}`}>
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className="text-[10px] opacity-75">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Down Arrow Indicator */}
          <div className="flex justify-center -my-3">
            <div className="p-1.5 bg-gray-900 border border-gray-800 rounded-full text-purple-400 animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

          {/* Layer 3: AI Logic & Router */}
          <div className="glass-card rounded-xl p-4 border border-blue-500/30 bg-blue-950/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-blue-500/20 rounded-lg text-blue-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">L3 AI 调度与响应中枢 (Agent Core)</h4>
                <p className="text-xs text-gray-400">接收提问 ➔ 判断意图 ➔ 分流查询静态真相库与动态记忆</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 3层防幻觉校验
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 智能问答提效
              </span>
            </div>
          </div>

          {/* Dual Engines Grid (Layer 1 & Layer 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Layer 1: Static Truth Vault */}
            <div
              className={`glass-card rounded-xl p-5 border transition-all duration-300 ${
                activeTab === 'dynamic' ? 'opacity-40 border-gray-800' : 'border-blue-500/50 bg-blue-950/30 shadow-lg shadow-blue-500/5'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">第一层：静态真相中枢</h4>
                    <span className="text-[11px] text-blue-400 font-medium">Obsidian SOP 知识大本营</span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                  人类维护 · 权威标准
                </span>
              </div>

              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                存放公司所有的制度、SOP、<strong>唯一权威价格表</strong>、招生政策和品牌口径。绝无二义性，更新频率低但准确率 100%。
              </p>

              <div className="space-y-2">
                {[
                  { title: '全员共享真相', desc: '全公司唯一的价格表，防止销售报错价' },
                  { title: '部门隔离安全', desc: '专人维护专区，防止改乱 SOP' },
                  { title: '零丢失资产', desc: '即使员工离职，全套规范永远留存在公司' }
                ].map((item, idx) => (
                  <div key={idx} className="p-2 bg-blue-900/20 rounded-lg border border-blue-500/20 text-xs flex items-center justify-between">
                    <span className="font-semibold text-blue-200">{item.title}</span>
                    <span className="text-[11px] text-gray-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer 2: Dynamic Learning Network */}
            <div
              className={`glass-card rounded-xl p-5 border transition-all duration-300 ${
                activeTab === 'static' ? 'opacity-40 border-gray-800' : 'border-emerald-500/50 bg-emerald-950/30 shadow-lg shadow-emerald-500/5'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">第二层：AI Memory 动态神经网</h4>
                    <span className="text-[11px] text-emerald-400 font-medium">FalkorDB + Graphiti + Hindsight</span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  AI 自动学习 · 持续进化
                </span>
              </div>

              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                像一位经验丰富的老员工，在日常问答中记住学员偏好、关怀记录与决策推演。由三大核心技术驱动：
              </p>

              <div className="space-y-2">
                {[
                  { title: 'FalkorDB', desc: '高性能图数据库底座，毫秒级 Cypher 查询与向量索引', icon: Database },
                  { title: 'Graphiti', desc: '时序图谱写入引擎，为记忆打上时间戳，追踪学员历史演进', icon: Clock },
                  { title: 'Hindsight', desc: 'Agent 长期记忆与反思质检，记录人工纠错，错误永不再犯', icon: Layers }
                ].map((item, idx) => (
                  <div key={idx} className="p-2 bg-emerald-900/20 rounded-lg border border-emerald-500/20 text-xs flex items-center justify-between">
                    <span className="font-semibold text-emerald-200 flex items-center gap-1.5">
                      <item.icon className="w-3.5 h-3.5 text-emerald-400" />
                      {item.title}
                    </span>
                    <span className="text-[11px] text-gray-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
