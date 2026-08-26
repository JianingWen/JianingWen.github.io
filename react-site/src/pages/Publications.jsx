import { useMemo, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import PublicationCard from '../components/PublicationCard.jsx'
import { PUBLICATIONS } from '../data/publications.js'
import { annotatePublications } from '../utils/publications.js'

function matches(pub, query) {
  const haystack = [
    pub.title,
    pub.tag,
    pub.venue,
    pub.date,
    String(pub.year ?? ''),
    ...(pub.authors ?? []).map((a) => a.name),
  ]
    .join(' ')
    .toLowerCase()

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word))
}

export default function Publications() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => (query.trim() ? PUBLICATIONS.filter((pub) => matches(pub, query)) : PUBLICATIONS),
    [query],
  )

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-neutral-100">Publications</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-neutral-400">
       † indicates co-first authorship.
      </p>

      <div className="relative mt-5 max-w-sm">
        <FaMagnifyingGlass className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400 dark:text-neutral-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, venue…"
          className="w-full rounded-lg border border-slate-300 py-2 pr-3 pl-9 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-sky-200 dark:focus:ring-sky-700/40"
        />
      </div>

      <div className="mt-6">
        {filtered.length > 0 ? (
          annotatePublications(filtered).map(({ pub, showYear, showDivider }) => (
            <PublicationCard
              key={pub.title}
              publication={pub}
              showYear={showYear}
              showDivider={showDivider}
            />
          ))
        ) : (
          <p className="py-8 text-center text-sm text-slate-500 dark:text-neutral-400">
            No publications match "{query}".
          </p>
        )}
      </div>
    </div>
  )
}
