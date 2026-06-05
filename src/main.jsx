import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import Equipment from './pages/Equipment.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

function AppRouter() {
  const [route, setRoute] = useState(window.location.hash || '#home')

  useEffect(() => {
    const onHash = () => {
      const nextHash = window.location.hash || '#home'
      setRoute(nextHash)

      if (nextHash === '#about-us' || nextHash === '#/about-us') {
        window.scrollTo({ top: 220, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', onHash)
    onHash()
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === '#service' || route === '#/service') return <Service />
  if (route === '#equipment' || route === '#/equipment') return <Equipment />
  if (route === '#contact' || route === '#/contact') return <Contact />
  if (route === '#about-us' || route === '#/about-us') return <About />
  return <Home />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
