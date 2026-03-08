import type { Metadata } from "next";
import SupportPageTemplate from "@/components/support/SupportPageTemplate";

export const metadata: Metadata = {
  title: "帮助中心 | 红参谋",
  description: "获取红参谋产品试用、演示预约和使用支持渠道。",
};

export default function HelpPage() {
  return (
    <SupportPageTemplate
      title="帮助中心"
      description="这里整理了红参谋当前最常用的开通、体验和支持信息。如果你正准备试用，建议先看开通流程和服务响应说明。"
      highlights={[
        "试用申请、产品开通和基础操作问题，可通过电话、邮箱或微信联系。",
        "建议先用试用版完成一次“趋势观察 - 选题 - 复盘”的完整流程。",
        "如需演示或 onboarding 支持，可预约一对一顾问讲解。",
      ]}
      sections={[
        {
          title: "如何开始试用",
          bullets: [
            "先通过页面 CTA 进入控制台，提交开通需求或直接与顾问联系。",
            "首次使用建议先建立一个行业关键词池，再添加 10 到 20 个对标账号。",
            "试用期内优先体验趋势雷达、对标拆解和评论洞察三块核心能力。",
          ],
        },
        {
          title: "常见支持场景",
          bullets: [
            "不知道应该监控哪些关键词时，我们可以根据行业帮你梳理第一版词包。",
            "不知道如何选对标账号时，可以先按品类、规模和内容风格分层添加。",
            "如果需要复盘模板或周报思路，可联系顾问获取当前推荐做法。",
          ],
        },
        {
          title: "服务响应说明",
          paragraphs: [
            "工作日 9:00 至 18:00 为人工响应时段。一般咨询会在当天回复，较复杂的接入和策略问题通常会在 1 个工作日内给出明确反馈。",
            "如需安排在线演示，请在电话、邮件或微信中说明行业、账号阶段以及你最希望解决的问题，方便我们提前准备。",
          ],
        },
      ]}
      updatedAt="2026年3月8日"
    />
  );
}
