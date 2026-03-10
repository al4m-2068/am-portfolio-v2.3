import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Sections/Home'
import Projects from './components/Sections/AboutAndProjects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Projects/>
  </StrictMode>,
)