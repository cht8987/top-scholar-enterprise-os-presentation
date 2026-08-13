import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ChevronLeft, ChevronRight, Sparkles, Building2, Tag, Megaphone,
  TrendingUp, Users, GraduationCap, Server, ShieldCheck, CheckCircle2,
  Award, HelpCircle, ArrowRight, Lightbulb, Zap, UserCheck
} from 'lucide-react';

import { DEPARTMENTS, ROADMAP_PHASES, FAQS } from '../data/presentationData';
import { InteractiveRoiCalculator } from './InteractiveRoiCalculator';
import { ArchitectureDiagram } from './ArchitectureDiagram';

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
  const [selectedDeptId, setSelectedDeptId] = useState<string>('01-product');
  const [selectedPhaseIdx, setSelectedPhaseIdx] = useState<number>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

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

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
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

  const selectedDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[1];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Slide Navigation Header Bar */}
      <div className="flex items-center justify-between bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-gray-800 mb-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span className="text-xs font-bold text-gray-300 tracking-wider uppercase">
            Top Scholar Enterprise OS 演示幻灯片
          </span>
        </div>

        {/* Slide Counter & Dots */}
        <div className="hidden md:flex items-center space-x-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx + 1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx + 1
                  ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md shadow-blue-500/30'
                  : 'w-2 bg-gray-800 hover:bg-gray-700'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentSlide(Math.max(1, currentSlide - 1))}
            disabled={currentSlide === 1}
            className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-bold text-blue-400 px-2 py-1 bg-gray-950 rounded-lg border border-gray-800">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={() => setCurrentSlide(Math.min(totalSlides, currentSlide + 1))}
            disabled={currentSlide === totalSlides}
            className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-30 disabled:cursor-not-allowed transition shadow-lg shadow-blue-600/20"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Content Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 15, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.99 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full min-h-[620px] flex flex-col justify-between"
        >
          {/* SLIDE 1: Vision & Pain Points */}
          {currentSlide === 1 && (
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-blue-500/20 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[620px]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Top Scholar 企业级 AI OS 汇报演示</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
                  构建 Top Scholar <br />
                  <span className="gradient-text">企业数字大脑与 AI 岗位分身</span>
                </h1>

                <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
                  用最通俗易懂的方式，打破人员流动导致的知识流失与效率瓶颈。把全公司的 SOP、价格体系与业务话术转化为<strong className="text-white">永远属于 Top Scholar 的数字资产</strong>。
                </p>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="glass-card rounded-2xl p-6 border-red-500/20 bg-red-950/10">
                    <h3 className="text-base font-bold text-red-400 mb-3 flex items-center gap-2">
                      ⚠️ 传统运作模式的三大痛点
                    </h3>
                    <ul className="space-y-2.5 text-xs md:text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span><strong>知识在人脑里</strong>：员工离职或休假，SOP 与客户细节随之流失。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span><strong>口径不统一</strong>：销售报价错算、客服给错课表，内耗严重。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span><strong>重复问答低效</strong>：每天花费大量工时在重复询问“哪拿链接？价格多少？”。</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card rounded-2xl p-6 border-emerald-500/20 bg-emerald-950/10">
                    <h3 className="text-base font-bold text-emerald-400 mb-3 flex items-center gap-2">
                      ✨ Enterprise OS 数字智脑解决之道
                    </h3>
                    <ul className="space-y-2.5 text-xs md:text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span><strong>资产永存公司</strong>：人类整理权威 SOP，数据 100% 留存在本地。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span><strong>单一真相定价</strong>：全公司唯一权威价格库，报价准确率 100%。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span><strong>全员 AI 助手</strong>：每个岗位配置专属 AI 助理，秒级答复，效率翻倍。</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                <span>汇报人：Elson (IT & Marketing) · Top Scholar Enterprise Strategy</span>
                <button
                  onClick={() => setCurrentSlide(2)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center space-x-2 hover:opacity-90 transition shadow-lg shadow-blue-500/20"
                >
                  <span>探索双层智脑架构</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 2: Dual-Engine Architecture */}
          {currentSlide === 2 && (
            <div className="min-h-[620px] flex flex-col justify-between space-y-6">
              <ArchitectureDiagram />
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>提示：点击顶部高亮按钮可切换查看静态真相库与动态神经网分工</span>
                <button
                  onClick={() => setCurrentSlide(3)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center space-x-2 hover:bg-blue-500 transition"
                >
                  <span>进入 6 大部门知识地图</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 3: 6 Department Knowledge Hubs */}
          {currentSlide === 3 && (
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl min-h-[620px] flex flex-col justify-between">
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-800 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      6 大部门数字知识中枢地图
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        专区隔离 · 只读保护
                      </span>
                    </h2>
                    <p className="text-sm text-gray-400">每个部门拥有独立管理的知识库专区，互不干扰，统一汇总</p>
                  </div>

                  {/* Dept Tabs Selector */}
                  <div className="flex flex-wrap gap-1.5">
                    {DEPARTMENTS.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => setSelectedDeptId(dept.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                          selectedDeptId === dept.id
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                            : 'bg-gray-900/80 text-gray-400 hover:text-gray-200 border border-gray-800'
                        }`}
                      >
                        {getDeptIcon(dept.icon)}
                        <span>{dept.name.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Dept Detail Card */}
                <div className="glass-card rounded-2xl p-6 border border-blue-500/30 bg-slate-900/40">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedDept.color} text-white shadow-md`}>
                        {getDeptIcon(selectedDept.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{selectedDept.name}</h3>
                        <p className="text-xs text-gray-400">负责人/维护团队：{selectedDept.owner}</p>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/30 rounded-lg">
                      {selectedDept.description}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Key Files */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        包含的核心标准文档
                      </h4>
                      <div className="space-y-1.5">
                        {selectedDept.keyFiles.map((file, idx) => (
                          <div key={idx} className="p-2 bg-gray-950/60 rounded-lg border border-gray-800 text-xs font-mono text-gray-300 flex items-center justify-between">
                            <span>📄 {file}</span>
                            <span className="text-[10px] text-blue-400">权威 SOP</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Assistant Role */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        配备的 AI 数字助手职责
                      </h4>
                      <div className="p-4 bg-purple-950/20 rounded-xl border border-purple-500/30 text-xs text-purple-200 leading-relaxed min-h-[110px] flex items-center">
                        {selectedDept.assistantRole}
                      </div>
                    </div>

                    {/* Business Benefits */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-400" />
                        为本部门带来的价值
                      </h4>
                      <div className="space-y-2">
                        {selectedDept.benefits.map((b, idx) => (
                          <div key={idx} className="p-2.5 bg-emerald-950/20 rounded-lg border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-800">
                <span>提示：点击上方按钮切换查看 6 大部门的具体文件与 AI 职责</span>
                <button
                  onClick={() => setCurrentSlide(4)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center space-x-2 hover:bg-blue-500 transition"
                >
                  <span>查看全员 AI 岗位分身矩阵</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 4: AI Assistants Matrix */}
          {currentSlide === 4 && (
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl min-h-[620px] flex flex-col justify-between">
              <div>
                <div className="mb-6 border-b border-gray-800 pb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    全员 AI 岗位数字分身矩阵
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      人人配备专属 AI 助理
                    </span>
                  </h2>
                  <p className="text-sm text-gray-400">不是替掉员工，而是为每位员工配上一名 7x24 小时不疲倦的高级全能助理</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      role: '营销 AI 助手',
                      user: 'Ying Lin (营销团队)',
                      icon: Megaphone,
                      color: 'border-purple-500/40 bg-purple-950/20 text-purple-300',
                      task: '自动搜集 Winning Ads，根据 4U 规则生成爆款文案草稿，排查品牌禁用词。',
                      effect: '文案撰写时间减少 80%'
                    },
                    {
                      role: '销售 AI 助手',
                      user: '销售主管与团队',
                      icon: TrendingUp,
                      color: 'border-amber-500/40 bg-amber-950/20 text-amber-300',
                      task: '在与家长对话时 3 秒提供课程参数、生成精确报价单简报、提示异议破解话术。',
                      effect: '报价准确率 100%，提升闭单'
                    },
                    {
                      role: '客户成功 AI 助手',
                      user: '客服主管与团队',
                      icon: Users,
                      color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300',
                      task: '自动判定学员红黄绿灯风险状态，生成家长月报初稿，定期发起关怀提醒。',
                      effect: '流失风险提前 30 天拦截'
                    },
                    {
                      role: '教务 AI 助手',
                      user: '教务主管与老师',
                      icon: GraduationCap,
                      color: 'border-violet-500/40 bg-violet-950/20 text-violet-300',
                      task: '智能推荐个性化批改评语，秒级检索 Workbook 讲义与配套课件。',
                      effect: '批改效率大幅提升'
                    },
                    {
                      role: '运营/IT AI 助手',
                      user: 'Elson (IT 负责人)',
                      icon: Server,
                      color: 'border-slate-500/40 bg-slate-950/20 text-slate-300',
                      task: '自动引导员工排查软件故障、规范 Zoom 链接分发、系统账号权限自动申请。',
                      effect: '解决 80% IT 重复咨询'
                    },
                    {
                      role: '高管 AI 仪表盘',
                      user: 'Alex / Aaron (管理层)',
                      icon: Award,
                      color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300',
                      task: '随时以自然语言询问全公司 ROI、续费趋势、红灯学员清单与战略健康度。',
                      effect: '决策信息零延迟呈现'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={`glass-card rounded-2xl p-5 border ${item.color} flex flex-col justify-between space-y-3`}>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base font-bold text-white flex items-center gap-2">
                            <item.icon className="w-4 h-4" />
                            {item.role}
                          </h3>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-gray-900/80 border border-gray-800 text-gray-300 font-mono">
                            {item.user}
                          </span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">{item.task}</p>
                      </div>
                      <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-xs">
                        <span className="text-gray-400">预期增效：</span>
                        <span className="font-bold text-emerald-400">{item.effect}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-800">
                <span>架构原则：AI 负责资料整理与拟稿，最终决定权永远在人类员工手里。</span>
                <button
                  onClick={() => setCurrentSlide(5)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center space-x-2 hover:bg-blue-500 transition"
                >
                  <span>查看四阶段落地路线图</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 5: 4-Phase Roadmap */}
          {currentSlide === 5 && (
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl min-h-[620px] flex flex-col justify-between">
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      四阶段分步落地路线图
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        小步快跑 · 极低风险
                      </span>
                    </h2>
                    <p className="text-sm text-gray-400">拒绝大拆大建，从轻量启动逐步扩充至全流程 AI 原生运营</p>
                  </div>

                  {/* Phase selector buttons */}
                  <div className="flex space-x-2 bg-gray-900/80 p-1 rounded-xl border border-gray-800">
                    {ROADMAP_PHASES.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPhaseIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedPhaseIdx === idx
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                      >
                        {p.phase}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Roadmap Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Interactive Selected Phase Card */}
                  <div className="lg:col-span-7 glass-card rounded-2xl p-6 border-blue-500/30 bg-blue-950/20 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-800">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                            {ROADMAP_PHASES[selectedPhaseIdx].phase}
                          </span>
                          <h3 className="text-2xl font-black text-white">
                            {ROADMAP_PHASES[selectedPhaseIdx].name}
                          </h3>
                        </div>
                        <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
                          {ROADMAP_PHASES[selectedPhaseIdx].timeline}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="p-3 bg-gray-900/80 rounded-xl border border-gray-800 text-center">
                          <span className="text-[10px] text-gray-400 block">团队规模</span>
                          <span className="text-sm font-bold text-white">{ROADMAP_PHASES[selectedPhaseIdx].teamSize}</span>
                        </div>
                        <div className="p-3 bg-gray-900/80 rounded-xl border border-gray-800 text-center">
                          <span className="text-[10px] text-gray-400 block">基础设施服务器</span>
                          <span className="text-xs font-bold text-white truncate block">{ROADMAP_PHASES[selectedPhaseIdx].servers}</span>
                        </div>
                        <div className="p-3 bg-gray-900/80 rounded-xl border border-gray-800 text-center">
                          <span className="text-[10px] text-gray-400 block">月度预算</span>
                          <span className="text-xs font-bold text-emerald-400 block">{ROADMAP_PHASES[selectedPhaseIdx].budget}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">本阶段里程碑与关键目标：</h4>
                        <div className="space-y-2">
                          {ROADMAP_PHASES[selectedPhaseIdx].keyGoals.map((g, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{g}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-xs text-blue-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{ROADMAP_PHASES[selectedPhaseIdx].highlight}</span>
                    </div>
                  </div>

                  {/* Right: Quick Timeline Stepper */}
                  <div className="lg:col-span-5 space-y-3">
                    {ROADMAP_PHASES.map((p, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedPhaseIdx(idx)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          selectedPhaseIdx === idx
                            ? 'bg-blue-900/30 border-blue-500/60 shadow-lg shadow-blue-500/10'
                            : 'bg-gray-950/40 border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-blue-400">{p.phase}</span>
                          <span className="text-[11px] text-gray-400">{p.timeline}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white mt-1">{p.name}</h4>
                        <div className="flex items-center space-x-2 mt-2">
                          {p.assistants.map((a, aIdx) => (
                            <span key={aIdx} className="text-[10px] px-2 py-0.5 rounded bg-gray-900 text-gray-300 border border-gray-800">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-800">
                <span>提示：初创期（前8周）以极低预算 RM 150-300/月 启动，每两周快速迭代验证。</span>
                <button
                  onClick={() => setCurrentSlide(6)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center space-x-2 hover:bg-blue-500 transition"
                >
                  <span>查看全员极简同步方案</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 6: Sync & Collaboration */}
          {currentSlide === 6 && (
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl min-h-[620px] flex flex-col justify-between">
              <div>
                <div className="mb-6 border-b border-gray-800 pb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    极简协同与零门槛体验
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Obsidian Sync 全员一键同步
                    </span>
                  </h2>
                  <p className="text-sm text-gray-400">为什么非技术员工（销售、客服）能无痛上手？因为像手机记事本一样简单</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Tech Git vs Obsidian Sync */}
                  <div className="glass-card rounded-2xl p-6 border-gray-800 bg-gray-950/40 space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                      <h3 className="text-base font-bold text-gray-300">传统复杂 Git 方式 (❌ 不推荐普通团队)</h3>
                      <span className="text-xs text-red-400 font-mono">门槛高</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-gray-400">
                      <li>• 必须学习复杂代码命令 (commit / push / merge)</li>
                      <li>• 发生文件冲突需要手动解冲突，普通员工极易迷茫</li>
                      <li>• 每次修改要切分支提交，学习成本昂贵</li>
                    </ul>
                  </div>

                  <div className="glass-card rounded-2xl p-6 border-cyan-500/40 bg-cyan-950/20 space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                      <h3 className="text-base font-bold text-cyan-300">选用的 Obsidian Sync 方案 (✓ 最佳实践)</h3>
                      <span className="text-xs text-emerald-400 font-mono">10分钟上手</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-gray-200">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><strong>开箱即用</strong>：打字自动保存，后台隐形同步到主数据库</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><strong>极低成本</strong>：每台设备仅 $4/月 (全员 10 设备折合仅 RM 180/月)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><strong>离线可用</strong>：没网也能随时查看编写，联网后秒级自动同步</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Distributed Vault Workflow */}
                <div className="p-5 bg-blue-950/20 rounded-2xl border border-blue-500/30">
                  <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-3">
                    分布式 Vault 协作架构 (分散编辑 ➔ 中央汇聚)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-300">
                    <div className="p-3 bg-gray-900 rounded-xl border border-gray-800">
                      <div className="font-bold text-white mb-1">1. 员工本地分散编辑</div>
                      <p className="text-[11px] text-gray-400">营销在营销 Vault 整理文案，销售在销售 Vault 写 FAQ，离线流畅。</p>
                    </div>
                    <div className="p-3 bg-gray-900 rounded-xl border border-gray-800">
                      <div className="font-bold text-white mb-1">2. Sync 自动汇聚主库</div>
                      <p className="text-[11px] text-gray-400">后台隐形一键同步至中央主 Vault，自动按部门分区归类保存。</p>
                    </div>
                    <div className="p-3 bg-gray-900 rounded-xl border border-gray-800">
                      <div className="font-bold text-white mb-1">3. AI 智脑自动索引</div>
                      <p className="text-[11px] text-gray-400">AI 提取更新内容加入神经网记忆，全员时刻能问出最新知识。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-800">
                <span>优势：分散编辑降低主库压力，员工拥有个人工作台，数据版本随时追溯。</span>
                <button
                  onClick={() => setCurrentSlide(7)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center space-x-2 hover:bg-blue-500 transition"
                >
                  <span>算一算系统 ROI 投资回报</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 7: ROI Calculator */}
          {currentSlide === 7 && (
            <div className="min-h-[620px] flex flex-col justify-between space-y-6">
              <InteractiveRoiCalculator />
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>提示：可滑动上方的参数条，实时查看不同团队规模下的工时收益与回报率</span>
                <button
                  onClick={() => setCurrentSlide(8)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center space-x-2 hover:bg-blue-500 transition"
                >
                  <span>查看数据安全与人类把关</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 8: Security & Governance */}
          {currentSlide === 8 && (
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl min-h-[620px] flex flex-col justify-between">
              <div>
                <div className="mb-6 border-b border-gray-800 pb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    数据主权与三层安全防线
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      数据不出公司 · 绝无盲目自动化
                    </span>
                  </h2>
                  <p className="text-sm text-gray-400">回答高管最关心的数据隐私与 AI 幻觉校验问题</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Pillar 1 */}
                  <div className="glass-card rounded-2xl p-6 border-emerald-500/30 bg-emerald-950/10 space-y-3">
                    <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400 w-fit">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white">1. 数据主权全在本地</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      所有课程资料、价格表和学员个资全部保存在公司私有服务器中。未经许可绝不出库，<strong>不会被任何第三方大模型公开训练</strong>。
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="glass-card rounded-2xl p-6 border-blue-500/30 bg-blue-950/10 space-y-3">
                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 w-fit">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white">2. 3层防幻觉硬约束</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      AI 在回答涉及课程参数与价格时，强制匹配第一层【唯一权威价格库】，绝不允许凭空推算或给错价格。
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="glass-card rounded-2xl p-6 border-purple-500/30 bg-purple-950/10 space-y-3">
                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 w-fit">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white">3. 人类最后一步把关</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      AI 负责资料整理、生成文案和分析建议。所有对外发送给家长的营销文案或关怀信息，<strong>必须由人类员工确认后发送</strong>。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-800">
                <span>原则：AI 是极致的得力助手，人类拥有最终决策指挥权。</span>
                <button
                  onClick={() => setCurrentSlide(9)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center space-x-2 hover:bg-blue-500 transition"
                >
                  <span>查看前 8 周落地计划表</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 9: First 8 Weeks Action Plan */}
          {currentSlide === 9 && (
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl min-h-[620px] flex flex-col justify-between">
              <div>
                <div className="mb-6 border-b border-gray-800 pb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    前 8 周落地行动计划表 (周周有产出)
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      责任到人 · 双周验收
                    </span>
                  </h2>
                  <p className="text-sm text-gray-400">详细划分每周任务，确保项目按时按质平稳落地</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    {
                      week: 'Week 1 - 2',
                      title: '骨架搭建与核心 SOP 迁移',
                      owner: 'Elson + 各部门 Owner',
                      tasks: [
                        '创建 Obsidian Vault 知识目录',
                        '迁移价格表、招商 SOP 规范',
                        '全员配置 Obsidian Sync 同步',
                        '第一轮知识健康检查'
                      ]
                    },
                    {
                      week: 'Week 3 - 4',
                      title: '首批 AI 助手上线测试',
                      owner: 'Elson + Ying Lin',
                      tasks: [
                        '上线营销 AI 助手测试文案生成',
                        '上线运营 IT 助手解决发号排错',
                        '各部门填充 30+ 篇核心 SOP',
                        '收集首批员工使用反馈'
                      ]
                    },
                    {
                      week: 'Week 5 - 6',
                      title: '销售与客服 AI 助手接入',
                      owner: 'Elson + 销售/客服主管',
                      tasks: [
                        '接入销售 AI 助手与 FAQ 话术',
                        '测试学员红黄绿灯判定功能',
                        '全员日常习惯通过 AI 查知识',
                        '优化 AI 响应速度与准确率'
                      ]
                    },
                    {
                      week: 'Week 7 - 8',
                      title: '成果复盘与高管汇报',
                      owner: 'Elson + 全员团队',
                      tasks: [
                        '知识库资产充实至 100+ 篇',
                        '评估工时节省与准确率提升',
                        '举行阶段复盘展示成果',
                        '规划下一阶段延伸扩充'
                      ]
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="glass-card rounded-2xl p-5 border border-blue-500/20 bg-slate-900/40 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-mono font-bold text-blue-400">{item.week}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-300">
                            {item.owner}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-white mb-3">{item.title}</h3>
                        <ul className="space-y-2 text-xs text-gray-300">
                          {item.tasks.map((t, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-1.5">
                              <span className="text-blue-400 font-bold">•</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-800">
                <span>交付保证：两周一次 Sync Meeting，即时调整优先级。</span>
                <button
                  onClick={() => setCurrentSlide(10)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold flex items-center space-x-2 hover:bg-blue-500 transition"
                >
                  <span>查看总结与高管 Q&A</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 10: Summary & Executive FAQ */}
          {currentSlide === 10 && (
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl min-h-[620px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      总结与高管常见疑问解答 (FAQ)
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        消解顾虑 · 达成共识
                      </span>
                    </h2>
                    <p className="text-sm text-gray-400">点击下方问题查看通俗解答，开启 Top Scholar 企业智脑新篇章</p>
                  </div>

                  <button
                    onClick={handleConfetti}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold flex items-center space-x-2 shadow-lg shadow-amber-500/20 hover:opacity-90 transition"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>庆祝启动企业智脑</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* FAQs list */}
                  <div className="lg:col-span-8 space-y-3">
                    {FAQS.map((faq, idx) => (
                      <div
                        key={idx}
                        className={`rounded-2xl border transition-all overflow-hidden ${
                          openFaqIdx === idx
                            ? 'bg-blue-950/30 border-blue-500/50 shadow-lg shadow-blue-500/5'
                            : 'bg-gray-950/40 border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                          className="w-full p-4 text-left font-semibold text-sm text-white flex justify-between items-center gap-4"
                        >
                          <span className="flex items-center gap-2">
                            <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                            {faq.question}
                          </span>
                          <span className="text-xs px-2.5 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800 shrink-0">
                            {faq.tag}
                          </span>
                        </button>

                        {openFaqIdx === idx && (
                          <div className="px-4 pb-4 text-xs text-gray-300 leading-relaxed border-t border-blue-500/20 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Summary Box */}
                  <div className="lg:col-span-4 glass-card rounded-2xl p-6 border-purple-500/30 bg-purple-950/10 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-purple-400" />
                        一句话核心总结
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Top Scholar 企业智脑不是昂贵复杂的大工程，而是<strong>「全员边用边建、人类把关权威、AI 岗位分身全能辅助」</strong>的现代化工具。
                      </p>
                    </div>

                    <div className="p-4 bg-gray-950/60 rounded-xl border border-gray-800 text-xs text-gray-300 space-y-2">
                      <div className="flex items-center justify-between text-blue-400 font-semibold">
                        <span>阶段预算：</span>
                        <span>首期月投入仅 RM 330+</span>
                      </div>
                      <div className="flex items-center justify-between text-emerald-400 font-semibold">
                        <span>团队上手：</span>
                        <span>10 分钟简单体验</span>
                      </div>
                      <div className="flex items-center justify-between text-purple-400 font-semibold">
                        <span>最终收益：</span>
                        <span>节省 80% 重复工时</span>
                      </div>
                    </div>

                    <button
                      onClick={onSwitchToDocView}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xs shadow-xl hover:opacity-90 transition flex items-center justify-center space-x-2"
                    >
                      <span>阅读完整策略与蓝图文档</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-800">
                <span>Top Scholar Enterprise OS Presentation · All Rights Reserved</span>
                <span className="text-blue-400 font-semibold">Ready to Launch! 🚀</span>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
