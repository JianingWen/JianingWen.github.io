import { useCallback, useEffect, useState } from 'react'

// The `dark` class is already applied before React mounts (see the inline
// script in index.html), so this just mirrors that into state and keeps
// it in sync with the class + localStorage when toggled.
export function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggle = useCallback(() => setIsDark((prev) => !prev), [])

  return [isDark, toggle]
}
