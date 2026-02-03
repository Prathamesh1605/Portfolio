import { useEffect, useState } from "react";

export default function TopBar({ name, sections, darkMode, onToggleDark }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      const scroll = window.scrollY;
      const found = sections.find((section) => {
        const el = document.getElementById(section.id);
        if (!el) return false;
        return el.offsetTop - 140 <= scroll;
      });
      setActive(found?.id ?? "");
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-ink/70 border-b border-white/20 dark:border-white/5">
      <div className="px-6 md:px-10 lg:px-16 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-accent-600/90 text-white flex items-center justify-center font-display font-semibold shadow-glow">
            PS
          </div>
          <div>
            <p className="font-display text-lg leading-none">{name}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Portfolio
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition ${
                active === section.id
                  ? "text-accent-500"
                  : "hover:text-accent-400"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleDark}
            className="px-3 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-accent-200/40 dark:border-white/10 hover:border-accent-400 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-sm font-semibold bg-accent-600 text-white shadow-glow hover:bg-accent-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
