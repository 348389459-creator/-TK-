import { Crown, Zap, Settings } from "lucide-react";

const plans = [
  {
    icon: Crown,
    title: "月度 PRO 会员",
    price: "￥29.9 / 月",
    desc: "适合个人玩家，解锁所有基础提取与洗稿功能。",
    highlight: false,
  },
  {
    icon: Zap,
    title: "年度 ULTRA 终身",
    price: "￥198 / 年",
    desc: "适合工作室。包含独家选题算法、优先技术支持、赠送 10000 AI 点数。",
    highlight: true,
  },
  {
    icon: Settings,
    title: "定制企业版",
    price: "价格面议",
    desc: "支持私有化部署，独立 API 接口，专属海外节点定制。",
    highlight: false,
  },
];

const OpenSourceSection = () => {
  return (
    <section id="pricing" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
          选择您的成功方案
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center text-center p-8 rounded-2xl border transition-all ${
                plan.highlight
                  ? "border-primary bg-primary/5 shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  最受欢迎
                </span>
              )}
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                  plan.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}
              >
                <plan.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{plan.title}</h3>
              <p className="text-2xl font-black text-primary mb-3">{plan.price}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{plan.desc}</p>
              <a
                href="http://tkgongju.top:8000/api/pay"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                立即开通
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#"
            className="inline-flex rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(68_100%_50%/0.4)]"
          >
            立即下载
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
