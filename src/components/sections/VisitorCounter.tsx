import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = "visitor_count";
    const BASE_COUNT = 150;
    const visited = sessionStorage.getItem("has_visited");
    let current = parseInt(localStorage.getItem(key) || "0", 10);
    if (!visited) {
      current += 1;
      localStorage.setItem(key, String(current));
      sessionStorage.setItem("has_visited", "1");
    }
    setCount(BASE_COUNT + current);
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
      <Eye size={14} />
      <span>{count}</span>
    </div>
  );
};

export default VisitorCounter;
