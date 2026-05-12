'use client'

import { useMemo, useState } from 'react'
import {
  entities,
  relationships,
  tierMeta,
  type ErdEntity,
  type ErdRelationship,
} from '@/data/erd'

const NODE_W = 168
const NODE_H = 64
const VIEW_W = 1500
const VIEW_H = 980
const LABEL_BG = '#0e1014'

const TIER_COLORS: Record<string, { stroke: string; fill: string; text: string }> = {
  editorial: { stroke: '#ef4444', fill: 'rgba(239,68,68,0.10)', text: '#ffb4b4' },
  production: { stroke: '#f59e0b', fill: 'rgba(245,158,11,0.10)', text: '#fcd591' },
  org: { stroke: '#10b981', fill: 'rgba(16,185,129,0.10)', text: '#9ee6c9' },
}

interface Props {
  /** When set, dim everything except the focused entity and its direct neighbors. */
  initialFocus?: string
}

interface PreparedEdge {
  rel: ErdRelationship
  index: number
  parallelIndex: number
  parallelCount: number
  /** -1 / +1 — which side of the line to bend toward */
  side: 1 | -1
  /** label split across lines */
  labelLines: string[]
}

export default function ErdDiagram({ initialFocus }: Props) {
  const [focus, setFocus] = useState<string | null>(initialFocus ?? null)

  const focusedNeighbors = useMemo(() => {
    if (!focus) return null
    const neighbors = new Set<string>([focus])
    relationships.forEach((r) => {
      if (r.from === focus) neighbors.add(r.to)
      if (r.to === focus) neighbors.add(r.from)
    })
    return neighbors
  }, [focus])

  const preparedEdges = useMemo<PreparedEdge[]>(() => {
    // Group edges by unordered pair so we can offset parallel ones.
    const groups = new Map<string, ErdRelationship[]>()
    relationships.forEach((r) => {
      const key = [r.from, r.to].sort().join('|')
      if (!groups.has(key)) groups.set(key, [])
      groups.get(key)!.push(r)
    })

    return relationships.map((r, idx) => {
      const key = [r.from, r.to].sort().join('|')
      const group = groups.get(key)!
      const parallelIndex = group.indexOf(r)
      const parallelCount = group.length

      // Side selection: if only one edge in the pair, alternate by global index
      // (keeps a pleasant overall visual rhythm). For parallel edges, force
      // opposite sides so the labels don't collide.
      let side: 1 | -1
      if (parallelCount === 1) {
        side = idx % 2 === 0 ? 1 : -1
      } else {
        side = parallelIndex === 0 ? 1 : -1
      }

      return {
        rel: r,
        index: idx,
        parallelIndex,
        parallelCount,
        side,
        labelLines: splitLabel(r.label),
      }
    })
  }, [])

  const isHighlighted = (id: string) => !focus || focusedNeighbors?.has(id)
  const isEdgeHighlighted = (from: string, to: string) =>
    !focus || from === focus || to === focus

  return (
    <div className="relative">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
        {Object.entries(tierMeta).map(([key, meta]) => (
          <div key={key} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm border"
              style={{
                background: TIER_COLORS[key].fill,
                borderColor: TIER_COLORS[key].stroke,
              }}
            />
            <span className="text-xs text-[var(--text-dim)]">
              <span className="text-[var(--text)] font-medium">{meta.label}</span>
              <span className="mx-1.5 text-[var(--text-muted)]">·</span>
              {meta.description}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 ml-auto">
          {focus ? (
            <button
              type="button"
              onClick={() => setFocus(null)}
              className="text-[11px] uppercase tracking-wider px-3 py-1 rounded border border-[var(--border-strong)] text-[var(--text-dim)] hover:text-[var(--text)] hover:border-[var(--text-dim)]"
            >
              Clear focus
            </button>
          ) : (
            <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              Click any entity to focus
            </span>
          )}
        </div>
      </div>

      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg overflow-hidden">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="w-full h-auto"
          style={{ minHeight: 540 }}
        >
          <defs>
            <marker
              id="erd-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#7a7f8a" />
            </marker>
            <marker
              id="erd-arrow-active"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#ef4444" />
            </marker>
            <pattern
              id="erd-grid"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="rgba(255,255,255,0.025)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width={VIEW_W} height={VIEW_H} fill="url(#erd-grid)" />

          {/* Edges (paths first so they sit behind nodes) */}
          {preparedEdges.map((pe) => {
            const a = entities.find((e) => e.id === pe.rel.from)
            const b = entities.find((e) => e.id === pe.rel.to)
            if (!a || !b) return null
            const active = isEdgeHighlighted(pe.rel.from, pe.rel.to)
            const { path } = computeEdge(a, b, pe.side, pe.parallelIndex, pe.parallelCount)
            return (
              <path
                key={`path-${pe.index}`}
                d={path}
                fill="none"
                stroke={active && focus ? '#ef4444' : '#3b3f48'}
                strokeWidth={active && focus ? 1.6 : 1.1}
                opacity={active ? 1 : 0.18}
                markerEnd={active && focus ? 'url(#erd-arrow-active)' : 'url(#erd-arrow)'}
                style={{ transition: 'opacity 0.18s' }}
              />
            )
          })}

          {/* Nodes */}
          {entities.map((e) => {
            const colors = TIER_COLORS[e.tier]
            const visible = isHighlighted(e.id)
            const isFocused = focus === e.id
            return (
              <g
                key={e.id}
                transform={`translate(${e.x - NODE_W / 2}, ${e.y - NODE_H / 2})`}
                opacity={visible ? 1 : 0.22}
                style={{ transition: 'opacity 0.18s', cursor: 'pointer' }}
                onClick={() => setFocus(focus === e.id ? (initialFocus ?? null) : e.id)}
              >
                {e.isCore && !isFocused && (
                  <rect
                    x={-4}
                    y={-4}
                    width={NODE_W + 8}
                    height={NODE_H + 8}
                    rx={12}
                    fill="none"
                    stroke={colors.stroke}
                    strokeWidth={1}
                    strokeDasharray="3 3"
                    opacity={0.45}
                  />
                )}
                <rect
                  width={NODE_W}
                  height={NODE_H}
                  rx={10}
                  fill={isFocused ? colors.stroke : colors.fill}
                  stroke={colors.stroke}
                  strokeWidth={isFocused ? 2 : e.isCore ? 1.8 : 1.1}
                  opacity={isFocused ? 0.95 : 1}
                />
                <text
                  x={NODE_W / 2}
                  y={NODE_H / 2 + (e.note ? -4 : 5)}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight={500}
                  fill={isFocused ? '#0b0c0f' : colors.text}
                  className="font-mono-jb"
                  style={{ userSelect: 'none', letterSpacing: '-0.01em' }}
                >
                  {e.name}
                </text>
                {e.note && (
                  <text
                    x={NODE_W / 2}
                    y={NODE_H / 2 + 12}
                    textAnchor="middle"
                    fontSize="10"
                    fill={isFocused ? 'rgba(0,0,0,0.7)' : '#8b8f99'}
                    className="font-mono-jb"
                    style={{ userSelect: 'none' }}
                  >
                    {e.note}
                  </text>
                )}
              </g>
            )
          })}

          {/* Labels — drawn last so they sit on top of everything */}
          {preparedEdges.map((pe) => {
            const a = entities.find((e) => e.id === pe.rel.from)
            const b = entities.find((e) => e.id === pe.rel.to)
            if (!a || !b) return null
            const active = isEdgeHighlighted(pe.rel.from, pe.rel.to)
            const { lx, ly } = computeEdge(a, b, pe.side, pe.parallelIndex, pe.parallelCount)
            const lineH = 11
            const totalH = pe.labelLines.length * lineH
            return (
              <g
                key={`lbl-${pe.index}`}
                opacity={active ? 1 : 0.18}
                style={{ transition: 'opacity 0.18s', pointerEvents: 'none' }}
              >
                {pe.labelLines.map((line, i) => {
                  const y = ly - totalH / 2 + lineH * (i + 0.85)
                  return (
                    <text
                      key={i}
                      x={lx}
                      y={y}
                      fontSize="10.5"
                      fill={active && focus ? '#ffd1d1' : '#a3a6ae'}
                      textAnchor="middle"
                      className="font-mono-jb"
                      style={{
                        paintOrder: 'stroke',
                        stroke: LABEL_BG,
                        strokeWidth: 7,
                        strokeLinejoin: 'round',
                        userSelect: 'none',
                      }}
                    >
                      {line}
                    </text>
                  )
                })}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

/** Split labels with " / " into two lines for readability. */
function splitLabel(label: string): string[] {
  if (label.includes(' / ')) {
    return label.split(' / ').map((s) => s.trim())
  }
  return [label]
}

/**
 * Compute a curved edge between two nodes, accounting for parallel-edge offsets.
 * Returns the SVG path and a label anchor point (lx, ly).
 */
function computeEdge(
  a: ErdEntity,
  b: ErdEntity,
  side: 1 | -1,
  parallelIndex: number,
  parallelCount: number,
): { path: string; lx: number; ly: number } {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const dist = Math.max(1, Math.sqrt(dx * dx + dy * dy))
  const ux = dx / dist
  const uy = dy / dist
  // Perpendicular unit vector
  const px = -uy
  const py = ux

  // Stop near the rectangular node edge
  const startOffset = rectExitDistance(NODE_W, NODE_H, ux, uy) + 4
  const endOffset = rectExitDistance(NODE_W, NODE_H, ux, uy) + 8
  const x1 = a.x + ux * startOffset
  const y1 = a.y + uy * startOffset
  const x2 = b.x - ux * endOffset
  const y2 = b.y - uy * endOffset

  // Curve magnitude: bigger for parallel edges so they fan out
  const baseCurve = Math.min(60, Math.max(28, dist * 0.15))
  const parallelOffset = parallelCount > 1 ? baseCurve * 0.9 : 0
  const curve = (baseCurve + parallelOffset) * side

  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const cx = mx + px * curve
  const cy = my + py * curve

  // Label anchor: along curve at t=0.5 (quadratic Bezier midpoint)
  const t = 0.5
  const lxRaw = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2
  const lyRaw = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2

  // Push label slightly further away from the line midpoint along perpendicular
  // to clear nearby nodes/lines.
  const labelPush = parallelCount > 1 ? 6 : 4
  const lx = lxRaw + px * labelPush * side
  const ly = lyRaw + py * labelPush * side

  const path = `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`

  return { path, lx, ly }
}

/**
 * For a centered axis-aligned rectangle of size (w, h), find the distance
 * from the center along the unit direction (ux, uy) to the rectangle edge.
 */
function rectExitDistance(w: number, h: number, ux: number, uy: number): number {
  const halfW = w / 2
  const halfH = h / 2
  const tx = ux === 0 ? Infinity : halfW / Math.abs(ux)
  const ty = uy === 0 ? Infinity : halfH / Math.abs(uy)
  return Math.min(tx, ty)
}
