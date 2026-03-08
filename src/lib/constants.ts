export const siteConfig = {
  name: "红参谋",
  nameEn: "Hong San Mou",
  description: "AI 驱动的小红书全链路数据增长引擎",
  url: "https://hongsanmou.com",
  consoleUrl: "https://console.hongsanmou.com",
  contact: {
    phone: "18611169871",
    email: "menghuxiang@163.com",
    wechat: {
      name: "孟虎",
      location: "北京 海淀",
      note: "扫一扫上面的二维码图案，加我为朋友。",
      qrImage: "/images/wechat-contact.jpg",
    },
  },
  icp: "ICP备 2022000008号-1",
};

export const navLinks = [
  { label: "首页", href: "/" },
  { label: "功能介绍", href: "/features" },
  { label: "价格方案", href: "/pricing" },
  { label: "客户案例", href: "/cases" },
  { label: "关于我们", href: "/about" },
];

export const statsData = [
  { value: 326, suffix: "+", label: "开通试用账号" },
  { value: 128, suffix: "万+", label: "近 30 天追踪笔记" },
  { value: 8600, suffix: "+", label: "监测关键词" },
  { value: 96.4, suffix: "%", label: "热点识别覆盖率", decimals: 1 },
];

export const featuresData = [
  {
    icon: "TrendingUp",
    title: "关键词情报",
    description: "实时监控领域趋势，捕捉流量风口，让你的笔记自带搜索流量。",
    tags: ["趋势定向分析", "热点话题追踪"],
  },
  {
    icon: "Users",
    title: "达人监控",
    description: "深度拆解对标达人，学习爆款策略、关注达人动态、追踪行业风向。",
    tags: ["洞悉数据动态", "爆款生态追踪"],
  },
  {
    icon: "MessageSquare",
    title: "评论洞察",
    description: "通过 AI 分析用户评论，挖掘宝贵商业洞察，优化笔记互动表现。",
    tags: ["评论智能生成", "情绪粒度分析"],
  },
  {
    icon: "Lightbulb",
    title: "选题灵感库",
    description: "千亿级爆款素材库，分行业智能推荐，结合数据生成创作方向。",
    tags: ["灵感资产管理", "一键生成选题"],
  },
];

export const trustBrands = [
  { icon: "Sparkles", label: "美妆个护" },
  { icon: "Crown", label: "母婴亲子" },
  { icon: "Shield", label: "食品饮料" },
  { icon: "Heart", label: "服饰穿搭" },
  { icon: "Award", label: "本地生活" },
];

export const footerLinks = {
  product: {
    title: "产品功能",
    links: [
      { label: "笔记搜索", href: "/features" },
      { label: "达人排行榜", href: "/features" },
      { label: "关键词数据", href: "/features" },
      { label: "数据看板", href: "/features" },
    ],
  },
  support: {
    title: "支持与服务",
    links: [
      { label: "帮助中心", href: "/help" },
      { label: "API 文档", href: "/api-docs" },
      { label: "隐私政策", href: "/privacy" },
      { label: "服务条款", href: "/terms" },
    ],
  },
  contact: {
    title: "联系我们",
  },
};
