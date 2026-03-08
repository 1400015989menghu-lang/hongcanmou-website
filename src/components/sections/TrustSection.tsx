"use client";

import { motion } from "framer-motion";
import { Sparkles, Crown, Shield, Heart, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trustBrands } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Crown,
  Shield,
  Heart,
  Award,
};

export default function TrustSection() {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-12 lg:py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-[var(--color-text-muted)] mb-8"
        >
          服务对象覆盖美妆、个护、母婴、零食、服饰与本地生活等内容团队
        </motion.p>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-6 lg:gap-10"
        >
          {trustBrands.map((brand, i) => {
            const Icon = iconMap[brand.icon];
            return (
              <motion.div
                key={brand.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-200"
              >
                <Icon size={16} />
                <span className="text-sm whitespace-nowrap">{brand.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
