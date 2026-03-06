"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection() {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--color-cta-gradient-from)] to-[var(--color-cta-gradient-to)] animate-gradient px-6 py-14 sm:px-12 sm:py-20 text-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            >
              准备好提升你的创作效率了吗？
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-sm sm:text-base text-white/80 max-w-lg mx-auto"
            >
              现在加入红参谋，获为 7 天高级会员试用，助力你的第一篇 10w+ 笔记！
            </motion.p>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="text"
                placeholder="输入你的邮箱/手机号"
                className="w-full sm:flex-1 px-5 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 focus:bg-white/25 transition-all text-sm"
              />
              <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-[var(--color-primary)] font-semibold text-sm hover:bg-white/90 transition-colors duration-200 whitespace-nowrap">
                免费试用
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
