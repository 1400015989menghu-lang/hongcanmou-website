import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const caseStudies = [
  {
    title: "护肤新品牌内容组",
    challenge: "每周都在追热点，但话题分散，难以形成稳定的选题库。",
    result: "连续 4 周输出固定栏目后，单周高互动笔记从 2 篇提升到 6 篇。",
    details: [
      "先梳理 30 个行业关键词和 20 个对标账号，建立固定观察面板。",
      "根据评论高频问题反推功效表达，减少空泛种草文案。",
      "把爆文切口沉淀成每周例会模板，降低团队重复沟通成本。",
    ],
  },
  {
    title: "母婴主理人账号",
    challenge: "更新频率不低，但内容命中用户真实问题的比例偏低。",
    result: "围绕评论需求做选题后，账号 30 天收藏率提升约 31%。",
    details: [
      "从评论区筛出“成分、安全、使用场景”三类高频问题。",
      "把对标账号爆文拆成开头钩子、体验段和结尾转化段三部分。",
      "每周只保留 3 个重点主题，优先做可复用、可对比的内容。",
    ],
  },
  {
    title: "零食电商投放团队",
    challenge: "达人合作素材很多，但很难迅速判断哪些表达更适合继续放大。",
    result: "通过评论洞察和对标复盘，二次投放素材的点击率提升约 23%。",
    details: [
      "按口味、价格带、场景三个维度重组素材标签。",
      "把高互动评论中的真实表达直接反哺到封面和标题文案。",
      "每周复盘一次高表现达人内容，沉淀成下一批投放素材标准。",
    ],
  },
];

export const metadata: Metadata = {
  title: "客户案例 | 红参谋",
  description: "查看红参谋如何帮助品牌内容团队和创作者建立趋势追踪、选题和复盘方法。",
};

export default function CasesPage() {
  return (
    <section className="pb-16 pt-28 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-10 shadow-sm sm:px-10 lg:px-14 lg:py-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-primary)]">
            CASE STUDIES
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            我们更关心案例背后的方法，而不是堆一串漂亮数字
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            以下内容整理自近期服务场景，做了行业归类和身份匿名。重点不是“神奇增长”，而是展示红参谋如何帮助团队把选题、监控和复盘做得更稳定。
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm font-semibold text-[var(--color-primary)]">
                    核心挑战
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {item.challenge}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[var(--color-primary)]">
                    结果变化
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {item.result}
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--color-bg-secondary)] p-5">
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    我们具体怎么做
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">
            适合怎样的合作方式
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[var(--color-bg-secondary)] p-5 text-sm leading-7 text-[var(--color-text-secondary)]">
              新品牌或新账号：先把赛道关键词和对标池搭起来。
            </div>
            <div className="rounded-2xl bg-[var(--color-bg-secondary)] p-5 text-sm leading-7 text-[var(--color-text-secondary)]">
              稳定更新团队：把日常观察、复盘和周报沉淀成标准动作。
            </div>
            <div className="rounded-2xl bg-[var(--color-bg-secondary)] p-5 text-sm leading-7 text-[var(--color-text-secondary)]">
              代运营团队：把方法复制到多个客户和多个行业里。
            </div>
          </div>
          <a
            href={siteConfig.consoleUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            预约演示或体验
            <ArrowUpRight size={16} />
          </a>
        </section>
      </div>
    </section>
  );
}
