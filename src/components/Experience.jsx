import Section from "./Section";

export default function Experience({ resume }) {
  const roles = resume?.experience ?? [];
  return (
    <Section id="experience" eyebrow="Trajectory" title="Experience">
      <div className="space-y-6">
        {roles.map((role, index) => (
          <div
            key={`${role.company}-${role.role}`}
            className="glass rounded-2xl p-6 hover-tilt"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-display font-semibold">
                  {role.role}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {role.company} • {role.location}
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent-400">
                {role.duration}
              </span>
            </div>
            <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
              {(role.details ?? []).map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            {role.tech?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
