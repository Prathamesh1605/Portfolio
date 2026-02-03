import Section from "./Section";

export default function Projects({ resume }) {
  const projects = resume?.projects ?? [];
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="glass rounded-2xl p-6 hover-tilt"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-display font-semibold">
                {project.name}
              </h3>
              <div className="flex gap-2 text-xs text-slate-500 dark:text-slate-400">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    className="hover:text-accent-400 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    className="hover:text-accent-400 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {(project.highlights ?? []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {(project.tech ?? []).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-50 dark:bg-white/5 text-accent-700 dark:text-accent-200 border border-accent-100/70 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
