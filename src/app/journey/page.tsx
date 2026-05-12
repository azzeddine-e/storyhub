import PageHero from '@/components/PageHero'
import { keyFindings } from '@/data/decisions'
import Link from 'next/link'

const TIMELINE = [
  {
    week: 'Week 1',
    dates: 'April 22 – April 26',
    label: 'Foundations',
    items: [
      'Kickoff & framing with CNN editorial leadership',
      'National Hub deep-dive — the news-driven baseline',
      'DC / Washington — six teams, three beat leaders, dedicated TRIAD',
      'International — tri-hub follow-the-sun model, regional handovers',
    ],
  },
  {
    week: 'Week 2',
    dates: 'April 29 – May 6',
    label: 'Variation & cross-cuts',
    items: [
      'Business — news-driven with contracted overlay',
      'Features — calendar-driven on Monday.com',
      'Investigates — long-cycle, gated pitch, deep TRIAD',
      'Cross-cutting teams — Planning, Content, Audience, TRIAD, Editorial Ops, Global Productions, Live News',
      'Three technical exploration sessions on the integration surface',
    ],
  },
]

const WHO_WE_TALKED_TO = [
  { group: 'Priority desks', count: '6', detail: 'National, DC, International, Business, Features, Investigates' },
  { group: 'Cross-cutting teams', count: '7', detail: 'Planning, Content, Audience, TRIAD, Editorial Ops, Global Productions, Live News' },
  { group: 'Stakeholders', count: '~60', detail: 'Editors, reporters, producers, planners, programmers, technologists' },
  { group: 'Sessions', count: '11', detail: '8 desk-level discovery + 3 technical exploration' },
]

export default function JourneyPage() {
  return (
    <div>
      <PageHero
        eyebrow="01 — The Journey"
        title="Two weeks of listening, drawing, and pressure-testing."
        subtitle="Eight desk-level sessions. Three technical sessions. Sixty stakeholders. The goal wasn't a deliverable — it was a shared picture of how CNN editorial actually works."
        accent="red"
      />

      {/* WHAT WE DID */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
                What we did
              </p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                Discovery, by the numbers.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)]">
              {WHO_WE_TALKED_TO.map((item) => (
                <div key={item.group} className="bg-[var(--bg)] p-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-5xl text-[var(--accent-red)]">
                      {item.count}
                    </span>
                    <span className="text-sm text-[var(--text-dim)]">{item.group}</span>
                  </div>
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Sprint timeline
          </p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-16 max-w-3xl text-balance">
            Two weeks. Two halves. The first to map the baseline; the second to test where it
            varies.
          </h2>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" />
            {TIMELINE.map((wk, i) => (
              <div key={wk.week} className="relative pl-12 pb-12 last:pb-0">
                <div
                  className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[var(--accent-red)] bg-[var(--bg)]"
                  style={{ boxShadow: i === 0 ? '0 0 0 4px rgba(239,68,68,0.15)' : undefined }}
                />
                <div className="grid lg:grid-cols-[180px_1fr] gap-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent-red)] mb-1">
                      {wk.week}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mb-3">{wk.dates}</p>
                    <p className="font-display text-2xl">{wk.label}</p>
                  </div>
                  <ul className="space-y-3">
                    {wk.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-relaxed text-[var(--text-dim)]"
                      >
                        <span className="text-[var(--text-muted)] mt-2.5 w-3 flex-shrink-0">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE LEARNED */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-red)] mb-4">
            What we learned
          </p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-16 max-w-4xl text-balance">
            Three findings reframed the build.
          </h2>

          <div className="space-y-px bg-[var(--border)]">
            {keyFindings.map((f, i) => (
              <article key={f.title} className="bg-[var(--bg)] p-8 lg:p-12">
                <div className="grid lg:grid-cols-[80px_1fr] gap-8">
                  <span className="font-display text-5xl text-[var(--accent-red)]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl leading-tight mb-4 text-balance">
                      {f.title}
                    </h3>
                    <p className="text-[var(--text-dim)] text-lg leading-relaxed max-w-3xl text-pretty">
                      {f.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE TO GO NEXT */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Continue
          </p>
          <h2 className="font-display text-4xl mb-12">Where the picture gets concrete.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
            <Link
              href="/contexts"
              className="bg-[var(--bg)] p-8 card-hover group"
            >
              <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-3">
                02
              </p>
              <h3 className="font-display text-2xl mb-2 group-hover:text-[var(--accent-red)] transition-colors">
                The Domain Map
              </h3>
              <p className="text-sm text-[var(--text-dim)]">
                Seven bounded contexts and how they meet.
              </p>
            </Link>
            <Link href="/workflows" className="bg-[var(--bg)] p-8 card-hover group">
              <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-3">
                04
              </p>
              <h3 className="font-display text-2xl mb-2 group-hover:text-[var(--accent-red)] transition-colors">
                The Workflows
              </h3>
              <p className="text-sm text-[var(--text-dim)]">
                Six shapes of editorial work, phase by phase.
              </p>
            </Link>
            <Link href="/decisions" className="bg-[var(--bg)] p-8 card-hover group">
              <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-3">
                06
              </p>
              <h3 className="font-display text-2xl mb-2 group-hover:text-[var(--accent-red)] transition-colors">
                The Decisions
              </h3>
              <p className="text-sm text-[var(--text-dim)]">
                Nine working positions awaiting validation.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
