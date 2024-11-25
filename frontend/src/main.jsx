import { BrowserRouter, Routes, Route } from 'react-router'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import AddColor from './pages/AddColor'

import 'tailwindcss/tailwind.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-color" element={<AddColor />} />
      <Route path="/color/:id" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
