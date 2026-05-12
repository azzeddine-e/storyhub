'use client'

import { useMemo, useState } from 'react'
import type { GlossaryTerm } from '@/data/glossary'

const CONTEXTS = [
  'Newsgathering',
  'Editorial Production',
  'TRIAD',
  'Publishing',
  'Audience',
  'Coverage Operations',
  'Asset Management',
] as const

const CONTEXT_ACCENT: Record<(typeof CONTEXTS)[number], string> = {
  Newsgathering: 'amber',
  'Editorial Production': 'red',
  TRIAD: 'purple',
  Publishing: 'blue',
  Audience: 'emerald',
  'Coverage Operations': 'cyan',
  'Asset Management': 'orange',
}

interface Props {
  terms: GlossaryTerm[]
}

export default function GlossaryExplorer({ terms }: Props) {
  const [query, setQuery] = useState('')
  const [activeContext, setActiveContext] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<'all' | 'confirmed' | 'open'>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return terms.filter((t) => {
      if (activeContext && t.context !== activeContext) return false
      if (statusFilter !== 'all' && t.status !== statusFilter) return false
      if (q && !t.term.toLowerCase().includes(q) && !t.definition.toLowerCase().includes(q)) {
        return false
      }
      return true
    })
  }, [terms, query, activeContext, statusFilter])

  // Group by context for display
  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryTerm[]>()
    for (const t of filtered) {
      if (!map.has(t.context)) map.set(t.context, [])
      map.get(t.context)!.push(t)
    }
    return Array.from(map.entries())
  }, [filtered])

  return (
    <div>
      {/* Filter bar */}
      <section className="sticky top-16 z-40 backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col lg:flex-row gap-4 lg:items-center">
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms or definitions…"
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded pl-9 pr-3 py-2 text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-dim)] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:ml-auto">
            <FilterChip
              label="All contexts"
              active={activeContext === null}
              onClick={() => setActiveContext(null)}
            />
            {CONTEXTS.map((c) => (
              <FilterChip
                key={c}
                label={c}
                accent={CONTEXT_ACCENT[c]}
                active={activeContext === c}
                onClick={() => setActiveContext(activeContext === c ? null : c)}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 border border-[var(--border)] rounded p-0.5">
            {(['all', 'confirmed', 'open'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded transition-colors ${
                  statusFilter === s
                    ? 'bg-[var(--bg-card)] text-[var(--text)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-dim)]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-sm text-[var(--text-muted)]">
              <span className="text-[var(--text)] font-semibold">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'term' : 'terms'}
              {activeContext && (
                <>
                  {' '}
                  in <span className="text-[var(--text-dim)]">{activeContext}</span>
                </>
              )}
            </p>
            {(query || activeContext || statusFilter !== 'all') && (
              <button
                onClick={() => {
                  setQuery('')
                  setActiveContext(null)
                  setStatusFilter('all')
                }}
                className="text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {grouped.length === 0 ? (
            <div className="text-center py-20 text-[var(--text-muted)]">
              No terms match the current filters.
            </div>
          ) : (
            <div className="space-y-16">
              {grouped.map(([context, items]) => (
                <div key={context}>
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[var(--border)]">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: `var(--accent-${
                          CONTEXT_ACCENT[context as (typeof CONTEXTS)[number]]
                        })`,
                      }}
                    />
                    <h2 className="font-display text-2xl">{context}</h2>
                    <span className="text-xs text-[var(--text-muted)]">{items.length} terms</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
                    {items.map((t) => (
                      <article
                        key={t.term}
                        className="bg-[var(--bg)] p-6 hover:bg-[var(--bg-card)] transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="font-semibold text-base flex-1">{t.term}</h3>
                          <StatusBadge status={t.status} />
                        </div>
                        <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-3">
                          {t.definition}
                        </p>
                        {t.note && (
                          <div className="mt-3 pt-3 border-t border-[var(--border)] flex gap-2">
                            <span className="text-[var(--accent-amber)] text-sm leading-tight">
                              ⚠
                            </span>
                            <p className="text-xs text-[var(--text-muted)] leading-relaxed italic">
                              {t.note}
                            </p>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function FilterChip({
  label,
  active,
  onClick,
  accent,
}: {
  label: string
  active: boolean
  onClick: () => void
  accent?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
        active
          ? 'bg-[var(--text)] text-[var(--bg)] border-[var(--text)]'
          : 'border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--text-dim)] hover:text-[var(--text)]'
      }`}
      style={
        active && accent
          ? { background: `var(--accent-${accent})`, borderColor: `var(--accent-${accent})`, color: 'white' }
          : undefined
      }
    >
      {label}
    </button>
  )
}

function StatusBadge({ status }: { status: 'confirmed' | 'open' }) {
  if (status === 'confirmed') {
    return (
      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--accent-emerald)]/40 text-[var(--accent-emerald)] flex items-center gap-1 flex-shrink-0">
        <span className="w-1 h-1 rounded-full bg-[var(--accent-emerald)]" />
        Confirmed
      </span>
    )
  }
  return (
    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--accent-amber)]/40 text-[var(--accent-amber)] flex items-center gap-1 flex-shrink-0">
      <span className="w-1 h-1 rounded-full bg-[var(--accent-amber)]" />
      Open
    </span>
  )
}
