import PageHero from '@/components/PageHero'
import Comments from '@/components/Comments'
import { contexts, boundaries } from '@/data/contexts'
import { glossary } from '@/data/glossary'
import Link from 'next/link'

export default function ContextsPage() {
  return (
    <div>
      <PageHero
        eyebrow="02 — The Domain"
        title="Seven bounded contexts. One editorial landscape."
        subtitle="Each context owns its own vocabulary. Where they meet is where we see StoryHub doing most of its work — translating signals into Stories, Stories into Leaves, and Leaves into Deliverables."
        accent="amber"
      />

      {/* Visual map */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Context map
          </p>
          <h2 className="font-display text-3xl lg:text-4xl mb-12 max-w-2xl text-balance">
            Click any context to see its terms in the glossary.
          </h2>

          <div className="grid lg:grid-cols-12 gap-px bg-[var(--border)] rounded-md overflow-hidden">
            {contexts.map((ctx, i) => {
              // Tetris-style grid (12-col rows). Each row must total 12 so we
              // never leave the grid background (gray gap) showing through.
              // Row 1: 3 + 4 + 3 + 2 = 12  (NG, EP, TR, PB)
              // Row 2: 3 + 3 + 6      = 12  (AU, CO, AM — AM gets the wide cell
              //                              because it has the most ownerships)
              const cellSpans = [
                'lg:col-span-3',
                'lg:col-span-4',
                'lg:col-span-3',
                'lg:col-span-2',
                'lg:col-span-3',
                'lg:col-span-3',
                'lg:col-span-6',
              ]
              return (
                <Link
                  key={ctx.slug}
                  id={ctx.slug}
                  href={`/glossary?ctx=${ctx.name}`}
                  className={`${cellSpans[i]} bg-[var(--bg)] p-6 lg:p-8 hover:bg-[var(--bg-card)] transition-colors group relative overflow-hidden min-h-[180px] flex flex-col scroll-mt-20`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ctx.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  />
                  <div className="relative flex items-center justify-between mb-4">
                    <span
                      className="font-mono-jb text-xs tracking-widest"
                      style={{ color: `var(--accent-${ctx.accent})` }}
                    >
                      {ctx.shortName}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="relative font-display text-2xl lg:text-3xl mb-3 leading-tight">
                    {ctx.name}
                  </h3>
                  <p className="relative text-sm text-[var(--text-dim)] leading-relaxed flex-1 text-pretty">
                    {ctx.description}
                  </p>
                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {ctx.ownerships.slice(0, 4).map((own) => (
                      <span
                        key={own}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--border-strong)] text-[var(--text-muted)]"
                      >
                        {own}
                      </span>
                    ))}
                    {ctx.ownerships.length > 4 && (
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 text-[var(--text-muted)]">
                        +{ctx.ownerships.length - 4}
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Boundaries */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Where contexts meet
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-12 max-w-3xl leading-tight text-balance">
            Boundaries are where the work happens.
          </h2>

          <div className="space-y-px bg-[var(--border)]">
            {boundaries.map((b) => (
              <div
                key={`${b.from}-${b.to}`}
                className="bg-[var(--bg)] p-6 lg:p-8 grid lg:grid-cols-[1fr_120px_1fr_2fr] gap-6 items-center"
              >
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1">
                    From
                  </p>
                  <p className="text-base font-medium">{b.from}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <DirectionArrow direction={b.direction} />
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                    {b.direction}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1">
                    To
                  </p>
                  <p className="text-base font-medium">{b.to}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1">
                    What crosses
                  </p>
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed">{b.whatCrosses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open questions */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-amber)] mb-4">
            Open questions
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-10 max-w-3xl leading-tight text-balance">
            Where the boundary is still fuzzy.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
            {[
              'Should Sustaining Coverage be its own context, or sit inside Editorial Production?',
              'Are Planning and Editorial Operations one context or two?',
              'Is TRIAD one context, or three (Legal, S&P, Fact Check) given they review independently?',
            ].map((q) => (
              <div key={q} className="bg-[var(--bg)] p-8">
                <span className="block text-[var(--accent-amber)] text-xl mb-3">⚠</span>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Comments
        accent="amber"
        description="Where did we draw a boundary that doesn't match how your desk operates? Should two of these contexts be merged, or one split? We're especially keen on corrections here — sign in with GitHub to weigh in."
      />

      {/* ERD teaser */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-orange)] mb-4">
                The model
              </p>
              <h2 className="font-display text-4xl lg:text-5xl mb-4 max-w-3xl leading-tight text-balance">
                Want to see how the entities actually relate?
              </h2>
              <p className="text-[var(--text-dim)] max-w-2xl leading-relaxed">
                The Entity Relationship Diagram Airtable proposed to us lays out 15 entities and
                25 relationships in one interactive map — Story at the center, Topics tagging it,
                Storylines and Initiatives grouping it, Deliverables shipping it, Desks owning it.
              </p>
            </div>
            <Link
              href="/erd"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--text)] hover:bg-white text-[var(--bg)] text-sm font-medium rounded transition-colors whitespace-nowrap"
            >
              Open the ERD →
            </Link>
          </div>
        </div>
      </section>

      {/* Glossary teaser */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">
                Continue
              </p>
              <h2 className="font-display text-4xl">
                {glossary.length} terms across these seven contexts.
              </h2>
            </div>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red-strong-hover)] text-white text-sm font-medium rounded transition-colors whitespace-nowrap"
            >
              Open the glossary →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function DirectionArrow({ direction }: { direction: 'one-way' | 'bidirectional' | 'reference' }) {
  if (direction === 'bidirectional') {
    return (
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-[var(--text-dim)]">
        <path d="M55 10H5m0 0l4-4m-4 4l4 4m46-4l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
  if (direction === 'reference') {
    return (
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-[var(--text-dim)]">
        <path d="M5 10h50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    )
  }
  return (
    <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-[var(--text-dim)]">
      <path d="M5 10h50m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
