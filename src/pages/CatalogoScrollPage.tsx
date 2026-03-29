import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { Autoplay, EffectCoverflow, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { PiezaMostrador } from '../data/accesorios'
import type { CatalogoScrollMeta } from '../types/catalogScroll'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-teal to-sand shadow-sm dark:from-nightTeal dark:to-sand/50"
      style={{ scaleX }}
      aria-hidden
    />
  )
}

function ParallaxBackdrop() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 18])
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -left-[12%] top-[18%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-sand/35 blur-2xl dark:bg-nightTeal/15"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-[8%] top-[42%] h-[min(48vw,380px)] w-[min(48vw,380px)] rounded-full bg-teal/12 blur-3xl dark:bg-teal/25"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[8%] left-[25%] h-48 w-48 rounded-full bg-teal/8 blur-2xl dark:bg-nightTeal/10 md:h-72 md:w-72"
      />
    </div>
  )
}

function VitrinaFila({
  pieza,
  invertir,
  index,
}: {
  pieza: PiezaMostrador
  invertir: boolean
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [48 * (index % 2 === 0 ? 1 : -1), -48 * (index % 2 === 0 ? 1 : -1)])
  const innerY = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -24])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`relative z-[1] mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:px-6 md:py-20 ${
        invertir ? 'md:[&>div:first-child]:order-2' : ''
      }`}
    >
      <motion.div className="relative mx-auto w-full max-w-md md:max-w-none" style={{ y: innerY }}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.04] dark:bg-nightMuted dark:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.5)] dark:ring-white/10 sm:rounded-[1.875rem]">
          <motion.img
            src={pieza.imagen}
            alt={pieza.nombre}
            style={{ y: imgY }}
            className="h-[115%] w-full object-cover object-center"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />
        </div>
        <span className="mt-5 block text-center font-sans text-[10px] uppercase tracking-[0.35em] text-ink/40 dark:text-cream/38 md:hidden">
          Mostrador · sin precios
        </span>
      </motion.div>
      <div className="flex flex-col justify-center text-center md:text-left">
        <span className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-teal dark:text-nightTeal">
          Vitrina {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink dark:text-cream md:text-4xl lg:text-[2.35rem]">
          {pieza.nombre}
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink/65 dark:text-cream/65 md:mx-0 md:text-base">
          {pieza.subtitulo}
        </p>
        <p className="mx-auto mt-6 hidden text-xs uppercase tracking-[0.2em] text-ink/40 dark:text-cream/40 md:mx-0 md:block">
          Exhibición · consultá en tienda
        </p>
      </div>
    </motion.section>
  )
}

type CatalogoScrollPageProps = {
  meta: CatalogoScrollMeta
  piezas: PiezaMostrador[]
}

export function CatalogoScrollPage({ meta, piezas }: CatalogoScrollPageProps) {
  return (
    <main className="relative transition-colors duration-300 dark:bg-night" aria-label={meta.ariaTitulo}>
      <ScrollProgress />
      <ParallaxBackdrop />

      <motion.section
        aria-labelledby="catalogo-titulo-principal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[1] border-b border-sand/60 bg-cream/80 px-4 py-16 text-center backdrop-blur-sm transition-colors dark:border-nightMuted dark:bg-night/85 md:px-6 md:py-20"
      >
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-teal dark:text-nightTeal">
          {meta.kicker}
        </p>
        <h1
          id="catalogo-titulo-principal"
          className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink dark:text-cream md:text-5xl"
        >
          {meta.titulo}
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink/70 dark:text-cream/68 md:text-lg">
          {meta.descripcion}
        </p>
      </motion.section>

      {piezas.map((pieza, i) => (
        <VitrinaFila key={pieza.id} pieza={pieza} invertir={i % 2 === 1} index={i} />
      ))}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[1] border-y border-sand/80 bg-gradient-to-b from-creamAlt/90 to-sandWarm/50 py-14 transition-colors dark:border-nightMuted dark:from-night dark:to-nightCard md:py-20"
      >
        <div className="mx-auto mb-8 max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-2xl font-semibold text-ink dark:text-cream md:text-3xl">
            {meta.carrilTitulo}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink/65 dark:text-cream/62 md:text-base">
            {meta.carrilDescripcion}
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Mousewheel, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          spaceBetween={20}
          loop
          grabCursor
          speed={780}
          autoplay={{
            delay: 1600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          coverflowEffect={{
            rotate: 8,
            stretch: 12,
            depth: 165,
            modifier: 1.15,
            slideShadows: true,
          }}
          breakpoints={{
            640: { spaceBetween: 28 },
            1024: { spaceBetween: 36 },
          }}
          className="accesorios-swiper px-4 pb-2 md:px-6"
          aria-label={meta.swiperAriaLabel}
        >
          {piezas.map((p) => (
            <SwiperSlide
              key={`rail-${p.id}`}
              className="!w-[min(72vw,280px)] sm:!w-[300px] md:!w-[320px]"
            >
              <article className="group flex flex-col items-center">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/[0.05] transition-shadow duration-500 group-hover:shadow-2xl dark:bg-nightMuted dark:ring-white/10 dark:group-hover:shadow-black/40 sm:rounded-[1.875rem]">
                  <img
                    src={p.imagen}
                    alt=""
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <p className="mt-4 text-center font-sans text-sm font-medium text-ink dark:text-cream/92">{p.nombre}</p>
                <span className="mt-1 text-center text-[11px] uppercase tracking-widest text-ink/40 dark:text-cream/38">
                  Mostrador
                </span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-[1] px-4 py-16 text-center md:px-6 md:py-20"
      >
        <p className="mx-auto max-w-md font-serif text-lg italic text-ink/55 dark:text-cream/50">
          {meta.cierre}
        </p>
      </motion.div>
    </main>
  )
}
