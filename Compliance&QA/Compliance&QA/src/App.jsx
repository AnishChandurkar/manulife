import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview'
import Leads from './pages/Leads'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </BrowserRouter>
  )
}
