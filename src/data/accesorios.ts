/**
 * Mostrador de accesorios / piezas destacadas (sin precio).
 * Sustituí `imagen` por rutas en public/ cuando tengas fotos propias.
 */
export type PiezaMostrador = {
  id: string
  nombre: string
  subtitulo: string
  imagen: string
}

export const piezasMostrador: PiezaMostrador[] = [
  {
    id: 'a1',
    nombre: 'The Headlight',
    subtitulo: 'Acetato · colección mostrador',
    imagen:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&h=1200&fit=crop',
  },
  {
    id: 'a2',
    nombre: 'The Coolio',
    subtitulo: 'Metal ligero · vitrina central',
    imagen:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=900&h=1200&fit=crop',
  },
  {
    id: 'a3',
    nombre: 'The Lily',
    subtitulo: 'Silueta cat-eye',
    imagen:
      'https://images.unsplash.com/photo-1563906279821-3cccbe0cee17?w=900&h=1200&fit=crop&q=80&auto=format',
  },
  {
    id: 'a4',
    nombre: 'The Vesper',
    subtitulo: 'Lentes espejo · display lateral',
    imagen:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&h=1200&fit=crop',
  },
  {
    id: 'a5',
    nombre: 'The Alba',
    subtitulo: 'Perfil fino · pasillo',
    imagen:
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&h=1200&fit=crop',
  },
]
