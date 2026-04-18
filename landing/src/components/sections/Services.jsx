import { Globe, LayoutDashboard, ShoppingCart, Zap, Bot, BarChart3, Users, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: <Globe size={28} />,
    name: 'Landing Pages',
    desc: 'Páginas de aterrizaje profesionales, rápidas y optimizadas para convertir visitas en clientes.',
    from: '$300',
    tag: 'Más pedido',
  },
  {
    icon: <LayoutDashboard size={28} />,
    name: 'CRM Personalizado',
    desc: 'Sistema de gestión de clientes a tu medida. Pipeline de ventas, seguimiento y reportes.',
    from: '$1,500',
    tag: null,
  },
  {
    icon: <ShoppingCart size={28} />,
    name: 'Ecommerce',
    desc: 'Tienda online completa con catálogo, carrito, pasarela de pagos e integración con redes.',
    from: '$800',
    tag: null,
  },
  {
    icon: <Zap size={28} />,
    name: 'Automatizaciones',
    desc: 'Flujos automáticos para ahorrar tiempo: emails, notificaciones, reportes, integraciones de APIs.',
    from: '$500',
    tag: null,
  },
  {
    icon: <Bot size={28} />,
    name: 'Bots WhatsApp',
    desc: 'Chatbot inteligente para atención al cliente, cobros y seguimiento vía WhatsApp Business.',
    from: '$500',
    tag: 'Innovación',
  },
  {
    icon: <BarChart3 size={28} />,
    name: 'Admin Digital',
    desc: 'Sistemas de administración: inventario, facturación, reportes financieros y dashboards.',
    from: '$1,200',
    tag: null,
  },
  {
    icon: <Users size={28} />,
    name: 'Consultoría',
    desc: 'Asesoría técnica y estratégica para decisiones de tecnología, arquitectura y procesos digitales.',
    from: '$25/hr',
    tag: 'Gratuita 1ra',
  },
  {
    icon: <Globe size={28} />,
    name: 'Mantenimiento',
    desc: 'Planes mensuales para mantener, actualizar y monitorear tu plataforma digital sin preocupaciones.',
    from: '$80/mes',
    tag: 'Recurrente',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-pad" style={{ background: '#0A0A0A' }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Lo que hacemos</span>
          <h2 className="section-title">Servicios para digitalizar<br />tu negocio</h2>
          <p className="section-sub">
            Desde una landing page hasta sistemas empresariales completos. Cada proyecto es único y construido a medida.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {SERVICES.map(s => (
            <div key={s.name} className="card" style={{ position: 'relative' }}>
              {s.tag && (
                <span style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
                  background: 'rgba(0,200,150,0.12)', color: '#00C896',
                  border: '1px solid rgba(0,200,150,0.25)',
                  borderRadius: '999px', padding: '0.2rem 0.6rem',
                }}>
                  {s.tag}
                </span>
              )}
              <div style={{
                width: '3rem', height: '3rem', borderRadius: '12px',
                background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#00C896', marginBottom: '1rem',
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                {s.name}
              </h3>
              <p style={{ color: '#A0AEC0', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {s.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', color: '#A0AEC0' }}>
                  Desde <span style={{ color: '#00C896', fontWeight: 700 }}>{s.from}</span>
                </span>
                <a href="#contacto" style={{ color: '#00C896', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Cotizar <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
