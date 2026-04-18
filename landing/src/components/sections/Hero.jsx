import { ArrowRight, CheckCircle } from 'lucide-react'

const BADGES = ['Equipo local Bolivia', 'Contratos transparentes', 'Soporte real']

export default function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '6rem', paddingBottom: '4rem',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,200,150,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,200,150,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '-10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,168,255,0.06) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}
          className="hero-grid">

          {/* Content */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.25)',
                borderRadius: '999px', padding: '0.3rem 0.9rem',
                fontSize: '0.8rem', fontWeight: 600, color: '#00C896',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00C896', display: 'inline-block' }} />
                Santa Cruz, Bolivia
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', marginBottom: '1.25rem' }}>
              Transformamos tu{' '}
              <span className="gradient-text">negocio</span>
              {' '}con tecnología a medida
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#A0AEC0', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '540px' }}>
              Somos ingenieros y desarrolladores bolivianos especializados en soluciones digitales reales: landing pages, CRM, ecommerce, automatizaciones y más.
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {BADGES.map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={16} color="#00C896" />
                  <span style={{ fontSize: '0.875rem', color: '#A0AEC0' }}>{b}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contacto" className="btn-primary" style={{ fontSize: '1rem' }}>
                Agenda tu consultoría gratis <ArrowRight size={18} />
              </a>
              <a href="#servicios" className="btn-outline" style={{ fontSize: '1rem' }}>
                Ver servicios
              </a>
            </div>
          </div>

          {/* Logo hero */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-logo">
            <div style={{
              position: 'relative', width: '280px', height: '280px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,200,150,0.15) 0%, transparent 70%)',
                animation: 'pulse 3s ease-in-out infinite',
              }} />
              <img src="/logo.png" alt="Corporación Panda"
                style={{ width: '220px', height: '220px', objectFit: 'contain', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 0 24px rgba(0,200,150,0.4))' }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1.5rem', marginTop: '4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2.5rem',
        }}>
          {[
            { value: '100%', label: 'Código a medida' },
            { value: '30d', label: 'Garantía post-entrega' },
            { value: '24h', label: 'Respuesta inicial' },
            { value: 'BOL', label: 'Equipo local' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontSize: '2rem', fontFamily: 'Space Grotesk', fontWeight: 700 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A0AEC0', marginTop: '0.25rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-logo { display: none !important; }
        }
      `}</style>
    </section>
  )
}
