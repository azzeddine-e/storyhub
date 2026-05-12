export type EntityTier = 'editorial' | 'production' | 'org'

export interface ErdEntity {
  id: string
  name: string
  tier: EntityTier
  description: string
  /** SVG canvas coordinates (1200 x 760 viewBox) */
  x: number
  y: number
  isCore?: boolean
  note?: string
}

export interface ErdRelationship {
  from: string
  to: string
  label: string
  /** path style: straight, curve up, curve down, etc. */
  curve?: 'auto' | 'up' | 'down'
}

export const entities: ErdEntity[] = [
  // Editorial tier
  {
    id: 'topics',
    name: 'Topics',
    tier: 'editorial',
    description:
      'Cross-cutting categorization for topic, region, beat. Currently deferred to Phase 2 — schema-only at launch.',
    x: 320,
    y: 110,
  },
  {
    id: 'intake',
    name: 'Intake',
    tier: 'editorial',
    description:
      'Pre-Story signal — formerly "Editorial". Discrete signal that may become a Story or feed an existing one. Inflection Point is the boundary.',
    x: 700,
    y: 230,
  },
  {
    id: 'initiative',
    name: 'Initiative',
    tier: 'editorial',
    description:
      'Longer-horizon editorial frame grouping multiple Storylines under a coordinated coverage plan. Used by Audience and Programming.',
    x: 170,
    y: 290,
  },
  {
    id: 'storyline',
    name: 'Storyline',
    tier: 'editorial',
    description:
      'Multi-day, multi-desk coverage arc grouping related Stories, Assets, and Events.',
    x: 430,
    y: 380,
  },
  {
    id: 'reporting-guidance',
    name: 'Reporting Guidance',
    tier: 'editorial',
    description:
      'Direction attached to Editorial covering the reporting itself — sourcing rules, standards constraints, narrative framing.',
    x: 170,
    y: 510,
  },
  {
    id: 'story',
    name: 'Story',
    tier: 'editorial',
    description:
      'Primary unit. Confirmed, assigned piece of coverage with a designated team, status, and link to Stellar.',
    x: 740,
    y: 480,
    isCore: true,
  },
  {
    id: 'event',
    name: 'Event',
    tier: 'production',
    description:
      'A scheduled real-world occurrence (hearing, press conference, launch) that one or more Stories may be tied to.',
    x: 470,
    y: 620,
  },

  // Production tier
  {
    id: 'assets',
    name: 'Assets',
    tier: 'production',
    description:
      'Media files, source documents, or reference links associated with Stories or Storylines. Lives across MediaSource, Mira, Cloudinary, Iconik.',
    x: 1000,
    y: 310,
  },
  {
    id: 'deliverables',
    name: 'Deliverables',
    tier: 'production',
    description:
      'Platform-specific outputs produced from a Story (digital article, linear segment, social cut, push alert).',
    x: 1080,
    y: 510,
  },
  {
    id: 'platforms',
    name: 'Platforms',
    tier: 'production',
    description: 'Publishing surfaces: Digital, Linear TV, Streaming, Social, Affiliate.',
    x: 1320,
    y: 510,
  },
  {
    id: 'deployment',
    name: 'Deployment',
    tier: 'production',
    description:
      'Sending personnel into the field, often requiring tiered approval by cost.',
    x: 880,
    y: 660,
  },
  {
    id: 'equipment',
    name: 'Equipment',
    tier: 'production',
    description:
      'Cameras, transmission gear, security, vehicles — the physical kit a deployment requires.',
    x: 1180,
    y: 660,
  },

  // Org tier
  {
    id: 'people',
    name: 'People',
    tier: 'org',
    description:
      'Reporters, producers, editors, photographers, and TRIAD reviewers. Belongs to a Desk; performs Functions.',
    x: 470,
    y: 780,
  },
  {
    id: 'desk',
    name: 'Desk',
    tier: 'org',
    description:
      'Newsroom unit responsible for coverage in a specific area. Primary unit of ownership. Includes Teams as optional sub-units.',
    x: 760,
    y: 880,
    note: 'includes Teams',
  },
  {
    id: 'function',
    name: 'Function',
    tier: 'org',
    description:
      'Role-based grouping of People — what someone does (Reporter, Producer, Editor) regardless of which Desk they sit in.',
    x: 250,
    y: 900,
  },
  {
    id: 'priority',
    name: 'Priority',
    tier: 'org',
    description:
      'T1 marks the network lead. Multi-dimensional — operates at desk, platform, and time-horizon levels.',
    x: 1080,
    y: 880,
  },
]

export const relationships: ErdRelationship[] = [
  { from: 'story', to: 'topics', label: 'tagged with' },
  { from: 'intake', to: 'topics', label: 'tagged with' },
  { from: 'storyline', to: 'initiative', label: 'rolls up to' },
  { from: 'story', to: 'storyline', label: 'rolls up to' },
  { from: 'intake', to: 'story', label: 'promotes to' },
  { from: 'storyline', to: 'reporting-guidance', label: 'guided by' },
  { from: 'story', to: 'reporting-guidance', label: 'guided by' },
  { from: 'event', to: 'story', label: 'drives' },
  { from: 'story', to: 'event', label: 'triggers' },
  { from: 'story', to: 'assets', label: 'uses' },
  { from: 'deliverables', to: 'assets', label: 'reference' },
  { from: 'story', to: 'deliverables', label: 'produces' },
  { from: 'deliverables', to: 'platforms', label: 'distributed to' },
  { from: 'story', to: 'deployment', label: 'triggers' },
  { from: 'deployment', to: 'equipment', label: 'requires' },
  { from: 'people', to: 'topics', label: 'subscribed to' },
  { from: 'people', to: 'storyline', label: 'owner / subscribed to' },
  { from: 'people', to: 'story', label: 'primary / secondary owner' },
  { from: 'people', to: 'desk', label: 'belongs to' },
  { from: 'people', to: 'function', label: 'engaged by' },
  { from: 'people', to: 'function', label: 'contributes to' },
  { from: 'function', to: 'reporting-guidance', label: 'informs' },
  { from: 'function', to: 'deliverables', label: 'produced by' },
  { from: 'desk', to: 'priority', label: 'prioritizes' },
  { from: 'desk', to: 'deliverables', label: 'owned by' },
]

export interface EntityRelationship {
  entity: string
  outgoing: { to: string; label: string }[]
  incoming: { from: string; label: string }[]
}

export function getEntityById(id: string): ErdEntity | undefined {
  return entities.find((e) => e.id === id)
}

export function getRelationshipsForEntity(id: string): EntityRelationship {
  return {
    entity: id,
    outgoing: relationships.filter((r) => r.from === id).map((r) => ({ to: r.to, label: r.label })),
    incoming: relationships.filter((r) => r.to === id).map((r) => ({ from: r.from, label: r.label })),
  }
}

export const tierMeta: Record<EntityTier, { label: string; accent: string; description: string }> = {
  editorial: {
    label: 'Editorial Core',
    accent: 'red',
    description: 'The journalism — what gets reported, organized, and published.',
  },
  production: {
    label: 'Production & Distribution',
    accent: 'amber',
    description: 'How stories become deliverables and reach platforms.',
  },
  org: {
    label: 'People & Organization',
    accent: 'emerald',
    description: 'Who does the work and how ownership is assigned.',
  },
}
