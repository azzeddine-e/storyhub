interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  accent?: string
}

export default function PageHero({ eyebrow, title, subtitle, accent = 'red' }: PageHeroProps) {
  return (
    <section className="relative border-b border-[var(--border)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: `var(--accent-${accent})` }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.22em] font-medium"
            style={{ color: `var(--accent-${accent})` }}
          >
            {eyebrow}
          </span>
          <span className="h-px flex-1 bg-[var(--border)] max-w-[80px]" />
        </div>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] mb-6 max-w-5xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-[var(--text-dim)] max-w-3xl leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
