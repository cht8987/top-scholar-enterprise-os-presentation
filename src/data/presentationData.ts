export interface SlideMeta {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
}

export const SLIDES_META: SlideMeta[] = [
  { id: 1, title: 'AI Enterprise OS 落地与基础设施行动方案', subtitle: 'Top Scholar 教育集团 · 2026-08-18 核心决策共创会', category: 'EXECUTIVE', badge: '8/18 决策案' },
  { id: 2, title: '双向闭环架构：以人为主的知识底座', subtitle: '为什么以 Obsidian 为真理源头，而非直接写入图数据库', category: 'ARCHITECTURE', badge: '双向闭环' },
  { id: 3, title: 'TS-KNOWLEDGE 7 大业务分区与协同共创', subtitle: '统一知识框架 · 部门专属负责人 · 8/20-8/30 结构化迁移', category: 'ORGANIZATION', badge: '7大分区' },
  { id: 4, title: '设备配置、网络方案与 P0 紧急阻塞', subtitle: 'iMac 管理员权限破局 · 本地开发+Tailscale vs 云端 VPS 选型', category: 'INFRASTRUCTURE', badge: 'P0 阻塞项' },
  { id: 5, title: 'Rocket LMS 深度采购与 5 大权限角色体系', subtitle: '三大核心包功能拆解 · 5 大角色分权 · Regular 授权合法性判定', category: 'LMS PLATFORM', badge: '采购与授权' },
  { id: 6, title: 'AI 订阅矩阵与 2026 最新前沿 API 资费', subtitle: '月度固定仅 $24 · DeepSeek V4 / Claude Opus 5 / Gemini 3.7 Flash 官方资费', category: 'AI STACK', badge: '极致性价比' },
  { id: 7, title: 'Hermes Agent 部门杀手级业务赋能', subtitle: '从被动问答升级为主动业务哨兵 · 营销短视频/广告分析 · 客服学情与关怀', category: 'HERMES AGENT', badge: '主动哨兵' },
  { id: 8, title: '企业大脑演进节奏与 1 周落地 Playbook', subtitle: '1 个月技术底座迭代 · 1 周 Telegram Bot 极简上线与实战培训', category: 'ROADMAP', badge: '1周落地' },
  { id: 9, title: '会议现场核心决策与行动审批清单', subtitle: '5 大决策现场审议 · 达成共识即刻启动开工', category: 'DECISION', badge: '现场拍板' }
];

export interface DepartmentItem {
  id: string;
  num: string;
  name: string;
  owner: string;
  roleDescription: string;
  focusFiles: string[];
  color: string;
  icon: string;
  killerFeature: string;
}

export const DEPARTMENTS_DATA: DepartmentItem[] = [
  {
    id: '00-company',
    num: '00',
    name: 'COMPANY (公司总览)',
    owner: 'Aaron / Elson',
    roleDescription: '组织架构、核心价值观、全员通告、经营战略总览',
    focusFiles: ['ORG-CULTURE-AND-VALUES.md', 'COMPANY-OS-INDEX.md'],
    color: '#E5C07B',
    icon: 'Building2',
    killerFeature: '全员共识对齐，统一企业文化与行为准则'
  },
  {
    id: '01-product',
    num: '01',
    name: 'PRODUCT (产品与课程)',
    owner: '产品 / 教务主管',
    roleDescription: '6 大产品线详情、标准化定价表、课程周期、交付物标准',
    focusFiles: ['PRODUCT-CATALOG-PRICING.md', 'CLASS-SCHEDULE.md'],
    color: '#F59E0B',
    icon: 'Tag',
    killerFeature: '单点维护全公司课程唯一价格与标准课表'
  },
  {
    id: '02-marketing',
    num: '02',
    name: 'MARKETING (营销与流量)',
    owner: 'Ying Lin',
    roleDescription: '广告投放 SOP、文案库、UTM 规范、活动复盘、渠道转化数据',
    focusFiles: ['ADS-OPERATING-SOP.md', 'UTM-STANDARD-V1.md'],
    color: '#EC4899',
    icon: 'Megaphone',
    killerFeature: '广告自动诊断哨兵 + 30秒短视频黄金分镜生成'
  },
  {
    id: '03-sales',
    num: '03',
    name: 'SALES (销售与转化)',
    owner: 'Becky / Sales Lead',
    roleDescription: '销售攻防话术、线索跟进 SOP、报价策略、成单/丢单案例复盘',
    focusFiles: ['SALES-PLAYBOOK.md', 'OBJECTION-HANDLING.md'],
    color: '#10B981',
    icon: 'TrendingUp',
    killerFeature: '高情商破冰话术秒级生成 + 丢单线索二次激活'
  },
  {
    id: '04-cs',
    num: '04',
    name: 'CUSTOMER SUCCESS (售后CS)',
    owner: 'Becky',
    roleDescription: '课后督导、退费/延期标准处理、家长满意度、续费跟进 SOP',
    focusFiles: ['AFTER-SALES-SOP.md', 'REFUND-POLICY.md'],
    color: '#06B6D4',
    icon: 'Users',
    killerFeature: '缺勤/未交作业关怀雷达 + 一键家长学情喜报'
  },
  {
    id: '05-academic',
    num: '05',
    name: 'ACADEMIC (教务与教研)',
    owner: '教务主管',
    roleDescription: '教师排课、作业批改标准、教案大纲、教学质量监控指标',
    focusFiles: ['TEACHER-GUIDE.md', 'GRADING-STANDARDS.md'],
    color: '#8B5CF6',
    icon: 'GraduationCap',
    killerFeature: '班级共性错题智能归纳 + 下堂课巩固讲义生成'
  },
  {
    id: '06-operations-it',
    num: '06',
    name: 'OPERATIONS & IT (运营运维)',
    owner: 'Elson',
    roleDescription: '权限矩阵、API 文档、自动化工作流 (n8n)、网络与数据运维',
    focusFiles: ['TECH-STACK-SPEC.md', 'N8N-BLUEPRINTS.md'],
    color: '#6366F1',
    icon: 'Server',
    killerFeature: '多 Agent 路由中枢 + 图数据库时序数据同步'
  }
];

