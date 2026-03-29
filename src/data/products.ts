/**
 * Sustituí las URLs por rutas locales, p. ej. `/productos/mi-modelo.jpg`
 * después de colocar imágenes en public/productos/
 */
export type Product = {
  id: string
  nombre: string
  imagen: string
  slug?: string
}

export const products: Product[] = [
  {
    id: '1',
    nombre: 'The Headlight',
    imagen:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop',
  },
  {
    id: '2',
    nombre: 'The Coolio',
    imagen:
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=500&fit=crop',
  },
  {
    id: '3',
    nombre: 'The Lily',
    imagen:
      'https://images.unsplash.com/photo-1563906279821-3cccbe0cee17?w=400&h=500&fit=crop&q=80&auto=format',
  },
  {
    id: '4',
    nombre: 'The Marco',
    imagen:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=500&fit=crop',
  },
  {
    id: '5',
    nombre: 'The Vesper',
    imagen:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop',
  },
  {
    id: '6',
    nombre: 'The Alba',
    imagen:
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=500&fit=crop',
  },
]

/** Imagen destacada derecha del carrusel (modelo / look editorial) */
export const featuredLookImage =
  'https://images.unsplash.com/photo-1502823403499-6acfcf50264f?w=520&h=780&fit=crop&q=85&auto=format'
