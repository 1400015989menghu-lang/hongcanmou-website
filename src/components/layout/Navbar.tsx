"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

const subscribe = () => () => {};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-nav-bg)] backdrop-blur-xl shadow-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">红</span>
            </div>
            <span className="text-lg font-bold text-[var(--color-text)]">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-[var(--color-bg-secondary)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-[var(--color-text-secondary)]" />
                ) : (
                  <Moon size={18} className="text-[var(--color-text-secondary)]" />
                )}
              </button>
            )}
            <a
              href={siteConfig.consoleUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              登录
            </a>
            <a
              href={siteConfig.consoleUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-full transition-colors duration-200"
            >
              免费开始
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} className="text-[var(--color-text)]" />
            ) : (
              <Menu size={22} className="text-[var(--color-text)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="min-h-full bg-[var(--color-bg)] px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border)]">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full hover:bg-[var(--color-bg-secondary)]"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                )}
                <a
                  href={siteConfig.consoleUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[var(--color-text-secondary)]"
                >
                  登录
                </a>
                <a
                  href={siteConfig.consoleUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="ml-auto px-5 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full"
                >
                  免费开始
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
