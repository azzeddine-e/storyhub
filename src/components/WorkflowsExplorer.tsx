'use client'

import { useState } from 'react'
import type { Workflow } from '@/data/workflows'

interface Props {
  workflows: Workflow[]
}

export default function WorkflowsExplorer({ workflows }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>(workflows[0].slug)
  const active = workflows.find((w) => w.slug === activeSlug) ?? workflows[0]

  return (
    <div>
      {/* At a glance bar */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-6">
            Workflow types at a glance
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {workflows.map((w) => (
              <button
                key={w.slug}
                onClick={() => {
                  setActiveSlug(w.slug)
                  if (typeof window !== 'undefined') {
                    document
                      .getElementById('detail')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className={`bg-[var(--bg)] p-6 text-left card-hover relative overflow-hidden group ${
                  activeSlug === w.slug ? 'ring-1 ring-inset' : ''
                }`}
                style={
                  activeSlug === w.slug
                    ? { boxShadow: `inset 0 0 0 1px var(--accent-${w.accent})` }
                    : undefined
                }
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="font-mono-jb text-[10px] tracking-widest"
                    style={{ color: `var(--accent-${w.accent})` }}
                  >
                    0{w.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {w.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-1 leading-tight">
                  {w.type}
                  {w.variant && (
                    <span className="block text-base text-[var(--text-dim)] italic font-display">
                      {w.variant}
                    </span>
                  )}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-3 mb-3 font-mono-jb leading-relaxed">
                  {w.shape}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {w.primaryDesks
                    .split(',')
                    .slice(0, 3)
                    .map((d) => (
                      <span
                        key={d}
                        className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--bg-card)] text-[var(--text-muted)]"
                      >
                        {d.trim()}
                      </span>
                    ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active workflow detail */}
      <section id="detail" className="border-b border-[var(--border)] scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-mono-jb text-xs tracking-widest"
                  style={{ color: `var(--accent-${active.accent})` }}
                >
                  WORKFLOW 0{active.number}
                </span>
                <span className="h-px flex-1 bg-[var(--border)] max-w-[100px]" />
              </div>
              <h2 className="font-display text-5xl lg:text-6xl mb-3 leading-[0.95] text-balance">
                {active.type}
                {active.variant && (
                  <span className="block italic text-[var(--text-dim)] text-4xl">
                    {active.variant}
                  </span>
                )}
              </h2>
              <p className="text-lg text-[var(--text-dim)] leading-relaxed max-w-3xl text-pretty">
                {active.intro}
              </p>
            </div>
            <div className="space-y-6 lg:border-l lg:border-[var(--border)] lg:pl-8">
              <Meta label="Trigger" value={active.trigger} />
              <Meta label="Duration" value={active.duration} />
              <Meta label="Primary Desks" value={active.primaryDesks} />
              <Meta label="Shape" value={active.shape} mono />
            </div>
          </div>

          {/* Phase flow */}
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-6">
            Phases ({active.phases.length})
          </p>

          <div className="space-y-px bg-[var(--border)]">
            {active.phases.map((phase, i) => (
              <article key={phase.name} className="bg-[var(--bg)] p-8 lg:p-10">
                <div className="grid lg:grid-cols-[80px_1fr_280px] gap-8">
                  {/* Step number */}
                  <div className="flex flex-col items-start">
                    <div
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-display text-lg"
                      style={{
                        borderColor: `var(--accent-${active.accent})`,
                        color: `var(--accent-${active.accent})`,
                      }}
                    >
                      {i + 1}
                    </div>
                    {i < active.phases.length - 1 && (
                      <div className="w-px flex-1 bg-[var(--border)] ml-6 mt-3 hidden lg:block min-h-[40px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-3xl mb-1 leading-tight">{phase.name}</h3>
                    <p className="italic text-[var(--text-dim)] mb-5 text-base">
                      {phase.tagline}
                    </p>
                    <ul className="space-y-2.5">
                      {phase.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-sm leading-relaxed text-[var(--text-dim)]">
                          <span className="text-[var(--text-muted)] flex-shrink-0 w-3 mt-2">
                            —
                          </span>
                          <span className="text-pretty">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Roles */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">
                      Key roles
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {phase.keyRoles.map((role) => (
                        <span
                          key={role}
                          className="text-xs px-2.5 py-1 rounded border border-[var(--border-strong)] text-[var(--text-dim)]"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-processes note */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Sub-processes that run alongside
          </p>
          <h2 className="font-display text-3xl lg:text-4xl mb-10 max-w-3xl leading-tight text-balance">
            Three patterns cut across all workflows.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
            {[
              {
                title: 'TRIAD Review',
                body:
                  'Parallel, not sequential. Editor sends to one, two, or three pillars based on what the Story needs. DC has dedicated TRIAD staff (2 standards, 1 fact check, 1 lawyer); other desks tap a pool resource on demand.',
              },
              {
                title: 'Daily Meeting Cadences',
                body:
                  "DC's pattern: 8:30 / 9:00 / 9:40 / 4:00 / 4:15. International layers handover calls between regional shifts. Each desk has its own cadence.",
              },
              {
                title: 'Deployment Approval',
                body:
                  'Tiered by cost. Small spends approved at desk-editor level; larger ones need multiple sign-offs. Currently runs through a SharePoint pitch tool.',
              },
            ].map((s) => (
              <div key={s.title} className="bg-[var(--bg)] p-8">
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Meta({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] mb-2">
        {label}
      </p>
      <p
        className={`text-sm text-[var(--text-dim)] leading-relaxed ${
          mono ? 'font-mono-jb text-[13px]' : ''
        }`}
      >
        {value}
      </p>
    </div>
  )
}
