import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ErdDiagram from '@/components/ErdDiagram'
import ErdEntityExplorer from '@/components/ErdEntityExplorer'
import Comments from '@/components/Comments'
import { entities, relationships, tierMeta } from '@/data/erd'

export default function ErdPage() {
  const tierCounts = entities.reduce<Record<string, number>>((acc, e) => {
    acc[e.tier] = (acc[e.tier] ?? 0) + 1
    return acc
  }, {})

  return (
    <div>
      <PageHero
        eyebrow="03 — The Model"
        title="Entity relationships, end-to-end."
        subtitle="The working model that emerged from the sprint. Each entity is a thing the newsroom names; each line is a verb the newsroom uses. Click anything to focus."
        accent="amber"
      />

      {/* Counters */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] rounded-md overflow-hidden">
            <Stat
              value={String(entities.length)}
              label="Entities"
              hint="things the newsroom names"
            />
            <Stat
              value={String(relationships.length)}
              label="Relationships"
              hint="verbs that connect them"
            />
            <Stat
              value={String(tierCounts.editorial ?? 0)}
              label="Editorial core"
              hint="Topics → Story → Event"
              accent="red"
            />
            <Stat
              value={`${tierCounts.production ?? 0} + ${tierCounts.org ?? 0}`}
              label="Production + Org"
              hint="how stories ship & who owns them"
              accent="emerald"
            />
          </div>
        </div>
      </section>

      {/* Diagram */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">
                Working ERD
              </p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight max-w-3xl text-balance">
                Story is the gravity. Everything orbits it.
              </h2>
            </div>
            <p className="text-sm text-[var(--text-dim)] max-w-md leading-relaxed">
              Click any entity to focus its neighborhood — outgoing and incoming
              relationships dim everything else. Click again to clear. Story is
              the dashed-outlined core.
            </p>
          </div>

          <ErdDiagram />

          <p className="mt-4 text-xs text-[var(--text-muted)] leading-relaxed max-w-3xl">
            This is a working model from the sprint, not a final logical schema. Edge labels
            describe how teams talk about the connection (e.g. <span className="font-mono-jb text-[var(--text-dim)]">promotes&nbsp;to</span>,{' '}
            <span className="font-mono-jb text-[var(--text-dim)]">rolls&nbsp;up&nbsp;to</span>,{' '}
            <span className="font-mono-jb text-[var(--text-dim)]">primary&nbsp;owner</span>) — they will
            translate into properties, references, or join tables when this is hardened.
          </p>
        </div>
      </section>

      {/* Reading guide */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">
            How to read it
          </p>
          <h2 className="font-display text-3xl lg:text-4xl mb-10 max-w-3xl text-balance">
            Three layers of the editorial machine.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
            {(Object.keys(tierMeta) as (keyof typeof tierMeta)[]).map((tierKey) => {
              const meta = tierMeta[tierKey]
              const items = entities.filter((e) => e.tier === tierKey)
              return (
                <div key={tierKey} className="bg-[var(--bg)] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ background: `var(--accent-${meta.accent})` }}
                    />
                    <span
                      className="text-[10px] uppercase tracking-[0.22em] font-medium"
                      style={{ color: `var(--accent-${meta.accent})` }}
                    >
                      {meta.label}
                    </span>
                  </div>
                  <p className="text-base text-[var(--text)] leading-relaxed mb-5">
                    {meta.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {items.map((e) => (
                      <li
                        key={e.id}
                        className="text-[11px] uppercase tracking-wider px-2 py-1 rounded border border-[var(--border-strong)] text-[var(--text-dim)]"
                      >
                        {e.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Entity explorer */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">
                Walk the graph
              </p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight text-balance">
                Pick an entity. Follow its edges.
              </h2>
            </div>
            <p className="text-sm text-[var(--text-dim)] max-w-md leading-relaxed">
              Each card lists what an entity reaches out to and what reaches in.
              Click any related entity to jump there.
            </p>
          </div>

          <ErdEntityExplorer />
        </div>
      </section>

      {/* Open questions / caveats */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-amber)] mb-3">
            Caveats
          </p>
          <h2 className="font-display text-3xl lg:text-4xl mb-10 max-w-3xl text-balance">
            What this model does not yet decide.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
            {[
              {
                t: 'Topics surfacing is Phase 2.',
                d: 'The relationship is real, but tagging UX, search, and topic pages are out of scope for the first cut.',
              },
              {
                t: 'Storyline vs Initiative is overlapping.',
                d: 'Both group Stories. The split between operational arcs (Storyline) and audience-facing campaigns (Initiative) is still debated.',
              },
              {
                t: 'Deployment is partially in scope.',
                d: 'Tracking who is where matters editorially; full equipment provisioning lives outside StoryHub.',
              },
              {
                t: 'Reporting Guidance ownership is open.',
                d: 'Editors author it; TRIAD constrains it; Function informs it. The system of record has not been chosen.',
              },
            ].map((q) => (
              <div key={q.t} className="bg-[var(--bg)] p-8">
                <span className="block text-[var(--accent-amber)] text-xl mb-3">⚠</span>
                <p className="text-base text-[var(--text)] leading-snug mb-2">{q.t}</p>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">{q.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Comments
        accent="orange"
        description="Missing an entity? Wrong direction on a relationship? A label that doesn't match how your desk talks? Drop it here — the model gets locked in Sprint 2 Session 1, so corrections now save us hours later."
      />

      {/* Continue */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
            <Link
              href="/contexts"
              className="bg-[var(--bg)] p-8 lg:p-10 hover:bg-[var(--bg-card)] transition-colors group"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">
                ← Back
              </p>
              <h3 className="font-display text-3xl mb-2 group-hover:text-[var(--accent-red-bright)] transition-colors">
                The Domain
              </h3>
              <p className="text-sm text-[var(--text-dim)]">
                Seven bounded contexts that own these entities.
              </p>
            </Link>
            <Link
              href="/glossary"
              className="bg-[var(--bg)] p-8 lg:p-10 hover:bg-[var(--bg-card)] transition-colors group"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">
                Continue →
              </p>
              <h3 className="font-display text-3xl mb-2 group-hover:text-[var(--accent-red-bright)] transition-colors">
                The Vocabulary
              </h3>
              <p className="text-sm text-[var(--text-dim)]">
                Definitions for every entity above, by context.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Stat({
  value,
  label,
  hint,
  accent,
}: {
  value: string
  label: string
  hint: string
  accent?: string
}) {
  return (
    <div className="bg-[var(--bg)] p-6 lg:p-8">
      <p
        className="font-display text-5xl lg:text-6xl mb-2 leading-none"
        style={accent ? { color: `var(--accent-${accent})` } : undefined}
      >
        {value}
      </p>
      <p className="text-sm font-medium text-[var(--text)] mb-1">{label}</p>
      <p className="text-xs text-[var(--text-muted)]">{hint}</p>
    </div>
  )
}
