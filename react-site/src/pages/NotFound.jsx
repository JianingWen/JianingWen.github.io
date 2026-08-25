import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3 py-24 text-center">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Page not found</h1>
      <Link to="/" className="text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300">
        Back to home
      </Link>
    </div>
  )
}
