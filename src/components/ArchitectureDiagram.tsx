import React, { useState } from 'react';
import { Database, Brain, Sparkles, UserCheck, ShieldCheck, ArrowDown, Cpu, Clock, Layers, Users, TrendingUp, BookOpen } from 'lucide-react';
import { AiMemoryDeepDive } from './AiMemoryDeepDive';
import { COMPANY_OS_TWIN_PILLAR_TREE, BUSINESS_DB_HIGHLIGHTS } from '../data/presentationData';

export const ArchitectureDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'twin_pillars' | 'deepdive' | 'ascii'>('twin_pillars');

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-purple-400" />;
      default: return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-purple-500/20 shadow-2xl relative overflow-hidden space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            Top Scholar Company OS 双柱驱动架构
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              知识层 + LMS 业务层双保险
            </span>
          </h3>
          <p className="text-sm text-gray-400">Obsidian Vault (SOP知识) + Business DB (LMS系统入口) 汇聚至 AI 智脑层</p>
        </div>

        <div className="flex flex-wrap gap-1 bg-gray-900/80 p-1 rounded-xl border border-gray-800">
          <button
            onClick={() => setActiveTab('twin_pillars')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'twin_pillars' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            ★ 双柱架构图解 (Obsidian+LMS DB)
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'all' ? 'bg-purple-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            四层逻辑分流
          </button>
          <button
            onClick={() => setActiveTab('deepdive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'deepdive' ? 'bg-amber-600 text-white shadow' : 'text-amber-400 hover:text-amber-200'
            }`}
          >
            AI Memory 三剑客深挖
          </button>
          <button
            onClick={() => setActiveTab('ascii')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'ascii' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            ASCII 架构原图
          </button>
        </div>
      </div>

      {activeTab === 'deepdive' ? (
        <AiMemoryDeepDive />
      ) : activeTab === 'ascii' ? (
        <div className="glass-card rounded-2xl p-6 border border-blue-500/30 bg-slate-950/90 font-mono text-xs text-emerald-300 overflow-x-auto shadow-inner leading-relaxed">
          <div className="text-xs text-gray-400 font-sans mb-3 flex items-center justify-between">
            <span>Company OS 双柱驱动架构 ASCII 规范图：</span>
            <span className="text-emerald-400 font-semibold">Obsidian Vault & Business DB (LMS Entry)</span>
          </div>
          <pre className="whitespace-pre">{COMPANY_OS_TWIN_PILLAR_TREE}</pre>
        </div>
      ) : activeTab === 'twin_pillars' ? (
        /* TWIN PILLARS DIAGRAM */
        <div className="space-y-6">
          {/* Top Banner: Company OS */}
          <div className="glass-card rounded-xl p-4 border border-blue-500/40 bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-900/40 text-center">
            <h4 className="text-lg font-black text-white tracking-wide uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              COMPANY OS (TS 企业操作系统核心)
            </h4>
            <p className="text-xs text-gray-300 mt-1">双柱驱动：知识沉淀与 LMS 业务数据全流程协同</p>
          </div>

          {/* Twin Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1: Obsidian Vault */}
            <div className="glass-card rounded-2xl p-6 border-blue-500/50 bg-blue-950/20 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-blue-500/20 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Pillar 1 · 知识层</span>
                    <h4 className="text-lg font-black text-white">OBSIDIAN VAULT</h4>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                  Knowledge Layer
                </span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                公司的<strong>静态真相源 & SOP 规范大本营</strong>。由人类部门 Owner 维护，回答“怎么做、规则是什么、价格是多少”。
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {[
                  'SOP / Playbook',
                  'Policies (公司政策)',
                  'Experience (沉淀经验)',
                  'Training (员工培训)',
                  'Decisions (战略决策)',
                  'Prices (★★ 唯一价格)'
                ].map((item, idx) => (
                  <div key={idx} className="p-2 bg-blue-900/30 rounded-lg border border-blue-500/20 text-blue-200">
                    📄 {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 2: Business DB (LMS Entry) */}
            <div className="glass-card rounded-2xl p-6 border-emerald-500/50 bg-emerald-950/20 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Pillar 2 · 业务数据层</span>
                    <h4 className="text-lg font-black text-white">BUSINESS DB (LMS 入口)</h4>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  ★ LMS System 入口
                </span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                <strong>LMS 学习管理系统的数据库心脏与统一入口</strong>。所有的 Coach (教练)、Teacher (老师) 与 Student (学生) 均在此绑定管理。
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {[
                  'Student Data (学员数据)',
                  'Subscription (课程订阅)',
                  'Attendance (出勤打卡)',
                  'Scores (成绩表现)',
                  'Payment (缴费记录)',
                  'Classes (班级与教练)'
                ].map((item, idx) => (
                  <div key={idx} className="p-2 bg-emerald-900/30 rounded-lg border border-emerald-500/20 text-emerald-200">
                    🗄️ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Convergence Down Arrow */}
          <div className="flex justify-center -my-2">
            <div className="px-4 py-1 rounded-full bg-purple-900/80 border border-purple-500/40 text-xs font-bold text-purple-300 flex items-center space-x-2 animate-bounce">
              <ArrowDown className="w-4 h-4" />
              <span>双柱数据流向 AI 智脑层汇聚 (Convergence)</span>
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

          {/* Convergence Layer: AI Brain Engine */}
          <div className="glass-card rounded-2xl p-5 border border-purple-500/40 bg-purple-950/30 space-y-4">
            <div className="flex justify-between items-center border-b border-purple-500/20 pb-3">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-500/20 rounded-xl text-purple-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">AI 智脑层 (AI Brain Engine)</h4>
                  <p className="text-xs text-gray-400">结合 Obsidian Vault 规则与 Business DB (LMS DB) 学员数据智能解答</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-purple-300">
                <span className="px-2 py-0.5 rounded bg-blue-900/60 border border-blue-500/30">FalkorDB</span>
                <span>+</span>
                <span className="px-2 py-0.5 rounded bg-emerald-900/60 border border-emerald-500/30">Graphiti</span>
                <span>+</span>
                <span className="px-2 py-0.5 rounded bg-purple-900/60 border border-purple-500/30">Hindsight</span>
              </div>
            </div>

            {/* Business DB Highlights grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {BUSINESS_DB_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="p-3 bg-gray-950/60 rounded-xl border border-gray-800 text-xs flex items-start space-x-3">
                  <div className="mt-0.5 shrink-0">{getHighlightIcon(item.icon)}</div>
                  <div>
                    <h5 className="font-bold text-white mb-0.5">{item.title}</h5>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Layer 4 diagram */
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
                <p className="text-xs text-gray-400">接收提问 ➔ 判断意图 ➔ 联查 Obsidian SOP 与 Business DB (LMS DB)</p>
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
            <div className="glass-card rounded-xl p-5 border border-blue-500/50 bg-blue-950/30 shadow-lg shadow-blue-500/5">
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
            <div className="glass-card rounded-xl p-5 border border-emerald-500/50 bg-emerald-950/30 shadow-lg shadow-emerald-500/5">
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
                  AI 自动学习 · 结合 LMS DB
                </span>
              </div>

              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                像一位经验丰富的老员工，在日常问答中记住学员偏好、LMS 考勤成绩与决策推演。由三大核心技术驱动：
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
