"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)]">
            价格方案
          </h1>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            灵活的定价方案，满足不同规模创作者与品牌的需求。
          </p>
          <div className="mt-12 p-12 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <p className="text-[var(--color-text-muted)]">页面建设中...</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-8 text-sm text-[var(--color-primary)] hover:underline"
          >
            <ArrowLeft size={16} />
            返回首页
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
