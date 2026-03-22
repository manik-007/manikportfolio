import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Articles", href: "#articles" },
  { label: "Podcasts", href: "#podcasts" },
  { label: "Community", href: "/community" },
  { label: "Wall of Love", href: "#testimonials" },
  { label: "Resume", href: "/resume" },
  { label: "Connect", href: "#connect" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      setOpen(false);
    } else if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-end md:justify-center px-6 py-4">
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-4 pt-2 space-y-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                handleClick(e, l.href);
                setOpen(false);
              }}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
