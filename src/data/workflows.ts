export interface WorkflowPhase {
  name: string
  tagline: string
  bullets: string[]
  keyRoles: string[]
}

export interface Workflow {
  slug: string
  number: number
  type: string
  variant?: string
  shape: string
  trigger: string
  duration: string
  primaryDesks: string
  intro: string
  phases: WorkflowPhase[]
  accent: string
}

export const workflows: Workflow[] = [
  {
    slug: 'planned-news',
    number: 1,
    type: 'Planned Editorial',
    variant: 'News-Driven',
    shape: 'Pitch → Newsgathering → Assignment → Production → Review → Publish',
    trigger: 'Tip, signal, or editorial judgment',
    duration: 'Hours to months',
    primaryDesks:
      'National, DC, International, Business, Climate/Weather, en Español, Sports, Politics, Investigates, Enterprise',
    intro:
      'The dominant editorial shape across most desks. Story origination splits roughly 70% StoryHub / 30% Stellar, with a hybrid Live Story slice in between. Long-cycle investigative work uses the same shape with a stricter Pitch gate and longer Newsgathering cycle.',
    accent: 'red',
    phases: [
      {
        name: 'Pitch',
        tagline: "Idea surfaces, editor decides if it's trackable",
        bullets: [
          'Reporter, producer, or editor surfaces an idea — informal first ("I like that idea, write up a pitch")',
          'For deployments or anything spending money: routed through the SharePoint pitch tool with accept/decline',
          'For zero-cost everyday work: reporter pitches directly to editor who is empowered to say yes',
          'Cross-desk gut-check before pursuit — "this might be more of a business story"',
          'Contracted / global-productions origin: coordinated through Global Productions',
        ],
        keyRoles: ['Reporter', 'Editor', 'Global Productions'],
      },
      {
        name: 'Newsgathering',
        tagline: 'Working to confirm — reporting deepens',
        bullets: [
          'Tip surfaces or pitch advances — sources, document dumps, databases, Dataminr, AP, court docs',
          'Reporter begins "kicking the tires" — research via SharePoint, Excel trackers, AI tools, TMX contacts, Nexus',
          'Status: Working to Confirm (or working to solidify)',
          'Reporter ↔ Editor collaborative direction-setting',
          'Cross-desk awareness happens here — story may shift desks as reporting develops',
          'Decision point: pursue further · spike · guidance only',
          "If spiked — memorialize so other shifts/desks don't re-run it",
        ],
        keyRoles: ['Reporter', 'Editor', 'Producer', 'Planning', 'Content Team'],
      },
      {
        name: 'Assignment',
        tagline: 'Coverage decided, resources allocated',
        bullets: [
          'Editor formalizes the entry, allocates budget line and scope',
          'Editor + senior editors decide Coverage Type — often multiple per story',
          'Stories may fold into an existing Live Story or spawn a new one',
          'Point of contact named for cross-desk sourcing requests',
          'Programming team gets early visibility for placement planning',
        ],
        keyRoles: ['Editor', 'Planning', 'Producer', 'Audience'],
      },
      {
        name: 'Production',
        tagline: 'Reporting deepens, content is built',
        bullets: [
          'Reporter drafts in SharePoint or Word, then moves to Stellar; or drafts directly into Live Story',
          'Ongoing Reporter ↔ Editor collaboration anchored in Slack',
          'Visual elements coordinated — news desk producer pulls clips and stills from MediaSource, Mira, Iconik',
          'Photos sourced via online form, AP Photo, or Getty — desk-specific mechanics',
          'Notes and trackers spread across Slack, OneNote, Word, Excel, SnapStream, Otter',
        ],
        keyRoles: ['Reporter', 'Editor', 'Producer', 'Graphics', 'Content Team'],
      },
      {
        name: 'Review',
        tagline: 'Optional — only when story warrants',
        bullets: [
          'Editor flags to TRIAD — one, two, or all three pillars (Legal · Standards · Fact Check)',
          'Each reviews from their lens — text copy, TV scripts, digital scripts, banners, programming language',
          'Notes returned to primary editor',
          'Senior editor final sign-off',
        ],
        keyRoles: ['Editor', 'TRIAD', 'Reporter'],
      },
      {
        name: 'Publish & Distribution',
        tagline: 'Story goes live across platforms',
        bullets: [
          'Editor publishes in Stellar (or schedules) — but not everything goes through Stellar',
          'Linear video packages route through News Apps or MediaSource; All Access uses separate VOD upload',
          'Newsletter distribution via Braze; MTnO integration in flight',
          'Format tracking matters — a single story may live across 10+ formats (linear, vertical, All Access, VOD, push, newsletter)',
          'Push alerts and homepage routed through bridge / digital programming',
          'Live Story loops back for ongoing updates',
        ],
        keyRoles: ['Editor', 'Reporter', 'Audience', 'Content Team', 'Planning'],
      },
    ],
  },
  {
    slug: 'planned-calendar',
    number: 2,
    type: 'Planned Editorial',
    variant: 'Calendar-Driven',
    shape: 'Ideate → Develop → Edit → Publish',
    trigger: 'Editorial calendar, topic-driven',
    duration: 'Days to weeks',
    primaryDesks: 'Features (Entertainment · Culture · Wellness · Science · Travel), Health',
    intro:
      "Same lifecycle, simplified. Newsgathering is skipped entirely (calendar-driven work isn't tip-driven). Three phases are renamed: Pitch → Ideate, Production → Develop, Review → Edit. Currently runs on Monday.com with daily notes copy-pasted into SharePoint.",
    accent: 'amber',
    phases: [
      {
        name: 'Ideate',
        tagline: 'Topic-driven idea generation',
        bullets: [
          'Editorial calendar planning across feature sections',
          'Topic editors surface ideas based on coverage areas, seasonality, upcoming events',
          'No "tip" pressure — fundamentally different from news flow',
          'Sponsorship / revenue dimension considered for some pieces',
          'Ideas captured in Monday.com calendar view with pub date target',
        ],
        keyRoles: ['Topic Editor', 'Reporter'],
      },
      {
        name: 'Develop',
        tagline: 'Reporter builds the piece',
        bullets: [
          'Reporter develops the piece — typically over days to weeks',
          'Ongoing collaboration with section editor via Slack',
          'Visual elements coordinated for visually-led sections',
          'Daily note from editor cleans up section status',
        ],
        keyRoles: ['Reporter', 'Section Editor', 'Visuals'],
      },
      {
        name: 'Edit',
        tagline: 'First and second edits via Slack pass-back',
        bullets: [
          'Reporter passes draft to editor for first edit',
          'Notes returned via Slack channel — visible thread of feedback',
          'Reporter integrates first edits, passes back for second edit',
          'Standards / Legal involved only on sensitive topics',
        ],
        keyRoles: ['Reporter', 'Editor', 'TRIAD (rare)'],
      },
      {
        name: 'Publish',
        tagline: 'Goes live, calendar slot filled',
        bullets: [
          'Piece goes into Stellar from the Monday.com workflow',
          'Calendar slot filled — programming context preserved',
          'No formal "sustain" loop — piece publishes and team moves to next calendar slot',
        ],
        keyRoles: ['Editor', 'Audience'],
      },
    ],
  },
  {
    slug: 'live-news',
    number: 3,
    type: 'Live Editorial',
    variant: 'Live News',
    shape: 'Spin-up → Continuous Trafficking → Transition Out',
    trigger: 'Breaking event scaling up, handoff',
    duration: 'Hours to days (no defined endpoint)',
    primaryDesks: 'Live News, any desk during major cycles',
    intro:
      'Continuous live trafficking — the day-to-day operating mode of CNN\'s Live News desk. Distinct from Live Event because there\'s no scheduled trigger and no defined endpoint. "Purely agnostic" shape — every desk\'s live shots and breaking trafficking flows through this workflow.',
    accent: 'rose',
    phases: [
      {
        name: 'Spin-up',
        tagline: 'Rapid spin-up from trigger or handoff',
        bullets: [
          "Trigger arrives — breaking event scaling up, scheduled Live Event handoff, push alert, supervisor's leadership notes",
          'Supervisor / senior producer assesses scope',
          'Stellar Live Story shell created or extended',
          'Lead writer / editor identified',
          'Cross-desk pings — Live News loops in affected desks',
        ],
        keyRoles: ['Supervisor', 'Senior Producer', 'Lead Writer'],
      },
      {
        name: 'Continuous Trafficking',
        tagline: 'Multi-author, multi-shift, continuous',
        bullets: [
          'Multi-author concurrent posting to Stellar Live Story',
          'Continuous live shot trafficking — Live News routes 100+ shots on major stories',
          'Cross-desk contributions routine',
          'Multi-shift baton — coverage hands off across shifts (24/7 on major stories)',
          'Decision points throughout: post / hold / pursue further / spike a developing angle',
        ],
        keyRoles: ['Multi-author team', 'Live News', 'Cross-desk'],
      },
      {
        name: 'Transition Out',
        tagline: 'News cycle slows, transition out of live mode',
        bullets: [
          'Day-two angles spawn into Planned Editorial flow',
          'Content team archives final assets to Mira / Iconik',
          'Audience team transitions Programming Grid back to standard cadence',
        ],
        keyRoles: ['Editor', 'Content Team', 'Audience'],
      },
    ],
  },
  {
    slug: 'live-event',
    number: 4,
    type: 'Live Editorial',
    variant: 'Live Event',
    shape: 'Pre-event Planning → During the Event → Post-event',
    trigger: 'Scheduled real-world event',
    duration: 'Bounded by event',
    primaryDesks: 'Any desk (DC, International heavy users)',
    intro:
      'Heavy planning upfront, then concurrent execution during the event. Bounded — defined start and end. Many Live Events spawn a Live Story that sustains beyond the event.',
    accent: 'purple',
    phases: [
      {
        name: 'Pre-event Planning',
        tagline: 'Coverage planned, roles assigned (days to weeks in advance)',
        bullets: [
          'Excel coverage grids, Word run-of-show',
          "Planning's heaviest concentration of work",
          'Coordinate across 14+ platform departments',
        ],
        keyRoles: ['Planning', 'Editor', 'Producer'],
      },
      {
        name: 'During the Event',
        tagline: 'Concurrent, not sequential',
        bullets: [
          'Reporters cover live',
          'Writing/editing/publishing happens in real time',
          'TV simulcast and digital coverage run in parallel',
        ],
        keyRoles: ['Reporters', 'Editors', 'Producers', 'Multi-platform team'],
      },
      {
        name: 'Post-event',
        tagline: 'Wrap-up and transition',
        bullets: [
          'Day-two angles developed → transitions into Planned Editorial flow',
          'Live Story may remain open',
        ],
        keyRoles: ['Editor', 'Live News'],
      },
    ],
  },
  {
    slug: 'breaking-news',
    number: 5,
    type: 'Breaking News',
    shape: 'Trigger & Immediate Publish → Backfill & Develop → Stabilize',
    trigger: 'Unanticipated event',
    duration: 'Minutes to hours (initial), then transitions',
    primaryDesks: 'Any desk, Stellar-first',
    intro:
      'Almost no wind-up. High velocity. Distinct from Live Events because it\'s unplanned. Stellar-first publish; StoryHub backfills after the fact.',
    accent: 'red',
    phases: [
      {
        name: 'Trigger & Immediate Publish',
        tagline: 'Velocity is everything',
        bullets: [
          'Newsworthiness emerges — push alert, source call, Dataminr, affiliate, internal tip',
          'Editor + Reporter make immediate call: publish now?',
          'Stellar-first skeleton publish — push alert, breaking banner, basic article shell',
          'Bridge call to TV control room for on-air integration',
        ],
        keyRoles: ['Editor', 'Reporter', 'Bridge'],
      },
      {
        name: 'Backfill & Develop',
        tagline: 'StoryHub catches up',
        bullets: [
          'StoryHub / planning record created after the fact',
          'Coverage assignments allocated as the event develops',
          'Updates roll into Live Story format',
          'TRIAD review applied retroactively if warranted',
        ],
        keyRoles: ['Planning', 'Editor', 'TRIAD (retroactive)'],
      },
      {
        name: 'Stabilize',
        tagline: 'Transitions into standard flow',
        bullets: ['Story matures into Planned Editorial flow for follow-ups and day-two coverage'],
        keyRoles: ['Editor'],
      },
    ],
  },
  {
    slug: 'contracted',
    number: 6,
    type: 'Contracted',
    shape: 'Origination → Coordination → Production → Review → Distribution',
    trigger: 'Sales/sponsorship commitment',
    duration: 'Weeks to months',
    primaryDesks: 'Global Productions → receiving desk (Health, Features, Climate)',
    intro:
      'Originates from Global Productions — not from editorial newsgathering. Contracted or eventized commitments where sales has obligations to deliver. Five-phase shape runs parallel to standard editorial flow.',
    accent: 'emerald',
    phases: [
      {
        name: 'Origination',
        tagline: 'Sales / sponsorship commitment lands',
        bullets: ['Brief handed to receiving editor based on topic affinity'],
        keyRoles: ['Global Productions', 'Receiving Editor'],
      },
      {
        name: 'Coordination',
        tagline: 'GP and editor align',
        bullets: [
          'Segment plan, slot calendar, talent availability',
          'TRIAD pre-briefed on commercial framing',
        ],
        keyRoles: ['Global Productions', 'Editor', 'TRIAD'],
      },
      {
        name: 'Production',
        tagline: 'Full editorial execution against the commitment',
        bullets: [
          'Reporter develops segments',
          'Photographer/crew capture per plan',
        ],
        keyRoles: ['Reporter', 'Crew', 'Editor'],
      },
      {
        name: 'Review',
        tagline: 'Editorial review + TRIAD',
        bullets: [
          'Legal especially for health/financial claims',
          'Sponsor-side review path TBD',
        ],
        keyRoles: ['TRIAD', 'Editor', 'Sponsor'],
      },
      {
        name: 'Distribution',
        tagline: 'Multi-platform delivery against committed slots',
        bullets: [
          'GP confirms sponsor delivery with proof-of-air and performance reporting',
        ],
        keyRoles: ['Global Productions', 'Audience'],
      },
    ],
  },
]
