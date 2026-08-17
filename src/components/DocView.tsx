import { ArrowLeft, Sparkles } from 'lucide-react';
import { DEPARTMENTS_DATA, LMS_BUNDLES, API_RATES_DATA, DECISIONS_LIST } from '../data/presentationData';

interface DocViewProps {
  onSwitchToSlides: () => void;
}

export const DocView: React.FC<DocViewProps> = ({ onSwitchToSlides }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 space-y-8 text-gray-200">
      {/* Header Bar */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <button
            onClick={onSwitchToSlides}
            className="text-xs text-amber-400 font-semibold mb-2 flex items-center space-x-1.5 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回 Presentation 演示模式</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold">
              2026-08-18 行动方案
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            TOP SCHOLAR — AI Enterprise OS 落地与基础设施搭建行动方案（2026-08-18）
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            汇报人：Elson ｜ 供 2026-08-18 核心决策共创会审议
          </p>
        </div>

        <button
          onClick={onSwitchToSlides}
          className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>打开幻灯片</span>
        </button>
      </div>

      {/* Chapter 1: Closed Loop Architecture */}
      <section className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-4">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold">
          <span>01</span>
          <span>/</span>
          <span>ARCHITECTURE</span>
        </div>
        <h2 className="text-xl font-bold text-white">架构总览：人机共创的双向知识闭环</h2>
        <p className="text-xs text-gray-300 leading-relaxed">
          以 <strong>Obsidian Vault: TS-KNOWLEDGE</strong> 作为业务真相的唯一源头。Markdown 文件具有人类可编辑、AI 易解析、Git 行级 Diff 可版本审计的三重优势。通过 n8n 自动化监听 Git 变更，自动触发 <strong>Graphiti 时序图谱抽取</strong> 与 <strong>FalkorDB GraphRAG 混合检索</strong>，为各部门 <strong>Hermes Agent</strong> 提供无幻觉事实支撑，最终通过 <strong>Hindsight 长期记忆</strong> 沉淀组织进化智慧。
        </p>
      </section>

      {/* Chapter 2: 7 Departments */}
      <section className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-4">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold">
          <span>02</span>
          <span>/</span>
          <span>7 DEPARTMENTS TS-KNOWLEDGE</span>
        </div>
        <h2 className="text-xl font-bold text-white">一、Obsidian OS (TS-KNOWLEDGE) 7 大业务分区</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DEPARTMENTS_DATA.map(d => (
            <div key={d.id} className="p-3.5 rounded-2xl bg-black/40 border border-gray-800 space-y-1 text-xs">
              <div className="flex items-center justify-between font-bold">
                <span className="text-amber-400">{d.num} {d.name}</span>
                <span className="text-gray-400">{d.owner}</span>
              </div>
              <p className="text-gray-300 text-[11px]">{d.roleDescription}</p>
              <div className="text-emerald-400 text-[10px] pt-1">⭐ {d.killerFeature}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 3: Hardware & Deployment */}
      <section className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-4">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold">
          <span>03</span>
          <span>/</span>
          <span>INFRASTRUCTURE</span>
        </div>
        <h2 className="text-xl font-bold text-white">二、设备配置与 P0 紧急阻塞</h2>
        <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 text-xs text-red-200">
          <strong className="text-red-400 block mb-1">⚠️ P0 紧急阻塞项</strong>
          iMac 主控机 (`topscholar operation`) 缺少管理员密码，导致无法执行 Sudo 安装 Docker/Node 等依赖。需在 8/18 会议现场交付密码或重置。
        </div>
        <p className="text-xs text-gray-300 leading-relaxed">
          部署策略：Phase 1 采用「本地开发机 + Tailscale 虚拟组网」，0 额外云端开销；Phase 2 系统成熟后平滑迁移至马来西亚本地优质 VPS（Exabytes / Shinjiru / ServerFreak）。
        </p>
      </section>

      {/* Chapter 4: Rocket LMS */}
      <section className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-4">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold">
          <span>04</span>
          <span>/</span>
          <span>ROCKET LMS</span>
        </div>
        <h2 className="text-xl font-bold text-white">三、Rocket LMS 采购与 5 大角色体系</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {LMS_BUNDLES.map(b => (
            <div key={b.id} className="p-3.5 rounded-2xl bg-black/40 border border-gray-800 space-y-1.5 text-xs">
              <div className="text-amber-400 font-bold">{b.name}</div>
              <div className="text-[10px] text-gray-400 font-mono">{b.itemCode}</div>
              <p className="text-gray-300 text-[11px] leading-relaxed">{b.businessImpact}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300">
          ✓ <strong>Envato 官方授权规则判定</strong>：Top Scholar 交付自营课程，购买 Regular License 100% 合法合规，节省数百美元。
        </div>
      </section>

      {/* Chapter 5: AI Pricing */}
      <section className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-4">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold">
          <span>05</span>
          <span>/</span>
          <span>AI STACK & PRICING</span>
        </div>
        <h2 className="text-xl font-bold text-white">四、AI 订阅矩阵与 2026 官方 API 资费</h2>
        <p className="text-xs text-gray-300">
          月度固定订阅仅约 <strong>$24/月</strong>（Claude Pro $20 + Gemini 年费约 $1.5 + Agnes $4 + DeepSeek 预充值 $20 + Muse API）。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 font-mono">
                <th className="pb-2">模型名称</th>
                <th className="pb-2">输入单价 (1M)</th>
                <th className="pb-2">输出单价 (1M)</th>
                <th className="pb-2">角色分工</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-[11px]">
              {API_RATES_DATA.map((r, i) => (
                <tr key={i}>
                  <td className="py-2 font-bold text-white">{r.model}</td>
                  <td className="py-2 text-amber-300 font-mono">{r.inputPrice}</td>
                  <td className="py-2 text-gray-200 font-mono">{r.outputPrice}</td>
                  <td className="py-2 text-gray-300">{r.roleInHermes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Chapter 6: Decisions */}
      <section className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-4">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold">
          <span>06</span>
          <span>/</span>
          <span>DECISION CHECKLIST</span>
        </div>
        <h2 className="text-xl font-bold text-white">五、会议核心决策清单</h2>
        <div className="space-y-2.5">
          {DECISIONS_LIST.map(d => (
            <div key={d.id} className="p-3 rounded-2xl bg-black/40 border border-gray-800 flex items-start justify-between text-xs">
              <div>
                <span className="font-bold text-amber-300 font-mono mr-2">{d.num}</span>
                <strong className="text-white">{d.title}</strong>
                <p className="text-gray-400 text-[11px] mt-0.5">{d.description}</p>
              </div>
              <span className="text-[10px] font-mono text-gray-500 shrink-0 ml-2">{d.cost}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
