import Section from "./Section";

export default function About({ resume }) {
  const highlights = resume?.highlights ?? [];
  return (
    <Section id="about" eyebrow="Profile" title="About Me">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>{resume?.summary}</p>
          <p>
            Core focus: {(resume?.skills?.frameworks ?? []).slice(0, 6).join(", ")}
            .
          </p>
        </div>
        <div className="space-y-3">
          {highlights.map((item, index) => (
            <div
              key={item}
              className="glass rounded-2xl px-4 py-4 hover-tilt"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm text-slate-700 dark:text-slate-200">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
