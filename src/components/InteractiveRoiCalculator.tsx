import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles } from 'lucide-react';

export const InteractiveRoiCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(25); // RM per hour
  const [hoursSavedPerDay, setHoursSavedPerDay] = useState<number>(1.5); // Hours per person/day

  const monthlyHoursSaved = Math.round(teamSize * hoursSavedPerDay * 22);
  const monthlyCostSavings = Math.round(monthlyHoursSaved * hourlyRate);
  const annualCostSavings = Math.round(monthlyCostSavings * 12);
  
  // Phase 1 cost is ~RM 350/mo
  const monthlySystemCost = 350;
  const roiMultiplier = Math.round((monthlyCostSavings / monthlySystemCost) * 10) / 10;

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-blue-500/20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30 text-blue-400">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            TS 企业智脑 ROI 投资回报算一算
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              交互计算器
            </span>
          </h3>
          <p className="text-sm text-gray-400">滑动参数，实时计算 AI 智脑能为公司省下多少工时与成本</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Team Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                团队人数：
                <span className="text-blue-400 font-bold">{teamSize} 人</span>
              </label>
            </div>
            <input
              type="range"
              min={5}
              max={50}
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5人 (初创)</span>
              <span>25人 (成熟)</span>
              <span>50人 (稳定)</span>
            </div>
          </div>

          {/* Slider 2: Hours Saved per person */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                每人每天节省查找与沟通时间：
                <span className="text-cyan-400 font-bold">{hoursSavedPerDay} 小时</span>
              </label>
            </div>
            <input
              type="range"
              min={0.5}
              max={3}
              step={0.5}
              value={hoursSavedPerDay}
              onChange={(e) => setHoursSavedPerDay(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5h (保守)</span>
              <span>1.5h (标准)</span>
              <span>3.0h (极致)</span>
            </div>
          </div>

          {/* Slider 3: Hourly Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                平均工时时薪 (RM)：
                <span className="text-emerald-400 font-bold">RM {hourlyRate} / 小时</span>
              </label>
            </div>
            <input
              type="range"
              min={15}
              max={60}
              step={5}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>RM 15/h</span>
              <span>RM 35/h</span>
              <span>RM 60/h</span>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 glass-card rounded-xl p-6 border border-blue-500/30 bg-gradient-to-br from-blue-950/40 to-slate-900/60 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" />
                全公司每月节省时间
              </span>
              <span className="text-lg font-bold text-blue-400">{monthlyHoursSaved} 小时/月</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                全公司每月折算工时收益
              </span>
              <span className="text-lg font-bold text-emerald-400">RM {monthlyCostSavings.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                预计每年相当于增效收益
              </span>
              <span className="text-xl font-black text-purple-400">RM {annualCostSavings.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-400 animate-bounce" />
                <span className="text-xs font-semibold text-gray-200">系统投入产出比 ROI</span>
              </div>
              <span className="text-2xl font-black text-amber-400">{roiMultiplier}x</span>
            </div>
            <p className="text-[11px] text-gray-400 text-center mt-2">
              *基于初创期系统月支出 RM {monthlySystemCost}/月 计算，回报率高达 {roiMultiplier} 倍！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
