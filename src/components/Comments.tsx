'use client'

import Giscus from '@giscus/react'
import { useEffect, useState } from 'react'

type Mapping = 'pathname' | 'url' | 'title' | 'og:title' | 'specific'

interface CommentsProps {
  /** Visible heading. Defaults to "Discussion". */
  heading?: string
  /** Subhead under the heading. */
  description?: string
  /** Mapping strategy. Defaults to 'pathname' so each page gets its own thread. */
  mapping?: Mapping
  /** Required when mapping="specific" — the discussion key (e.g. "decision-newsroom-as-product"). */
  term?: string
  /** Visual accent color for the eyebrow + divider. Defaults to red. */
  accent?: string
}

const REPO = process.env.NEXT_PUBLIC_GISCUS_REPO
const REPO_ID = process.env.NEXT_PUBLIC_GISCUS_REPO_ID
const CATEGORY = process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? 'General'
const CATEGORY_ID = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

export default function Comments({
  heading = 'Discussion',
  description = 'Have a correction, addition, or question? Drop it here. Threads are stored as GitHub Discussions — sign in with your GitHub account to post.',
  mapping = 'pathname',
  term,
  accent = 'red',
}: CommentsProps) {
  const configured = Boolean(REPO && REPO_ID && CATEGORY && CATEGORY_ID)

  // Avoid SSR mismatches and unnecessary iframe in dev: render after mount.
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="discussion"
      className="border-t border-[var(--border)] bg-[var(--bg-elevated)] scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[11px] uppercase tracking-[0.22em] font-medium"
            style={{ color: `var(--accent-${accent})` }}
          >
            {heading}
          </span>
          <span className="h-px flex-1 bg-[var(--border)] max-w-[80px]" />
        </div>
        <h2 className="font-display text-3xl lg:text-4xl mb-3 max-w-3xl text-balance">
          What did we miss? What did we get wrong?
        </h2>
        <p className="text-[var(--text-dim)] max-w-2xl leading-relaxed mb-10">
          {description}
        </p>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-6 lg:p-8">
          {!configured ? (
            <SetupCard />
          ) : !mounted ? (
            <Skeleton />
          ) : (
            <Giscus
              id={`giscus-${mapping}-${term ?? 'page'}`}
              repo={REPO as `${string}/${string}`}
              repoId={REPO_ID!}
              category={CATEGORY}
              categoryId={CATEGORY_ID!}
              mapping={mapping}
              term={mapping === 'specific' ? term : undefined}
              strict="1"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="transparent_dark"
              lang="en"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  )
}

function Skeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-10 rounded bg-[var(--bg-card)]" />
      <div className="h-24 rounded bg-[var(--bg-card)]" />
      <div className="flex gap-2">
        <div className="h-8 w-24 rounded bg-[var(--bg-card)]" />
      </div>
    </div>
  )
}

function SetupCard() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-amber)]" />
        <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent-amber)]">
          Comments not yet configured
        </span>
      </div>
      <p className="text-sm text-[var(--text-dim)] leading-relaxed max-w-2xl">
        This site uses{' '}
        <a
          href="https://giscus.app"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text)] underline underline-offset-2 hover:text-[var(--accent-red-bright)]"
        >
          Giscus
        </a>{' '}
        — feedback is stored as GitHub Discussions on a public repo. Once configured, every
        page gets its own thread mapped by pathname, and readers can sign in with GitHub to
        comment, react, and reply.
      </p>
      <ol className="space-y-3 text-sm text-[var(--text-dim)] max-w-2xl list-decimal pl-5 marker:text-[var(--text-muted)] marker:font-mono-jb">
        <li>
          Push this repo to GitHub (public) and enable{' '}
          <span className="font-mono-jb text-[var(--text)]">Discussions</span> under{' '}
          <span className="font-mono-jb text-[var(--text)]">Settings → General</span>.
        </li>
        <li>
          Install the{' '}
          <a
            href="https://github.com/apps/giscus"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text)] underline underline-offset-2 hover:text-[var(--accent-red-bright)]"
          >
            giscus app
          </a>{' '}
          on the repo.
        </li>
        <li>
          Visit{' '}
          <a
            href="https://giscus.app"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text)] underline underline-offset-2 hover:text-[var(--accent-red-bright)]"
          >
            giscus.app
          </a>{' '}
          and copy the four IDs into{' '}
          <span className="font-mono-jb text-[var(--text)]">.env.local</span>:
        </li>
      </ol>
      <pre className="text-[11px] font-mono-jb leading-relaxed bg-[var(--bg-elevated)] border border-[var(--border)] rounded p-4 overflow-x-auto text-[var(--text-dim)]">
{`NEXT_PUBLIC_GISCUS_REPO=owner/repo
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDO...
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO...`}
      </pre>
      <p className="text-xs text-[var(--text-muted)]">
        After restart, the iframe replaces this card automatically.
      </p>
    </div>
  )
}
