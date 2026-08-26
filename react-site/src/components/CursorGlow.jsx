import { useEffect, useRef } from 'react'

// A soft pink glow that follows the cursor across the whole page.
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    function handleMove(e) {
      if (!ref.current) return
      ref.current.style.setProperty('--x', `${e.clientX}px`)
      ref.current.style.setProperty('--y', `${e.clientY}px`)
      const suppressed = e.target.closest?.('[data-no-glow]')
      ref.current.style.opacity = suppressed ? '0' : '1'
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-150"
      style={{
        background:
          'radial-gradient(100px circle at var(--x, 50%) var(--y, 50%), rgba(244,114,182,0.16), transparent 60%)',
      }}
    />
  )
}
