import PageHero from '@/components/PageHero'
import GlossaryExplorer from '@/components/GlossaryExplorer'
import Comments from '@/components/Comments'
import { glossary } from '@/data/glossary'

export default function GlossaryPage() {
  const confirmedCount = glossary.filter((t) => t.status === 'confirmed').length
  const openCount = glossary.filter((t) => t.status === 'open').length

  return (
    <div>
      <PageHero
        eyebrow="04 — The Vocabulary"
        title="The shared language of CNN editorial."
        subtitle={`${glossary.length} terms across 7 contexts. ${confirmedCount} confirmed, ${openCount} still open. Use the filters to scope by context, status, or search by term.`}
        accent="blue"
      />
      <GlossaryExplorer terms={glossary} />
      <Comments
        accent="blue"
        description="A definition that doesn't match how your desk uses the term? A term we're missing entirely? An &lsquo;open&rsquo; one you can confirm? Reference the term name in your comment so threads stay easy to scan."
      />
    </div>
  )
}
