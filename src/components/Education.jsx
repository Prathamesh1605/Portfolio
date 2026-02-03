import Section from "./Section";

export default function Education({ resume }) {
  const education = resume?.education ?? [];
  return (
    <Section id="education" eyebrow="Academia" title="Education">
      <div className="grid md:grid-cols-2 gap-5">
        {education.map((item, index) => (
          <div
            key={item.institution}
            className="glass rounded-2xl p-6 hover-tilt"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-display font-semibold">
              {item.degree}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {item.institution}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent-400">
              {item.duration}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
