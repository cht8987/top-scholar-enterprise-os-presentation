export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  icon: string;
  owner: string;
  color: string;
  description: string;
  keyFiles: string[];
  assistantRole: string;
  benefits: string[];
}

export interface RoadmapPhase {
  phase: string;
  name: string;
  timeline: string;
  teamSize: string;
  servers: string;
  budget: string;
  assistants: string[];
  keyGoals: string[];
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  tag: string;
}

export interface AiMemoryComponentInfo {
  name: string;
  techName: string;
  layerName: string;
  metaphor: string;
  color: string;
  icon: string;
  role: string;
  techDetails: string;
  whyNeeded: string;
  deployment: string;
  keyFeatures: string[];
}

export const COMPANY_OS_TWIN_PILLAR_TREE = `                    COMPANY OS (TS 企业操作系统)
                        │
            ┌───────────┴───────────┐
            │                       │
       OBSIDIAN VAULT           BUSINESS DB (LMS 系统统一入口)
            │                       │
     【Knowledge Layer】      【Business Data Layer】
       SOP / Playbook          Student Data (学员数据)
       Policies (公司政策)     Subscription (课程订阅)
       Experience (经验)       Attendance (出勤记录)
       Training (培训)         Scores (成绩表现)
       Decisions (决策)        Payment (缴费记录)
       Prices (唯一价格)       Classes (班级分组)
            │                  Customer Data (家长画像)
            │                  ★ Coach / Teacher / Student 绑定管理
            │                       │
            └───────────┬───────────┘
                        │
                     AI 智脑层
          (FalkorDB + Graphiti + Hindsight)
                        │
                        ▼
     【全员 AI 岗位分身】 营销 / 销售 / 客服 / 教务 / IT / 高管`;

export const BUSINESS_DB_HIGHLIGHTS = [
  {
    title: 'LMS 系统的核心入口与数据库心脏',
    description: '所有的教练 (Coach)、老师 (Teacher) 与学生 (Student) 的全流程业务数据，全部下沉绑定在 Business DB 中统一管理。',
    icon: 'Database'
  },
  {
    title: '全方位学员生命周期资产 (Student Data)',
    description: '管理学员档案、家长信息 (Customer Data)、课程订阅 (Subscription)、班级分组 (Classes) 与历史学费记录 (Payment)。',
    icon: 'Users'
  },
  {
    title: '学情与表现实效追踪 (Attendance & Scores)',
    description: '记录学生在 LMS 中的打卡出勤 (Attendance)、作业成绩与测评表现 (Scores)，为 AI 红黄绿灯判定提供真实数据源。',
    icon: 'TrendingUp'
  },
  {
    title: 'AI 智脑双源驱动闭环',
    description: 'Obsidian Vault 解决“怎么做与规则是什么”，Business DB 解决“谁在学、进度如何与费用结清”。AI 助手双向联查，生成零失误答复。',
    icon: 'Cpu'
  }
];