export interface LmsBundleItem {
  id: string;
  name: string;
  itemCode: string;
  type: string;
  keyFeatures: string[];
  techStack: string;
  businessImpact: string;
}

export const LMS_BUNDLES: LmsBundleItem[] = [
  {
    id: 'web-core',
    name: 'Rocket LMS Web Core',
    itemCode: 'CodeCanyon 33120735',
    type: '主系统内核',
    techStack: 'Laravel 9+ / PHP 8.1+ / MySQL / Bootstrap 5 / REST API',
    keyFeatures: [
      '课程与章节体系 (Chapters, Sessions, Prerequisites 先修课)',
      'Drip Content 防刷课机制 (按周/按天定时解锁课件)',
      'Zoom 原生 S2S OAuth 深度集成 (自动排课建会、课后回放挂载)',
      'Quiz 在线题库系统 (单选/多选/图文题/限时答题/自动判分)',
      'HTML5 Canvas 动态证书设计器 (自动生成防伪 QR Code)',
      '积分与勋章激励系统 (Badges, Points, 学员排行榜)'
    ],
    businessImpact: '替代老旧 Moodle，提供极简现代 Web 交付与无感 Zoom 直播对接。'
  },
  {
    id: 'plugins-bundle',
    name: 'Universal Plugins Bundle',
    itemCode: 'CodeCanyon 33297004',
    type: '40+ 插件全家桶',
    techStack: 'Modular Laravel Addons (支持后续所有新插件免费升级)',
    keyFeatures: [
      'Assignments 作业批改系统 (学生上传文件，老师后台评分评语与退回)',
      'Course Forum & In-App Live Chat (课程专属论坛 + 助教一对一私信)',
      'Course Bundles (支持将多门课打包为组合套餐一键批量授权)',
      'Offline Bank Payments (家长上传 Bank Slip 凭证，财务一键审核开通)',
      'Meeting Booking (讲师日历预约，自动同步 Google Calendar 生成 Zoom 链接)',
      'Reward Points Club & Affiliate (积分商城兑换 + 老带新裂变分销)',
      'Twilio SMS OTP 验证 + 全站 Noticeboard 定向弹窗公告'
    ],
    businessImpact: '开箱即用补齐作业批改、社群互动、银行转账与分销，省去数万美元自研成本。'
  },
  {
    id: 'mobile-app',
    name: 'Rocket LMS Mobile App',
    itemCode: 'CodeCanyon 36329581',
    type: 'Flutter 双端原生 App',
    techStack: 'Flutter (Dart) 跨平台源码 · iOS (App Store) + Android (Google Play)',
    keyFeatures: [
      '离线下载与缓存 (WiFi 环境一键离线视频与课件，无网也能看)',
      '移动端 Zoom 直播直接唤起 (手机沉浸式参与线上课堂)',
      'Firebase Cloud Messaging 智能 Push (开课前15分钟弹窗提醒，拉升到课率)',
      '手机端 Quiz 刷题与拍照交作业 (手机拍照直接上传手写作业)',
      '多语言无缝切换 (中文简繁 / 英文 / 马来文 BM)',
      '完全品牌去第三方化 (替换 Top Scholar VI、Logo 与开屏动画)'
    ],
    businessImpact: '专属独立品牌 App，极大提升家长信任感与到课率，学员体验质的飞跃。'
  }
];

