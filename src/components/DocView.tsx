import React, { useState } from 'react';
import { BookOpen, Layers, ArrowLeft, ShieldCheck, Cpu } from 'lucide-react';
import { DEPARTMENTS, ROADMAP_PHASES } from '../data/presentationData';
import { VaultTreeViewer } from './VaultTreeViewer';

interface DocViewProps {
  onSwitchToSlides: () => void;
}

export const DocView: React.FC<DocViewProps> = ({ onSwitchToSlides }) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'deployment'>('blueprint');

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Bar */}
      <div className="glass-panel rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <button
            onClick={onSwitchToSlides}
            className="text-xs text-blue-400 font-semibold mb-2 flex items-center space-x-1.5 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回 Presentation 幻灯片模式</span>
          </button>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Top Scholar 企业智脑策略全景文档库
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            重构通俗版：完全移除晦涩技术黑话，保留 100% 商业价值与完整 2.2 Vault 目录树
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1 bg-gray-950 p-1.5 rounded-2xl border border-gray-800">
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'blueprint'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>静态知识中枢蓝图</span>
            </button>
            <button
              onClick={() => setActiveTab('deployment')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'deployment'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>分阶段落地路线图</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Document Content */}
      {activeTab === 'blueprint' ? (
        <div className="glass-panel rounded-3xl p-8 border border-blue-500/20 shadow-2xl space-y-8">
          <div className="border-b border-gray-800 pb-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>通俗重构版蓝图 · 01/02</span>
            </div>
            <h2 className="text-3xl font-black text-white">TS Enterprise OS — 企业数字大脑与知识中枢蓝图</h2>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              核心使命：将全公司 SOP、课程参数、唯一价格表与销售经验转化成<strong>永远留在 Top Scholar 的数字资产</strong>。
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-blue-500 pl-3">
              一、 解决的三大核心痛点
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-2xl border-gray-800 text-xs space-y-2">
                <span className="font-bold text-red-400">1. 知识在人脑不在公司</span>
                <p className="text-gray-400">员工离职或请假，核心 SOP 与客户沟通细节随之流失，后人难以接手。</p>
              </div>
              <div className="glass-card p-4 rounded-2xl border-gray-800 text-xs space-y-2">
                <span className="font-bold text-red-400">2. 信息口径不一致</span>
                <p className="text-gray-400">销售报价错算、客服给错课表，部门间出现内耗与赔付风险。</p>
              </div>
              <div className="glass-card p-4 rounded-2xl border-gray-800 text-xs space-y-2">
                <span className="font-bold text-red-400">3. 重复回答低效问题</span>
                <p className="text-gray-400">每天大量工时浪费在回答“Zoom 链接在哪”、“发票怎么开”等重复事项。</p>
              </div>
            </div>
          </div>

          {/* Section 2: Department breakdown */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-purple-500 pl-3">
              二、 6 大部门知识分区明细
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DEPARTMENTS.map((dept) => (
                <div key={dept.id} className="glass-card p-5 rounded-2xl border-gray-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-white">{dept.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800">
                      {dept.owner}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300">{dept.description}</p>
                  <div className="pt-2 flex flex-wrap gap-1">
                    {dept.keyFiles.map((f, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-blue-950/40 text-blue-300 border border-blue-500/20">
                        📄 {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2.2: Full Vault Tree */}
          <div className="space-y-4 pt-4 border-t border-gray-800">
            <VaultTreeViewer />
          </div>
        </div>
      ) : (
        <div className="glass-panel rounded-3xl p-8 border border-purple-500/20 shadow-2xl space-y-8">
          <div className="border-b border-gray-800 pb-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">
              <Cpu className="w-4 h-4" />
              <span>通俗重构版路线图 · 02/02</span>
            </div>
            <h2 className="text-3xl font-black text-white">TS Enterprise OS — 分阶段设备与 AI 岗位分身落地路线图</h2>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              核心原则：轻量起步、全员共建、两周一迭代、数据主权始终在手。
            </p>
          </div>

          <div className="space-y-6">
            {ROADMAP_PHASES.map((phase, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border-gray-800 space-y-4">
                <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                  <div>
                    <span className="text-xs font-bold text-purple-400 font-mono">{phase.phase}</span>
                    <h3 className="text-xl font-bold text-white">{phase.name} ({phase.timeline})</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-xl">
                    预算：{phase.budget}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
                  <div>
                    <span className="font-bold text-gray-200 block mb-2">配备 AI 岗位助手：</span>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.assistants.map((a, aIdx) => (
                        <span key={aIdx} className="px-2.5 py-1 rounded bg-purple-950/40 text-purple-300 border border-purple-500/30 font-semibold">
                          ✨ {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-gray-200 block mb-2">关键里程碑目标：</span>
                    <ul className="space-y-1 text-gray-400">
                      {phase.keyGoals.map((g, gIdx) => (
                        <li key={gIdx}>• {g}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
