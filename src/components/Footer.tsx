const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-2xl font-black italic text-primary mb-3">天启TK工具箱</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              专为TK而生，用心匠造。全面，高效，极致！
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">产品</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">天启TK工具箱</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Windows 客户端</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">下载</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">社区</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">博客</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">资源</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">文档</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">教程</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">关于</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">招聘</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">联系我们</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2026 天启TK工具箱. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
