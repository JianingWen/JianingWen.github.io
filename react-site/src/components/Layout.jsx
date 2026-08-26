import { NavLink, Outlet } from 'react-router-dom'
import CursorGlow from './CursorGlow.jsx'
import ThemeToggle from './ThemeToggle.jsx'

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
      ? 'text-blue-700 bg-blue-50 dark:text-sky-300 dark:bg-sky-950/40'
      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50 dark:text-neutral-300 dark:hover:text-sky-300 dark:hover:bg-sky-950/40',
  ].join(' ')
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-50 via-sky-50 to-indigo-50 text-slate-800 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700 dark:text-neutral-200">
      <CursorGlow />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
        <nav className="mx-auto flex max-w-[68rem] flex-wrap items-center justify-between gap-2 px-8 py-4">
          <div className="flex items-baseline gap-2">
            <NavLink
              to="/"
              end
              className="relative text-2xl font-semibold text-slate-900 dark:text-neutral-100"
            >
              Jianing Wen 温家宁
              <svg
                aria-hidden="true"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-2 w-full text-sky-400 dark:text-sky-300"
              >
                <path
                  d="M0,5 Q6,0 12,5 T24,5 T36,5 T48,5 T60,5 T72,5 T84,5 T96,5 T108,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </NavLink>
            <span className="text-sm italic text-slate-500 dark:text-neutral-400">she/her</span>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navClass}>
                {label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[68rem] flex-1 px-8 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-neutral-800 dark:text-neutral-400">
        © {new Date().getFullYear()} Jianing Wen
      </footer>
    </div>
  )
}
