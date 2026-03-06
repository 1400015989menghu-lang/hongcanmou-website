"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, MessageSquare, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { featuresData } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  MessageSquare,
  Lightbulb,
};

export default function FeaturesSection() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            全链路内容增长方案
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] max-w-xl mx-auto">
            从爆文灵感发现到分发转化，红参谋为您提供每一个阶段的数据支撑。
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative p-6 bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-secondary)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs text-[var(--color-primary)] bg-[var(--color-primary)]/5 px-2.5 py-1 rounded-full"
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
