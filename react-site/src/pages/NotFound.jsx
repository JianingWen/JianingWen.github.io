import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3 py-24 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
      <Link to="/" className="text-purple-700 hover:underline">
        Back to home
      </Link>
    </div>
  )
}
