import { Eye, Shield, Zap, TrendingUp, BarChart3, Activity } from "lucide-react";

const DashboardVisual = () => (
  <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-card"
    style={{ background: "linear-gradient(135deg, hsl(220 20% 6%) 0%, hsl(220 25% 10%) 100%)" }}>
    <div className="flex items-center gap-3 px-6 py-3 border-b border-border/60">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="px-4 py-1 rounded-lg bg-muted/50 text-xs text-muted-foreground font-mono">
          天启TK · 矩阵控制中心 v2.0
        </div>
      </div>
    </div>
    <div className="p-6 grid grid-cols-12 gap-4">
      {[
        { label: "今日发布", value: "1,284", change: "+23%", icon: TrendingUp, color: "text-green-400" },
        { label: "监控博主", value: "856", change: "+12%", icon: Eye, color: "text-blue-400" },
        { label: "去重成功率", value: "99.7%", change: "+0.3%", icon: Shield, color: "text-primary" },
        { label: "云端解析", value: "47.2K", change: "+156%", icon: Zap, color: "text-orange-400" },
      ].map((stat, i) => (
        <div key={i} className="col-span-6 md:col-span-3 rounded-xl p-4 border border-border/50"
          style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="flex items-center justify-between mb-2">
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
            <span className="text-[10px] text-green-400 font-mono">{stat.change}</span>
          </div>
          <p className="text-xl font-black text-foreground tracking-tight">{stat.value}</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
        </div>
      ))}
      <div className="col-span-12 md:col-span-8 rounded-xl border border-border/50 p-4"
        style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-foreground">矩阵数据总览</span>
          </div>
          <div className="flex gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block" />播放量</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />点赞</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400 inline-block" />涨粉</span>
          </div>
        </div>
        <svg viewBox="0 0 600 160" className="w-full" style={{ filter: "drop-shadow(0 0 8px hsl(68 100% 50% / 0.15))" }}>
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(68 100% 50%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(68 100% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 40, 80, 120].map(y => (
            <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="hsl(220 10% 18%)" strokeWidth="0.5" strokeDasharray="4 4" />
          ))}
          <path d="M0,130 Q50,120 100,100 T200,80 T300,50 T400,60 T500,30 T600,20 L600,160 L0,160Z" fill="url(#chartGrad)">
            <animate attributeName="d" dur="4s" repeatCount="indefinite" values="M0,130 Q50,120 100,100 T200,80 T300,50 T400,60 T500,30 T600,20 L600,160 L0,160Z;M0,125 Q50,115 100,95 T200,75 T300,55 T400,55 T500,25 T600,22 L600,160 L0,160Z;M0,130 Q50,120 100,100 T200,80 T300,50 T400,60 T500,30 T600,20 L600,160 L0,160Z" />
          </path>
          <path d="M0,130 Q50,120 100,100 T200,80 T300,50 T400,60 T500,30 T600,20" fill="none" stroke="hsl(68 100% 50%)" strokeWidth="2">
            <animate attributeName="d" dur="4s" repeatCount="indefinite" values="M0,130 Q50,120 100,100 T200,80 T300,50 T400,60 T500,30 T600,20;M0,125 Q50,115 100,95 T200,75 T300,55 T400,55 T500,25 T600,22;M0,130 Q50,120 100,100 T200,80 T300,50 T400,60 T500,30 T600,20" />
          </path>
          <path d="M0,140 Q75,135 150,125 T300,100 T450,90 T600,70" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
          <path d="M0,145 Q100,140 200,130 T400,105 T600,85" fill="none" stroke="#4ade80" strokeWidth="1.5" opacity="0.5" />
          <circle cx="500" cy="30" r="4" fill="hsl(68 100% 50%)">
            <animate attributeName="r" dur="2s" repeatCount="indefinite" values="3;6;3" />
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;0.5;1" />
          </circle>
        </svg>
      </div>
      <div className="col-span-12 md:col-span-4 rounded-xl border border-border/50 p-4"
        style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="flex items-center gap-2 mb-3">
          <Activity className="h-4 w-4 text-green-400" />
          <span className="text-xs font-semibold text-foreground">实时动态</span>
          <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>
        <div className="space-y-2.5">
          {[
            { text: "博主 @viral_queen 发布新视频", time: "3秒前", dot: "bg-blue-400" },
            { text: "去重任务 #4821 完成 ✓", time: "12秒前", dot: "bg-primary" },
            { text: "监控触发: 播放量突破10万", time: "28秒前", dot: "bg-orange-400" },
            { text: "批量下载 56/56 完成", time: "1分钟前", dot: "bg-green-400" },
            { text: "AI洗稿 #102 渲染成功", time: "2分钟前", dot: "bg-purple-400" },
            { text: "云端提取 4K 视频完成", time: "3分钟前", dot: "bg-cyan-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 py-1.5 border-b border-border/30 last:border-0">
              <span className={`w-1.5 h-1.5 rounded-full ${item.dot} mt-1.5 shrink-0`} />
              <div className="min-w-0">
                <p className="text-[11px] text-foreground/80 truncate">{item.text}</p>
                <p className="text-[10px] text-muted-foreground">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          全自动矩阵，为TIKTOK而生
        </h2>

        <DashboardVisual />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">批量下载 博主监控 主页提取</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              专业服务器不压缩画质 对标账号毫秒级监控 主页批量提取
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">物理级去重引擎</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              超越传统抽帧，采用底层代码重构视频像素，确保 99.9% 过原创，彻底告别封号和限流。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 text-center mt-6">
          <h3 className="text-xl font-bold text-foreground mb-3">极速云端解析</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
            接入 8000 端口云端集群，支持 YouTube/TikTok 4K 原片秒级提取，素材获取永不卡顿。
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
