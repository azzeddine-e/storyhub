export interface Decision {
  number: number
  title: string
  problem: string
  position: string
  validate: string
  topic: string
}

export const decisions: Decision[] = [
  {
    number: 1,
    title: 'Core entity model',
    topic: 'Data',
    problem:
      'What primary entities should StoryHub be built around, and how do they relate?',
    position:
      'Five core entities: Story (primary unit), Storyline (multi-day arc grouping Stories), Event (scheduled real-world occurrence), Initiative (longer-horizon editorial frame grouping Storylines), and Intake (pre-Story signal, formerly "Editorial").',
    validate:
      'Do these entities and their relationships match how editorial thinks? Are any missing?',
  },
  {
    number: 2,
    title: 'MVP scoping axis',
    topic: 'Scope',
    problem:
      'Three ways to scope what we build first: by desk, by editorial flow, or by downstream team. We heard signal supporting all three.',
    position:
      'Anchor on the six priority desks (National, International, DC, Business, Features, Investigates). Build the core editorial flow (Planned Editorial) first, then layer Live and Breaking. Downstream teams (Audience, Planning, Content) get read access and filtered views from day one but don\'t drive schema.',
    validate: 'Validate or refine.',
  },
  {
    number: 3,
    title: 'Organizational layers',
    topic: 'Structure',
    problem:
      "We observed four layers within verticals — Hub, Desk, Beat, Team — but they don't map consistently. Some desks collapse Hub and Desk. DC uses Beat/Team distinctly; National doesn't.",
    position:
      'Build with two required layers (Desk as the primary ownership unit, Team as an optional sub-unit) and treat Hub as a display grouping rather than a structural layer. Beat and Team collapse into a single "Team" concept for desks that don\'t distinguish them.',
    validate: 'Is this the right simplification, or do some desks genuinely need four distinct layers?',
  },
  {
    number: 4,
    title: 'StoryHub entry threshold',
    topic: 'Workflow',
    problem:
      'We heard three thresholds in use today: working headline + named point of contact, formal pitch approval, and retroactive entry (breaking news).',
    position:
      'All three are valid — they represent per-workflow-type defaults, not competing standards. Planned Editorial enters at working headline + POC. Long-cycle / Investigative enters at pitch approval. Breaking enters retroactively. Build the system to support all three, with Workflow Type determining which threshold applies.',
    validate: 'Validate or refine.',
  },
  {
    number: 5,
    title: 'Status vocabulary',
    topic: 'Data',
    problem:
      'Different desks use slightly different status labels. We observed: Pursuit, Working to Confirm, Greenlit, In Production, In Review, Scheduled, Published, Republished, Spiked/Killed.',
    position:
      'One unified status field across all Workflow Types, with a core set of values. Desk-specific labels (e.g., "Working to Solidify" at National) map to the core values rather than extending them. This keeps cross-desk reporting clean.',
    validate:
      "Are there desk-specific statuses not represented above that genuinely can't map to a core value?",
  },
  {
    number: 6,
    title: 'Coverage Type vocabulary',
    topic: 'Data',
    problem:
      'The format-mix decision at assignment — Live Story, Article, Push Alert, TV Hit, Linear Package, Social Cut, Newsletter Mention, Podcast Segment.',
    position:
      'Fixed controlled vocabulary, managed by a designated editorial owner. New values added through a governed process, not ad hoc by individual desks.',
    validate: 'Is the list above complete? Who should own the vocabulary going forward?',
  },
  {
    number: 7,
    title: 'Tag / Topic taxonomy',
    topic: 'Data',
    problem: 'Cross-cutting categorization for topic, region, and beat. We heard varying levels of urgency.',
    position:
      "Defer to Phase 2. Build the Tag field into the schema now (so it's ready) but don't invest in populating or governing the taxonomy for August. The entity model and workflows are higher-priority.",
    validate:
      "Validate or refine. If Tags are required for any specific desk's filtering or reporting at launch, we need to know.",
  },
  {
    number: 8,
    title: 'Tool boundaries',
    topic: 'Integrations',
    problem: 'StoryHub will overlap with tools currently in use. We need to draw clear lines.',
    position:
      'StoryHub captures decisions and structured outputs. Slack holds conversations. Stellar remains source of truth for published content. SharePoint documents (Notes, Budgets, Handoff Notes) that duplicate what StoryHub tracks get displaced; those that serve a distinct purpose (narrative documents, pitch tool) get linked.',
    validate: 'The principle is straightforward; the desk-by-desk specifics need ratification.',
  },
  {
    number: 9,
    title: 'MVP integration list',
    topic: 'Integrations',
    problem:
      'The SOW names four integrations. We found 25+ tools. Not all need to be in scope for August.',
    position:
      'For MVP: Stellar (bidirectional), Slack (notifications), and asset systems (MediaSource, Cloudinary — reference by pointer, no inline preview). Defer Dataminr, iNews, Braze, Zeta, Iconik, and MTnO to Phase 2. Monday.com and Asana data migrates manually or via CSV at launch rather than live integration.',
    validate:
      'If any deferred integration is critical for a priority desk at launch, we need to hear it.',
  },
]

export interface SprintSession {
  number: number
  focus: string
  detail: string
  keyDecisions: string
}

export const sprintSessions: SprintSession[] = [
  {
    number: 1,
    focus: 'Entity Model & Taxonomy',
    detail: 'Lock the data model and resolve terminology',
    keyDecisions: 'Decisions 1, 5, 6, 7',
  },
  {
    number: 2,
    focus: 'Org Structure & Access',
    detail: 'Finalize organizational layers and permissions',
    keyDecisions: 'Decisions 3, 4 above; desk-by-desk sub-team confirmation',
  },
  {
    number: 3,
    focus: 'Workflows & Operations 1',
    detail: 'Validate workflow shapes and cross-team engagement',
    keyDecisions: 'Decisions 2, 8; per-desk origination model',
  },
  {
    number: 4,
    focus: 'Workflow & Operations 2: Integration boundaries',
    detail: 'Define tool overlap and boundaries',
    keyDecisions: 'Decisions 9 above',
  },
]

export interface Finding {
  title: string
  body: string
}

export const keyFindings: Finding[] = [
  {
    title: "CNN's editorial operation shares a common lifecycle, but the front end varies materially across desks",
    body:
      'News-driven desks validate newsworthiness through "Working to Confirm." Calendar-driven desks (Features, Health) replace newsgathering with topic-driven ideation. Live News inverts the pattern entirely — 80% breaking, continuous trafficking. These aren\'t edge cases. They represent different operating rhythms that the system must accommodate.',
  },
  {
    title: 'The organizational structure is more layered than expected',
    body:
      'Two orthogonal axes — vertical desks owning subject-matter coverage, and horizontal teams (Planning, Content, Audience, TRIAD, Editorial Ops) spanning all desks. Within verticals, four layers exist (Hub, Desk, Beat, Team) but map inconsistently. International runs a tri-hub follow-the-sun model. DC has six teams under three beat leaders with dedicated TRIAD staff.',
  },
  {
    title: 'The tool landscape is broader than the SOW anticipated',
    body:
      'The SOW names five integrations. We found 25+ tools in active daily use — Monday.com, Slack, Asana, SharePoint, OneNote, Excel, Dataminr, SnapStream, Otter, and more. Several teams already run on Airtable. The integration boundary for MVP needs explicit scoping.',
  },
]
