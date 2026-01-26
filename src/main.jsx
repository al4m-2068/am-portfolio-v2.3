import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Sections/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Home />
    </div>
  </StrictMode>,
)
