import { Check, ArrowRight } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    price: '$300',
    period: 'proyecto único',
    desc: 'Ideal para negocios que arrancan su presencia digital.',
    features: [
      'Landing page profesional',
      'Diseño responsivo (móvil + desktop)',
      'Formulario de contacto',
      'SEO básico',
      'Dominio + deploy',
      '30 días garantía bugs',
    ],
    cta: 'Empezar',
    highlight: false,
  },
  {
    name: 'Profesional',
    price: '$800',
    period: 'proyecto único',
    desc: 'Para negocios que necesitan más que una página.',
    features: [
      'Todo lo de Starter',
      'CMS o panel de administración',
      'Integración con redes sociales',
      'Google Analytics + SEO avanzado',
      'Optimización de velocidad',
      'Capacitación del equipo',
      '30 días garantía bugs',
    ],
    cta: 'Más popular',
    highlight: true,
  },
  {
    name: 'Empresarial',
    price: 'A cotizar',
    period: 'según alcance',
    desc: 'Sistemas complejos, CRM, ecommerce o automatizaciones.',
    features: [
      'Todo lo de Profesional',
      'CRM / Ecommerce / Bot WhatsApp',
      'Integraciones con APIs externas',
      'Pagos en línea (PayCenter/Stripe)',
      'Panel de reportes y analytics',
      'Mantenimiento mensual incluido 1 mes',
      'SLA y soporte prioritario',
    ],
    cta: 'Cotizar ahora',
    highlight: false,
  },
]

const MAINTENANCE = [
  { plan: 'Básico', price: '$80/mes', desc: 'Hosting + SSL + actualizaciones menores' },
  { plan: 'Estándar', price: '$150/mes', desc: 'Básico + soporte técnico + 2 cambios/mes' },
  { plan: 'Premium', price: '$300/mes', desc: 'Estándar + reportes + cambios ilimitados menores' },
]

export default function Pricing() {
  return (
    <section id="precios" className="section-pad" style={{ background: '#080808' }}>
      <div className="wrap">
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Inversión</span>
          <h2 className="section-title">Planes transparentes,<br />sin letra chica</h2>
          <p className="section-sub">
            Todos los proyectos incluyen contrato formal, metodología ágil y pago por etapas (40/40/20).
          </p>
        </div>

        {/* Planes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {PLANS.map(plan => (
            <div key={plan.name} className="card" style={{
              position: 'relative',
              border: plan.highlight ? '1px solid rgba(0,200,150,0.5)' : undefined,
              boxShadow: plan.highlight ? '0 0 32px rgba(0,200,150,0.15)' : undefined,
            }}>
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #00C896, #00a8ff)',
                  color: '#0A0A0A', fontSize: '0.7rem', fontWeight: 800,
                  padding: '0.2rem 1rem', borderRadius: '0 0 8px 8px',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  Más popular
                </div>
              )}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                  {plan.name}
                </h3>
                <p style={{ color: '#A0AEC0', fontSize: '0.85rem', marginBottom: '1rem' }}>{plan.desc}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span className="gradient-text" style={{ fontSize: '2rem', fontFamily: 'Space Grotesk', fontWeight: 700 }}>
                    {plan.price}
                  </span>
                  <span style={{ color: '#A0AEC0', fontSize: '0.8rem' }}>USD · {plan.period}</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <Check size={15} color="#00C896" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: '#A0AEC0', fontSize: '0.85rem' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className={plan.highlight ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', justifyContent: 'center' }}>
                {plan.cta} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Mantenimiento */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2.5rem' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Planes de mantenimiento mensual
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {MAINTENANCE.map(m => (
              <div key={m.plan} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  {m.plan}
                </div>
                <div className="gradient-text" style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: '0.4rem' }}>
                  {m.price}
                </div>
                <p style={{ color: '#A0AEC0', fontSize: '0.8rem' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Política cambios */}
        <div style={{
          marginTop: '2rem', padding: '1.5rem', borderRadius: '16px',
          background: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.15)',
          textAlign: 'center',
        }}>
          <p style={{ color: '#A0AEC0', fontSize: '0.875rem' }}>
            <span style={{ color: '#00C896', fontWeight: 700 }}>Política de cambios post-entrega:</span>{' '}
            Cambio Bajo $30–$80 · Medio $80–$250 · Alto $250–$800 · Crítico a cotizar.
            Cada cambio incluye contrato específico.
          </p>
        </div>
      </div>
    </section>
  )
}
