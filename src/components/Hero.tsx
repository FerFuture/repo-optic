import { motion } from 'framer-motion'

const imgAmber =
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=380&h=380&fit=crop'
/** Gafas tipo sello dentro del círculo festoneado (sustituí por tu foto en public/) */
const imgScallopSeal =
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=720&h=720&fit=crop&q=80'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream px-4 pb-16 pt-8 transition-colors duration-300 dark:bg-night md:px-6 md:pb-24 md:pt-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 flex flex-col justify-center md:order-1"
        >
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-ink transition-colors dark:text-cream md:text-5xl lg:text-[2.85rem] lg:leading-[1.15]">
            Colección de gafas de sol sostenibles
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75 dark:text-cream/72 md:text-lg">
            Con 10 años de experiencia en óptica. Nuestra misión es crear belleza.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#coleccion"
              className="inline-flex rounded-full bg-charcoal px-7 py-3 text-sm font-semibold text-cream transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal active:scale-[0.98] dark:bg-cream dark:text-night dark:focus-visible:outline-nightTeal"
            >
              Nuestra colección
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal dark:text-cream/88 dark:hover:text-nightTeal dark:focus-visible:outline-nightTeal"
            >
              Nuestra historia
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 flex min-h-[280px] items-center justify-center md:order-2 md:min-h-[420px]"
        >
          {/* Círculo beige: imagen recortada a la forma */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[8%] top-[12%] z-[1] h-[min(72vw,280px)] w-[min(72vw,280px)] overflow-hidden rounded-full bg-sand shadow-md ring-1 ring-black/[0.06] dark:bg-nightMuted dark:ring-white/10 md:left-[2%] md:h-[300px] md:w-[300px] lg:h-[340px] lg:w-[340px]"
            aria-hidden
          >
            <img
              src={imgAmber}
              alt=""
              className="h-full w-full object-cover object-[center_45%] scale-[1.08]"
              loading="lazy"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-sand/45 dark:from-white/10 dark:to-nightCard/50"
              aria-hidden
            />
          </motion.div>
          {/* Teal scalloped */}
          <div
            className="hero-scallop absolute right-[0%] top-[6%] z-[2] h-[min(78vw,300px)] w-[min(78vw,300px)] overflow-hidden bg-teal md:right-[-2%] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px]"
            aria-hidden
          >
            <img
              src={imgScallopSeal}
              alt=""
              className="h-full w-full scale-105 object-cover object-[center_40%]"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal/55 via-teal/40 to-teal/70" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />
          </div>
          {/* Curved label */}
          <svg
            className="pointer-events-none absolute right-[2%] top-[4%] z-20 h-[min(88vw,380px)] w-[min(88vw,380px)] text-cream/95 md:right-[-4%] md:h-[400px] md:w-[400px]"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <defs>
              <path
                id="heroCurve"
                d="M 100 18 A 72 72 0 1 1 99.9 18"
                fill="none"
              />
            </defs>
            <text className="fill-current font-serif text-[10px] font-medium uppercase tracking-[0.2em] md:text-[11px]">
              <textPath href="#heroCurve" startOffset="18%">
                diseño único y magnífico
              </textPath>
            </text>
          </svg>

          <p className="absolute bottom-6 left-4 z-20 text-left font-sans text-xs font-medium tracking-wide text-ink/70 dark:text-cream/68 md:bottom-10 md:left-10 lg:bottom-12 lg:left-14">
            <span className="block uppercase tracking-[0.15em]">Nueva colección</span>
            <span className="mt-1 block h-px w-16 bg-ink/30 dark:bg-cream/25" aria-hidden />
            <span className="mt-2 block font-serif text-lg text-ink dark:text-cream">2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