export const AI_MEMORY_TRIO: AiMemoryComponentInfo[] = [
  {
    name: 'FalkorDB 图底座',
    techName: 'FalkorDB',
    layerName: '1. 数据存储图底座 (Data Graph Engine)',
    metaphor: '“数字大脑的图谱硬盘与搜索引擎底座”',
    color: 'from-blue-600 to-indigo-700',
    icon: 'Database',
    role: '高性能图数据库底座，负责毫秒级持久化存储节点与关系网络。',
    techDetails: '基于 Redis 内核的高性能图数据库，支持 Cypher 结构化查询与 Vector 混合向量相似度检索。存储 Coach/Teacher/Student 实体与 SOP 关系节点。',
    whyNeeded: '普通关系型 SQL 或单纯向量库无法高效表达复杂的“产品-价格-SOP-学员”多维网状关联，FalkorDB 提供了毫秒级的关联查询性能。',
    deployment: 'Docker Compose 容器部署 (独立 6379 端口，4GB 内存配额)。',
    keyFeatures: [
      'Redis 高速内核，查询延迟 < 5 毫秒',
      '原生支持 Cypher 标准图查询语言',
      '图结构 + 向量 Embedding 混合索引',
      '实体节点：Coach / Teacher / Student / SOP'
    ]
  },
  {
    name: 'Graphiti 时空引擎',
    techName: 'Graphiti',
    layerName: '2. 记忆与逻辑时空层 (Temporal Memory Middleware)',
    metaphor: '“带时间线的智能图书管理员 / 记忆时空引擎”',
    color: 'from-emerald-600 to-teal-700',
    icon: 'Clock',
    role: '时序图谱写入引擎，为所有知识与聊天事件自动打上时间戳 (Timestamp)。',
    techDetails: '利用大语言模型 (LLM) 增量提取对话与 LMS 考勤成绩事件中的时序演进关系，提供 insert() 与 search() 高级记忆 API。',
    whyNeeded: '教育业务天然是时序演进的（学员“6个月前的成绩” vs “现在的表现” vs “未来的预警”）。Graphiti 让 AI 能够追踪时间线的历史版本变迁。',
    deployment: 'Docker Compose 中间件，自动监听 Obsidian Git 变更与 LMS DB 交互事件。',
    keyFeatures: [
      '自动提取增量“实体-关系”事件',
      '节点赋予精确时间戳 (Temporal Nodes)',
      '版本历史追踪，防止“知识腐烂”',
      '支持“过去某节点状态”的精准时空检索'
    ]
  },
  {
    name: 'Hindsight 反思质检官',
    techName: 'Hindsight',
    layerName: '3. 监控与反思质检层 (Reflection & Agent Long-Term Memory)',
    metaphor: '“AI 决策复盘审计员 / 经验提炼质检官”',
    color: 'from-purple-600 to-pink-700',
    icon: 'Brain',
    role: 'Agent 长期记忆评估与自我纠错引擎，记录优秀答复与用户纠正。',
    techDetails: '管理 Memory Nodes (经验/观察/事实)，提供 retain() / recall() 访问接口，并对记忆提供置信度评分 (Confidence Score)。',
    whyNeeded: '底座数据库可能误存噪音或误判。Hindsight 充当“记忆提炼官”，评估记忆有效性，记录人类纠正，确保被纠正的错误绝对不重犯。',
    deployment: '复用现有 i7 服务器私有实例 (通过 SSH 隧道直连 top-scholar Bank)。',
    keyFeatures: [
      'Memory NodeSchema (包含置信度与 TTL)',
      '用户纠正 100% retain 永久记忆',
      '自动评估检索结果是否切中业务意图',
      '跨 Agent 共享公司最高决策记忆'
    ]
  }
];

