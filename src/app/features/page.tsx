import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, Radar, Search, Sparkles, Users } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const capabilityCards = [
  {
    title: "趋势雷达",
    description: "追踪行业关键词、搜索热度和相关话题变化，帮助你比内容市场更早看到苗头。",
    points: ["热点词聚合", "搜索意图观察", "赛道变化提醒"],
    icon: Radar,
  },
  {
    title: "对标账号库",
    description: "按行业沉淀长期观察名单，持续记录内容节奏、互动表现和爆文切口。",
    points: ["达人分层追踪", "内容拆解面板", "高表现笔记归档"],
    icon: Users,
  },
  {
    title: "评论洞察",
    description: "从真实评论里提炼购买动机、常见疑问和用户表达，反哺选题与转化表达。",
    points: ["情绪分层", "高频需求抽取", "评论摘要生成"],
    icon: Search,
  },
  {
    title: "灵感生成",
    description: "把趋势、竞品和评论数据串起来，快速沉淀下一周可执行的选题清单。",
    points: ["选题推荐", "标题角度建议", "复盘摘要输出"],
    icon: Sparkles,
  },
];

const workflowSteps = [
  {
    title: "发现趋势",
    description: "每天打开控制台先看赛道波动、热门关键词和新冒头的话题。",
  },
  {
    title: "拆解样本",
    description: "围绕对标账号和高表现笔记拆出结构、开头、评论共鸣点和转化句式。",
  },
  {
    title: "生成选题",
    description: "结合趋势词和评论需求，筛出最适合自己账号阶段的 3 到 5 个方向。",
  },
  {
    title: "复盘迭代",
    description: "发布后回看数据，把表现好的框架沉淀成下次可重复调用的模板。",
  },
];

const audiences = [
  "个人创作者：快速形成自己的内容雷达和周更计划。",
  "品牌内容团队：沉淀品类趋势、竞争对手动向和评论需求池。",
  "代运营与 MCN：把分散的观察动作变成可复制、可培训的日常流程。",
];

export const metadata: Metadata = {
  title: "功能介绍 | 红参谋",
  description: "了解红参谋如何用趋势、达人、评论和选题能力，帮助内容团队建立稳定增长流程。",
};

export default function FeaturesPage() {
  return (
    <section className="pb-16 pt-28 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-10 shadow-sm sm:px-10 lg:px-14 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-primary)]">
              PRODUCT CAPABILITIES
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
              为小红书增长团队准备的一套数据操作台
            </h1>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              红参谋不是单个报表，而是一套围绕选题、拆解、跟踪和复盘展开的工作流。
              你可以用它判断什么值得做、为什么会爆，以及下一篇该怎么更稳地做出来。
            </p>
            <a
              href={siteConfig.consoleUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              进入控制台体验
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {capabilityCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-bg-secondary)] text-[var(--color-primary)]">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {card.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-1 shrink-0 text-[var(--color-primary)]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              推荐使用流程
            </h2>
            <div className="mt-6 space-y-5">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-[var(--color-text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              适合谁使用
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-secondary)]">
              {audiences.map((audience) => (
                <li key={audience} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-[var(--color-bg-secondary)] p-5">
              <p className="text-sm font-semibold text-[var(--color-text)]">上线建议</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                如果你现在还没有成体系的数据方法，建议先从 7 天试用版开始，把一周内容节奏和对标池先跑顺，再决定是否扩展到团队协作。
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
