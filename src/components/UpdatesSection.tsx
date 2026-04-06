const updates = [
  {
    title: "Topaz Starlight Precise 2.5 now available via Partner Nodes",
    date: "2026年3月30日",
    color: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "天启TK工具箱 动态显存管理：本地模型再也不怕爆内存",
    date: "2026年3月30日",
    color: "from-orange-600/20 to-red-600/20",
  },
  {
    title: "Grok Imagine Model Feature Updates",
    date: "2026年3月25日",
    color: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "完整风格迁移手册：尽在天启TK工具箱",
    date: "2026年3月21日",
    color: "from-green-600/20 to-teal-600/20",
  },
];

const UpdatesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          近期更新
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {updates.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
              <div className={`h-44 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-xl bg-muted/50 animate-float" style={{ animationDelay: `${i * 0.5}s` }} />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            浏览社区作品 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
