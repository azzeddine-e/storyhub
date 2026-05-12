export type TermStatus = 'confirmed' | 'open'

export interface GlossaryTerm {
  term: string
  definition: string
  context:
    | 'Newsgathering'
    | 'Editorial Production'
    | 'TRIAD'
    | 'Publishing'
    | 'Audience'
    | 'Coverage Operations'
    | 'Asset Management'
  status: TermStatus
  note?: string
}

export const glossary: GlossaryTerm[] = [
  // Newsgathering
  {
    term: 'Editorial',
    context: 'Newsgathering',
    status: 'confirmed',
    definition:
      'A discrete piece of editorial information — a precursor signal that may become a Story or feed an existing one.',
  },
  {
    term: 'Inflection Point',
    context: 'Newsgathering',
    status: 'confirmed',
    definition:
      'The editorial moment when a tip crosses the threshold to be tracked as a Story rather than informally watched.',
  },
  {
    term: 'Working to Confirm',
    context: 'Newsgathering',
    status: 'confirmed',
    definition:
      'A formal status for a tip being pressure-tested but not yet promoted to a confirmed Story.',
  },
  {
    term: 'Pursuit',
    context: 'Newsgathering',
    status: 'open',
    definition: 'A potential Story being actively investigated, some of which never publish.',
    note: 'Are Pursuit and Chase used interchangeably, or do they refer to distinct stages?',
  },
  {
    term: 'Chase',
    context: 'Newsgathering',
    status: 'open',
    definition: 'Used by some desks as a synonym for Pursuit.',
  },
  {
    term: 'Reporting Target',
    context: 'Newsgathering',
    status: 'confirmed',
    definition: 'A specific person, document, or fact a reporter is trying to confirm.',
  },
  {
    term: 'News Peg',
    context: 'Newsgathering',
    status: 'confirmed',
    definition: 'The timely event or development that gives a Story its reason to publish now.',
  },
  {
    term: 'Pitch',
    context: 'Newsgathering',
    status: 'open',
    definition:
      'A proposed Story idea before assignment, sometimes routed through a formal pitch tool when budget is involved.',
    note: 'Is Pitch a distinct concept from Editorial, or just an early state of one?',
  },
  {
    term: 'Spike / Kill',
    context: 'Newsgathering',
    status: 'confirmed',
    definition: 'To stop work on a Story or Pursuit, removing it from the active coverage list.',
  },
  {
    term: 'Tracker',
    context: 'Newsgathering',
    status: 'open',
    definition:
      'A recurring topical tracking document that runs alongside Stories (trial trackers, executive action trackers).',
  },
  {
    term: 'Dataminr',
    context: 'Newsgathering',
    status: 'open',
    definition: 'Third-party tip ingestion source surfacing alerts and signals.',
    note: 'Integration scope unresolved.',
  },
  {
    term: 'Wires',
    context: 'Newsgathering',
    status: 'confirmed',
    definition: 'Major news and photo agency feeds (AP, Reuters, Getty).',
  },
  {
    term: 'Affiliate',
    context: 'Newsgathering',
    status: 'confirmed',
    definition: 'Local station partner that supplies leads, footage, and tips.',
  },

  // Editorial Production
  {
    term: 'Story',
    context: 'Editorial Production',
    status: 'confirmed',
    definition:
      'A confirmed, assigned piece of coverage with a designated team, status, and link to Stellar.',
  },
  {
    term: 'Storyline',
    context: 'Editorial Production',
    status: 'confirmed',
    definition: 'A multi-day, multi-desk coverage arc grouping related Stories, Assets, and Events.',
  },
  {
    term: 'Sustaining Coverage',
    context: 'Editorial Production',
    status: 'confirmed',
    definition: 'Ongoing multi-day reporting on a major Storyline.',
  },
  {
    term: 'Coverage Direction',
    context: 'Editorial Production',
    status: 'open',
    definition:
      'Methods and written direction for how editorial will be shared, including format mix and treatment notes.',
    note: 'Authored once at Assignment, or revised throughout production?',
  },
  {
    term: 'Coverage Type',
    context: 'Editorial Production',
    status: 'confirmed',
    definition:
      'The format-mix decision determining which Deliverables get produced (Live Story + Article + Push Alert + TV Hit).',
  },
  {
    term: 'Reporting Guidance',
    context: 'Editorial Production',
    status: 'confirmed',
    definition:
      'Direction attached to Editorial covering the reporting itself — sourcing rules, standards constraints, narrative framing.',
  },
  {
    term: 'Greenlit',
    context: 'Editorial Production',
    status: 'confirmed',
    definition:
      'A pitch or Story approved to proceed, sometimes with budget or deployment authorization.',
  },
  {
    term: 'Distinctive',
    context: 'Editorial Production',
    status: 'open',
    definition:
      'CNN-internal label for feature or enterprise storytelling, contrasted with breaking news.',
    note: 'Is Distinctive a status, a Coverage Type, or a Tag?',
  },
  {
    term: 'Enterprise',
    context: 'Editorial Production',
    status: 'confirmed',
    definition:
      'Long-form investigative or analytical reporting; both a desk and a coverage type.',
  },
  {
    term: 'Event',
    context: 'Editorial Production',
    status: 'confirmed',
    definition:
      'A scheduled real-world occurrence (hearing, press conference, launch) that one or more Stories may be tied to.',
  },

  // TRIAD
  {
    term: 'TRIAD',
    context: 'TRIAD',
    status: 'confirmed',
    definition:
      "CNN's three-pillar review and approval queue: Legal, Standards & Practices, and Fact Check.",
  },
  {
    term: 'Legal Review',
    context: 'TRIAD',
    status: 'confirmed',
    definition: 'Focused on litigation risk and disclosure constraints.',
  },
  {
    term: 'Standards & Practices',
    context: 'TRIAD',
    status: 'confirmed',
    definition:
      'Focused on editorial standards, sourcing, language, and ethical considerations.',
  },
  {
    term: 'Fact Check',
    context: 'TRIAD',
    status: 'confirmed',
    definition: 'Focused on factual accuracy of claims, names, dates, and quotes.',
  },
  {
    term: 'Embargo',
    context: 'TRIAD',
    status: 'confirmed',
    definition: 'A time-locked publication restriction imposed by an external source.',
  },
  {
    term: 'Guidance (Standards/Legal)',
    context: 'TRIAD',
    status: 'open',
    definition: 'Definition pending CNN input.',
    note: 'Should this be its own concept distinct from Reporting Guidance, or a category within it?',
  },

  // Publishing
  {
    term: 'Stellar',
    context: 'Publishing',
    status: 'confirmed',
    definition: "CNN's content management system; system of record for published Stories.",
  },
  {
    term: 'Leaf',
    context: 'Publishing',
    status: 'confirmed',
    definition:
      "Stellar's term for any publishable content unit (Article, Live Story, Push Alert are all leaf types).",
  },
  {
    term: 'Stellar Shell',
    context: 'Publishing',
    status: 'confirmed',
    definition: 'A draft Leaf created in Stellar before content is committed.',
  },
  {
    term: 'Section',
    context: 'Publishing',
    status: 'open',
    definition: 'Stellar concept driving URL structure and content schema, distinct from Desk.',
    note: 'How does Section relate to Desk in CNN\'s mental model?',
  },
  {
    term: 'Slug',
    context: 'Publishing',
    status: 'confirmed',
    definition: 'Short identifier serving as both URL stem and newsroom shorthand.',
  },
  {
    term: 'Article',
    context: 'Publishing',
    status: 'confirmed',
    definition: 'The default Stellar Leaf type for digital text content.',
  },
  {
    term: 'Live Story',
    context: 'Publishing',
    status: 'confirmed',
    definition: 'Stellar-native publishing format for sustained real-time coverage.',
  },
  {
    term: 'Live Story Post',
    context: 'Publishing',
    status: 'confirmed',
    definition: 'A single timestamped update authored inside a Live Story.',
  },
  {
    term: 'Pin Post',
    context: 'Publishing',
    status: 'open',
    definition: 'A Live Story Post anchored to the top of the feed.',
    note: 'Distinct concept, or just a positional state of a regular Post?',
  },
  {
    term: 'Push Alert',
    context: 'Publishing',
    status: 'confirmed',
    definition: 'Consumer-facing mobile notification sent by Programming.',
  },
  {
    term: 'News Alert',
    context: 'Publishing',
    status: 'confirmed',
    definition: 'Internal CNN-network email triggered when a Stellar URL publishes.',
  },

  // Audience
  {
    term: 'Deliverable',
    context: 'Audience',
    status: 'confirmed',
    definition:
      'Platform-specific output produced from a Story (digital article, linear segment, social cut, push alert).',
  },
  {
    term: 'Platform',
    context: 'Audience',
    status: 'confirmed',
    definition: 'A publishing surface: Digital, Linear TV, Streaming, Social, Affiliate.',
  },
  {
    term: 'All Access',
    context: 'Audience',
    status: 'open',
    definition: "CNN's subscription streaming product.",
    note: 'A Platform in its own right, or a gating tier across multiple Platforms?',
  },
  {
    term: 'Newsletter',
    context: 'Audience',
    status: 'confirmed',
    definition: 'Email-based Deliverable distributed to subscriber lists (flagship: Five Things).',
  },
  {
    term: 'Package',
    context: 'Audience',
    status: 'confirmed',
    definition:
      'A produced video segment with narration, footage, and graphics; typically for linear or VOD.',
  },
  {
    term: 'Hit',
    context: 'Audience',
    status: 'confirmed',
    definition: 'A single live TV appearance, usually a correspondent fronting a story.',
  },
  {
    term: 'Off-platform',
    context: 'Audience',
    status: 'confirmed',
    definition: "Content that publishes outside CNN's owned surfaces (social, YouTube, third-party).",
  },
  {
    term: 'T1',
    context: 'Audience',
    status: 'open',
    definition:
      'Programming grid label for the network lead — the biggest story of the news moment.',
    note: 'Used network-wide, or only inside Programming\'s grid?',
  },

  // Coverage Operations
  {
    term: 'Deployment',
    context: 'Coverage Operations',
    status: 'open',
    definition: 'Sending personnel into the field, often requiring tiered approval by cost.',
    note: 'Does deployment tracking need to be operational at August launch?',
  },
  {
    term: 'Pool',
    context: 'Coverage Operations',
    status: 'confirmed',
    definition: 'Backup roster of available personnel when primary assignees are unavailable.',
  },
  {
    term: 'Field Producer',
    context: 'Coverage Operations',
    status: 'confirmed',
    definition: 'A producer working from the scene of a story.',
  },
  {
    term: 'Bureau',
    context: 'Coverage Operations',
    status: 'confirmed',
    definition: 'A CNN office tied to a physical geographic location; distinct from Hub (editorial).',
  },
  {
    term: 'Region',
    context: 'Coverage Operations',
    status: 'open',
    definition: 'Operational unit for domestic field coverage, between Hub and individual reporters.',
    note: 'Apply only to Domestic, or does International use a comparable concept?',
  },
  {
    term: 'The Bridge',
    context: 'Coverage Operations',
    status: 'confirmed',
    definition:
      'The always-on conference line connecting newsroom desks to the TV Control Room.',
  },
  {
    term: 'Control Room',
    context: 'Coverage Operations',
    status: 'confirmed',
    definition: 'The TV broadcast nerve center; destination side of The Bridge.',
  },

  // Asset Management
  {
    term: 'Asset',
    context: 'Asset Management',
    status: 'open',
    definition:
      'A media file, source document, or reference link associated with Stories or Storylines.',
    note: 'Which term reads most naturally — Asset, Element, or Media?',
  },
  {
    term: 'Cleared',
    context: 'Asset Management',
    status: 'confirmed',
    definition: 'Status of an Asset approved for use by Rights and Clearances.',
  },
  {
    term: 'Restrictions',
    context: 'Asset Management',
    status: 'confirmed',
    definition:
      'Usage limits attached to an Asset (geography, duration, attribution, context-of-use).',
  },
  {
    term: 'MediaSource',
    context: 'Asset Management',
    status: 'confirmed',
    definition: "CNN's media asset manager for active video in current production.",
  },
  {
    term: 'Mira',
    context: 'Asset Management',
    status: 'confirmed',
    definition: "CNN's archive video library, sibling to MediaSource.",
  },
  {
    term: 'Cloudinary',
    context: 'Asset Management',
    status: 'confirmed',
    definition: "CNN's digital asset manager for images and image-derived assets.",
  },
  {
    term: 'Iconik',
    context: 'Asset Management',
    status: 'open',
    definition: "CNN's video upload system for VOD and All Access video.",
    note: 'In scope as a referenced source for Asset records at launch, or Phase 2?',
  },
]
