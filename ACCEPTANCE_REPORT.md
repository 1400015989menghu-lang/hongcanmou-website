# 红参谋官网验收说明文档

## 1. 文档信息

- 项目名称：红参谋官网
- 仓库地址：`https://github.com/1400015989menghu-lang/hongcanmou-website`
- 验收日期：2026-03-08
- 验收环境：本地开发环境 `http://127.0.0.1:3000`
- 验收方式：真实浏览器逐页点验 + 截图留档 + 基线检查
- 验收结论：通过

## 2. 本次验收范围

本次验收覆盖以下 9 个公开页面：

1. 首页 `/`
2. 功能介绍 `/features`
3. 价格方案 `/pricing`
4. 客户案例 `/cases`
5. 关于我们 `/about`
6. 帮助中心 `/help`
7. API 文档 `/api-docs`
8. 隐私政策 `/privacy`
9. 服务条款 `/terms`

同时补充验收以下关键移动端场景：

1. 首页移动端首屏展示
2. 首页移动端菜单展开
3. 移动端菜单打开后的滚动锁行为
4. 移动端主题切换
5. 移动端菜单内跳转

## 3. 验收基线

### 3.1 基线检查命令

```bash
npm run lint
npm run build
curl -I http://127.0.0.1:3000
```

### 3.2 基线检查结果

- `npm run lint`：通过
- `npm run build`：通过
- `curl -I http://127.0.0.1:3000`：返回 `HTTP/1.1 200 OK`

### 3.3 页面一致性确认

- 全站 CTA 统一指向：`https://console.hongsanmou.com`
- 全站未发现 `href="#"` 死链接
- 全站未发现空 `href` 链接
- 页面主内容均非空白或占位状态
- 浏览器控制台未发现业务级错误

## 4. 关键验收点

### 4.1 首页

- Hero 区主标题、说明文案、主 CTA 正常显示
- 数据统计区滚动到位
- 功能模块区展示正常
- 服务对象区展示正常
- 底部 CTA 展示正常
- Footer 联系方式、邮箱、微信二维码可见

### 4.2 内容页

- `title` 与页面主标题 `h1` 正确
- 页面正文有完整内容，不是建设中占位
- CTA 指向统一
- 页面布局和层次正常

### 4.3 支持与法务页

- 帮助中心、API 文档、隐私政策、服务条款均可正常访问
- 文本内容完整，适合作为当前版本对外说明页
- 联系方式与返回入口正常

### 4.4 移动端

- 首页移动端首屏布局正常
- 菜单可正常展开
- 菜单展开后页面滚动被锁定
- 菜单中主题切换可用
- 菜单内点击页面链接后可正常跳转

## 5. 逐页验收结果

| 页面 | 路由 | 主要核验项 | 结果 | 备注 |
|---|---|---|---|---|
| 首页 | `/` | 标题、首屏、统计区、功能区、底部 CTA、Footer 联系方式和二维码 | 通过 | 首页完整可展示 |
| 功能介绍 | `/features` | `title/h1`、正文完整性、CTA、布局层次 | 通过 | 页面内容完整 |
| 价格方案 | `/pricing` | `title/h1`、套餐展示、CTA、正文完整性 | 通过 | 套餐卡片展示正常 |
| 客户案例 | `/cases` | `title/h1`、案例内容、CTA、正文完整性 | 通过 | 案例区块正常 |
| 关于我们 | `/about` | `title/h1`、品牌说明、服务流程、CTA | 通过 | 介绍页正常 |
| 帮助中心 | `/help` | `title/h1`、帮助说明、联系方式、控制台入口 | 通过 | 可作为当前帮助页 |
| API 文档 | `/api-docs` | `title/h1`、对接说明、联系方式、控制台入口 | 通过 | 可作为当前接口说明页 |
| 隐私政策 | `/privacy` | `title/h1`、政策正文、联系方式、控制台入口 | 通过 | 可作为当前隐私说明页 |
| 服务条款 | `/terms` | `title/h1`、条款正文、联系方式、控制台入口 | 通过 | 可作为当前条款说明页 |
| 首页移动端 | `/` | 移动端首屏、按钮、主视觉 | 通过 | 见移动端截图 |
| 首页移动端菜单 | `/` | 菜单展开、滚动锁、主题切换、菜单内跳转 | 通过 | 行为正常 |

## 6. 截图证据

### 6.1 桌面端截图

1. 首页：[home-desktop.png](output/playwright/home-desktop.png)
2. 功能介绍：[features-desktop.png](output/playwright/features-desktop.png)
3. 价格方案：[pricing-desktop.png](output/playwright/pricing-desktop.png)
4. 客户案例：[cases-desktop.png](output/playwright/cases-desktop.png)
5. 关于我们：[about-desktop.png](output/playwright/about-desktop.png)
6. 帮助中心：[help-desktop.png](output/playwright/help-desktop.png)
7. API 文档：[api-docs-desktop.png](output/playwright/api-docs-desktop.png)
8. 隐私政策：[privacy-desktop.png](output/playwright/privacy-desktop.png)
9. 服务条款：[terms-desktop.png](output/playwright/terms-desktop.png)

### 6.2 移动端截图

1. 首页移动端首屏：[home-mobile.png](output/playwright/home-mobile.png)
2. 首页移动端菜单：[home-mobile-menu.png](output/playwright/home-mobile-menu.png)

## 7. 实测补充记录

### 7.1 联系方式

- 电话：`18611169871`
- 邮箱：`menghuxiang@163.com`
- 微信联系人：`孟虎`
- 微信地区：`北京 海淀`

### 7.2 首页统计区实测结果

- 开通试用账号：`326+`
- 近 30 天追踪笔记：`128万+`
- 监测关键词：`8,600+`
- 热点识别覆盖率：`96.4%`

### 7.3 外链策略

- 顶部导航 CTA、首页 CTA、内容页 CTA、帮助和法务页 CTA 均统一指向 `siteConfig.consoleUrl`
- 本次验收只验证仓库内链接一致性，不将外部站点 `console.hongsanmou.com` 的在线状态作为本仓库验收阻塞项

## 8. 已知提醒

以下为本次验收中记录到的提醒项，不影响当前验收通过结论：

1. 开发态控制台出现 Next.js 图片性能提示：
   - `/images/wechat-contact.jpg` 被识别为 LCP 图片
   - 建议后续如需继续优化性能，可评估是否对该图片增加 `loading="eager"`
2. 页面截图和验收均基于本地开发环境，不代表正式生产环境 CDN、证书、网关或第三方域名状态
3. 页面中的营销数字、案例和价格文案按当前已确认版本验收，不对外部真实性做二次核验

## 9. 最终结论

本次红参谋官网验收结果为：**通过**。

通过依据如下：

1. 9 个公开页面均可正常访问
2. 页面标题、主标题、正文、CTA、联系方式和二维码均正常展示
3. 全站无死链接、无空链接、无业务控制台错误
4. 移动端菜单、滚动锁、主题切换和菜单跳转均可正常工作
5. 验收截图已完整留档，可供复核

如后续进入上线前终验，建议补充两项：

1. 基于生产域名做一次最终联调验收
2. 对外部控制台链接做一次站外可达性确认
