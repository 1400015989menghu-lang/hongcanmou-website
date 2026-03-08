# 红参谋官网

红参谋官网是一个基于 `Next.js 16 + React 19 + Tailwind CSS 4` 构建的营销站点，面向小红书内容团队、创作者和品牌方，展示红参谋的产品能力、价格方案、客户案例、帮助支持与法务说明。

仓库地址：

- GitHub: `https://github.com/1400015989menghu-lang/hongcanmou-website`

## 项目内容

当前站点已包含以下公开页面：

1. 首页 `/`
2. 功能介绍 `/features`
3. 价格方案 `/pricing`
4. 客户案例 `/cases`
5. 关于我们 `/about`
6. 帮助中心 `/help`
7. API 文档 `/api-docs`
8. 隐私政策 `/privacy`
9. 服务条款 `/terms`

站点当前已接入以下联系信息：

- 电话：`18611169871`
- 邮箱：`menghuxiang@163.com`
- 微信联系人：`孟虎`
- 微信二维码资源：`public/images/wechat-contact.jpg`

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- lucide-react
- next-themes

## 本地运行

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

生产构建：

```bash
npm run build
```

本地启动生产环境：

```bash
npm run start
```

代码检查：

```bash
npm run lint
```

默认访问地址：

- 开发环境：`http://127.0.0.1:3000`

## 关键配置

站点核心配置位于：

- `src/lib/constants.ts`

其中包含：

- 站点名称与说明
- 统一 CTA 跳转地址 `siteConfig.consoleUrl`
- 联系方式与微信二维码路径
- 首页统计数据
- 功能模块文案
- Footer 导航配置

当前统一 CTA 跳转地址为：

- `https://console.hongsanmou.com`

## 目录说明

```text
src/
  app/                  路由页面
  components/           布局、首页模块、支持页模板
  hooks/                页面动画和数字滚动 hooks
  lib/                  站点常量配置

public/images/          官网静态图片资源
output/playwright/      验收截图产物
```

## 验收材料

仓库已包含本次验收相关材料：

- 验收说明文档：`ACCEPTANCE_REPORT.md`
- 页面截图目录：`output/playwright/`

截图包括：

- 9 个公开页面的桌面端全页截图
- 首页移动端截图
- 首页移动端菜单截图

## 当前状态

当前版本已完成：

1. 首页与公开页面内容补全
2. 联系方式与微信二维码接入
3. 帮助中心、API 文档、隐私政策、服务条款页面上线
4. 移动端导航、主题切换和 CTA 跳转修正
5. 逐页验收与截图留档

## 备注

- 本仓库中的验收截图用于页面复核与交付留档。
- 外部控制台链接是否可访问，取决于 `console.hongsanmou.com` 的独立运行状态，不属于本仓库前端代码本身的构建阻塞项。
