export interface BoundedContext {
  slug: string
  name: string
  shortName: string
  description: string
  ownerships: string[]
  color: string
  accent: string
}

export const contexts: BoundedContext[] = [
  {
    slug: 'newsgathering',
    name: 'Newsgathering',
    shortName: 'NG',
    description:
      'Raw signal to confirmed Story. Sources include Dataminr, affiliates, wires, and tips. The downstream boundary is the Inflection Point.',
    ownerships: ['Editorial', 'Working to Confirm', 'Pursuit', 'Pitch', 'Tracker'],
    color: 'from-amber-500/20 to-amber-500/5',
    accent: 'amber',
  },
  {
    slug: 'editorial-production',
    name: 'Editorial Production',
    shortName: 'EP',
    description:
      "Inflection Point to publish-ready content. Owns Story, Coverage Direction, Coverage Type, and assignments. This is StoryHub's primary domain.",
    ownerships: ['Story', 'Storyline', 'Coverage Direction', 'Coverage Type', 'Event'],
    color: 'from-red-500/30 to-red-500/5',
    accent: 'red',
  },
  {
    slug: 'triad',
    name: 'TRIAD',
    shortName: 'TR',
    description:
      'The parallel review queue running alongside Editorial Production for sensitive Stories. Three independent pillars: Legal, Standards & Practices, and Fact Check.',
    ownerships: ['Legal Review', 'Standards & Practices', 'Fact Check', 'Embargo'],
    color: 'from-purple-500/20 to-purple-500/5',
    accent: 'purple',
  },
  {
    slug: 'publishing',
    name: 'Publishing',
    shortName: 'PB',
    description:
      "Stellar's domain. Owns Leaf, Shell, Section, Slug, and the publish event.",
    ownerships: ['Stellar', 'Leaf', 'Section', 'Slug', 'Article', 'Live Story', 'Push Alert'],
    color: 'from-blue-500/20 to-blue-500/5',
    accent: 'blue',
  },
  {
    slug: 'audience',
    name: 'Audience',
    shortName: 'AU',
    description:
      'Post-publish placement and audience signal. Programming grid, Off-Platform, Newsletters.',
    ownerships: ['Deliverable', 'Platform', 'Newsletter', 'Hit', 'Package', 'Off-platform'],
    color: 'from-emerald-500/20 to-emerald-500/5',
    accent: 'emerald',
  },
  {
    slug: 'coverage-operations',
    name: 'Coverage Operations',
    shortName: 'CO',
    description:
      'Planning + Editorial Operations. Deployment, transmission, security, equipment. Cuts horizontally across all other contexts.',
    ownerships: ['Deployment', 'Pool', 'Field Producer', 'Bureau', 'The Bridge', 'Control Room'],
    color: 'from-cyan-500/20 to-cyan-500/5',
    accent: 'cyan',
  },
  {
    slug: 'asset-management',
    name: 'Asset Management',
    shortName: 'AM',
    description:
      'Media file lifecycle across four systems: MediaSource (active video), Mira (archive), Cloudinary (images), Iconik (VOD/All Access).',
    ownerships: ['Asset', 'MediaSource', 'Mira', 'Cloudinary', 'Iconik', 'Cleared', 'Restrictions'],
    color: 'from-orange-500/20 to-orange-500/5',
    accent: 'orange',
  },
]

export interface ContextBoundary {
  from: string
  to: string
  direction: 'one-way' | 'bidirectional' | 'reference'
  whatCrosses: string
}

export const boundaries: ContextBoundary[] = [
  {
    from: 'Newsgathering',
    to: 'Editorial Production',
    direction: 'one-way',
    whatCrosses: 'Inflection Point: a signal becomes a tracked Story',
  },
  {
    from: 'Editorial Production',
    to: 'TRIAD',
    direction: 'bidirectional',
    whatCrosses: 'TRIAD trigger: Story enters parallel review state',
  },
  {
    from: 'Editorial Production',
    to: 'Publishing',
    direction: 'bidirectional',
    whatCrosses:
      '~70% of Stories originate in StoryHub → create Stellar Shell; ~30% originate in Stellar (breaking) → back-associate to StoryHub',
  },
  {
    from: 'Publishing',
    to: 'Audience',
    direction: 'one-way',
    whatCrosses:
      'Publish event: News Alert fires; Programming evaluates placement; Push Alert may follow',
  },
  {
    from: 'All contexts',
    to: 'Asset Management',
    direction: 'reference',
    whatCrosses: 'Asset record carries metadata; file stays in source system',
  },
]
