"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showQr, setShowQr] = useState(true);

  return (
    <footer className="bg-[var(--color-footer-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
                <span className="text-sm font-bold text-white">红</span>
              </div>
              <span className="text-lg font-bold text-[var(--color-text)]">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--color-text-secondary)]">
              专注于为社交媒体创作者提供专业的数据分析与 AI 灵感，助力每一位创作者实现爆发式增长。
            </p>
            <div className="mt-6 space-y-2 text-sm text-[var(--color-text-muted)]">
              <p>工作日 9:00 - 18:00 提供顾问支持。</p>
              <p>优先通过电话或邮件联系，获取产品咨询与接入协助。</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--color-text)]">
              {footerLinks.product.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--color-text)]">
              {footerLinks.support.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--color-text)]">
              {footerLinks.contact.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <Phone size={14} />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <Mail size={14} />
                {siteConfig.contact.email}
              </li>
            </ul>
            <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
              <div className="mb-3">
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  微信咨询
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {siteConfig.contact.wechat.name} · {siteConfig.contact.wechat.location}
                </p>
              </div>
              {showQr ? (
                <Image
                  src={siteConfig.contact.wechat.qrImage}
                  alt={`${siteConfig.contact.wechat.name} 微信二维码`}
                  width={240}
                  height={240}
                  className="h-auto w-full rounded-xl border border-[var(--color-border)] bg-white object-cover"
                  onError={() => setShowQr(false)}
                />
              ) : (
                <div className="rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-8 text-center text-sm leading-6 text-[var(--color-text-secondary)]">
                  二维码图片待补充，请先通过电话或邮箱预约沟通。
                </div>
              )}
              <p className="mt-3 text-xs leading-5 text-[var(--color-text-muted)]">
                {siteConfig.contact.wechat.note}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {currentYear} {siteConfig.name} {siteConfig.nameEn}. 保留所有权利。
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {siteConfig.icp}
          </p>
        </div>
      </div>
    </footer>
  );
}