export interface RoleArchitectureItem {
  name: string;
  level: string;
  tag: string;
  scope: string;
  permissions: string[];
  topScholarScenario: string;
}

export const ROLES_ARCHITECTURE: RoleArchitectureItem[] = [
  {
    name: '1. Super Admin (超级管理员)',
    level: '最高系统级',
    tag: '👑 全局控制',
    scope: '系统技术底座、域名、Zoom OAuth 凭证、SMS/邮件通道、全站财务对账',
    permissions: ['全局系统配置', '支付网关与对账', '自定义 Staff 菜单权限', '全平台总报表监控'],
    topScholarScenario: 'Elson 与公司高层使用，掌控全平台安全与基础设施底层。'
  },
  {
    name: '2. Staff (内部员工 / 教务 / 助教)',
    level: '运营协同级',
    tag: '💼 细粒度分权',
    scope: '日常教务运营、排课、助教批改查看、回复工单，无法接触系统底层与支付配置',
    permissions: ['教务排课与班级管理', '助教答疑与工单回复', '教材课件上传', '受限数据查看'],
    topScholarScenario: '按岗位分配指定菜单（如教务专员只排课，助教只看作业与答疑）。'
  },
  {
    name: '3. Organization (机构 / 分校 / 事业部)',
    level: '多租户二级管理 ⭐',
    tag: '🏢 虚拟分校',
    scope: '拥有独立的专属讲师与专属学员群体，可独立对内排课、批量报名与查看独立营收',
    permissions: ['管理本机构专属老师', '管理本机构专属学生', '开办机构专属课程', '独立结算与完课报表'],
    topScholarScenario: '支持按「小学部 / 中学部 / 特训营」数据隔离，或作为未来 B2B 合作分校入驻平台！'
  },
  {
    name: '4. Instructor (主讲讲师)',
    level: '教学交付级',
    tag: '👨‍🏫 教学中心',
    scope: '录播课程创作、Zoom 直播排课、创建题库、批阅学员作业、处理 1 对 1 答疑预约',
    permissions: ['创建章节与课件', '配置 Drip 防刷课规则', '批改 Assignments 作业', '管理课程论坛答疑'],
    topScholarScenario: '名师与签约讲师专属教学工作台，聚焦课程交付与作业互动。'
  },
  {
    name: '5. Student (学员 / 家长端)',
    level: '终端学习级',
    tag: '🎓 学习体验',
    scope: '观看课程回放、离线下载、手机一键进 Zoom、完成 Quiz 测验、手机拍照上传作业、拿证书',
    permissions: ['点播回放与倍速播放', '离线视频缓存', '提交测验与作业', '获取防伪 QR 证书'],
    topScholarScenario: '8,000+ 学员与家长日常学习的主阵地，享受流畅双端体验。'
  }
];

export interface ApiRateItem {
  model: string;
  provider: string;
  inputPrice: string;
  outputPrice: string;
  cachePrice: string;
  roleInHermes: string;
  highlight: string;
}

