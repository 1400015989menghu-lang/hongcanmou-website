"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { statsData } from "@/lib/constants";

function StatItem({
  value,
  suffix,
  label,
  decimals = 0,
  isInView,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  isInView: boolean;
  index: number;
}) {
  const count = useCountUp(value, isInView, 2000, decimals);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)]">
        {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
        <span className="text-2xl sm:text-3xl lg:text-4xl">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsData.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals}
              isInView={isInView}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
