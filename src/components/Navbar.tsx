import { useState } from "react";
import { X, Headset } from "lucide-react";

const Navbar = () => {
  const [showWechat, setShowWechat] = useState(false);

  const navItems = [
    { label: "首页", href: "#top" },
    { label: "功能亮点", href: "#features" },
    { label: "充值定价", href: "#pricing" },
    { label: "使用教程", href: "http://tkgongju.top:8000/docs", external: true },
    { label: "联系客服", action: () => setShowWechat(true) },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center gap-10">
          <a href="#" className="text-2xl font-black italic text-primary tracking-tight">
            天启TK工具箱
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.action ? (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            下载客户端
          </a>
        </div>
      </nav>

      {showWechat && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowWechat(false)}>
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
    </>
  );
};

export default Navbar;
