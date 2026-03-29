import { motion } from 'framer-motion'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { featuredLookImage, products } from '../data/products'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export function ProductShowcase() {
  return (
    <motion.section
      id="coleccion"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="bg-sandWarm px-4 py-16 transition-colors duration-300 dark:bg-nightCard md:px-6 md:py-24"
      aria-labelledby="coleccion-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="coleccion-heading" className="sr-only">
          Productos destacados
        </h2>
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(240px,320px)] lg:gap-10 lg:items-stretch">
          <div className="min-w-0">
            <Swiper
              modules={[Autoplay, EffectCoverflow, Pagination]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              speed={820}
              slidesPerView={1.25}
              spaceBetween={20}
              autoplay={{
                delay: 1900,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              coverflowEffect={{
                rotate: 12,
                stretch: 14,
                depth: 220,
                modifier: 1.12,
                slideShadows: true,
              }}
              breakpoints={{
                480: { slidesPerView: 1.5, spaceBetween: 24 },
                768: { slidesPerView: 2.2, spaceBetween: 28 },
                1024: { slidesPerView: 2.8, spaceBetween: 32 },
                1280: { slidesPerView: 3.2, spaceBetween: 36 },
              }}
              className="product-swiper !pb-12"
              aria-label="Carrusel de productos"
            >
              {products.map((p) => (
                <SwiperSlide key={p.id} className="!h-auto py-2">
                  <article className="group flex h-full flex-col items-center px-1">
                    <div className="relative w-full max-w-[200px] overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-300 group-hover:shadow-xl dark:bg-nightMuted dark:shadow-lg dark:shadow-black/25 dark:ring-1 dark:ring-white/8 md:max-w-[220px] sm:rounded-[1.875rem]">
                      <div className="aspect-[3/4] w-full overflow-hidden">
                        <img
                          src={p.imagen}
                          alt={p.nombre}
                          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-sans text-sm font-medium tracking-wide text-ink dark:text-cream/90 md:text-base">
                      {p.nombre}
                    </p>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <motion.figure
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto flex w-full max-w-sm flex-col justify-center lg:mx-0 lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-nightMuted dark:ring-1 dark:ring-white/8 sm:rounded-[1.875rem]">
              <div className="aspect-[3/5] w-full">
                <img
                  src={featuredLookImage}
                  alt="Modelo con gafas de la colección"
                  className="h-full w-full object-cover object-[center_35%]"
                  loading="lazy"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal/20 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
            <figcaption className="mt-4 text-center font-sans text-xs uppercase tracking-widest text-ink/60 dark:text-cream/48">
              Look editorial
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </motion.section>
  )
}
