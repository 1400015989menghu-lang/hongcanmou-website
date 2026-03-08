import type { Metadata } from "next";
import { ArrowUpRight, CheckCheck } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const plans = [
  {
    name: "试用版",
    price: "免费",
    note: "7 天体验",
    description: "适合刚开始搭建选题与对标流程的个人创作者。",
    features: ["关键词趋势浏览", "基础达人监控", "评论洞察样例", "人工开通支持"],
  },
  {
    name: "专业版",
    price: "299",
    note: "元 / 月",
    description: "适合稳定更新、需要长期复盘的个人账号和小团队。",
    features: ["完整趋势看板", "对标账号库", "选题灵感推荐", "周度复盘摘要"],
    highlighted: true,
  },
  {
    name: "团队版",
    price: "1299",
    note: "元 / 月起",
    description: "适合品牌内容团队、代运营团队和多账号协作场景。",
    features: ["多成员协作", "客户/赛道分组", "专项报告支持", "接入顾问服务"],
  },
];

const faqItems = [
  "试用版不要求信用卡，开通后即可体验核心看板和样例数据。",
  "专业版支持月付，团队版支持按季度或年度签约。",
  "如果你需要定制行业词包、账号名单或 onboarding，可直接联系顾问处理。",
];

export const metadata: Metadata = {
  title: "价格方案 | 红参谋",
  description: "查看红参谋面向个人创作者、内容团队和品牌方的数据增长方案与试用价格。",
};

export default function PricingPage() {
  return (
    <section className="pb-16 pt-28 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-10 shadow-sm sm:px-10 lg:px-14 lg:py-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-primary)]">
            PRICING
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            从试用到团队协作，按你现在的增长阶段选即可
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            我们把方案控制得比较简单：先让你快速跑通，再决定是否进入长期使用和团队协作。
            所有版本都以同一个控制台为核心，不需要反复迁移工作方式。
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-sm ${
                plan.highlighted
                  ? "border-[var(--color-primary)] bg-[var(--color-bg-card)]"
                  : "border-[var(--color-border)] bg-[var(--color-bg-card)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--color-text)]">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {plan.description}
                  </p>
                </div>
                {plan.highlighted && (
                  <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                    推荐
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-bold text-[var(--color-text)]">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-[var(--color-text-secondary)]">
                  {plan.note}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-[var(--color-text-secondary)]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCheck
                      size={16}
                      className="mt-1 shrink-0 text-[var(--color-primary)]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.consoleUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                    : "bg-[var(--color-bg-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10"
                }`}
              >
                立即咨询或开通
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              购买前你可以先确认这三件事
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-secondary)]">
              <li>你现在最缺的是趋势发现、对标拆解，还是选题复盘。</li>
              <li>是个人使用，还是需要团队共同维护词包、账号池和周报。</li>
              <li>是否需要顾问协助你搭建行业词包和第一版监控名单。</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              常见问题
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-secondary)]">
              {faqItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
