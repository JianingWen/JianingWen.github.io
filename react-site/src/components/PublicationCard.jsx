const TAG_COLORS = {
  blue: 'bg-blue-600 text-white',
  emerald: 'bg-emerald-600 text-white',
  purple: 'bg-purple-600 text-white',
  rose: 'bg-rose-600 text-white',
  amber: 'bg-amber-500 text-white',
  slate: 'bg-slate-600 text-white',
}

export default function PublicationCard({ publication, showYear = true, showDivider = true }) {
  const { tag, tagColor, title, authors, venue, date, year, links } = publication

  return (
    <div
      className={`relative flex gap-4 py-6 ${showDivider ? 'border-b border-slate-100 dark:border-neutral-800' : ''}`}
    >
      {tag && (
        <span
          className={`h-fit shrink-0 rounded-md px-3 py-1 text-sm font-semibold tracking-wide ${
            TAG_COLORS[tagColor] ?? (tagColor ? 'text-white' : TAG_COLORS.slate)
          }`}
          style={TAG_COLORS[tagColor] ? undefined : { backgroundColor: tagColor }}
        >
          {tag}
        </span>
      )}

      <div className="relative z-10 min-w-0 pr-24 sm:pr-32">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-neutral-100">{title}</h3>

        {authors?.length > 0 && (
          <p className="mt-1.5 text-base text-slate-800 dark:text-neutral-200">
            {authors.map((author, i) => {
              const style = [
                author.bold ? 'font-semibold' : '',
                author.underline ? 'underline' : author.href ? 'hover:underline' : '',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <span key={author.name}>
                  {author.href ? (
                    <a href={author.href} target="_blank" rel="noreferrer" className={style}>
                      {author.name}
                    </a>
                  ) : (
                    <span className={style}>{author.name}</span>
                  )}
                  {i < authors.length - 1 ? ', ' : ''}
                </span>
              )
            })}
          </p>
        )}

        {(venue || date) && (
          <p className="mt-1.5 text-base italic text-slate-700 dark:text-neutral-300">
            {venue}
            {venue && date ? ' ' : ''}
            {date}
          </p>
        )}

        {links?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-800 transition-colors hover:border-blue-400 hover:text-blue-700 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-amber-600 dark:hover:text-amber-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {year && showYear && (
        <span className="pointer-events-none absolute top-4 right-0 z-0 w-24 select-none text-right text-4xl font-bold text-slate-100 sm:w-32 sm:text-5xl dark:text-neutral-800">
          {year}
        </span>
      )}
    </div>
  )
}
