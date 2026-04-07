import { useState } from "react";
// 🟢 修改1：这里多引入了一个 PlayCircle (播放图标)
import { CloudCog, Headset, X, PlayCircle } from "lucide-react";
// 🟢 修改2：引入 React Router 的 Link 组件，用来丝滑跳转页面
import { Link } from "react-router-dom"; 
import heroBg from "@/assets/hero-bg.jpg";

const trustItems = [
  { icon: CloudCog, value: "10w+", label: "每日云端解析量" },
  { icon: Headset, value: "7×24h", label: "全天候技术陪跑" },
];

const HeroSection = () => {
  const [showWechat, setShowWechat] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-7xl md:text-9xl font-black italic text-primary text-glow tracking-tight mb-6 animate-fade-in-up">
          天启TK工具箱
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          专为TK而生，用心匠造
        </p>
        <p className="text-sm md:text-base text-foreground/60 max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          全面，高效，极致！助力每一位TK人在跨境取得更加优异的成绩。愿各位仰望星空，脚踏实地。
        </p>
        
        {/* 按钮组区：已修复 */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {/* 下载按钮：接入腾讯云直链 */}
          <a
            href="https://tianqitk-1379115483.cos.ap-guangzhou.myqcloud.com/%E5%A4%A9%E5%90%AFTK_Setup_v1.2.0.exe"
            download="天启TK_Setup_v1.2.0.exe"
            className="rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(68_100%_50%/0.4)]"
          >
            下载 Windows 客户端
          </a>

          {/* 🟢 修改3：新增的使用教程按钮 (带播放小图标) */}
          <Link 
            to="/tutorial"
            className="flex items-center gap-2 rounded-full border-2 border-primary/80 px-8 py-3.5 text-base font-bold text-primary hover:bg-primary/10 transition-colors"
          >
            <PlayCircle className="w-5 h-5" />
            使用教程
          </Link>
          
          {/* 联系客服按钮：点击打开微信弹窗 */}
          <button 
            onClick={() => setShowWechat(true)}
            className="rounded-full border-2 border-foreground px-8 py-3.5 text-base font-bold text-foreground hover:bg-foreground/10 transition-colors"
          >      
            联系客服
          </button>
        </div>

        {/* Trust Bar */}
        <div
          className="mt-12 flex items-center gap-8 md:gap-14 rounded-2xl px-10 py-5 animate-fade-in-up"
          style={{
            animationDelay: "0.45s",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-xl md:text-2xl font-black text-primary leading-none">{item.value}</p>
                <p className="text-xs md:text-sm text-foreground/70 mt-1">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WeChat Dialog */}
      {showWechat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowWechat(false)}>
          <div
            className="relative rounded-2xl p-8 text-center max-w-sm mx-4"
            style={{
              background: "rgba(30,30,30,0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWechat(false)}
              className="absolute top-3 right-3 text-foreground/50 hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <Headset className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">联系客服</h3>
            <p className="text-sm text-muted-foreground mb-4">请添加客服微信，获取专业支持</p>
            <p className="text-2xl font-black text-primary tracking-wide select-all">dzhikun1030</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;