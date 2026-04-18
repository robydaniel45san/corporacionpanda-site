import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

const MARQUEE_ITEMS = [
  'React', 'Node.js', 'Supabase', 'PostgreSQL', 'WhatsApp API',
  'Tailwind', 'Vite', 'TypeScript', 'Stripe', 'PayCenter',
  'Next.js', 'Prisma', 'Redis', 'AWS', 'Vercel',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }),
}

export default function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '7rem', paddingBottom: '5rem',
      background: '#1E1E1E',
    }}>
      {/* Grid */}
      <div className="bg-grid bg-grid-fade" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Glow behind card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute', top: '50%', right: '15%',
          transform: 'translateY(-50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          zIndex: 0, pointerEvents: 'none',
        }}
        className="hero-glow"
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="hero-grid">

          {/* Left: text */}
          <div>
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              style={{ marginBottom: '1.75rem' }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '999px', padding: '0.4rem 1rem',
                fontSize: '0.78rem', fontWeight: 500, color: '#DDD',
                backdropFilter: 'blur(10px)',
              }}>
                <Sparkles size={13} />
                Santa Cruz · Bolivia
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.045em',
                lineHeight: 0.98,
              }}
            >
              Transformamos
              <br />
              tu negocio
              <br />
              <span style={{ color: '#888', fontStyle: 'italic', fontWeight: 400 }}>
                con código
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{
                fontSize: '1.1rem',
                color: '#AAA', lineHeight: 1.7, marginBottom: '2.5rem',
                maxWidth: '500px',
              }}
            >
              Ingenieros y desarrolladores bolivianos construyendo landing pages, CRMs, ecommerce, bots y automatizaciones a medida.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
            >
              <motion.a href="#contacto" className="btn-primary"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Consultoría gratis <ArrowRight size={17} />
              </motion.a>
              <motion.a href="#servicios" className="btn-outline"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Ver servicios
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem', marginTop: '3.5rem',
                borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem',
              }}
            >
              {[
                { value: '100%', label: 'A medida' },
                { value: '30d', label: 'Garantía' },
                { value: '24h', label: 'Respuesta' },
                { value: 'BOL', label: 'Local' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: '1.6rem', fontFamily: 'Space Grotesk', fontWeight: 700,
                    color: '#FFF', letterSpacing: '-0.03em',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#888', marginTop: '0.25rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Logo card */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="hero-card-side">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              whileHover={{ y: -8, rotateZ: 1 }}
              style={{
                position: 'relative',
                width: '100%', maxWidth: '420px',
                aspectRatio: '3 / 4',
                background: 'linear-gradient(145deg, #2A2A2A 0%, #1A1A1A 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
                padding: '2rem',
                display: 'flex', flexDirection: 'column',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.4s ease',
              }}
            >
              {/* Top metadata */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  fontSize: '0.68rem', letterSpacing: '0.2em', color: '#666',
                  fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase',
                }}>
                  Est. 2024
                </span>
                <span style={{
                  fontSize: '0.68rem', letterSpacing: '0.2em', color: '#666',
                  fontFamily: 'JetBrains Mono, monospace',
                }}>
                  N° 001
                </span>
              </div>

              {/* Dashed top line */}
              <div style={{ height: '1px', background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0 4px, transparent 4px 8px)', marginBottom: '1.5rem' }} />

              {/* Logo centered */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'relative' }}
                >
                  {/* Subtle glow */}
                  <div style={{
                    position: 'absolute', inset: '-40px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />
                  <img src="/logo.png" alt="Corporación Panda"
                    style={{
                      width: '240px', height: '240px', objectFit: 'contain',
                      borderRadius: '50%',
                      position: 'relative', zIndex: 1,
                    }} />
                </motion.div>
              </div>

              {/* Dashed bottom line */}
              <div style={{ height: '1px', background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0 4px, transparent 4px 8px)', marginTop: '1.5rem', marginBottom: '1rem' }} />

              {/* Bottom: brand name */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Space Grotesk', fontWeight: 700,
                  fontSize: '1.4rem', letterSpacing: '-0.02em', color: '#FFF',
                }}>
                  CORPORACIÓN
                </div>
                <div style={{
                  fontFamily: 'Space Grotesk', fontWeight: 400, fontStyle: 'italic',
                  fontSize: '1.8rem', letterSpacing: '-0.03em', color: '#FFF',
                  marginTop: '-4px',
                }}>
                  Panda
                </div>
                <div style={{
                  fontSize: '0.65rem', letterSpacing: '0.3em', color: '#666',
                  fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase',
                  marginTop: '0.5rem',
                }}>
                  Digital Studio · Bolivia
                </div>
              </div>

              {/* Corner decorations */}
              {['tl','tr','bl','br'].map(pos => (
                <div key={pos} style={{
                  position: 'absolute', width: '16px', height: '16px',
                  borderColor: 'rgba(255,255,255,0.25)',
                  borderStyle: 'solid', borderWidth: 0,
                  ...(pos === 'tl' && { top: 12, left: 12, borderTopWidth: 1, borderLeftWidth: 1 }),
                  ...(pos === 'tr' && { top: 12, right: 12, borderTopWidth: 1, borderRightWidth: 1 }),
                  ...(pos === 'bl' && { bottom: 12, left: 12, borderBottomWidth: 1, borderLeftWidth: 1 }),
                  ...(pos === 'br' && { bottom: 12, right: 12, borderBottomWidth: 1, borderRightWidth: 1 }),
                }} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '1rem 0', overflow: 'hidden', zIndex: 2,
          background: 'rgba(30,30,30,0.7)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap' }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{
              fontSize: '0.85rem', color: '#777', fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.05em',
            }}>
              {item} <span style={{ color: '#444', marginLeft: '3rem' }}>✦</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .hero-card-side { order: -1; max-width: 320px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
