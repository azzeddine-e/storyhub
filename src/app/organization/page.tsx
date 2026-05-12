import PageHero from '@/components/PageHero'
import { editorialGroups, desks, horizontals, orgLayers, personas } from '@/data/organization'

export default function OrganizationPage() {
  const wave1 = desks.filter((d) => d.priorityWave === 'Wave 1')
  const wave2 = desks.filter((d) => d.priorityWave === 'Wave 2')
  const tbd = desks.filter((d) => d.priorityWave === 'TBD')

  return (
    <div>
      <PageHero
        eyebrow="06 — The Organization"
        title="Two orthogonal axes. Five editorial groups."
        subtitle="Vertical desks own subject-matter coverage. Horizontal teams span all desks. Layers within verticals — Hub, Desk, Beat, Team — map inconsistently. International runs a tri-hub follow-the-sun model. DC has six teams under three beat leaders."
        accent="emerald"
      />

      {/* Editorial Groups */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Editorial Groups
          </p>
          <h2 className="font-display text-4xl mb-2">Five-way grouping above both axes.</h2>
          <p className="text-[var(--text-dim)] mb-10 max-w-2xl">
            Every desk and every horizontal rolls up to exactly one group.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--border)]">
            {editorialGroups.map((g, i) => (
              <div key={g.name} className="bg-[var(--bg)] p-6">
                <span className="font-mono-jb text-[10px] tracking-widest text-[var(--text-muted)] mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="font-semibold mb-2 text-[15px] leading-tight">{g.name}</h3>
                <p className="text-xs text-[var(--text-dim)] leading-relaxed">{g.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals (Desks) */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Verticals — Desks
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-4">
            {desks.length} desks across {editorialGroups.length} groups.
          </h2>
          <p className="text-[var(--text-dim)] mb-12 max-w-2xl">
            Build prioritization is staged across waves. Wave 1 gets the deepest discovery and the
            first build slot.
          </p>

          {[
            { label: 'Wave 1', items: wave1, accent: 'red' },
            { label: 'Wave 2', items: wave2, accent: 'amber' },
            { label: 'TBD', items: tbd, accent: 'cyan' },
          ].map((wave) => (
            <div key={wave.label} className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: `var(--accent-${wave.accent})` }}
                />
                <h3 className="font-mono-jb text-xs tracking-widest uppercase text-[var(--text-dim)]">
                  {wave.label}
                </h3>
                <span className="text-xs text-[var(--text-muted)]">
                  {wave.items.length} {wave.items.length === 1 ? 'desk' : 'desks'}
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
                {wave.items.map((d) => (
                  <div key={d.name} className="bg-[var(--bg)] p-6">
                    <h4 className="font-display text-2xl leading-tight mb-1">{d.name}</h4>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
                      {d.primaryWorkflow}
                    </p>
                    <p className="text-xs text-[var(--text-dim)] font-mono-jb leading-relaxed">
                      {d.mix}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Horizontals */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Horizontals — Cross-cutting Teams
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-12 max-w-3xl leading-tight text-balance">
            These teams touch every desk.
          </h2>
          <div className="space-y-px bg-[var(--border)]">
            {horizontals.map((h) => (
              <div
                key={h.name}
                className="bg-[var(--bg)] p-6 lg:p-8 grid lg:grid-cols-[2fr_1fr_2fr] gap-6"
              >
                <h3 className="font-semibold text-[15px]">{h.name}</h3>
                <p className="text-xs uppercase tracking-wider text-[var(--accent-emerald)]">
                  {h.group}
                </p>
                <p className="text-sm text-[var(--text-dim)]">{h.spans}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Org Layers */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Organizational layers
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-4 max-w-3xl leading-tight text-balance">
            Six layers. They don&apos;t all stack the same way at every desk.
          </h2>
          <p className="text-[var(--text-dim)] mb-12 max-w-2xl">
            Some desks collapse Hub and Desk. DC uses Beat/Team distinctly; National doesn&apos;t.
            The proposed model simplifies to two required layers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {orgLayers.map((l) => (
              <div key={l.name} className="bg-[var(--bg)] p-6">
                <h3 className="font-display text-2xl mb-2">{l.name}</h3>
                <p className="text-sm text-[var(--text-dim)] mb-3 leading-relaxed">{l.definition}</p>
                <p className="text-xs text-[var(--text-muted)] italic leading-relaxed">{l.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
            Editorial personas
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-12 max-w-2xl leading-tight">
            Who does the work.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {personas.map((p) => (
              <div key={p.name} className="bg-[var(--bg)] p-6">
                <h3 className="font-semibold mb-2 text-[15px]">{p.name}</h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
