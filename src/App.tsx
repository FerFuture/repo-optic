import { Route, Routes } from 'react-router-dom'
import { Shell } from './Shell'
import { AccesoriosPage } from './pages/AccesoriosPage'
import { HombrePage } from './pages/HombrePage'
import { HomePage } from './pages/HomePage'
import { MujerPage } from './pages/MujerPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/hombre" element={<HombrePage />} />
        <Route path="/mujer" element={<MujerPage />} />
        <Route path="/accesorios" element={<AccesoriosPage />} />
      </Route>
    </Routes>
  )
}
