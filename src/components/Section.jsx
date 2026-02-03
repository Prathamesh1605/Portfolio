export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="section-reveal glass rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.3em] text-accent-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl font-display font-semibold">
                {title}
              </h2>
            )}
          </div>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
