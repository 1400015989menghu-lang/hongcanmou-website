import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

type SupportSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type SupportPageTemplateProps = {
  title: string;
  description: string;
  highlights: string[];
  sections: SupportSection[];
  updatedAt?: string;
};

export default function SupportPageTemplate({
  title,
  description,
  highlights,
  sections,
  updatedAt,
}: SupportPageTemplateProps) {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 shadow-sm sm:p-10">
          {updatedAt && (
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              最后更新：{updatedAt}
            </p>
          )}
          <h1 className="text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
            {description}
          </p>

          <div className="mt-8 rounded-2xl bg-[var(--color-bg-secondary)] p-6">
            <h2 className="text-sm font-semibold tracking-wide text-[var(--color-text)]">
              当前可获取内容
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-text-secondary)]">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
              >
                <h2 className="text-lg font-semibold text-[var(--color-text)]">
                  {section.title}
                </h2>
                {section.paragraphs && (
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.bullets && (
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-[var(--color-border)] p-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)]">商务咨询</p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                电话：{siteConfig.contact.phone}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                邮箱：{siteConfig.contact.email}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                微信：{siteConfig.contact.wechat.name}（{siteConfig.contact.wechat.location}）
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)]">立即体验</p>
              <a
                href={siteConfig.consoleUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
              >
                进入红参谋控制台
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
            >
              <ArrowLeft size={16} />
              返回首页
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            >
              查看产品功能
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
