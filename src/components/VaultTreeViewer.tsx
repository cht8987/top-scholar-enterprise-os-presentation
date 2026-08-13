import React, { useState } from 'react';
import { FolderTree, Copy, Check, FileText } from 'lucide-react';
import { FULL_VAULT_TREE } from '../data/presentationData';

export const VaultTreeViewer: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(FULL_VAULT_TREE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-blue-500/30 shadow-2xl space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-3 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400">
            <FolderTree className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              2.2 Vault 完整目录结构定义 (一字不删完整版)
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                TS-KNOWLEDGE 规范
              </span>
            </h3>
            <p className="text-xs text-gray-400">包含 00-COMPANY 至 99-META 及 _SYSTEM 层的所有完整分支</p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-300 hover:text-white hover:border-gray-700 transition flex items-center space-x-1.5"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
          <span>{copied ? '已复制目录树' : '复制完整目录树'}</span>
        </button>
      </div>

      {/* Code viewer box */}
      <div className="relative rounded-xl bg-slate-950/90 border border-gray-800/80 p-4 font-mono text-xs text-emerald-300/90 overflow-x-auto max-h-[500px] leading-relaxed shadow-inner">
        <pre className="whitespace-pre">{FULL_VAULT_TREE}</pre>
      </div>

      <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
        <span className="flex items-center gap-1">
          <FileText className="w-3.5 h-3.5 text-blue-400" />
          包含全部 7 大部门专区、90-RESOURCES 公共资源、99-META 元数据与 _SYSTEM 暂存区
        </span>
        <span className="text-emerald-400 font-semibold">100% 完整保留未剪裁</span>
      </div>
    </div>
  );
};
