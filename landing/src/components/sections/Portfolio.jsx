import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const PLACEHOLDER_CLIENTS = [
  { id: 1, name: 'Cliente 1', industry: 'Retail' },
  { id: 2, name: 'Cliente 2', industry: 'Servicios' },
  { id: 3, name: 'Cliente 3', industry: 'Tecnología' },
  { id: 4, name: 'Cliente 4', industry: 'Gastronomía' },
  { id: 5, name: 'Cliente 5', industry: 'Salud' },
  { id: 6, name: 'Cliente 6', industry: 'Educación' },
]

const PROJECTS_PLACEHOLDER = [
  { id: 1, title: 'Tienda Online · Retail SCZ', tech: ['React', 'Supabase', 'Tailwind'], category: 'Ecommerce' },
  { id: 2, title: 'CRM Inmobiliaria', tech: ['Node.js', 'PostgreSQL', 'React'], category: 'CRM' },
  { id: 3, title: 'Bot de Cobros WhatsApp', tech: ['Node.js', 'WhatsApp API', 'PayCenter'], category: 'Automatización' },
  { id: 4, title: 'Landing + CMS Restaurante', tech: ['React', 'Supabase', 'Vite'], category: 'Landing Page' },
]

export default function Portfolio() {
  const [clients, setClients] = useState(PLACEHOLDER_CLIENTS)

  useEffect(() => {
    supabase.from('clients').select('*').eq('active', true).order('sort_order')
      .then(({ data }) => { if (data?.length) setClients(data) })
  }, [])

  return (
    <section id="portafolio" className="section-pad" style={{ background: '#0A0A0A' }}>
      <div className="wrap">
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Portafolio</span>
          <h2 className="section-title">Proyectos que hablan<br />por nosotros</h2>
          <p className="section-sub">Soluciones reales para negocios bolivianos.</p>
        </div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {PROJECTS_PLACEHOLDER.map(p => (
            <div key={p.id} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Placeholder cover */}
              <div style={{
                height: '140px', borderRadius: '10px', marginBottom: '1rem',
                background: 'linear-gradient(135deg, rgba(0,200,150,0.12) 0%, rgba(0,168,255,0.08) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(0,200,150,0.12)',
              }}>
                <span style={{ fontSize: '0.75rem', color: '#A0AEC0', fontFamily: 'JetBrains Mono, monospace' }}>
                  [ preview ]
                </span>
              </div>
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
                background: 'rgba(0,200,150,0.1)', color: '#00C896',
                border: '1px solid rgba(0,200,150,0.2)',
                borderRadius: '999px', padding: '0.15rem 0.55rem',
                marginBottom: '0.6rem', display: 'inline-block',
              }}>
                {p.category}
              </span>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', marginBottom: '0.75rem' }}>
                {p.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontSize: '0.7rem', color: '#A0AEC0',
                    background: 'rgba(255,255,255,0.05)', borderRadius: '6px',
                    padding: '0.15rem 0.5rem', border: '1px solid rgba(255,255,255,0.08)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Clients logos */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2.5rem',
        }}>
          <p style={{ textAlign: 'center', color: '#A0AEC0', fontSize: '0.8rem', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Empresas que confían en nosotros
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {clients.map(c => (
              <div key={c.id} style={{
                padding: '0.75rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px',
                background: '#111', fontSize: '0.85rem', color: '#A0AEC0',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,200,150,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                {c.logo_url
                  ? <img src={c.logo_url} alt={c.name} style={{ height: '2rem', objectFit: 'contain' }} />
                  : <span>{c.name} <span style={{ fontSize: '0.7rem', color: '#555' }}>· {c.industry}</span></span>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
