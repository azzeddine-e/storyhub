import Image from 'next/image'
import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/cnn-logo.svg"
              alt="CNN"
              width={1000}
              height={476}
              className="h-7 w-auto brightness-0 invert"
            />
            <span className="h-7 w-px bg-[var(--border-strong)]" aria-hidden />
            <span className="text-sm font-semibold tracking-tight">StoryHub</span>
          </div>
          <p className="text-sm text-[var(--text-dim)] leading-relaxed max-w-xs">
            Our synthesis of Airtable&apos;s two-week discovery sprint with CNN editorial. Eight
            desk-level sessions, three technical sessions, sixty colleagues.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] mb-4">
            Source documents
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-dim)]">
            <li>Taxonomy &amp; Glossary</li>
            <li>Workflows &amp; Processes</li>
            <li>Design Sprint Synthesis</li>
            <li>
              <Link
                href="/erd"
                className="hover:text-[var(--text)] transition-colors underline-offset-2 hover:underline"
              >
                Entity Relationship Diagram →
              </Link>
            </li>
            <li>Requirements Workbook</li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] mb-4">
            Navigate
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              ['Journey', '/journey'],
              ['Domain', '/contexts'],
              ['ERD', '/erd'],
              ['Glossary', '/glossary'],
              ['Workflows', '/workflows'],
              ['Organization', '/organization'],
              ['Decisions', '/decisions'],
              ['Next Steps', '/next-steps'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>Discovery period: April 22 – May 6, 2026</span>
          <span>For internal validation</span>
        </div>
      </div>
    </footer>
  )
}
