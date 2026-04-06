import { Globe, ExternalLink, X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center gap-2 bg-secondary px-4 py-2.5 text-sm">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <span className="text-muted-foreground">
        欢迎来到天启TK工具箱！专为TK人打造的跨境利器。
      </span>
      <a
        href="#"
        className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        了解更多
        <ExternalLink className="h-3 w-3" />
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
