import Section from "./Section";

export default function Contact({ resume }) {
  const { contact } = resume ?? {};
  return (
    <Section id="contact" eyebrow="Connect" title="Contact">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Reach out to discuss work in{" "}
            {(resume?.skills?.frameworks ?? []).slice(0, 3).join(", ")} and
            high-impact data platforms.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              Email:{" "}
              <a
                href={`mailto:${contact?.email}`}
                className="text-accent-500 hover:text-accent-400 transition"
              >
                {contact?.email}
              </a>
            </p>
            <p>Phone: {contact?.phone}</p>
            <p>Location: {contact?.location}</p>
          </div>
          <div className="flex gap-4 text-sm">
            {contact?.linkedin && (
              <a
                href={contact.linkedin}
                className="hover:text-accent-400 transition"
              >
                LinkedIn
              </a>
            )}
            {contact?.github && (
              <a
                href={contact.github}
                className="hover:text-accent-400 transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
        <form className="glass rounded-2xl p-6 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-accent-400">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent-400"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-accent-400">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="mt-2 w-full rounded-xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent-400"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-accent-400">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell me about your project..."
              className="mt-2 w-full rounded-xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent-400"
            />
          </div>
          <button
            type="button"
            className="w-full px-4 py-3 rounded-full bg-accent-600 text-white font-semibold shadow-glow hover:bg-accent-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
