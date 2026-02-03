import { useEffect, useMemo, useState } from "react";
import { resume } from "./data/resume";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function useDarkMode() {
  const [enabled, setEnabled] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return [enabled, setEnabled];
}

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const stats = useMemo(() => {
    const roles = resume?.experience?.length ?? 0;
    const projects = resume?.projects?.length ?? 0;
    const skills =
      (resume?.skills?.languages?.length ?? 0) +
      (resume?.skills?.frameworks?.length ?? 0) +
      (resume?.skills?.tools?.length ?? 0);
    return [
      { label: "Roles", value: roles },
      { label: "Projects", value: projects },
      { label: "Skills", value: skills },
    ];
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-ink text-slate-900 dark:text-mist">
      <div className="grid-surface">
        <TopBar
          name={resume.name}
          sections={sections}
          darkMode={darkMode}
          onToggleDark={() => setDarkMode((prev) => !prev)}
        />
        <main className="px-6 md:px-10 lg:px-16 pb-20">
          <Hero resume={resume} stats={stats} />
          <div className="mt-16 space-y-16">
            <About resume={resume} />
            <Skills resume={resume} />
            <Experience resume={resume} />
            <Projects resume={resume} />
            <Education resume={resume} />
            <Contact resume={resume} />
          </div>
        </main>
      </div>
    </div>
  );
}