export const DEPARTMENTS: DepartmentInfo[] = [
  {
    id: '00-company',
    name: '00 公司级核心 (Company Core)',
    icon: 'Building2',
    owner: 'Alex / Aaron / 全员',
    color: 'from-blue-500 to-indigo-600',
    description: '全员只读权威真相源，定义公司核心价值、品牌标准口径与合规红线。',
    keyFiles: ['价值观与六戒行为准则.md', '品牌口径唯一版本.md', '荣誉与媒体资产.md', '组织架构与职责.md'],
    assistantRole: '答复公司通用制度、品牌口径与合规红线查询',
    benefits: ['统一全员对外对外口径', '杜绝品牌宣传夸大', '新员工快速融入文化']
  },
  {
    id: '01-product',
    name: '01 产品与价格 (Product & Prices)',
    icon: 'Tag',
    owner: 'Alex / Aaron / ES',
    color: 'from-emerald-500 to-teal-600',
    description: '★ 全公司唯一的权威价格与课程标准真相源，杜绝口径不一致与赔付风险。',
    keyFiles: ['价格表唯一权威版.md', '国英特训班规范.md', '状元班标准.md', '付费方式与分期.md'],
    assistantRole: '3 秒内提供最新精准课程参数、课表与价格信息',
    benefits: ['报价 100% 准确', '消除人工算错退款风险', '产品课表随时同步更新']
  },
  {
    id: '02-marketing',
    name: '02 营销中枢 (Marketing Hub)',
    icon: 'Megaphone',
    owner: 'Ying Lin / Elson',
    color: 'from-purple-500 to-pink-600',
    description: '爆款广告文案库 (Winning Ads) 与多渠道招生 SOP 运营基地。',
    keyFiles: ['招生SOP-Meta广告.md', '文案爆款方法论(4U).md', '品牌禁用词红线.md', 'Winning Ads 案例库.md'],
    assistantRole: '自动搜集爆款文案、生成广告草稿、排查禁用词',
    benefits: ['文案产出速度提升 5 倍', '自动避开违禁词', '高效复用历史 Winning Ads']
  },
  {
    id: '03-sales',
    name: '03 销售中枢 (Sales Hub)',
    icon: 'TrendingUp',
    owner: 'Sales Lead / Elson',
    color: 'from-amber-500 to-orange-600',
    description: '家长 FAQ 常见问答库、6 大类关单异议破解与成交闭单 SOP。联动 LMS 客户订阅记录。',
    keyFiles: ['家长常见疑问FAQ-5类.md', '异议处理6类破解.md', 'Booking Call 6步走.md', '成交案例库.md'],
    assistantRole: '结合 LMS DB 订阅状态，实时提示关单话术、生成专属报价单',
    benefits: ['降低新销售培养周期', '回答异议流畅准确', '显著提升闭单转化率']
  },
  {
    id: '04-cs',
    name: '04 客户成功 (Customer Success)',
    icon: 'Users',
    owner: 'CS Lead / Elson',
    color: 'from-cyan-500 to-blue-600',
    description: '学员报名后流程、LMS 学员表现红黄绿灯预警标准与续费升单 SOP。',
    keyFiles: ['报名后三步走SOP.md', '学员红黄绿灯判定标准.md', '续费与升单SOP.md', '家长关怀模板库.md'],
    assistantRole: '自动分析 LMS DB 中的考勤成绩，判定红黄绿灯、拟定家长关怀草稿',
    benefits: ['流失风险提前预警', '家长关怀效率翻倍', '学员续费率稳步上升']
  },
  {
    id: '05-academic',
    name: '05 教务中枢 (Academic Hub)',
    icon: 'GraduationCap',
    owner: 'Academic Lead',
    color: 'from-violet-500 to-purple-600',
    description: 'SEE 教学理念、A+ 五环系统、Coach/Teacher 管理、作业批改标准与教材库。',
    keyFiles: ['作业批改标准.md', 'SEE 教学理念与A+五环.md', '课表与分组规则.md', '教材与Workbook索引.md'],
    assistantRole: '联动 LMS 中的 Coach/Teacher 教学记录，推荐个性化评语与课件',
    benefits: ['教学批改标准统一', '教材检索零秒等待', '提升学员学习体验']
  },
  {
    id: '06-operations',
    name: '06 运营与 IT (Operations & IT)',
    icon: 'Server',
    owner: 'Elson (IT Lead)',
    color: 'from-slate-500 to-zinc-600',
    description: '系统账号管理、Business DB (LMS 入口) 运维、Zoom 链接自动分发与故障排除。',
    keyFiles: ['系统清单与权限申请.md', 'Zoom链接发放规则.md', '故障排查手册.md', '系统运维Runbook.md'],
    assistantRole: '引导员工自助解决软件故障、协助 Business DB 数据交互',
    benefits: ['减少 80%IT 重复报修', '系统发号零延误', '故障快速应急恢复']
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    name: '初创启航期',
    timeline: 'Week 1 - 8 (前2个月)',
    teamSize: '6 - 10 人',
    servers: '1 台基础服务器 (NAS / 入门 VPS)',
    budget: 'RM 150 - 300 / 月 (一键协同每人仅 RM 18/月)',
    assistants: ['营销 AI 助手', '运营与 IT AI 助手'],
    keyGoals: [
      '完成 Obsidian Vault 架构搭建与 5 份核心 SOP 迁移',
      '映射 Business DB (LMS 入口) Coach/Teacher/Student 字段',
      '部署 FalkorDB 容器与基础图节点索引',
      '全员通过 Obsidian Sync 隐形一键协同'
    ],
    highlight: '双柱启动：构建 Obsidian 知识层 + Business DB (LMS 系统入口) 映射。'
  },
  {
    phase: 'Phase 2',
    name: '快速拓展期',
    timeline: 'Week 9 - 52 (第3-12个月)',
    teamSize: '15 - 22 人',
    servers: '2 - 3 台高配服务器',
    budget: 'RM 300 - 600 / 月',
    assistants: ['销售 AI 助手', '客户成功 (CS) AI 助手'],
    keyGoals: [
      '打通 LMS DB 的考勤成绩数据，上线红黄绿灯学员预警',
      '引入 Graphiti 时序记忆引擎，赋予数据时间戳',
      '销售 AI 助手联动 LMS 订阅记录输出续费简报',
      '每个部门沉淀 50+ 篇核心资产文档'
    ],
    highlight: '打通 Business DB (LMS 系统) 业务流，销售与客服效率翻倍。'
  },
  {
    phase: 'Phase 3',
    name: '成熟协同期',
    timeline: 'Year 2 - 3 (第2-3年)',
    teamSize: '25 - 35 人',
    servers: '3 - 5 台云端集群 / 私有云',
    budget: 'RM 3,300 - 5,000 / 月',
    assistants: ['6 大部门 AI 助手全线上线', '高管 Executive Dashboard AI'],
    keyGoals: [
      '统一 student_id 全链路贯穿 LMS DB 与 AI 看板',
      '教务 AI 助手上线，辅助 Coach/Teacher 批改评语',
      '高管仪表盘上线，实时呈现大盘 ROI 与续费趋势',
      '跨部门数据无缝实时流转'
    ],
    highlight: '以 student_id 贯穿全大盘，全员 AI 深度协同。'
  },
  {
    phase: 'Phase 4',
    name: 'AI 原生运营期',
    timeline: 'Year 4+ (第4年及以后)',
    teamSize: '35 - 55 人',
    servers: '云原生弹性集群 (AWS/GCP/Azure)',
    budget: 'RM 8,000 - 15,000 / 月',
    assistants: ['AI 预测与决策引擎', '全流程智能辅助阵列'],
    keyGoals: [
      '结合 LMS 考勤数据提前 30 天自动化提醒学员退费风险',
      '智能预测下季度招生与续费量',
      '人类监督 + AI 智能建议闭环',
      '成为行业领先的 AI 原生教育企业'
    ],
    highlight: 'AI 预判走势，人类掌控决策，保持极致人情味与效率。'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '什么是 Business DB？它和 LMS 系统是什么关系？',
    answer: 'Business DB 是 Top Scholar LMS (学习管理系统) 的统一数据库心脏与唯一入口！所有的教练 (Coach)、老师 (Teacher) 和学生 (Student) 的全流程业务数据（出勤 Attendance、成绩 Scores、订阅 Subscription、班级 Classes、缴费 Payment）全部绑定在 Business DB 中统一管理。',
    tag: 'Business DB / LMS'
  },
  {
    question: 'Company OS 的“双柱架构”是如何运作的？',
    answer: 'Company OS 由【柱1：Obsidian Vault】与【柱2：Business DB】双柱驱动。Obsidian 负责存 SOP、价格表和政策（回答“怎么做”）；Business DB 负责存 LMS 中的 Coach/Teacher/Student 真实考勤与成绩（回答“谁在学、进度如何”）。两者汇聚到 AI 大脑，实现全流程智能解答与预警。',
    tag: '双柱架构'
  },
  {
    question: '为什么 AI Memory 必须由 FalkorDB、Graphiti 和 Hindsight 三者组合？',
    answer: '三者在不同层级各司其职：FalkorDB 是基础图数据库底座（负责存取节点与极速查询）；Graphiti 是中间件（用大模型提取实体并为记忆赋予时间戳，解决知识过时问题）；Hindsight 是高阶质检与复盘（记录成功经验与人工纠错，确保错误不重犯）。三者缺一不可。',
    tag: 'AI Memory 技术'
  },
  {
    question: '数据保存在哪里？公司的核心价格和 LMS 客户资料会泄露吗？',
    answer: '绝对安全！我们坚守「数据主权在公司手心里」原则。Obsidian Vault、Business DB (LMS DB) 与 FalkorDB 全部运行在公司私有服务器，数据经过加密，绝对不会被第三方平台拿去训练公开大模型。',
    tag: '数据安全'
  },
  {
    question: '如果未来老员工离职，这套系统能起到什么效果？',
    answer: '这正是本系统的核心价值！所有 SOP、经验话术、以及 LMS 中的学员历史表现均已被 AI 大脑提取并永久保留在「企业数字大脑」中。新员工入职后，AI 助手能带他快速检索所有历史经验，1 周内无缝上手。',
    tag: '资产沉淀'
  }
];

