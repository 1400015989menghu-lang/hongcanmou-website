"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-8 lg:pt-36 lg:pb-16 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-[0.04] rounded-full blur-3xl" />
        <div className="absolute top-20 -left-20 w-[300px] h-[300px] bg-[var(--color-primary-light)] opacity-[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-primary)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            AI 驱动的小红书全链路增长引擎
          </span>
        </motion.div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            <span className="text-[var(--color-text)]">用数据 </span>
            <span className="text-[var(--color-primary)]">重定义</span>
            <br />
            <span className="text-[var(--color-text)]">爆款内容创作</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto"
          >
            实时追踪小红书趋势分析、对标账号和评论动向。红参谋已帮助 300+
            创作者与品牌团队搭建选题、拆解和复盘流程，让每一篇笔记都更接近可复制的增长结果。
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <a
              href={siteConfig.consoleUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 hover:-translate-y-0.5"
            >
              立马免费开始
              <Rocket size={18} />
            </a>
          </motion.div>
        </div>

        {/* Product Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 50 }}
          className="mt-12 lg:mt-16 max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Dashboard Screenshot (includes browser chrome from Figma) */}
            <div className="rounded-xl lg:rounded-2xl shadow-2xl shadow-black/8 dark:shadow-black/30 overflow-hidden border border-[var(--color-border)]">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/dashboard-v2.png"
                  alt="红参谋数据看板"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent rounded-3xl -z-10 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
