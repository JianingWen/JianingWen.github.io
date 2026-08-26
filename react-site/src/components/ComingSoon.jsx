export default function ComingSoon({ title }) {
  return (
    <div className="flex flex-col items-center gap-2 py-24 text-center">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-neutral-100">{title}</h1>
      <p className="text-slate-500 dark:text-neutral-400">This page is coming soon.</p>
    </div>
  )
}
