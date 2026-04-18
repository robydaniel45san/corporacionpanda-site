import { MessageSquare, FileText, Code2, TestTube, Rocket, Headphones } from 'lucide-react'

const STEPS = [
  {
    icon: <MessageSquare size={24} />,
    n: '01',
    title: 'Consultoría inicial',
    desc: 'Reunión gratuita de 1 hora para entender tu negocio, necesidades y objetivos.',
    detail: 'Sin compromiso · 100% gratis',
  },
  {
    icon: <FileText size={24} />,
    n: '02',
    title: 'Propuesta formal',
    desc: 'Documento técnico con alcance, timeline detallado y cotización transparente.',
    detail: '3 días hábiles',
  },
  {
    icon: <Code2 size={24} />,
    n: '03',
    title: 'Desarrollo',
    desc: 'Sprints organizados: diseño → frontend → backend → integraciones. Actualizaciones periódicas.',
    detail: 'Anticipo 40%',
  },
  {
    icon: <TestTube size={24} />,
    n: '04',
    title: 'Ambiente test',
    desc: 'Entregamos en staging.tudominio.com. 7 días para revisar y aprobar todo.',
    detail: 'Pago 40%',
  },
  {
    icon: <Rocket size={24} />,
    n: '05',
    title: 'Producción',
    desc: 'Deploy final, configuración DNS/SSL, capacitación del equipo y transferencia de credenciales.',
    detail: 'Pago final 20%',
  },
  {
    icon: <Headphones size={24} />,
    n: '06',
    title: 'Soporte post-entrega',
    desc: '30 días de garantía para bugs. Planes de mantenimiento mensual disponibles.',
    detail: '30 días garantía',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section-pad" style={{ background: '#1E1E1E' }}>
      <div className="wrap">
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Metodología</span>
          <h2 className="section-title">Cómo trabajamos</h2>
          <p className="section-sub">
            Proceso claro, fechas reales y pagos por etapas. Sin sorpresas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {STEPS.map((step, i) => (
            <div key={step.n} className="card" style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: '3rem', height: '3rem', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF',
                }}>
                  {step.icon}
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace' }}>
                    {step.n}
                  </span>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem' }}>{step.title}</h3>
                </div>
                <p style={{ color: '#A0AEC0', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>
                  {step.desc}
                </p>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 600, color: '#FFFFFF',
                  background: 'rgba(255,255,255,0.08)', borderRadius: '6px',
                  padding: '0.2rem 0.5rem',
                }}>
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