export const FULL_VAULT_TREE = `TS-KNOWLEDGE/
│
├── 00-COMPANY/                     # 全员可读 —— 公司级真相源
│   ├── 价值观与行为准则.md           # 六戒原文 + 红线对照
│   ├── 创办人与团队.md
│   ├── 品牌口径.md                   # ★ 学生数、荣誉、slogan 唯一版本
│   ├── 荣誉与媒体资产.md
│   └── 组织架构与职责.md
│
├── 01-PRODUCT/                     # 全员可读 —— ★ 单一价格真相
│   ├── 产品线总览.md
│   ├── 国英挑战课.md
│   ├── 国英特训.md                  # 含课表、8大特点、期数定义
│   ├── Premium小组特训.md
│   ├── 状元班.md
│   ├── A-LEADER假期营.md
│   ├── 书籍与教材.md
│   ├── 价格表.md                    # ★★ 唯一权威版本
│   └── 付费方式与分期.md
│
├── 02-MARKETING/                   # 营销团队专用
│   ├── SOP/
│   │   ├── 招生SOP-Meta广告.md
│   │   ├── 招生SOP-社媒.md
│   │   ├── 招生SOP-Telegram.md
│   │   └── 招生SOP-Email.md
│   ├── PLAYBOOK/
│   │   ├── 文案方法论.md            # 4U · 七宗罪 · 标准框架 · CTA
│   │   └── 品牌调性与禁用词.md      # ★ 反夸大红线
│   ├── KNOWLEDGE/
│   │   ├── winning-ads/            # 每条 winning ad 一个文件 + 表现数据
│   │   └── 内容选题库/
│   ├── 00-WORKSPACE/
│   │   ├── INBOX/                  # 待处理 brief、竞品信息
│   │   ├── DRAFTS/                 # 文案草稿（待审核）
│   │   └── SUBMISSIONS/            # 已提交内容
│   └── CASES/
│       └── 竞品分析报告/
│
├── 03-SALES/                       # 销售团队专用
│   ├── SOP/
│   │   ├── 大型活动5阶段节奏.md
│   │   ├── Booking-Call-6步SOP.md
│   │   ├── Follow-Up-7日流程.md
│   │   └── Closing流程.md
│   ├── PLAYBOOK/
│   │   ├── 家长FAQ-5类.md
│   │   └── 异议处理-6类.md
│   ├── KNOWLEDGE/
│   │   └── 成交案例库/
│   ├── 00-WORKSPACE/
│   │   ├── INBOX/
│   │   └── DRAFTS/
│   └── RESOURCES/
│
├── 04-CUSTOMER-SUCCESS/            # 客户成功团队专用
│   ├── SOP/
│   │   ├── Enrollment-System.md
│   │   ├── 报名后SOP-三个Box.md
│   │   ├── Student-Success-Journey.md
│   │   └── CS黄金原则.md
│   ├── PLAYBOOK/
│   │   ├── 红黄绿灯SOP.md           # ★ 未来由系统自动判定
│   │   └── 续费与升单SOP.md
│   ├── KNOWLEDGE/
│   │   ├── 家长关怀模板库/
│   │   └── 客户疑问-视频教学清单.md
│   ├── CUSTOMER-CONTEXT/           # 客户画像与偏好
│   └── CASES/
│
├── 05-ACADEMIC/                    # 教务团队专用
│   ├── SOP/
│   │   ├── 批改标准.md
│   │   └── 教材使用指南.md
│   ├── PLAYBOOK/
│   │   ├── 教学理念-SEE.md
│   │   └── A+五环系统.md
│   ├── KNOWLEDGE/
│   │   ├── 课表与分组规则.md
│   │   └── 教材与workbook索引.md
│   ├── CURRICULUM/
│   └── CASES/
│
├── 06-OPERATIONS-IT/              # IT/运营团队专用（Elson 主场）
│   ├── SOP/
│   │   ├── 开号与enrol流程.md
│   │   ├── Zoom链接发放规则.md
│   │   └── 故障排查手册.md
│   ├── PLAYBOOK/
│   │   └── 系统运维手册.md
│   ├── KNOWLEDGE/
│   │   ├── 系统清单与账号.md        # 不含密码
│   │   ├── 数据字典.md
│   │   └── 权限申请流程.md
│   ├── IT/
│   │   ├── Docker部署指南.md
│   │   ├── n8n工作流文档.md
│   │   └── 备份与恢复runbook.md
│   └── 00-WORKSPACE/
│       ├── INBOX/
│       └── DRAFTS/
│
├── 90-RESOURCES/                   # 公共资源
│   ├── Templates/                  # 模板库
│   ├── References/                 # 参考文档
│   └── External-Docs/              # 外部文档
│
├── 99-META/                        # 元数据与治理
│   ├── Taxonomy.md                 # 标签体系
│   ├── Glossary.md                 # 术语表
│   ├── Pending-Verification.md     # ★ 待核实清单（所有 ❓ 集中在这里）
│   ├── Knowledge-Health.md         # 知识库健康度报告
│   └── Changelog.md                # 更新日志
│
└── _SYSTEM/                        # 系统层（不入检索库）
    ├── Inbox/                      # 全局输入暂存
    ├── Processing/                 # 处理中
    └── Output/                     # 待审核输出`;
