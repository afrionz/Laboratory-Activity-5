import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'

function AppRouter() {
  const [route, setRoute] = useState(window.location.hash || '#home')

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#home')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === '#service' || route === '#/service') return <Service />
  return <Home />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
