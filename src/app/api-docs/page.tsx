import type { Metadata } from "next";
import SupportPageTemplate from "@/components/support/SupportPageTemplate";

export const metadata: Metadata = {
  title: "API 文档 | 红参谋",
  description: "了解红参谋接口能力、对接方式与资料获取渠道。",
};

export default function ApiDocsPage() {
  return (
    <SupportPageTemplate
      title="API 文档"
      description="红参谋当前支持在人工评估后提供接口对接说明。公开版文档会逐步完善，在此之前可先通过顾问窗口确认对接范围与数据权限。"
      highlights={[
        "支持对接咨询、接口能力评估和可行性说明。",
        "会根据你的业务场景确认字段范围、频率要求和权限边界。",
        "正式开放文档前，先通过电话、邮箱或微信获取最新资料。",
      ]}
      sections={[
        {
          title: "当前支持的对接方式",
          bullets: [
            "控制台数据导出和顾问辅助交付。",
            "按场景评估的接口能力说明和字段范围确认。",
            "针对团队版客户的对接流程沟通和排期建议。",
          ],
        },
        {
          title: "建议你在咨询前准备的信息",
          bullets: [
            "你希望对接的数据类型，例如关键词趋势、对标账号、评论洞察或复盘摘要。",
            "希望的数据刷新频率，以及是内部分析还是外部系统展示使用。",
            "接入后会由谁维护权限、谁消费数据、谁验收结果。",
          ],
        },
        {
          title: "接口开通原则",
          paragraphs: [
            "红参谋会根据客户实际业务场景评估数据提供方式、更新频率和调用边界。部分能力可能先以人工资料、导出或顾问支持形式交付，再逐步升级为标准接口。",
            "如涉及企业内部系统、BI 报表或多成员协作场景，建议先预约一次沟通，确认权限、安全和上线节奏后再推进技术接入。",
          ],
        },
      ]}
      updatedAt="2026年3月8日"
    />
  );
}
