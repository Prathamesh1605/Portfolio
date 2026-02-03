import Section from "./Section";

const SkillGroup = ({ title, items }) => (
  <div className="glass rounded-2xl p-5 hover-tilt">
    <p className="text-xs uppercase tracking-[0.25em] text-accent-400">
      {title}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {(items ?? []).map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-50 dark:bg-white/5 text-accent-700 dark:text-accent-200 border border-accent-100/60 dark:border-white/10"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills({ resume }) {
  const { skills } = resume ?? {};
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills">
      <div className="grid md:grid-cols-2 gap-5">
        <SkillGroup title="Languages" items={skills?.languages} />
        <SkillGroup title="Frameworks" items={skills?.frameworks} />
        <SkillGroup title="Tools & Concepts" items={skills?.tools} />
        <SkillGroup title="Soft Skills" items={skills?.soft} />
      </div>
    </Section>
  );
}
