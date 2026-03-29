import { Link, NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

const navItems: { label: string; to: string }[] = [
  { label: 'Hombre', to: '/hombre' },
  { label: 'Mujer', to: '/mujer' },
  { label: 'Accesorios', to: '/accesorios' },
]

function navClassName(isActive: boolean) {
  return [
    'transition-colors hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:hover:text-nightTeal dark:focus-visible:outline-nightTeal',
    isActive
      ? 'font-semibold text-teal dark:text-nightTeal'
      : 'text-ink dark:text-cream/85',
  ].join(' ')
}

function Logo() {
  return (
    <Link to="/" className="flex items-center justify-center gap-0" aria-label="Inicio Óptica O+E">
      <span className="relative flex h-12 w-[3.25rem] items-center justify-center">
        <span
          className="absolute left-0 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-sand dark:bg-nightMuted"
          aria-hidden
        />
        <span
          className="absolute right-0 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-teal"
          aria-hidden
        />
        <span className="relative z-10 font-serif text-sm font-semibold tracking-tight text-cream [text-shadow:0_1px_2px_rgb(0_0_0_/_35%)]">
          O+E
        </span>
      </span>
    </Link>
  )
}

export function Header() {
  return (
    <header className="border-b border-sand/60 bg-cream/90 backdrop-blur-sm transition-colors duration-300 dark:border-nightMuted dark:bg-night/92">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-4 px-4 py-5 sm:flex-nowrap md:px-6">
        <nav aria-label="Principal" className="order-2 flex flex-1 flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium sm:order-none sm:justify-start sm:gap-x-6 sm:text-sm md:gap-x-8">
          {navItems.map(({ label, to }) => (
            <NavLink key={label} to={to} className={({ isActive }) => navClassName(isActive)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="order-1 flex w-full justify-center sm:order-none sm:w-auto sm:flex-none sm:justify-start">
          <Logo />
        </div>
        <div className="order-3 flex flex-1 items-center justify-end gap-2 text-xs font-medium text-ink dark:text-cream/90 sm:gap-3 sm:text-sm md:gap-4">
          <ThemeToggle />
          <span className="hidden h-6 w-px bg-ink/15 dark:bg-white/15 sm:block" aria-hidden />
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-cream/80 px-3 py-2 text-xs font-semibold text-ink shadow-sm transition-colors hover:border-teal/40 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:border-white/15 dark:bg-nightCard dark:text-cream dark:hover:border-nightTeal dark:hover:text-nightTeal sm:px-4 sm:text-sm"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
            </svg>
            <span>Agendar cita</span>
          </a>
        </div>
      </div>
    </header>
  )
}
