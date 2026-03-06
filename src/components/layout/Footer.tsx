"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">红</span>
              </div>
              <span className="text-lg font-bold text-[var(--color-text)]">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              专注于为社交媒体创作者提供专业的数据分析与AI灵感，助力每一位创作者实现爆发式增长。
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M15.232 11.232L20 4" />
                </svg>
              </a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              {footerLinks.product.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              {footerLinks.support.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
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
              <li className="mt-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-2">微信公众号</p>
                <div className="w-20 h-20 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg flex items-center justify-center">
                  <span className="text-xs text-[var(--color-text-muted)]">QR</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; 2024 {siteConfig.name} {siteConfig.nameEn}. 保留所有权力。
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {siteConfig.icp}
          </p>
        </div>
      </div>
    </footer>
  );
}
