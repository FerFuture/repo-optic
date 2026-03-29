import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { WhatsAppBubble } from './components/WhatsAppBubble'

export function Shell() {
  return (
    <div className="min-h-screen bg-cream transition-colors duration-300 dark:bg-night">
      <Header />
      <Outlet />
      <footer className="border-t border-sand/80 bg-cream px-4 py-8 text-center text-xs text-ink/55 transition-colors duration-300 dark:border-nightMuted dark:bg-night dark:text-cream/45 md:px-6">
        © {new Date().getFullYear()} Óptica O+E. Todos los derechos reservados.
      </footer>
      <WhatsAppBubble />
    </div>
  )
}
