const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
}

// Reads the leading "Mon" from a `date` string like 'Oct 2025' so entries
// within the same year can be ordered without a separate numeric field.
function monthOf(date) {
  const match = date?.trim().toLowerCase().match(/^([a-z]{3})/)
  return match ? (MONTHS[match[1]] ?? -1) : -1
}

function byYearThenMonthDesc(a, b) {
  if ((b.year ?? 0) !== (a.year ?? 0)) return (b.year ?? 0) - (a.year ?? 0)
  return monthOf(b.date) - monthOf(a.date)
}

// Sorts publications newest-first (by `year`, then by month parsed from
// `date`), then flags each entry so consecutive entries sharing the same
// `year` only show the year once and don't get a divider between them.
// Editing an entry's `year`/`date` automatically moves it to the right
// spot — no need to reorder the array by hand.
export function annotatePublications(publications) {
  const sorted = [...publications].sort(byYearThenMonthDesc)

  return sorted.map((pub, i) => ({
    pub,
    showYear: i === 0 || sorted[i - 1].year !== pub.year,
    showDivider: i < sorted.length - 1 && sorted[i + 1].year !== pub.year,
  }))
}
