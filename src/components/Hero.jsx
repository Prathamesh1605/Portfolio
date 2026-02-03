export default function Hero({ resume, stats }) {
  return (
    <section className="pt-12 md:pt-16">
      <div className="glass rounded-3xl px-8 py-10 md:px-12 md:py-14 shadow-soft">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-accent-500">
                {resume?.title ?? "Professional"}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
                {resume?.name?.split(" ")[0] ?? "Portfolio"}{" "}
                <span className="text-gradient">
                  {resume?.name?.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                {resume?.summary ??
                  "Impact-focused engineer delivering high-performance products and systems."}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Prathamesh-Shingan.pdf"
                className="px-5 py-3 rounded-full text-sm font-semibold bg-accent-600 text-white shadow-glow hover:bg-accent-500 transition"
                download
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-full text-sm font-semibold border border-accent-300/60 text-accent-600 dark:text-accent-200 hover:border-accent-500 transition"
              >
                Contact
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl px-4 py-4 hover-tilt"
                >
                  <p className="text-2xl font-display font-semibold">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-2xl px-5 py-5 hover-tilt">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-400">
                Current Focus
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {resume?.experience?.[0]?.role ?? "Software Engineer"} at{" "}
                {resume?.experience?.[0]?.company ?? "MRI Software"}
              </p>
            </div>
            <div className="glass rounded-2xl px-5 py-5 hover-tilt">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-400">
                Primary Stack
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {(resume?.skills?.frameworks ?? [])
                  .slice(0, 6)
                  .join(" • ")}
              </p>
            </div>
            <div className="glass rounded-2xl px-5 py-5 hover-tilt">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-400">
                Impact Highlights
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {(resume?.highlights ?? []).slice(0, 1)[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
