import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const principles = [
  {
    title: "少一点数据堆砌，多一点可执行结论",
    description: "我们更关注团队今天能不能因此改掉低效动作，而不是报表是否看起来很复杂。",
  },
  {
    title: "把增长经验沉淀成流程",
    description: "趋势观察、对标拆解、评论提炼、复盘总结，应该成为每天都能执行的固定动作。",
  },
  {
    title: "先解决真实的内容决策问题",
    description: "从“今天发什么”到“为什么这篇会爆”，红参谋希望让团队少一点拍脑袋，多一点依据。",
  },
];

const serviceFlow = [
  "了解你的行业、内容目标和目前的更新节奏。",
  "一起确定关键词池、对标账号池和首批观察维度。",
  "进入控制台跑一个完整的选题与复盘周期。",
  "根据结果决定是否继续扩展到团队版和顾问协作。",
];

export const metadata: Metadata = {
  title: "关于我们 | 红参谋",
  description: "了解红参谋的产品定位、服务方式以及我们如何帮助内容团队建立稳定增长流程。",
};

export default function AboutPage() {
  return (
    <section className="pb-16 pt-28 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-10 shadow-sm sm:px-10 lg:px-14 lg:py-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-primary)]">
            ABOUT HONG SAN MOU
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            我们想做的，是让小红书增长从“凭感觉”走向“可复盘”
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            红参谋面向的是认真做内容的团队。无论你是个人主理人、品牌内容组还是代运营团队，
            只要你希望把选题、对标和复盘做得更稳，红参谋就是为这一类工作流准备的。
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                {principle.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              我们目前提供的支持
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-secondary)]">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span>控制台试用开通和基础使用引导。</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span>行业关键词池、对标账号池和内容复盘思路建议。</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span>针对小团队的上手顾问支持和阶段性优化建议。</span>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              一个典型的合作流程
            </h2>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-secondary)]">
              {serviceFlow.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="mt-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">
            联系我们，看看红参谋是否适合你现在的阶段
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)]">
            如果你已经有稳定更新节奏，但还没有形成系统的数据观察和复盘方法，
            我们建议你先申请试用，再根据行业和团队情况决定是否继续合作。
          </p>
          <a
            href={siteConfig.consoleUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            进入控制台
            <ArrowUpRight size={16} />
          </a>
        </section>
      </div>
    </section>
  );
}
