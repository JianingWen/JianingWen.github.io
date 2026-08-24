import { NavLink, Outlet } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/publications', label: 'Publications' },
  // Not ready yet — routes still exist, just hidden from the nav for now.
  // { to: '/talks', label: 'Talks' },
  // { to: '/teaching', label: 'Teaching' },
  // { to: '/cv', label: 'CV' },
  // { to: '/portfolio', label: 'Portfolio' },
  // { to: '/blog', label: 'Blog' },
]

function navClass({ isActive }) {
  return [
    'px-3 py-2 text-base font-medium rounded-md transition-colors',
    isActive
      ? 'text-blue-700 bg-blue-50'
      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50',
  ].join(' ')
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <header className="border-b border-slate-200">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-8 py-4">
          <div className="flex items-baseline gap-2">
            <NavLink to="/" className="text-2xl font-semibold text-slate-900">
              Jianing Wen
            </NavLink>
            <span className="text-sm italic text-slate-500">she/her</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navClass}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-8 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Jianing Wen
      </footer>
    </div>
  )
}
