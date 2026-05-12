'use client'

import { useState } from 'react'
import {
  entities,
  relationships,
  tierMeta,
  getEntityById,
  type EntityTier,
} from '@/data/erd'

const TIER_ACCENT_VAR: Record<EntityTier, string> = {
  editorial: 'var(--accent-red)',
  production: 'var(--accent-amber)',
  org: 'var(--accent-emerald)',
}

export default function ErdEntityExplorer() {
  const [activeTier, setActiveTier] = useState<EntityTier | 'all'>('all')
  const [selected, setSelected] = useState<string>('story')

  const filtered = entities.filter((e) =>
    activeTier === 'all' ? true : e.tier === activeTier,
  )
  const selectedEntity = getEntityById(selected)
  const outgoing = relationships.filter((r) => r.from === selected)
  const incoming = relationships.filter((r) => r.to === selected)

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-6">
      {/* Sidebar */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1 mb-3">
          <FilterPill
            label="All"
            active={activeTier === 'all'}
            onClick={() => setActiveTier('all')}
          />
          {(Object.keys(tierMeta) as EntityTier[]).map((t) => (
            <FilterPill
              key={t}
              label={tierMeta[t].label}
              active={activeTier === t}
              accent={TIER_ACCENT_VAR[t]}
              onClick={() => setActiveTier(t)}
            />
          ))}
        </div>
        <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--bg-elevated)]">
          {filtered.map((e) => {
            const isActive = e.id === selected
            return (
              <button
                key={e.id}
                type="button"
                onClick={() => setSelected(e.id)}
                className={`w-full text-left px-4 py-3 border-b border-[var(--border)] last:border-b-0 transition-colors ${
                  isActive
                    ? 'bg-[var(--bg-card)]'
                    : 'hover:bg-[var(--bg-card)]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-medium text-sm"
                    style={{ color: isActive ? TIER_ACCENT_VAR[e.tier] : 'var(--text)' }}
                  >
                    {e.name}
                    {e.isCore && (
                      <span className="ml-2 text-[9px] uppercase tracking-widest text-[var(--text-muted)]">
                        core
                      </span>
                    )}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: TIER_ACCENT_VAR[e.tier] }}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Detail */}
      <div>
        {selectedEntity && (
          <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-[10px] uppercase tracking-[0.22em] font-medium"
                style={{ color: TIER_ACCENT_VAR[selectedEntity.tier] }}
              >
                {tierMeta[selectedEntity.tier].label}
              </span>
              {selectedEntity.isCore && (
                <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  · Core entity
                </span>
              )}
            </div>
            <h3 className="font-display text-4xl mb-4">
              {selectedEntity.name}
              {selectedEntity.note && (
                <span className="text-[var(--text-muted)] text-base font-mono-jb ml-3">
                  ({selectedEntity.note})
                </span>
              )}
            </h3>
            <p className="text-[var(--text-dim)] leading-relaxed mb-8 max-w-3xl">
              {selectedEntity.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <RelationList
                title="Outgoing"
                emptyLabel="No outgoing relationships."
                items={outgoing.map((r) => {
                  const target = getEntityById(r.to)
                  return {
                    id: r.to,
                    label: r.label,
                    name: target?.name ?? r.to,
                    accent: target ? TIER_ACCENT_VAR[target.tier] : 'var(--text-dim)',
                  }
                })}
                onClick={(id) => setSelected(id)}
              />
              <RelationList
                title="Incoming"
                emptyLabel="No incoming relationships."
                items={incoming.map((r) => {
                  const source = getEntityById(r.from)
                  return {
                    id: r.from,
                    label: r.label,
                    name: source?.name ?? r.from,
                    accent: source ? TIER_ACCENT_VAR[source.tier] : 'var(--text-dim)',
                  }
                })}
                onClick={(id) => setSelected(id)}
                inverse
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function FilterPill({
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
      type="button"
      onClick={onClick}
      className={`text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded border transition-colors ${
        active
          ? 'text-[var(--text)] border-[var(--text-dim)]'
          : 'text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--border-strong)] hover:text-[var(--text-dim)]'
      }`}
      style={active && accent ? { borderColor: accent, color: accent } : undefined}
    >
      {label}
    </button>
  )
}

function RelationList({
  title,
  items,
  emptyLabel,
  onClick,
  inverse,
}: {
  title: string
  items: { id: string; name: string; label: string; accent: string }[]
  emptyLabel: string
  onClick: (id: string) => void
  inverse?: boolean
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-3">
        {title}
      </p>
      {items.length === 0 ? (
        <p className="text-sm text-[var(--text-muted)] italic">{emptyLabel}</p>
      ) : (
        <ul className="space-y-1.5">
          {items.map((item, idx) => (
            <li key={`${item.id}-${item.label}-${idx}`}>
              <button
                type="button"
                onClick={() => onClick(item.id)}
                className="w-full text-left flex items-center gap-2 px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-card)] transition-colors group"
              >
                <span
                  className="font-mono-jb text-[10px] uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{
                    color: item.accent,
                    background: 'color-mix(in srgb, currentColor 12%, transparent)',
                  }}
                >
                  {item.label}
                </span>
                <span className="text-sm text-[var(--text)] group-hover:text-[var(--accent-red-bright)] transition-colors">
                  {inverse ? '←' : '→'} {item.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
