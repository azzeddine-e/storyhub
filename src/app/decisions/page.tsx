import PageHero from '@/components/PageHero'
import Comments from '@/components/Comments'
import { decisions } from '@/data/decisions'
import Link from 'next/link'

const TOPIC_ACCENT: Record<string, string> = {
  Data: 'blue',
  Scope: 'red',
  Structure: 'emerald',
  Workflow: 'rose',
  Integrations: 'cyan',
}

export default function DecisionsPage() {
  return (
    <div>
      <PageHero
        eyebrow="07 — The Decisions"
        title="Nine working positions awaiting validation."
        subtitle="The design choices we came out of the sprint with — Airtable's recommendations and our reading of them. Each has a working position and an explicit ask back to editorial: confirm or redirect. They're prerequisites for build."
        accent="purple"
      />

      {/* Topic legend */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center gap-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
            Filter by topic
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(TOPIC_ACCENT).map(([topic, accent]) => (
              <span
                key={topic}
                className="text-xs px-3 py-1 rounded-full border flex items-center gap-2"
                style={{
                  borderColor: `color-mix(in srgb, var(--accent-${accent}) 40%, transparent)`,
                  color: `var(--accent-${accent})`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: `var(--accent-${accent})` }}
                />
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Decisions list */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
          <div className="space-y-px bg-[var(--border)]">
            {decisions.map((d) => {
              const accent = TOPIC_ACCENT[d.topic] ?? 'red'
              return (
                <article
                  key={d.number}
                  id={`decision-${d.number}`}
                  className="bg-[var(--bg)] p-8 lg:p-12 scroll-mt-20"
                >
                  <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12">
                    {/* Left rail */}
                    <div className="lg:sticky lg:top-24 self-start">
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="font-display text-7xl text-[var(--text-muted)]">
                          {d.number.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl lg:text-4xl leading-tight mb-4 text-balance">
                        {d.title}
                      </h2>
                      <span
                        className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border"
                        style={{
                          borderColor: `color-mix(in srgb, var(--accent-${accent}) 40%, transparent)`,
                          color: `var(--accent-${accent})`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: `var(--accent-${accent})` }}
                        />
                        {d.topic}
                      </span>
                    </div>

                    {/* Right content */}
                    <div className="space-y-8">
                      <Block label="The problem" body={d.problem} />
                      <Block label="Our working position" body={d.position} highlight accent={accent} />
                      <div className="pt-4 border-t border-[var(--border)]">
                        <div className="flex items-start gap-3">
                          <span className="text-[var(--accent-amber)] text-lg">★</span>
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent-amber)] mb-2">
                              Validate or refine
                            </p>
                            <p className="text-base text-[var(--text-dim)] leading-relaxed italic text-pretty">
                              {d.validate}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          href={`#discussion`}
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                        >
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M2 3h12v8H6l-4 3V3z"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Discuss decision {d.number.toString().padStart(2, '0')} below
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <Comments
        accent="purple"
        description="Reference the decision number in your comment (e.g. “On 03: …”). All nine threads live here so cross-references stay tight. Sign in with GitHub to post."
      />

      {/* Continue */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">
                Continue
              </p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight max-w-3xl text-balance">
                These decisions get worked through in four sessions over two weeks.
              </h2>
            </div>
            <Link
              href="/next-steps"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--text)] hover:bg-white text-[var(--bg)] text-sm font-medium rounded transition-colors whitespace-nowrap"
            >
              See Sprint 2 plan →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Block({
  label,
  body,
  highlight,
  accent,
}: {
  label: string
  body: string
  highlight?: boolean
  accent?: string
}) {
  return (
    <div>
      <p
        className="text-[10px] uppercase tracking-[0.18em] mb-3"
        style={{
          color: highlight && accent ? `var(--accent-${accent})` : 'var(--text-muted)',
        }}
      >
        {label}
      </p>
      <p
        className={`leading-relaxed text-pretty ${
          highlight ? 'text-lg text-[var(--text)]' : 'text-base text-[var(--text-dim)]'
        }`}
      >
        {body}
      </p>
    </div>
  )
}
