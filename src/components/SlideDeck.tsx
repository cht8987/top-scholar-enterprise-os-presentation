import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ChevronLeft, ChevronRight, Sparkles, Building2, Tag, Megaphone,
  TrendingUp, Users, GraduationCap, Server, ShieldCheck, CheckCircle2,
  AlertTriangle, Cpu, Layers, Database,
  Bot, Clock, CheckSquare, Square, ArrowRight,
  Lock, BookOpen, Lightbulb
} from 'lucide-react';

import {
  SLIDES_META,
  DEPARTMENTS_DATA,
  LMS_BUNDLES,
  ROLES_ARCHITECTURE,
  API_RATES_DATA,
  DECISIONS_LIST
} from '../data/presentationData';

interface SlideDeckProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  totalSlides: number;
  onSwitchToDocView: () => void;
}

export const SlideDeck: React.FC<SlideDeckProps> = ({
  currentSlide,
  setCurrentSlide,
  totalSlides,
  onSwitchToDocView
}) => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>('02-marketing');
  const [selectedBundleId, setSelectedBundleId] = useState<string>('web-core');
  const [selectedRoleIdx, setSelectedRoleIdx] = useState<number>(2); // Default to Organization
  const [activeScenarioTab, setActiveScenarioTab] = useState<'mkt' | 'cs' | 'aca' | 'exec'>('mkt');
  const [checkedDecisions, setCheckedDecisions] = useState<Record<string, boolean>>({});

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, setCurrentSlide]);

  const toggleDecision = (id: string) => {
    const newChecked = { ...checkedDecisions, [id]: !checkedDecisions[id] };
    setCheckedDecisions(newChecked);

    // If all checked, fire confetti
    const allChecked = DECISIONS_LIST.every(d => newChecked[d.id]);
    if (allChecked) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F59E0B', '#10B981', '#FFFFFF']
      });
    }
  };

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Tag': return <Tag className="w-5 h-5" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  const currentMeta = SLIDES_META.find(s => s.id === currentSlide) || SLIDES_META[0];
  const selectedDept = DEPARTMENTS_DATA.find(d => d.id === selectedDeptId) || DEPARTMENTS_DATA[0];
  const selectedBundle = LMS_BUNDLES.find(b => b.id === selectedBundleId) || LMS_BUNDLES[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-6">
      {/* Sci-Fi Gold Navigation Header Bar */}
      <div className="flex flex-wrap items-center justify-between glass-panel-gold p-3.5 rounded-2xl mb-6 shadow-2xl relative overflow-hidden">
        <div className="scan-line"></div>
        <div className="flex items-center space-x-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-amber-300">
            TOP SCHOLAR AI ENTERPRISE OS · 2026-08-18 ACTION PLAN
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {currentMeta.badge}
          </span>
        </div>

        {/* Slide Progress Indicator & Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <div className="text-xs text-gray-400 font-mono">
            <span className="text-amber-400 font-bold text-sm">{String(currentSlide).padStart(2, '0')}</span>
            <span className="text-gray-600"> / </span>
            <span>{String(totalSlides).padStart(2, '0')}</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-[#0e121b] p-1 rounded-xl border border-amber-500/20">
            <button
              onClick={() => currentSlide > 1 && setCurrentSlide(currentSlide - 1)}
              disabled={currentSlide === 1}
              className="p-1.5 rounded-lg text-gray-400 hover:text-amber-300 hover:bg-amber-500/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              title="上一页 (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Mini dots */}
            <div className="hidden md:flex items-center space-x-1 px-2">
              {SLIDES_META.map(slide => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(slide.id)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    slide.id === currentSlide
                      ? 'w-6 bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                      : 'w-1.5 bg-gray-700 hover:bg-gray-500'
                  }`}
                  title={`${slide.id}. ${slide.title}`}
                />
              ))}
            </div>

            <button
              onClick={() => currentSlide < totalSlides && setCurrentSlide(currentSlide + 1)}
              disabled={currentSlide === totalSlides}
              className="p-1.5 rounded-lg text-gray-400 hover:text-amber-300 hover:bg-amber-500/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              title="下一页 (Right Arrow / Space)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onSwitchToDocView}
            className="hidden lg:flex items-center space-x-1.5 text-xs text-amber-400/80 hover:text-amber-300 hover:bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20 transition-all"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>阅读完整报告</span>
          </button>
        </div>
      </div>

      {/* Slide Content Area with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="min-h-[620px] flex flex-col justify-between"
        >
          {/* ========================================================================= */}
          {/* SLIDE 1: COVER & EXECUTIVE SUMMARY                                        */}
          {/* ========================================================================= */}
          {currentSlide === 1 && (
            <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-amber-500/30">
              <div className="scan-line"></div>
              
              <div className="max-w-4xl">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>2026-08-18 (周二) · 核心决策共创会汇报案</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                  <span className="gradient-text-gold">TOP SCHOLAR</span>
                  <br />
                  <span className="text-white">AI Enterprise OS 落地与基础设施行动方案</span>
                </h1>

                <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-light mb-8 max-w-3xl">
                  以 <span className="text-amber-300 font-semibold">Obsidian 双向知识底座</span> 为真理源头，结合 <span className="text-amber-300 font-semibold">Graphiti + FalkorDB + Hindsight</span> 企业大脑，通过 <span className="text-amber-300 font-semibold">Rocket LMS</span> 与 <span className="text-amber-300 font-semibold">Hermes 主动哨兵 Agent</span> 赋能各部门 Leader，实现人机协同的数字化飞跃。
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="glass-card-gold p-4 rounded-2xl">
                    <div className="text-2xl font-bold gradient-text-gold">7 大分区</div>
                    <div className="text-xs text-gray-400 mt-1">TS-KNOWLEDGE 业务矩阵</div>
                  </div>
                  <div className="glass-card-gold p-4 rounded-2xl">
                    <div className="text-2xl font-bold gradient-text-gold">40+ 插件</div>
                    <div className="text-xs text-gray-400 mt-1">Rocket LMS 全套开箱即用</div>
                  </div>
                  <div className="glass-card-gold p-4 rounded-2xl">
                    <div className="text-2xl font-bold gradient-text-gold">~$24 /月</div>
                    <div className="text-xs text-gray-400 mt-1">AI 全套固定订阅极致性价比</div>
                  </div>
                  <div className="glass-card-gold p-4 rounded-2xl">
                    <div className="text-2xl font-bold gradient-text-gold">1 Week</div>
                    <div className="text-xs text-gray-400 mt-1">Hermes 部门 Agent 极简上线</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>汇报人：<strong className="text-white">Elson</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>协同对象：<strong className="text-white">Aaron / Alex / Ying Lin / Becky</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>文档密级：<strong className="text-amber-300">内部核心决策材料</strong></span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  onClick={() => setCurrentSlide(2)}
                  className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                >
                  <span>进入架构总览</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 2: TWIN-LOOP ARCHITECTURE                                           */}
          {/* ========================================================================= */}
          {currentSlide === 2 && (
            <div className="space-y-6">
              <div className="border-b border-amber-500/20 pb-4">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">01 / ARCHITECTURE</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">人机共创的双向知识闭环架构</h2>
                <p className="text-sm text-gray-400 mt-1">业务人员掌控 Markdown 真相源头，AI 自动化入图与记忆进化，杜绝知识库腐烂。</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Visual Closed Loop Cards */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Step 1: Obsidian Vault */}
                  <div className="glass-panel-gold p-5 rounded-2xl border-l-4 border-l-amber-400 relative">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-amber-400 font-bold">LAYER 1 · 核心真理源头 (Single Source of Truth)</div>
                          <h3 className="text-base font-bold text-white">Obsidian Vault: TS-KNOWLEDGE</h3>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">人可编辑 · Git版本化</span>
                    </div>
                    <p className="text-xs text-gray-300 mt-2.5 leading-relaxed">
                      Markdown + Frontmatter 结构化数据 + 双向链接。按 00~06 部门文件夹严格隔离权限。业务人员直接在日常维护 SOP，所有修改均产生 Git Commit，变更清晰可审计。
                    </p>
                  </div>

                  {/* Flow Trigger */}
                  <div className="flex items-center justify-center text-amber-400 text-xs font-mono py-0.5">
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30">▼ 变更触发：n8n Watch / Git Commit Hook</span>
                  </div>

                  {/* Step 2: Graphiti & FalkorDB */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass-card-gold p-4 rounded-2xl border-l-4 border-l-cyan-400">
                      <div className="flex items-center space-x-2 text-cyan-300 mb-2">
                        <Cpu className="w-4 h-4" />
                        <span className="text-xs font-bold font-mono">Graphiti · 时序图谱抽取</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        实体抽取 · 关系网络构建 · 时间戳多版本留痕 · 增量自动入图。
                      </p>
                    </div>

                    <div className="glass-card-gold p-4 rounded-2xl border-l-4 border-l-indigo-400">
                      <div className="flex items-center space-x-2 text-indigo-300 mb-2">
                        <Database className="w-4 h-4" />
                        <span className="text-xs font-bold font-mono">FalkorDB · GraphRAG 混合检索</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        精准知识拓扑关系检索 + 高维语义向量混合检索，彻底杜绝大模型幻觉。
                      </p>
                    </div>
                  </div>

                  {/* Flow Trigger 2 */}
                  <div className="flex items-center justify-center text-amber-400 text-xs font-mono py-0.5">
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30">▼ GraphRAG 知识注入 / 决策采纳反馈</span>
                  </div>

                  {/* Step 3: Agents & Hindsight */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass-card-gold p-4 rounded-2xl border-l-4 border-l-emerald-400">
                      <div className="flex items-center space-x-2 text-emerald-300 mb-2">
                        <Bot className="w-4 h-4" />
                        <span className="text-xs font-bold font-mono">LangGraph Agent 协同层</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        营销 (Ying Lin) / 销售&客服 (Becky) / 教务 / 运营IT 专属业务哨兵。
                      </p>
                    </div>

                    <div className="glass-card-gold p-4 rounded-2xl border-l-4 border-l-amber-400">
                      <div className="flex items-center space-x-2 text-amber-300 mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs font-bold font-mono">Hindsight · 长期进化记忆</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        记录高频提问、有效采纳策略、SOP 偏差修正，越用越懂业务。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Why Markdown/Obsidian */}
                <div className="lg:col-span-4 glass-panel-gold p-6 rounded-3xl flex flex-col justify-between border border-amber-500/30">
                  <div>
                    <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-bold mb-4">
                      <Lightbulb className="w-4 h-4" />
                      <span>核心架构哲学</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-3">为什么 Obsidian 是源头，而非直接写图数据库？</h4>

                    <div className="space-y-3 text-xs text-gray-300 leading-relaxed">
                      <div className="p-3 rounded-xl bg-black/40 border border-gray-800">
                        <strong className="text-amber-300">1. 人必须能直接编辑真相：</strong>
                        <p className="mt-1 text-gray-400">图数据库不可读、无法人工直观修订、缺乏行级 Git Diff。一旦一线无法维护，知识库必然腐烂。</p>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-gray-800">
                        <strong className="text-amber-300">2. Markdown 是完美载体：</strong>
                        <p className="mt-1 text-gray-400">兼具「人类可无门槛读写」、「AI 结构化高效解析」、「全生命周期版本可审计」三重属性。</p>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-gray-800">
                        <strong className="text-amber-300">3. AI 负责增量入图：</strong>
                        <p className="mt-1 text-gray-400">人类只负责写好 Markdown，复杂的关系提取与时序图谱构建全交由后台自动化流水线处理。</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-amber-400/80">
                    <span>架构设计 · 经久耐用</span>
                    <span>Single Source of Truth</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 3: 7 DEPARTMENTS TS-KNOWLEDGE                                       */}
          {/* ========================================================================= */}
          {currentSlide === 3 && (
            <div className="space-y-6">
              <div className="border-b border-amber-500/20 pb-4">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">02 / ORGANIZATION</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">TS-KNOWLEDGE 7 大业务分区与共创落地</h2>
                <p className="text-sm text-gray-400 mt-1">Elson 搭建标准框架 ➔ 统一企业 Sync 订阅 ➔ 8/20–8/30 集中迁移 SOP。</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Department Buttons */}
                <div className="lg:col-span-5 space-y-2">
                  {DEPARTMENTS_DATA.map(dept => {
                    const isSelected = dept.id === selectedDeptId;
                    return (
                      <button
                        key={dept.id}
                        onClick={() => setSelectedDeptId(dept.id)}
                        className={`w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between border ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                            : 'glass-card-gold border-amber-500/10 hover:border-amber-500/30'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="p-2 rounded-xl"
                            style={{ backgroundColor: `${dept.color}20`, color: dept.color }}
                          >
                            {getDeptIcon(dept.icon)}
                          </div>
                          <div>
                            <div className="text-xs font-mono text-gray-400 font-semibold">{dept.num}</div>
                            <div className="text-sm font-bold text-white">{dept.name}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-medium text-amber-300 block">{dept.owner}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Department Detail View */}
                <div className="lg:col-span-7 glass-panel-gold p-6 rounded-3xl border border-amber-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className="p-3 rounded-2xl"
                          style={{ backgroundColor: `${selectedDept.color}25`, color: selectedDept.color }}
                        >
                          {getDeptIcon(selectedDept.icon)}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-amber-400 font-bold">SECTION {selectedDept.num}</span>
                          <h3 className="text-xl font-bold text-white">{selectedDept.name}</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-400 block">协同负责人</span>
                        <span className="text-sm font-bold text-amber-300">{selectedDept.owner}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">涵盖核心范围</div>
                        <p className="text-sm text-gray-200 leading-relaxed bg-black/30 p-3 rounded-xl border border-gray-800">
                          {selectedDept.roleDescription}
                        </p>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">落地核心资产 (Key Markdown Files)</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedDept.focusFiles.map(file => (
                            <span key={file} className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                              📄 {file}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">🌟 杀手级赋能亮点</div>
                        <p className="text-xs text-emerald-300 bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl">
                          {selectedDept.killerFeature}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sync Strategy Tip */}
                  <div className="mt-6 pt-4 border-t border-gray-800 bg-black/40 p-4 rounded-2xl text-xs text-gray-300">
                    <strong className="text-amber-300 block mb-1">⚙️ 多端协同策略 (Obsidian Sync)</strong>
                    使用统一企业服务邮箱（如 <code className="text-amber-300">ai-admin@topscholar.com</code>）订阅官方 Sync，各部门设备共同接入对应分区，既保障资产归属公司，又免除复杂的网络同步折腾。
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 4: HARDWARE & DEPLOYMENT & P0 BLOCKER                                */}
          {/* ========================================================================= */}
          {currentSlide === 4 && (
            <div className="space-y-6">
              <div className="border-b border-amber-500/20 pb-4">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">03 / INFRASTRUCTURE</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">设备配置、网络方案与 P0 紧急阻塞</h2>
                <p className="text-sm text-gray-400 mt-1">解决 iMac 权限阻塞，推进 Phase 1 本地+Tailscale 快速启动。</p>
              </div>

              {/* P0 Urgent Blocker Banner */}
              <div className="p-5 rounded-3xl bg-red-950/40 border-2 border-red-500/60 shadow-[0_0_25px_rgba(239,68,68,0.2)] flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/40 shrink-0">
                  <AlertTriangle className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-500 text-black font-extrabold text-[10px] uppercase tracking-wider">
                      P0 紧急阻塞 (Urgent Blocker)
                    </span>
                    <h3 className="text-base font-bold text-white">iMac 主控机缺少管理员密码 (`topscholar operation`)</h3>
                  </div>
                  <p className="text-xs text-red-200/90 mt-1.5 leading-relaxed">
                    当前 iMac 无法执行 Sudo 权限，导致本地无法安装 <strong>Docker、Node.js、PHP、Tailscale</strong> 等核心底层服务。<strong>明天的首要决策是交付管理员密码或现场重置权限</strong>，否则本地主节点与自动化服务无法启动。
                  </p>
                </div>
              </div>

              {/* Deployment Strategy Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel-gold p-6 rounded-3xl border-2 border-amber-400/50 relative">
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40">
                    ⭐ 推荐采用 (Phase 1)
                  </div>
                  <div className="text-sm font-mono text-amber-400 font-bold mb-1">方案 A · 敏捷启动</div>
                  <h4 className="text-lg font-bold text-white mb-3">本地 PC + Tailscale 虚拟组网</h4>
                  
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>0 元额外云端成本</strong>：前期无外部学员访问，完全避免闲置云服务器浪费。</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>数据绝对可控</strong>：核心数据库与知识库保留在本地，安全性极高。</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Tailscale 安全穿透</strong>：内部团队通过安全加密隧道即可直接跨网访问测试。</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-panel-gold p-6 rounded-3xl border border-gray-800">
                  <div className="text-sm font-mono text-gray-400 font-bold mb-1">方案 B · 生产交付</div>
                  <h4 className="text-lg font-bold text-white mb-3">云端 VPS + 独立域名 (Phase 2)</h4>
                  
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 rounded-full bg-gray-700 text-gray-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5">⏱️</span>
                      <span><strong>7×24 全球可用</strong>：待系统二次开发与测试完成、正式对外开放时切入。</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 rounded-full bg-gray-700 text-gray-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5">🇲🇾</span>
                      <span><strong>本地优质 VPS 推荐</strong>：<strong>Exabytes</strong> (发票报销方便)、<strong>Shinjiru</strong> (抗攻击强)、<strong>ServerFreak</strong> (性价比高)。</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 rounded-full bg-gray-700 text-gray-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5">☁️</span>
                      <span><strong>备选国际节点</strong>：AWS Singapore / DigitalOcean Singapore (时延 &lt;15ms)。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 5: ROCKET LMS BUNDLES & 5 ROLES ARCHITECTURE                         */}
          {/* ========================================================================= */}
          {currentSlide === 5 && (
            <div className="space-y-5">
              <div className="border-b border-amber-500/20 pb-3">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">04 / LMS PLATFORM</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Rocket LMS 采购深度拆解与 5 大角色体系</h2>
                <p className="text-sm text-gray-400 mt-0.5">三大核心包功能全景 · 5 大角色分权 · Regular License 合法合规判定。</p>
              </div>

              {/* Sub-tabs: 3 Bundles vs 5 Roles */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left 7 cols: 3 Bundles Breakdown */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex space-x-2 border-b border-gray-800 pb-2">
                    {LMS_BUNDLES.map(bundle => (
                      <button
                        key={bundle.id}
                        onClick={() => setSelectedBundleId(bundle.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          bundle.id === selectedBundleId
                            ? 'bg-amber-500 text-black shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                            : 'bg-black/40 text-gray-400 hover:text-white border border-gray-800'
                        }`}
                      >
                        {bundle.name}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel-gold p-4 rounded-2xl border border-amber-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-[10px] font-mono text-amber-400 font-bold">{selectedBundle.type} · {selectedBundle.itemCode}</span>
                        <h4 className="text-base font-bold text-white">{selectedBundle.name}</h4>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                        Regular License 适用
                      </span>
                    </div>

                    <div className="text-[11px] text-gray-400 font-mono mb-3 bg-black/40 p-2 rounded-lg border border-gray-800">
                      🛠️ 技术底座：{selectedBundle.techStack}
                    </div>

                    <div className="space-y-1.5 mb-3">
                      <div className="text-xs font-bold text-amber-300">核心功能清单：</div>
                      {selectedBundle.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-gray-300">
                          <span className="text-amber-400 mt-0.5">▪</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                      💡 <strong>业务价值</strong>：{selectedBundle.businessImpact}
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: 5 Roles Architecture & License Decision */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="glass-panel-gold p-4 rounded-2xl border border-amber-500/30">
                    <div className="flex items-center justify-between mb-3 border-b border-gray-800 pb-2">
                      <div className="text-xs font-bold text-amber-300 flex items-center space-x-1.5">
                        <Layers className="w-4 h-4" />
                        <span>5 大权限角色体系 (RBAC)</span>
                      </div>
                      <span className="text-[10px] text-gray-400">点击查看职责</span>
                    </div>

                    <div className="space-y-1.5 mb-3">
                      {ROLES_ARCHITECTURE.map((role, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedRoleIdx(idx)}
                          className={`w-full text-left p-2 rounded-xl text-xs transition-all flex items-center justify-between border ${
                            idx === selectedRoleIdx
                              ? 'bg-amber-500/20 border-amber-400/60 text-white font-bold'
                              : 'bg-black/30 border-gray-800 text-gray-400 hover:text-gray-200'
                          }`}
                        >
                          <span>{role.name}</span>
                          <span className="text-[10px] font-mono text-amber-300">{role.tag}</span>
                        </button>
                      ))}
                    </div>

                    {/* Role Detail Box */}
                    <div className="bg-black/50 p-3 rounded-xl border border-gray-800 text-xs space-y-1.5">
                      <div className="text-amber-300 font-semibold">{ROLES_ARCHITECTURE[selectedRoleIdx].level}</div>
                      <p className="text-gray-300 text-[11px] leading-relaxed">{ROLES_ARCHITECTURE[selectedRoleIdx].scope}</p>
                      <div className="pt-1.5 border-t border-gray-800/60 text-[11px] text-cyan-300">
                        ⭐ <strong>在 Top Scholar 的应用</strong>：{ROLES_ARCHITECTURE[selectedRoleIdx].topScholarScenario}
                      </div>
                    </div>
                  </div>

                  {/* License Legality Callout */}
                  <div className="glass-card-gold p-3 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-xs text-gray-200">
                    <div className="flex items-center space-x-1.5 text-emerald-400 font-bold mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Envato 官方授权规则判定</span>
                    </div>
                    Top Scholar 用于交付自研课程与给内部学员看回放，<strong>购买 Regular License 100% 合法合规</strong>（无需花 $499 买 Extended），单项数十美元，整体节省数百美元！
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 6: AI SUBSCRIPTION MATRIX & 2026 API RATES                           */}
          {/* ========================================================================= */}
          {currentSlide === 6 && (
            <div className="space-y-5">
              <div className="border-b border-amber-500/20 pb-3">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">05 / AI STACK & PRICING</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">AI 订阅矩阵与 2026 最新官方 API 资费</h2>
                <p className="text-sm text-gray-400 mt-0.5">月度固定订阅仅 ~$24/月 · 2026 官方实测资费标准与降本杀手锏。</p>
              </div>

              {/* Monthly Subscriptions Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="glass-card-gold p-3 rounded-2xl">
                  <div className="text-xs text-gray-400 font-medium">Claude Pro</div>
                  <div className="text-lg font-bold text-white mt-0.5">$20.00 <span className="text-[10px] text-gray-500">/月</span></div>
                  <div className="text-[10px] text-amber-300/90 mt-1">架构与高难度代码开发</div>
                </div>

                <div className="glass-card-gold p-3 rounded-2xl">
                  <div className="text-xs text-gray-400 font-medium">Gemini Advanced</div>
                  <div className="text-lg font-bold text-white mt-0.5">约 $1.50 <span className="text-[10px] text-gray-500">/月</span></div>
                  <div className="text-[10px] text-amber-300/90 mt-1">Shopee RM80/年费方案</div>
                </div>

                <div className="glass-card-gold p-3 rounded-2xl">
                  <div className="text-xs text-gray-400 font-medium">Agnes Starter</div>
                  <div className="text-lg font-bold text-white mt-0.5">$4.00 <span className="text-[10px] text-gray-500">/月</span></div>
                  <div className="text-[10px] text-amber-300/90 mt-1">Agent 敏捷路由工作流</div>
                </div>

                <div className="glass-card-gold p-3 rounded-2xl">
                  <div className="text-xs text-gray-400 font-medium">DeepSeek API</div>
                  <div className="text-lg font-bold text-white mt-0.5">预充 $20</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Pay-as-you-go (极度耐用)</div>
                </div>

                <div className="glass-panel-gold p-3 rounded-2xl border-2 border-amber-400/50 bg-amber-500/10 col-span-2 sm:col-span-1">
                  <div className="text-xs text-amber-300 font-bold">固定订阅合计</div>
                  <div className="text-xl font-extrabold gradient-text-gold mt-0.5">~$24.00 <span className="text-[10px] text-amber-200">/月</span></div>
                  <div className="text-[10px] text-amber-300/90 mt-1">极低固定月费</div>
                </div>
              </div>

              {/* API Rates Table */}
              <div className="glass-panel-gold p-4 rounded-3xl border border-amber-500/20 overflow-x-auto">
                <div className="text-xs font-bold text-amber-300 mb-3 flex items-center justify-between">
                  <span>📊 核心模型 2026 官方 API 资费与角色分工表</span>
                  <span className="text-[11px] font-normal text-gray-400">单位：每 100 万 Tokens (1M Tokens)</span>
                </div>

                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-800 text-gray-400 font-mono">
                      <th className="pb-2 font-semibold">厂商与模型</th>
                      <th className="pb-2 font-semibold">输入单价 (Input)</th>
                      <th className="pb-2 font-semibold">输出单价 (Output)</th>
                      <th className="pb-2 font-semibold">缓存优惠 (Cache)</th>
                      <th className="pb-2 font-semibold">在 Hermes 中的分工</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/60 font-sans">
                    {API_RATES_DATA.map((item, i) => (
                      <tr key={i} className="hover:bg-amber-500/5 transition-colors">
                        <td className="py-2.5 font-bold text-white">
                          <div>{item.model}</div>
                          <div className="text-[10px] font-mono text-gray-500">{item.provider}</div>
                        </td>
                        <td className="py-2.5 text-amber-300 font-mono">{item.inputPrice}</td>
                        <td className="py-2.5 text-gray-200 font-mono">{item.outputPrice}</td>
                        <td className="py-2.5 text-emerald-400 font-mono">{item.cachePrice}</td>
                        <td className="py-2.5 text-gray-300">
                          <div>{item.roleInHermes}</div>
                          <div className="text-[10px] text-gray-500">{item.highlight}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 3 Cost Optimization Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-black/40 border border-gray-800">
                  <strong className="text-amber-300">🌙 1. DeepSeek 峰谷半价：</strong>
                  <span className="text-gray-400 block mt-0.5">非高峰时段（包含马来西亚夜间与清晨）全部自动折半 50%。</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-gray-800">
                  <strong className="text-amber-300">⚡ 2. Prompt Caching 80-95% OFF：</strong>
                  <span className="text-gray-400 block mt-0.5">Claude / DeepSeek 命中缓存时，输入成本直降 80%~95%。</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-gray-800">
                  <strong className="text-amber-300">📦 3. Batch 批处理 50% 折扣：</strong>
                  <span className="text-gray-400 block mt-0.5">夜间批量批改作业与生成学情周报，享受 50% 额外折扣。</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 7: HERMES AGENT ACTIVE SENTINEL KILLER SCENARIOS                     */}
          {/* ========================================================================= */}
          {currentSlide === 7 && (
            <div className="space-y-5">
              <div className="border-b border-amber-500/20 pb-3">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">06 / HERMES AGENT</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Hermes Agent 各部门杀手级业务赋能</h2>
                <p className="text-sm text-gray-400 mt-0.5">从「被动问答」升级为「主动业务哨兵」 · 深度穿透营销、客服与管理决策。</p>
              </div>

              {/* Department Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-gray-800 pb-3">
                <button
                  onClick={() => setActiveScenarioTab('mkt')}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 ${
                    activeScenarioTab === 'mkt'
                      ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'glass-card-gold text-gray-300 hover:text-white'
                  }`}
                >
                  <Megaphone className="w-4 h-4" />
                  <span>🎯 营销端赋能 (Ying Lin)</span>
                </button>

                <button
                  onClick={() => setActiveScenarioTab('cs')}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 ${
                    activeScenarioTab === 'cs'
                      ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'glass-card-gold text-gray-300 hover:text-white'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>🎯 销售与客服赋能 (Becky)</span>
                </button>

                <button
                  onClick={() => setActiveScenarioTab('aca')}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 ${
                    activeScenarioTab === 'aca'
                      ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'glass-card-gold text-gray-300 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>🎯 教务与教研赋能</span>
                </button>

                <button
                  onClick={() => setActiveScenarioTab('exec')}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 ${
                    activeScenarioTab === 'exec'
                      ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'glass-card-gold text-gray-300 hover:text-white'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>🎯 高管经营问答 (Alex/Aaron)</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="glass-panel-gold p-6 rounded-3xl border border-amber-500/30">
                {activeScenarioTab === 'mkt' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <h4 className="text-base font-bold text-white">营销端杀手级赋能 (Ying Lin 专属 Agent)</h4>
                      <span className="text-xs text-amber-300 font-mono">Telegram Bot + n8n 广告哨兵</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-2">
                        <div className="text-amber-400 font-bold text-xs flex items-center space-x-1.5">
                          <span>🎬</span>
                          <span>AI 短视频生产线</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          输入课程卖点，自动输出 <strong>30秒黄金短视频脚本</strong>（前3秒吸睛痛点 + 教学解法 + 结尾强CTA），并直接生成 CapCut/剪映分镜结构。
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-2">
                        <div className="text-amber-400 font-bold text-xs flex items-center space-x-1.5">
                          <span>📝</span>
                          <span>5 类切入点文案 + UTM 自动注入</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          一键批量生成 5 类不同心理切入点文案（恐慌、干货、名师、家长、故事），自动注入合规 UTM 标签，确保 Pixel 报表口径 100% 准确。
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-2">
                        <div className="text-amber-400 font-bold text-xs flex items-center space-x-1.5">
                          <span>🔔</span>
                          <span>Meta 广告监控哨兵 (Ads Sentinel)</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          自动监控广告数据：当 CTR &lt; 1.5% 或 CPA 超标时，自动在 Telegram 告警并提供针对性调优建议（如建议更换前 3 秒视频素材）。
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeScenarioTab === 'cs' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <h4 className="text-base font-bold text-white">销售与客服端杀手级赋能 (Becky 专属 Agent)</h4>
                      <span className="text-xs text-amber-300 font-mono">Telegram Bot + WhatsApp 话术生成</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-2">
                        <div className="text-cyan-400 font-bold text-xs flex items-center space-x-1.5">
                          <span>📡</span>
                          <span>学员流失预警「关怀雷达」</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          关联 LMS 出勤与作业：学员出现「连续 2 次缺课 / 未交作业」红黄灯时，自动为 Becky 生成有温度的 WhatsApp 家长沟通草稿。
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-2">
                        <div className="text-cyan-400 font-bold text-xs flex items-center space-x-1.5">
                          <span>💌</span>
                          <span>一键家长学情喜报生成器</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          提取学员当周出勤、Quiz 得分与作业评语，一键生成排版精美、充满鼓励的学情喜报，<strong>大幅拉升家长满意度与续费率</strong>。
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-2">
                        <div className="text-cyan-400 font-bold text-xs flex items-center space-x-1.5">
                          <span>🎯</span>
                          <span>SOP 秒查与丢单二次激活</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          快速索引退费、延期等官方标准；针对「已读不回」或「价格犹豫」家长，自动匹配成单案例库生成高情商破冰话术。
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeScenarioTab === 'aca' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <h4 className="text-base font-bold text-white">教务与教研端赋能 (Academic Team)</h4>
                      <span className="text-xs text-purple-300 font-mono">错题归纳 + 讲义快速生成</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-2">
                        <div className="text-purple-400 font-bold text-xs">📊 课后共性错题智能诊断与复习讲义</div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          自动汇总全班在 LMS 上的测验错题，分析高频共性知识盲区，秒级生成下节课的重点针对性复习讲义。
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-2">
                        <div className="text-purple-400 font-bold text-xs">⚡ 教案大纲一键生成 Quiz 题库与生字卡</div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          输入教案大纲，自动生成配套的课堂 Quiz 题目（单选/多选/简答）及生字生词卡片，极大减轻老师备课负担。
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeScenarioTab === 'exec' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <h4 className="text-base font-bold text-white">高管经营全息问答 (Alex / Aaron 专属决策助手)</h4>
                      <span className="text-xs text-amber-300 font-mono">Ask-Me-Anything · 直连图数据库</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-gray-800 space-y-3">
                      <div className="text-xs text-gray-300 leading-relaxed">
                        在手机端直接发问，秒级穿透 FalkorDB 图数据库与 TS-KNOWLEDGE 知识库给出有依据的事实回答：
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                          💬 "上周各科目出席率排行如何？"
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                          💬 "目前退费率最低的是哪个班级？"
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                          💬 "销售 SOP 执行偏差最大的环节在哪？"
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Safety Guardrails */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="glass-card-gold p-3.5 rounded-2xl border border-amber-500/20 flex items-start space-x-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">SOP 强约束防幻觉拦截</strong>
                    <span className="text-gray-400">退费、定价与承诺强制 100% 引用知识库原文，无记录强阻断，严禁 AI 自由发挥。</span>
                  </div>
                </div>

                <div className="glass-card-gold p-3.5 rounded-2xl border border-cyan-500/20 flex items-start space-x-2.5">
                  <Lock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">PDPA 隐私脱敏网关</strong>
                    <span className="text-gray-400">调用公有云 API 前，自动将学生/家长手机号、IC 身份证脱敏，完全符合马来西亚法规。</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 8: ROADMAP & 1-WEEK PLAYBOOK                                         */}
          {/* ========================================================================= */}
          {currentSlide === 8 && (
            <div className="space-y-6">
              <div className="border-b border-amber-500/20 pb-4">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">07 / ROADMAP & ROLLOUT</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">企业大脑演进节奏与 1 周落地 Playbook</h2>
                <p className="text-sm text-gray-400 mt-1">1 个月企业大脑分阶段验证 + 1 周 Telegram Bot 极简培训推进表。</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* 1 Month Brain Evolution */}
                <div className="lg:col-span-5 glass-panel-gold p-6 rounded-3xl border border-amber-500/30 space-y-4">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center space-x-2">
                    <Database className="w-4 h-4" />
                    <span>企业大脑 1 个月迭代路线</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-2xl bg-black/40 border border-gray-800">
                      <div className="flex items-center justify-between text-amber-400 font-bold mb-1">
                        <span>Phase A · 底座验证</span>
                        <span className="text-[10px] font-mono text-gray-500">W1–W2 · Local PC</span>
                      </div>
                      <p className="text-gray-300">搭建 FalkorDB (Docker) + Graphiti 增量入图流水线，打通 Obsidian 自动抽取。</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-black/40 border border-gray-800">
                      <div className="flex items-center justify-between text-amber-400 font-bold mb-1">
                        <span>Phase B · 记忆注入</span>
                        <span className="text-[10px] font-mono text-gray-500">W3 · Local PC</span>
                      </div>
                      <p className="text-gray-300">接入 Hindsight 长期记忆模块，记录各部门提问偏好与修正反馈。</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-black/40 border border-gray-800">
                      <div className="flex items-center justify-between text-amber-400 font-bold mb-1">
                        <span>Phase C · 稳定迁移</span>
                        <span className="text-[10px] font-mono text-gray-500">W4 · 专用机 / VPS</span>
                      </div>
                      <p className="text-gray-300">系统稳定后，固化至独立 Mini PC 或轻量 Cloud VPS 长期驻留运行。</p>
                    </div>
                  </div>
                </div>

                {/* 1 Week Rollout Playbook */}
                <div className="lg:col-span-7 glass-panel-gold p-6 rounded-3xl border border-amber-500/30 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-2 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>Hermes 部门 Agent 1 周极简上线表 (Playbook)</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3.5 rounded-2xl bg-black/40 border-l-4 border-l-amber-400 border border-gray-800">
                        <div className="flex items-center justify-between text-white font-bold mb-1">
                          <span>Day 1–2 · 环境配置与 Bot 授权</span>
                          <span className="text-[10px] font-mono text-amber-300">跑通 Telegram 联调</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          配置 Telegram Bot Token，绑定 Ying Lin 与 Becky 的专属权限白名单与指令映射。
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-black/40 border-l-4 border-l-cyan-400 border border-gray-800">
                        <div className="flex items-center justify-between text-white font-bold mb-1">
                          <span>Day 3–4 · 1 对 1 真实业务场景试点</span>
                          <span className="text-[10px] font-mono text-cyan-300">跑通 3 组真实闭环</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          手把手协助 Ying Lin（跑通 3 篇文案 + 短视频分镜）与 Becky（跑通 3 条 SOP 检索 + 家长关怀话术）。
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-black/40 border-l-4 border-l-emerald-400 border border-gray-800">
                        <div className="flex items-center justify-between text-white font-bold mb-1">
                          <span>Day 5 · 交付卡片与偏好记忆固化</span>
                          <span className="text-[10px] font-mono text-emerald-300">常态化独立使用</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          发放《Hermes Agent 极简快捷指令一页纸卡片》，将 Leader 的修正反馈写入 Hindsight 记忆。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800 text-[11px] text-gray-400 flex items-center justify-between">
                    <span>极简交付 · 无业务负担</span>
                    <span className="text-emerald-400 font-bold">15-30 分钟即可上手</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SLIDE 9: LIVE INTERACTIVE DECISIONS CHECKLIST                              */}
          {/* ========================================================================= */}
          {currentSlide === 9 && (
            <div className="space-y-6">
              <div className="border-b border-amber-500/20 pb-4 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">08 / DECISION & ACTIONS</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">会议现场核心决策与行动审批清单</h2>
                  <p className="text-sm text-gray-400 mt-1">现场逐项审议并勾选 · 达成共识即刻启动开工。</p>
                </div>

                <div className="flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-2xl border border-amber-500/30">
                  <span className="text-xs text-gray-400">已确认审批：</span>
                  <span className="text-base font-extrabold text-amber-400 font-mono">
                    {Object.values(checkedDecisions).filter(Boolean).length} / {DECISIONS_LIST.length}
                  </span>
                </div>
              </div>

              {/* Decision Cards List */}
              <div className="space-y-3">
                {DECISIONS_LIST.map((dec) => {
                  const isChecked = !!checkedDecisions[dec.id];
                  const isP0 = dec.urgency === 'P0 紧急阻塞';

                  return (
                    <div
                      key={dec.id}
                      onClick={() => toggleDecision(dec.id)}
                      className={`p-4 sm:p-5 rounded-3xl transition-all cursor-pointer border flex items-start justify-between gap-4 ${
                        isChecked
                          ? 'bg-emerald-950/30 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                          : isP0
                          ? 'bg-red-950/20 border-red-500/50 hover:border-red-400'
                          : 'glass-panel-gold border-amber-500/20 hover:border-amber-400/50'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="mt-1 shrink-0 text-amber-400">
                          {isChecked ? (
                            <CheckSquare className="w-6 h-6 text-emerald-400 animate-bounce" />
                          ) : (
                            <Square className="w-6 h-6 text-gray-600 hover:text-amber-400 transition-colors" />
                          )}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs font-mono font-bold text-amber-400">{dec.num}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                              isP0 ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            }`}>
                              {dec.urgency}
                            </span>
                            <span className="text-xs text-gray-500 font-mono">[{dec.category}]</span>
                          </div>

                          <h4 className={`text-base font-bold transition-colors ${isChecked ? 'text-emerald-300 line-through' : 'text-white'}`}>
                            {dec.title}
                          </h4>

                          <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                            {dec.description}
                          </p>

                          <div className="mt-2 text-xs text-amber-200/90 font-medium flex items-center space-x-2">
                            <span>👉 <strong>要求/产出</strong>：{dec.actionRequirement}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-black/50 border border-gray-800 text-gray-300 font-mono block">
                          {dec.cost}
                        </span>
                        <span className={`text-[11px] font-bold mt-2 block ${isChecked ? 'text-emerald-400' : 'text-gray-500'}`}>
                          {isChecked ? '✓ 已批准' : '待确认'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Celebration Callout */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>全部 5 项决策达成共识后，系统即刻正式进入 W1 架构与采购落地期！</span>
                </div>

                <button
                  onClick={() => {
                    const all: Record<string, boolean> = {};
                    DECISIONS_LIST.forEach(d => all[d.id] = true);
                    setCheckedDecisions(all);
                    confetti({
                      particleCount: 150,
                      spread: 90,
                      origin: { y: 0.5 },
                      colors: ['#D4AF37', '#F59E0B', '#10B981', '#FFFFFF']
                    });
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                >
                  一键全部批准 🎉
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Footer Bar */}
      <div className="mt-8 pt-4 border-t border-gray-800/80 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-4">
        <div className="flex items-center space-x-4">
          <span>快捷键：<kbd className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono text-[10px]">←</kbd> <kbd className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono text-[10px]">→</kbd> 翻页</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">空格键：<kbd className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono text-[10px]">Space</kbd> 下一页</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-gray-400">Top Scholar OS Presentation Deck</span>
          <span className="text-amber-500/80">●</span>
          <span className="text-amber-400/90 font-mono">2026-08-18 Edition</span>
        </div>
      </div>
    </div>
  );
};
