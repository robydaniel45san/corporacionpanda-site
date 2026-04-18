import { MapPin, Mail, Phone, Instagram, Linkedin, Github } from 'lucide-react'

const SERVICES = ['Landing Pages', 'CRM Personalizado', 'Ecommerce', 'Automatización', 'Bots WhatsApp', 'Consultoría']
const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="Corporación Panda" style={{ height: '2rem' }} />
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem' }}>
                Corporación <span className="gradient-text">Panda</span>
              </span>
            </div>
            <p style={{ color: '#A0AEC0', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Impulsamos y actualizamos tu negocio con tecnología a medida. Ingenieros capacitados, equipo local en Bolivia.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Instagram size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Github size={18} />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href}
                  style={{
                    width: '2.25rem', height: '2.25rem', borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#A0AEC0', transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#00C896'; e.currentTarget.style.color = '#00C896' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#A0AEC0' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: '#F8F9FA', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Servicios
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {SERVICES.map(s => (
                <li key={s}>
                  <a href="#servicios" style={{ color: '#A0AEC0', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#00C896'}
                    onMouseLeave={e => e.target.style.color = '#A0AEC0'}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: '#F8F9FA', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Empresa
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ color: '#A0AEC0', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#00C896'}
                    onMouseLeave={e => e.target.style.color = '#A0AEC0'}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: '#F8F9FA', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: <MapPin size={15} />, text: 'Valle Sánchez, Urb. Colinas del Norte 2\nSanta Cruz, Bolivia' },
                { icon: <Mail size={15} />, text: 'contacto@corporacionpanda.site' },
                { icon: <Phone size={15} />, text: '+591 — WhatsApp disponible' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00C896', marginTop: '2px', flexShrink: 0 }}>{c.icon}</span>
                  <span style={{ color: '#A0AEC0', fontSize: '0.8rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ color: '#A0AEC0', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Corporación Panda. Todos los derechos reservados.
          </p>
          <p style={{ color: '#A0AEC0', fontSize: '0.8rem' }}>
            Santa Cruz, Bolivia · <span className="gradient-text">corporacionpanda.site</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
