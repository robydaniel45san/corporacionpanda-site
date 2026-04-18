import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>

        {/* Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img src="/logo.png" alt="Corporación Panda" style={{ height: '2.2rem', width: 'auto' }} />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
            Corporación <span className="gradient-text">Panda</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          className="hidden-mobile">
          {NAV.map(item => (
            <a key={item.href} href={item.href}
              style={{
                fontSize: '0.9rem', fontWeight: 500, color: '#A0AEC0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#00C896'}
              onMouseLeave={e => e.target.style.color = '#A0AEC0'}
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
            Consultoría gratis
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#F8F9FA', cursor: 'pointer', display: 'none' }}
          className="show-mobile"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {NAV.map(item => (
            <a key={item.href} href={item.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 500, color: '#A0AEC0' }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" onClick={() => setOpen(false)}
            style={{ textAlign: 'center' }}>
            Consultoría gratis
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </header>
  )
}
