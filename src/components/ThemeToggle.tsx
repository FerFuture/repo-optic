import { useTheme } from '../theme/ThemeContext'

function IconSun({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  )
}

function IconMoon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/12 bg-cream/90 text-ink shadow-sm ring-0 transition-all duration-300 hover:border-teal/40 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:border-white/12 dark:bg-nightCard dark:text-cream/90 dark:hover:border-nightTeal dark:hover:text-nightTeal sm:h-10 sm:w-10"
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      aria-pressed={isDark}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-teal/0 to-teal/0 opacity-0 transition-opacity duration-300 group-hover:from-teal/10 group-hover:to-transparent group-hover:opacity-100 dark:group-hover:from-nightTeal/15" />
      <span className="relative flex h-full w-full items-center justify-center">
        <IconSun
          className={`absolute h-[1.125rem] w-[1.125rem] transition-all duration-300 sm:h-5 sm:w-5 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
          }`}
        />
        <IconMoon
          className={`absolute h-[1.125rem] w-[1.125rem] transition-all duration-300 sm:h-5 sm:w-5 ${
            isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </span>
    </button>
  )
}
