export interface EditorialGroup {
  name: string
  scope: string
}

export const editorialGroups: EditorialGroup[] = [
  { name: 'Editorial + Newsgathering', scope: 'Subject-matter desks producing original journalism' },
  { name: 'Content', scope: 'Format-specialist makers — digital video, photo, visuals' },
  { name: 'Linear', scope: 'Traditional TV — control room, shows, on-air production' },
  { name: 'Operations', scope: 'Planning · TRIAD · Editorial Ops · Digital Programming' },
  { name: 'Audience', scope: 'Programming · Off-Platform · Newsletters · Audience Development' },
]

export interface Desk {
  name: string
  // primaryWorkflow and mix are synthesis outputs from desk-level interviews.
  // Leave undefined for desks we have not yet interviewed — do not estimate.
  primaryWorkflow?: string
  mix?: string
  priorityWave: 'Wave 1' | 'Wave 2' | 'TBD'
}

export const desks: Desk[] = [
  { name: 'National Hub', primaryWorkflow: 'News-driven', mix: '70% Planned / 30% Breaking', priorityWave: 'Wave 1' },
  { name: 'DC / Washington', primaryWorkflow: 'News-driven', mix: '60% Planned / 10% Live / 30% Breaking', priorityWave: 'Wave 1' },
  { name: 'International', primaryWorkflow: 'News-driven', mix: '65% Planned / 10% Live / 25% Breaking', priorityWave: 'Wave 1' },
  { name: 'Business', primaryWorkflow: 'News-driven', mix: '60% Planned / 35% Breaking / 5% Contracted', priorityWave: 'Wave 1' },
  { name: 'Features', primaryWorkflow: 'Calendar-driven', mix: '75% Calendar / 5% News / 5% Breaking / 15% Contracted', priorityWave: 'Wave 1' },
  { name: 'CNN Investigates', primaryWorkflow: 'News-driven (long-cycle)', mix: '90% Planned / 10% Breaking', priorityWave: 'Wave 1' },
  { name: 'Climate / Weather', primaryWorkflow: 'News-driven', mix: '55% Planned / 5% Calendar / 5% Live / 25% Breaking / 10% Contracted', priorityWave: 'Wave 2' },
  { name: 'Health', primaryWorkflow: 'Calendar-driven', mix: '55% Calendar / 15% News / 5% Breaking / 25% Contracted', priorityWave: 'Wave 2' },
  { name: 'Live News', primaryWorkflow: 'Live + Breaking', mix: '20% Planned / 80% Breaking', priorityWave: 'Wave 2' },
  { name: 'CNN en Español', primaryWorkflow: 'News-driven', mix: '65% Planned / 10% Live / 25% Breaking', priorityWave: 'Wave 2' },
  { name: 'Sports', priorityWave: 'TBD' },
  { name: 'Politics', primaryWorkflow: 'News-driven', mix: '65% Planned / 10% Live / 25% Breaking', priorityWave: 'TBD' },
  { name: 'Enterprise (cross-cutting)', primaryWorkflow: 'News-driven (long-cycle)', mix: '90% Planned / 10% Breaking', priorityWave: 'Wave 2' },
]

export interface Horizontal {
  name: string
  group: string
  spans: string
}

export const horizontals: Horizontal[] = [
  { name: 'Planning (Domestic + International)', group: 'Operations', spans: 'Every editorial desk' },
  { name: 'Editorial Operations', group: 'Operations', spans: 'Every desk running field operations' },
  { name: 'TRIAD (Legal · Standards · Fact Check)', group: 'Operations', spans: 'Every desk publishing sensitive content' },
  { name: 'Content (Video Editorial · VOD/Streaming · Photos · Visuals)', group: 'Content', spans: 'Every desk publishing visual content' },
  { name: 'Audience (Programming · Off-Platform · Newsletters)', group: 'Audience', spans: 'Every published piece' },
  { name: 'Global Productions', group: 'Operations', spans: 'Topic-aligned desks receiving contracted work' },
]

export interface OrgLayer {
  name: string
  definition: string
  notes: string
}

export const orgLayers: OrgLayer[] = [
  { name: 'Hub', definition: 'Top-level grouping by geography, time zone, or content area', notes: 'Sometimes coextensive with Desk' },
  { name: 'Desk', definition: 'Newsroom unit responsible for coverage in a specific area', notes: 'Primary unit of ownership' },
  { name: 'Beat', definition: 'Sub-unit within a Desk focused on a specific topic area', notes: 'DC has six teams under three beat leaders' },
  { name: 'Team', definition: 'Working group within a Desk or Beat', notes: 'Sometimes coextensive with Beat' },
  { name: 'Bureau', definition: 'Physical office tied to a geographic location', notes: 'Geographic, not editorial' },
  { name: 'Region', definition: 'Operational unit for domestic field coverage', notes: 'Between Hub and individual reporters' },
]

export interface Persona {
  name: string
  description: string
}

export const personas: Persona[] = [
  { name: 'Reporter / Correspondent / Writer', description: 'Produces editorial content; Correspondent specifically appears on camera.' },
  { name: 'Photo Desk · PJ · VJ', description: 'Captures still and motion imagery; "PJ" at CNN almost always means video shooter.' },
  { name: 'Producer', description: 'Coordinates execution — news desk producer or field producer.' },
  { name: 'Graphics & Video Editor', description: 'Produces in-article graphics and short video segments.' },
  { name: 'Editor', description: 'Multiple levels: Senior · Supervising · Assignment Manager · Director.' },
  { name: 'TRIAD Reviewer', description: 'Legal · Standards & Practices · Fact Check.' },
]
