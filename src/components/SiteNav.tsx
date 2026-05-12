'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Overview' },
  { href: '/journey', label: 'The Journey' },
  { href: '/contexts', label: 'Domain' },
  { href: '/erd', label: 'ERD' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/workflows', label: 'Workflows' },
  { href: '/organization', label: 'Organization' },
  { href: '/decisions', label: 'Decisions' },
  { href: '/next-steps', label: 'Next Steps' },
]

export default function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded bg-[var(--accent-red)] flex items-center justify-center text-white font-bold text-xs">
            CNN
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Discovery Synthesis
            </span>
            <span className="text-sm font-semibold tracking-tight">StoryHub</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={`nav-link ${
                  active ? 'text-[var(--text)]' : 'text-[var(--text-dim)] hover:text-[var(--text)]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
            Draft v1.0
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
        </div>

        {/* Mobile: simple compact menu */}
        <details className="lg:hidden relative">
          <summary className="list-none cursor-pointer p-2 -mr-2 text-[var(--text-dim)]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </summary>
          <div className="absolute right-0 top-full mt-2 w-56 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-2 shadow-xl">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded text-sm ${
                  pathname === item.href
                    ? 'bg-[var(--bg-card)] text-[var(--text)]'
                    : 'text-[var(--text-dim)] hover:text-[var(--text)] hover:bg-[var(--bg-card)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  )
}
