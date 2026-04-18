import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, MapPin, Mail, MessageSquare } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const SERVICES_LIST = [
  'Landing Page', 'CRM Personalizado', 'Ecommerce', 'Bot WhatsApp',
  'Automatizaciones', 'Admin Digital', 'Consultoría', 'Otro',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    setError(null)
    try {
      const { error: sbErr } = await supabase.from('leads').insert([{
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        service: data.service,
        message: data.message,
      }])
      if (sbErr) throw sbErr
      setSent(true)
      reset()
    } catch (e) {
      setError('Hubo un error al enviar. Escríbenos directo a contacto@corporacionpanda.site')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="section-pad" style={{ background: '#252525' }}>
      <div className="wrap">
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Hablemos</span>
          <h2 className="section-title">¿Listo para digitalizar<br />tu negocio?</h2>
          <p className="section-sub">Primera consultoría completamente gratis. Sin compromiso.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}
          className="contact-grid">

          {/* Info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { icon: <MapPin size={20} />, title: 'Ubicación', text: 'Valle Sánchez, Urb. Colinas del Norte 2\nSanta Cruz de la Sierra, Bolivia' },
                { icon: <Mail size={20} />, title: 'Email', text: 'contacto@corporacionpanda.site' },
                { icon: <MessageSquare size={20} />, title: 'WhatsApp', text: '+591 — Disponible próximamente' },
              ].map(c => (
                <div key={c.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FFFFFF', flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      {c.title}
                    </div>
                    <div style={{ color: '#A0AEC0', fontSize: '0.85rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Horario */}
            <div className="card">
              <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                Horario de atención
              </p>
              <p style={{ color: '#A0AEC0', fontSize: '0.8rem', lineHeight: 1.6 }}>
                Lunes a Viernes: 8:00 – 18:00<br />
                Sábados: 9:00 – 13:00<br />
                <span style={{ color: '#FFFFFF' }}>Respuesta inicial en menos de 24hs</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <CheckCircle size={48} color="#FFFFFF" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  ¡Mensaje recibido!
                </h3>
                <p style={{ color: '#A0AEC0', lineHeight: 1.6 }}>
                  Nos pondremos en contacto contigo en menos de 24 horas hábiles para agendar tu consultoría gratuita.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline" style={{ marginTop: '1.5rem' }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Field label="Nombre *" error={errors.name?.message}>
                    <input {...register('name', { required: 'Requerido' })}
                      placeholder="Tu nombre"
                      style={inputStyle(!!errors.name)} />
                  </Field>
                  <Field label="Email *" error={errors.email?.message}>
                    <input {...register('email', { required: 'Requerido', pattern: { value: /^\S+@\S+$/, message: 'Email inválido' } })}
                      type="email" placeholder="tu@email.com"
                      style={inputStyle(!!errors.email)} />
                  </Field>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Field label="Teléfono">
                    <input {...register('phone')} placeholder="+591 7..."
                      style={inputStyle(false)} />
                  </Field>
                  <Field label="Empresa">
                    <input {...register('company')} placeholder="Nombre de tu empresa"
                      style={inputStyle(false)} />
                  </Field>
                </div>

                <Field label="Servicio de interés">
                  <select {...register('service')} style={{ ...inputStyle(false), cursor: 'pointer' }}>
                    <option value="">Selecciona un servicio...</option>
                    {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>

                <Field label="Mensaje *" error={errors.message?.message}>
                  <textarea {...register('message', { required: 'Requerido' })}
                    rows={4} placeholder="Cuéntanos sobre tu proyecto o negocio..."
                    style={{ ...inputStyle(!!errors.message), resize: 'vertical' }} />
                </Field>

                {error && (
                  <p style={{ color: '#ff6b6b', fontSize: '0.85rem', background: 'rgba(255,107,107,0.1)', padding: '0.75rem', borderRadius: '8px' }}>
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-primary" disabled={loading}
                  style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Enviando...' : <><Send size={17} /> Enviar consulta</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: error ? '#ff6b6b' : '#A0AEC0' }}>{label}</label>
      {children}
      {error && <span style={{ fontSize: '0.75rem', color: '#ff6b6b' }}>{error}</span>}
    </div>
  )
}

function inputStyle(hasError) {
  return {
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${hasError ? '#ff6b6b' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '8px',
    padding: '0.6rem 0.85rem',
    color: '#F8F9FA',
    fontSize: '0.875rem',
    outline: 'none',
    width: '100%',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
    backgroundColor: 'rgba(255,255,255,0.04)',
  }
}
