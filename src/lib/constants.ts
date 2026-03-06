export const siteConfig = {
  name: "红参谋",
  nameEn: "Hong San Mou",
  description: "AI 驱动的小红书全链路数据增长引擎",
  url: "https://hongsanmou.com",
  consoleUrl: "https://console.hongsanmou.com",
  contact: {
    phone: "400-123-4567",
    email: "bd@hongsanmou.com",
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
  { value: 10000, suffix: "+", label: "活跃创作者" },
  { value: 5000, suffix: "万+", label: "日均数据处理量" },
  { value: 20, suffix: "万+", label: "监控热门帐号" },
  { value: 98.5, suffix: "%", label: "数据更新及时率", decimals: 1 },
];

export const featuresData = [
  {
    icon: "TrendingUp",
    title: "关键词情报",
    description: "实时监控领域趋评，捕获方量级风口，让你的笔记自带搜索流量。",
    tags: ["趋势定向分析", "热点话题追踪"],
  },
  {
    icon: "Users",
    title: "达号监控",
    description: "深度拆解对标达人，学习爆款策略、关注达人动态、追踪行业风向。",
    tags: ["洞悉数据运动", "爆款数据生态"],
  },
  {
    icon: "MessageSquare",
    title: "评论洞察",
    description: "通过AI分析用户评论，挖掘来宝贵商业洞察，优化笔记互动表现。",
    tags: ["评论智能生成", "情绪粒度分析"],
  },
  {
    icon: "Lightbulb",
    title: "选题灵感库",
    description: "千亿级爆款素材库，分行业智能推荐，根据数据产出创作焦点。",
    tags: ["产业化管理", "一键爆款选题"],
  },
];

export const trustBrands = [
  { icon: "Sparkles", label: "知名美妆品牌" },
  { icon: "Crown", label: "头部新锐品牌" },
  { icon: "Shield", label: "护肤将军企业" },
  { icon: "Heart", label: "国民彩妆品牌" },
  { icon: "Award", label: "顶级护肤集团" },
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
      { label: "帮助中心", href: "#" },
      { label: "API 文档", href: "#" },
      { label: "隐私政策", href: "#" },
      { label: "服务条款", href: "#" },
    ],
  },
  contact: {
    title: "联系我们",
  },
};
