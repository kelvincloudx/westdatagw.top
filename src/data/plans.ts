export interface Plan {
  id: string;
  name: string;
  price: string;
  unit: string;
  period: string;
  traffic: string;
  trafficDetail: string;
  badge?: string;
  features: string[];
  notes: string[];
  ctaUrl: string;
  verificationStatus: string;
}

export const AFFILIATE_URL = "https://varnexa.lingdongaff.com/#/?code=HHoxxHGa";

export const PLANS: Plan[] = [
  {
    id: "basic",
    name: "基础体验版",
    price: "15.00",
    unit: "¥",
    period: "月",
    traffic: "150GB",
    trafficDetail: "150GB / 月（按月自动重置）",
    features: [
      "公开参考最高 500Mbps 端口带宽",
      "支持最多 3 台设备同时在线连接",
      "适配 Clash / Shadowrocket / ClashParty 客户端",
      "适合网页浏览与轻量网络使用场景"
    ],
    notes: [
      "付费周期为月付，流量每月结算日重置",
      "实际网速与延迟受本地运营商及节点负载影响",
      "权益数据来自参考公开资料，待最终提供方确认"
    ],
    ctaUrl: AFFILIATE_URL,
    verificationStatus: "公开参考资料（待服务提供方确认）"
  },
  {
    id: "pro",
    name: "进阶专线版",
    price: "28.00",
    unit: "¥",
    period: "月",
    traffic: "450GB",
    trafficDetail: "450GB / 月（按月自动重置）",
    badge: "热门推荐",
    features: [
      "公开参考最高 2.5Gbps 专线通道",
      "支持最多 5 台设备同时在线连接",
      "支持常见 AI 助手与主流高清流媒体",
      "适合高频流量及多终端日常并发"
    ],
    notes: [
      "付费周期为月付，流量按自然月或订阅周期重置",
      "AI 与流媒体解锁基于阶段网络环境，非永久绝对保证",
      "最高带宽为节点理论上限，非单用户独占保证"
    ],
    ctaUrl: AFFILIATE_URL,
    verificationStatus: "公开参考资料（待服务提供方确认）"
  },
  {
    id: "ultimate",
    name: "旗舰尊享版",
    price: "48.00",
    unit: "¥",
    period: "月",
    traffic: "1000GB",
    trafficDetail: "1000GB / 月（按月自动重置）",
    badge: "尊享首选",
    features: [
      "公开参考 10Gbps VIP 专属链路",
      "支持最多 10 台设备同时在线连接",
      "提供常规工单与技术协助渠道",
      "适合重度下载与多设备团队使用"
    ],
    notes: [
      "付费周期为月付，包含每月 1000GB 基础额度",
      "所列 VIP 通道参数为宣传参考指标，未经实测",
      "实际服务可用性与服务条款以最终交割页面为准"
    ],
    ctaUrl: AFFILIATE_URL,
    verificationStatus: "公开参考资料（待服务提供方确认）"
  },
  {
    id: "unlimited",
    name: "不限时流量包",
    price: "68.00",
    unit: "¥",
    period: "次",
    traffic: "300GB",
    trafficDetail: "300GB 总流量（不限制有效期限）",
    features: [
      "300GB 累计一次性总流量额度",
      "按公开参考规则不限制每月重置时间",
      "公开参考包含 IEPL 专线节点访问权益",
      "公开参考说明不限制同时在线设备数量"
    ],
    notes: [
      "300GB 为一次性使用总流量，并非每月 300GB",
      "不限时并不等于无限流量，额度用尽即需补充",
      "最终服务终止规则与有效期以实际服务条款为准"
    ],
    ctaUrl: AFFILIATE_URL,
    verificationStatus: "公开参考资料（待服务提供方确认）"
  }
];

export const PLAN_DISCLAIMER = "以上为 WESTDATA 参考网站公布的套餐资料。实际在售价格、流量、权益及服务条款以最终购买页面为准。指定推广入口与所列套餐的销售对应关系尚待核实。";
