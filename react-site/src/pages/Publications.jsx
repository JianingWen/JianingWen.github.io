import PublicationCard from '../components/PublicationCard.jsx'
import { PUBLICATIONS } from '../data/publications.js'

export default function Publications() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Publications</h1>
      <p className="mt-2 text-sm text-slate-500">
       † indicates co-first authorship.
      </p>

      <div className="mt-6">
        {PUBLICATIONS.map((pub) => (
          <PublicationCard key={pub.title} publication={pub} />
        ))}
      </div>
    </div>
  )
}