export const API_RATES_DATA: ApiRateItem[] = [
  {
    model: 'DeepSeek-V4-Flash',
    provider: 'DeepSeek 官方 API',
    inputPrice: '$0.22 (非高峰) / $0.44 (高峰)',
    outputPrice: '$0.66 (非高峰) / $1.32 (高峰)',
    cachePrice: '$0.007 ~ $0.014 (命中)',
    roleInHermes: '⭐ 主力底座：日常海量文本清洗、意图识别、路由分发',
    highlight: '非高峰期享 50% 离峰优惠，充值 $20 极度耐用，支持 1M 超大上下文'
  },
  {
    model: 'DeepSeek-V4-Pro',
    provider: 'DeepSeek 官方 API',
    inputPrice: '$0.66 (非高峰) / $1.32 (高峰)',
    outputPrice: '$1.98 (非高峰) / $3.96 (高峰)',
    cachePrice: '$0.022 ~ $0.044 (命中)',
    roleInHermes: '深度推理：复杂数学与规则校验、SOP 逻辑自洽推演',
    highlight: '强推理模式，Token 按 Output 计费，非高峰期同样半价'
  },
  {
    model: 'Claude Opus 5',
    provider: 'Anthropic 官方 API',
    inputPrice: '$5.00 / 1M tokens',
    outputPrice: '$25.00 / 1M tokens',
    cachePrice: '$0.50 (Cache Read)',
    roleInHermes: '👑 战略大脑：复杂架构设计、代码深度重构、高层战略报告',
    highlight: '业界顶级智商模型，高价值决策首选'
  },
  {
    model: 'Claude Sonnet 5',
    provider: 'Anthropic 官方 API',
    inputPrice: '$2.00 / 1M tokens',
    outputPrice: '$10.00 / 1M tokens',
    cachePrice: '$0.20 (Cache Read)',
    roleInHermes: '🛠️ 主力工程：系统开发、自动化脚本编写、复杂 Agent 工具链',
    highlight: '相比前代大幅降价，速度与推理能力极致均衡'
  },
  {
    model: 'Claude Haiku 4.5',
    provider: 'Anthropic 官方 API',
    inputPrice: '$1.00 / 1M tokens',
    outputPrice: '$5.00 / 1M tokens',
    cachePrice: '$0.10 (Cache Read)',
    roleInHermes: '轻量响应：客服工单初筛、极速摘要、高并发分类',
    highlight: '毫秒级极速响应，极低成本'
  },
  {
    model: 'Gemini 3.7 Flash',
    provider: 'Google Cloud / AI Studio',
    inputPrice: '$0.75 / 1M tokens (首发优惠)',
    outputPrice: '$3.75 / 1M tokens (首发优惠)',
    cachePrice: '$0.075 (Context Cache)',
    roleInHermes: '⚡ 极速多模态：整本 PDF 教材瞬间总结、视频图文长文本分析',
    highlight: '支持 Batch 批处理再减 50%，多模态长文本之王'
  },
  {
    model: 'Muse Spark (Meta API)',
    provider: 'Meta Model API',
    inputPrice: '$1.25 (标准) / $0.10 (贡献者)',
    outputPrice: '$4.25 (标准) / $0.20 (贡献者)',
    cachePrice: '$0.002 ~ $0.15 (命中)',
    roleInHermes: '🎯 营销创意：FB 广告标题 A/B 测试、多矩阵社媒文案批量生成',
    highlight: '新账号赠送 $20 免费额度，绑定 Meta 公司卡'
  }
];

export interface DecisionItem {
  id: string;
  num: string;
  title: string;
  category: string;
  urgency: 'P0 紧急阻塞' | 'P1 核心决策' | 'P2 推进共识';
  description: string;
  actionRequirement: string;
  cost: string;
}

export const DECISIONS_LIST: DecisionItem[] = [
  {
    id: 'dec-1',
    num: '决策 01',
    title: '知识库各部门对接人与共创会排期',
    category: '组织协同',
    urgency: 'P1 核心决策',
    description: '确认 00~06 对应板块负责人（营销 Ying Lin、销售与 CS Becky 等），排期 30min 共创会。',
    actionRequirement: '确立 8/20–8/30 现有 PDF/PPT SOP 结构化导入与 UTM v1 发布节奏。',
    cost: '0 额外费用'
  },
  {
    id: 'dec-2',
    num: '决策 02',
    title: 'iMac 主控机管理员密码交付 (⚠️ P0 紧急阻塞)',
    category: '硬件环境',
    urgency: 'P0 紧急阻塞',
    description: '现有主控 iMac (`topscholar operation`) 缺失管理员密码，导致本地无法安装 Docker/Node。',
    actionRequirement: '会议现场交付 Sudo 密码或安排现场重置权限，打通本地开发与备份主节点。',
    cost: '0 额外费用'
  },
  {
    id: 'dec-3',
    num: '决策 03',
    title: 'Codecanyon LMS 三大核心包采购批准',
    category: '平台采购',
    urgency: 'P1 核心决策',
    description: '采购 Rocket LMS Core + Plugins Bundle (40+ 插件) + Flutter Mobile App (iOS/Android)。',
    actionRequirement: '官方判定：自营课程购买 Regular License 100% 合规，一次性买断，节省数百美元。',
    cost: '一次性采购买断 (无月费)'
  },
  {
    id: 'dec-4',
    num: '决策 04',
    title: '部署路线确认 (Phase 1 本地+Tailscale)',
    category: '运维策略',
    urgency: 'P2 推进共识',
    description: '前期开发阶段采用「本地开发机 + Tailscale 虚拟组网」，避免云端 VPS 闲置成本。',
    actionRequirement: '待系统二次开发与测试完成、正式对外部学员开放时，再平滑迁移至云端 VPS。',
    cost: '前期 0 元云成本'
  },
  {
    id: 'dec-5',
    num: '决策 05',
    title: 'AI 订阅矩阵开通与企业共用账号创建',
    category: 'AI 工具链',
    urgency: 'P1 核心决策',
    description: '创建统一服务邮箱（如 ai-admin@...），开通 Claude Pro + Agnes + DeepSeek 预充值。',
    actionRequirement: '建立统一账密，启动 Hermes Telegram 机器人及部门专属场景试点。',
    cost: '月度固定仅约 $24 /月'
  }
];
