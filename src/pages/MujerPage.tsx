import { CatalogoScrollPage } from './CatalogoScrollPage'
import { mujerPageMeta } from '../data/mujerPageMeta'
import { piezasMujer } from '../data/piezasMujer'

export function MujerPage() {
  return <CatalogoScrollPage meta={mujerPageMeta} piezas={piezasMujer} />
}
