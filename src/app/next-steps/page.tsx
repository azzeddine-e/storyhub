import PageHero from '@/components/PageHero'
import { sprintSessions } from '@/data/decisions'
import Link from 'next/link'

export default function NextStepsPage() {
  return (
    <div>
      <PageHero
        eyebrow="08 — Next Steps"
        title="Four sessions. Two weeks. One shared plan."
        subtitle="Our Sprint 2 proposal: lock the data model, finalize the org structure, validate workflow shapes, and define integration boundaries. Each session is 60–90 minutes and pairs to specific design decisions."
        accent="cyan"
      />

      {/* Goal */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            What we want from the readout
          </p>
          <p className="font-display text-3xl lg:text-4xl leading-tight max-w-4xl text-balance">
            Three things, in order: confidence we&apos;ve captured your operation accurately,
            clarity on where we still need to get specific together, and a shared plan for the
            next set of working sessions.
          </p>
        </div>
      </section>

      {/* Sessions */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-cyan)] mb-4">
            Sprint 2 — May 11–22
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-12 max-w-3xl leading-tight text-balance">
            Four working sessions to close the gaps.
          </h2>

          <div className="space-y-px bg-[var(--border)]">
            {sprintSessions.map((s) => (
              <article
                key={s.number}
                className="bg-[var(--bg)] p-8 lg:p-12 grid lg:grid-cols-[120px_1fr_1fr] gap-8"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-7xl text-[var(--accent-cyan)]">
                    {s.number}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">
                    Focus
                  </p>
                  <h3 className="font-display text-3xl mb-3 leading-tight">{s.focus}</h3>
                  <p className="text-[var(--text-dim)] leading-relaxed">{s.detail}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">
                    Key decisions
                  </p>
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed">{s.keyDecisions}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders needed */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Stakeholder recommendations
          </p>
          <h2 className="font-display text-4xl mb-12 max-w-3xl leading-tight">
            Who we&apos;ll need in the room.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
            <div className="bg-[var(--bg)] p-8 lg:p-10">
              <span className="font-display text-5xl text-[var(--accent-cyan)] mb-4 block">
                01
              </span>
              <h3 className="font-display text-2xl mb-3">A senior editorial decision-maker</h3>
              <p className="text-[var(--text-dim)] leading-relaxed text-sm">
                Empowered to confirm cross-desk recommendations. Present in all four sessions.
              </p>
            </div>
            <div className="bg-[var(--bg)] p-8 lg:p-10">
              <span className="font-display text-5xl text-[var(--accent-cyan)] mb-4 block">
                02
              </span>
              <h3 className="font-display text-2xl mb-3">A decision-making lead per priority desk</h3>
              <p className="text-[var(--text-dim)] leading-relaxed text-sm">
                National, International, DC, Business, Features, Investigates. Required for
                Sessions 2 and 3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reference docs */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Reference documents
          </p>
          <h2 className="font-display text-4xl mb-12 max-w-3xl leading-tight">
            For stakeholders who want to go deeper.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {[
              {
                title: 'Taxonomy & Terminology',
                href: '/glossary',
                detail: 'The full vocabulary across all 7 contexts.',
              },
              {
                title: 'Workflows & Processes',
                href: '/workflows',
                detail: '6 workflow types with phase-by-phase detail.',
              },
              {
                title: 'Entity Relationship Diagram',
                href: '/erd',
                detail: '15 entities, 25 relationships — interactive.',
              },
              {
                title: 'Requirements Workbook',
                href: '/decisions',
                detail: 'Business, Functional, User Stories.',
              },
            ].map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="bg-[var(--bg)] p-6 card-hover group"
              >
                <h3 className="font-display text-xl mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                  {d.title}
                </h3>
                <p className="text-xs text-[var(--text-dim)] leading-relaxed">{d.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final closing */}
      <section className="bg-[var(--bg-elevated)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-6">
            Discovery synthesis
          </p>
          <p className="font-display text-3xl lg:text-5xl leading-tight max-w-4xl mx-auto text-balance mb-10">
            We have a working picture of CNN editorial. Together, in four sessions, we&apos;ll
            sharpen it into a build.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
          >
            ← Back to overview
          </Link>
        </div>
      </section>
    </div>
  )
}
