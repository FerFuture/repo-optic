import { CatalogoScrollPage } from './CatalogoScrollPage'
import { piezasMostrador } from '../data/accesorios'
import { accesoriosPageMeta } from '../data/accesoriosPageMeta'

export function AccesoriosPage() {
  return <CatalogoScrollPage meta={accesoriosPageMeta} piezas={piezasMostrador} />
}
