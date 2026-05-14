import Link from 'next/link'
import { contexts } from '@/data/contexts'
import { workflows } from '@/data/workflows'
import { glossary } from '@/data/glossary'
import { desks } from '@/data/organization'
import { decisions, keyFindings } from '@/data/decisions'

const STATS = [
  { value: '2', unit: 'weeks', label: 'Discovery period', sub: 'Apr 22 – May 6, 2026' },
  { value: '8', unit: 'desk', label: 'Discovery sessions', sub: '+ 3 technical explorations' },
  { value: '60', unit: 'people', label: 'Stakeholders engaged', sub: 'across CNN editorial' },
  { value: '25+', unit: 'tools', label: 'In active daily use', sub: 'Airtable named only 5' },
  { value: '100', unit: 'stories', label: 'Per day across CNN', sub: '~100–120 daily volume' },
  { value: '70/30', unit: 'split', label: 'StoryHub / Stellar', sub: 'where stories originate' },
]

const SECTIONS = [
  {
    href: '/journey',
    eyebrow: '01',
    title: 'The Journey',
    description:
      'Two weeks of discovery — the sessions we sat in on, the colleagues Airtable spoke with, and the three findings that reshaped how we see the build.',
    accent: 'red',
  },
  {
    href: '/contexts',
    eyebrow: '02',
    title: 'The Domain',
    description: `Seven bounded contexts define the editorial landscape — Newsgathering, Editorial Production, TRIAD, Publishing, Audience, Coverage Operations, Asset Management. Where they meet is where StoryHub lives.`,
    accent: 'amber',
  },
  {
    href: '/erd',
    eyebrow: '03',
    title: 'The Model',
    description:
      '15 entities, 25 relationships. The working ERD Airtable proposed to us — Story at the center, Topics tagging it, Storylines and Initiatives grouping it, Deliverables shipping it, Desks owning it. An interactive diagram you can focus and walk.',
    accent: 'orange',
  },
  {
    href: '/glossary',
    eyebrow: '04',
    title: 'The Vocabulary',
    description: `${glossary.length} terms across 7 contexts. ${glossary.filter((t) => t.status === 'confirmed').length} confirmed, ${glossary.filter((t) => t.status === 'open').length} still open. Search, filter, and align on the language.`,
    accent: 'blue',
  },
  {
    href: '/workflows',
    eyebrow: '05',
    title: 'The Workflows',
    description: `Six workflow types — Planned Editorial (news + calendar), Live News, Live Event, Breaking, and Contracted. Each with its own shape, trigger, and rhythm.`,
    accent: 'rose',
  },
  {
    href: '/organization',
    eyebrow: '06',
    title: 'The Organization',
    description: `${desks.length} desks across 5 editorial groups. The org reads as a grid, not a tree — verticals own coverage; horizontal teams cut across every desk.`,
    accent: 'emerald',
  },
  {
    href: '/decisions',
    eyebrow: '07',
    title: 'The Decisions',
    description: `${decisions.length} working positions on key design choices. Each needs validation or refinement before build can begin.`,
    accent: 'purple',
  },
  {
    href: '/next-steps',
    eyebrow: '08',
    title: 'Next Steps',
    description:
      'Four 60–90 minute sessions over two weeks (May 11–22). Sprint 2 proposal: lock the data model, finalize org structure, validate workflows, scope integrations.',
    accent: 'cyan',
  },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--accent-red)] opacity-[0.06] blur-3xl pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-32">
          <div className="flex items-center gap-3 mb-10 fade-up">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-red)] font-medium">
              Discovery Synthesis
            </span>
            <span className="h-px flex-1 bg-[var(--border)] max-w-[120px]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              May 2026
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] mb-8 max-w-5xl text-balance fade-up">
            Inside the build of{' '}
            <span className="text-[var(--accent-red)] italic">CNN&apos;s</span>{' '}
            new editorial system.
          </h1>

          <p
            className="text-lg lg:text-xl text-[var(--text-dim)] max-w-2xl leading-relaxed mb-12 text-pretty fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Between April 22 and May 6, we — the CNN product, engineering, and design team —
            partnered with Airtable on a two-week discovery sprint. Airtable ran eight desk-level
            sessions and three technical explorations with roughly 60 of our editorial colleagues;
            we sat through every one. This site is our synthesis of what Airtable proposed back
            to us, what we observed in the rooms, and where the picture still needs sharpening.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Link
              href="/journey"
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red-strong-hover)] text-white text-sm font-medium rounded transition-colors"
            >
              Start the Journey
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[var(--border-strong)] hover:border-[var(--text-dim)] text-sm font-medium rounded transition-colors"
            >
              Browse the glossary
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-10">
            By the numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--border)]">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[var(--bg)] p-6 lg:p-8">
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-display text-5xl lg:text-6xl leading-none">{s.value}</span>
                  <span className="text-xs text-[var(--text-muted)]">{s.unit}</span>
                </div>
                <p className="text-sm font-medium mb-1">{s.label}</p>
                <p className="text-xs text-[var(--text-muted)]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE LEARNED — three findings */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-red)] mb-4">
                What we learned
              </p>
              <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] text-balance">
                Three findings reframed how we see the build.
              </h2>
            </div>
            <p className="text-[var(--text-dim)] text-lg leading-relaxed self-end max-w-xl">
              The shape of our editorial operation was both more consistent and more varied than
              we expected going in. Underneath every desk we watched the same lifecycle running —
              but the front end, the org, and the tooling each turned out to be deeper than
              Airtable assumed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
            {keyFindings.map((f, i) => (
              <div key={f.title} className="bg-[var(--bg)] p-8 lg:p-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl text-[var(--accent-red)]">
                    0{i + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Finding
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-4 text-balance">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed text-pretty">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CARDS */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
                Explore the synthesis
              </p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                Eight sections to read in any order.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
            {SECTIONS.map((sec) => (
              <Link
                key={sec.href}
                href={sec.href}
                className="group bg-[var(--bg)] p-8 lg:p-10 card-hover relative overflow-hidden"
              >
                <div className="flex items-start gap-6 mb-5">
                  <span className="font-mono-jb text-[10px] tracking-wider text-[var(--text-muted)] mt-2">
                    {sec.eyebrow}
                  </span>
                  <h3 className="font-display text-3xl lg:text-4xl leading-tight flex-1">
                    {sec.title}
                  </h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mt-2 text-[var(--text-muted)] group-hover:text-[var(--accent-red)] group-hover:translate-x-1 transition-all"
                  >
                    <path d="M5 10h10m0 0L11 6m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed pl-12 text-pretty">
                  {sec.description}
                </p>

                <span
                  className="absolute bottom-0 left-0 h-px transition-all duration-300 group-hover:w-full w-12"
                  style={{ background: `var(--accent-${sec.accent})` }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK CONTEXT PREVIEW */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
                The seven contexts
              </p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight max-w-2xl text-balance">
                Each context owns its own vocabulary. Where they meet is where StoryHub does most
                of its work.
              </h2>
            </div>
            <Link
              href="/contexts"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-[var(--text)] whitespace-nowrap self-start lg:self-end"
            >
              Open the full domain map
              <span>→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-px bg-[var(--border)]">
            {contexts.map((ctx) => (
              <Link
                key={ctx.slug}
                href={`/contexts#${ctx.slug}`}
                className="bg-[var(--bg)] p-5 hover:bg-[var(--bg-card)] transition-colors group"
              >
                <div
                  className="font-mono-jb text-[10px] tracking-widest mb-3"
                  style={{ color: `var(--accent-${ctx.accent})` }}
                >
                  {ctx.shortName}
                </div>
                <p className="text-sm font-medium leading-tight mb-1 group-hover:text-[var(--text)]">
                  {ctx.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-emerald)] mb-4">
                Tell us where we got this wrong
              </p>
              <h2 className="font-display text-3xl lg:text-4xl leading-tight max-w-3xl text-balance mb-4">
                Each section has its own discussion thread.
              </h2>
              <p className="text-[var(--text-dim)] max-w-2xl leading-relaxed">
                The pages where our synthesis is most likely to need correction —
                {' '}<Link href="/erd" className="text-[var(--text)] underline underline-offset-2 hover:text-[var(--accent-red-bright)]">ERD</Link>,
                {' '}<Link href="/workflows" className="text-[var(--text)] underline underline-offset-2 hover:text-[var(--accent-red-bright)]">Workflows</Link>,
                {' '}<Link href="/contexts" className="text-[var(--text)] underline underline-offset-2 hover:text-[var(--accent-red-bright)]">Domain</Link>,
                {' '}<Link href="/decisions" className="text-[var(--text)] underline underline-offset-2 hover:text-[var(--accent-red-bright)]">Decisions</Link>.
                {' '}Walk through them and tell us where we got it wrong.
              </p>
            </div>
            <Link
              href="/decisions#discussion"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-[var(--border-strong)] hover:border-[var(--text-dim)] text-sm font-medium rounded transition-colors whitespace-nowrap"
            >
              Open the decisions thread
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO READ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-4">
                What we want from the readout
              </p>
              <p className="font-display text-3xl lg:text-4xl leading-tight max-w-3xl text-balance">
                Three things, in order: confidence we&apos;ve captured your operation accurately,
                clarity on where we still need to get specific together, and a shared plan for
                the next set of working sessions.
              </p>
            </div>
            <Link
              href="/next-steps"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--text)] hover:bg-white text-[var(--bg)] text-sm font-medium rounded transition-colors whitespace-nowrap"
            >
              See Sprint 2 plan
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
