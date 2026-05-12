import PageHero from '@/components/PageHero'
import WorkflowsExplorer from '@/components/WorkflowsExplorer'
import Comments from '@/components/Comments'
import { workflows } from '@/data/workflows'

export default function WorkflowsPage() {
  return (
    <div>
      <PageHero
        eyebrow="05 — The Workflows"
        title="Six shapes of editorial work."
        subtitle="A universal lifecycle runs underneath, but the front end varies materially. Tap any workflow to see its phases, key roles, and where it splits from the others. CNN runs ~100–120 stories per day across these shapes."
        accent="rose"
      />
      <WorkflowsExplorer workflows={workflows} />
      <Comments
        accent="rose"
        description="Does your workflow look like one of these? Where does the universal lifecycle break down for your desk? Disagreements with the phase breakdowns are especially welcome — drop a thread."
      />
    </div>
  )
}
