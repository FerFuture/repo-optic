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
      'https://acdn-us.mitiendanube.com/stores/004/419/408/products/366982_a_anteojosdotmattblack3-6cc93aa3f4134a1ec917308075839926-1024-1024.webp',
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
  "https://scontent.fscl5-1.fna.fbcdn.net/v/t1.6435-9/117712078_781182342685320_1998761326049303792_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEtD9qJf6dQpaPRAatQNyCWSeNFJee42L5J40Ul57jYvsc0S6K_nL2OuvMzmuWf6wotnHuya1wsyl78RAf22T2y&_nc_ohc=LJH4tvpuYhoQ7kNvwE5feGZ&_nc_oc=AdpCwe6b66XsaNrxrccBpJCACDCeeUJganqtz7alvsbm0RYaU52SIgkYYCngI8v-x70&_nc_zt=23&_nc_ht=scontent.fscl5-1.fna&_nc_gid=0kUTuJaADB1dwQRkGRW-HA&_nc_ss=7a32e&oh=00_AfwCHUDl57N6Y-mfMSSQ81LX_PurttIU2b8pgRkqQFZa3A&oe=69F0B2B2"