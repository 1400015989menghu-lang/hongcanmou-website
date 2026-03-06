import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "红参谋 - AI驱动的小红书全链路数据增长引擎",
  description:
    "实时追踪小红书趋势分析，爆文短视频全透视。红参谋助力10,000+创作者精准捕捉流量，让每一篇笔记都有据可依。",
  keywords: "红参谋,小红书,数据分析,爆款,内容创作,AI,关键词,达人监控",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
