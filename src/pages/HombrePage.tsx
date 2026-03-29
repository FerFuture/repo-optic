import { CatalogoScrollPage } from './CatalogoScrollPage'
import { hombrePageMeta } from '../data/hombrePageMeta'
import { piezasHombre } from '../data/piezasHombre'

export function HombrePage() {
  return <CatalogoScrollPage meta={hombrePageMeta} piezas={piezasHombre} />
}
