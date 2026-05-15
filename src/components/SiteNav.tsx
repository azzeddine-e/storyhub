'use client'

import Image from 'next/image'
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

// next/image with `unoptimized: true` does not auto-prefix public-folder URLs
// with the configured basePath/assetPrefix, so we apply it manually here so
// that assets resolve correctly on GitHub Pages (served from /storyhub/).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

// Strip a single trailing slash unless the path is just "/".
// Needed because `trailingSlash: true` in next.config.ts makes
// usePathname() return e.g. "/contexts/" while NAV stores "/contexts".
const normalize = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p)

export default function SiteNav() {
  const pathname = usePathname()
  const current = normalize(pathname ?? '/')
  const isActive = (href: string) => current === normalize(href)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={`${BASE_PATH}/cnn-logo.svg`}
            alt="CNN"
            width={1000}
            height={476}
            priority
            className="h-6 w-auto brightness-0 invert"
          />
          <span className="h-6 w-px bg-[var(--border-strong)]" aria-hidden />
          <span className="text-sm font-semibold tracking-tight">StoryHub</span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-7 text-sm"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                aria-current={active ? 'page' : undefined}
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
            {NAV.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block px-3 py-2 rounded text-sm ${
                    active
                      ? 'bg-[var(--bg-card)] text-[var(--text)] underline decoration-[var(--accent-red)] decoration-2 underline-offset-4'
                      : 'text-[var(--text-dim)] hover:text-[var(--text)] hover:bg-[var(--bg-card)]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </details>
      </div>
    </header>
  )
}
