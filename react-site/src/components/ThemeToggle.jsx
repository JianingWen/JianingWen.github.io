import { FaMoon, FaSun } from 'react-icons/fa6'
import { useTheme } from '../hooks/useTheme.js'

export default function ThemeToggle() {
  const [isDark, toggle] = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-amber-600 dark:hover:text-amber-600"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}
