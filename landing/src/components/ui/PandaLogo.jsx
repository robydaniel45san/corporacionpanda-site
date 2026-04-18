import { motion } from 'motion/react'

/**
 * Corporación Panda — Logo mark construido en SVG.
 *
 * Construcción:
 *  - Círculo contenedor con doble stroke (outer + inner thin).
 *  - Cabeza: hexágono irregular con facetas (estilo origami/angular).
 *  - Orejas: tufts triangulares con fur notches.
 *  - Eye patches: diamantes asimétricos inclinados hacia el centro (expresión fiera).
 *  - Ojos: slits angulares (rebeldía).
 *  - Nariz: triángulo sólido negativo.
 *  - Snout: línea mínima angular.
 *  - Cuello/pecho: franjas diagonales sugiriendo hombros.
 *
 * Props:
 *  - size: tamaño en px (default 240)
 *  - variant: "mark" (con círculo) | "head" (solo cabeza, sin círculo)
 *  - animated: anima la entrada
 */
export default function PandaLogo({ size = 240, variant = 'mark', animated = false, strokeColor, ...rest }) {
  const Wrapper = animated ? motion.svg : 'svg'
  const animProps = animated ? {
    initial: { opacity: 0, scale: 0.88 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  } : {}

  const W = 'currentColor' // head fill (white by default)
  const K = '#000'         // negative space (black)

  return (
    <Wrapper
      width={size} height={size} viewBox="0 0 400 400"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'currentColor', display: 'block', overflow: 'visible' }}
      {...animProps} {...rest}
    >
      <defs>
        <clipPath id="pandaClip">
          <circle cx="200" cy="200" r="178" />
        </clipPath>
      </defs>

      {/* ===== CONTAINER RINGS ===== */}
      {variant === 'mark' && (
        <>
          <circle cx="200" cy="200" r="192" stroke={W} strokeWidth="3" fill="none" opacity="0.35" />
          <circle cx="200" cy="200" r="178" stroke={W} strokeWidth="8" fill="none" />
        </>
      )}

      {/* Clipped canvas so body bleeds into circle */}
      <g clipPath={variant === 'mark' ? 'url(#pandaClip)' : undefined}>

        {/* ===== HEAD MASS — faceted octagon ===== */}
        {/* Main head silhouette */}
        <path d="
          M 200 75
          L 248 82
          L 292 108
          L 322 148
          L 336 200
          L 326 252
          L 302 294
          L 262 322
          L 210 334
          L 200 335
          L 190 334
          L 138 322
          L 98 294
          L 74 252
          L 64 200
          L 78 148
          L 108 108
          L 152 82
          Z
        " fill={W} />

        {/* ===== EARS — triangular tufts with fur notches ===== */}
        {/* Left ear */}
        <path d="
          M 110 110
          L 92 58
          L 118 75
          L 128 45
          L 142 78
          L 155 62
          L 155 115
          Z
        " fill={W} stroke={W} strokeWidth="4" strokeLinejoin="miter" />

        {/* Right ear */}
        <path d="
          M 290 110
          L 308 58
          L 282 75
          L 272 45
          L 258 78
          L 245 62
          L 245 115
          Z
        " fill={W} stroke={W} strokeWidth="4" strokeLinejoin="miter" />

        {/* ===== FOREHEAD NOTCH — V-shape between ears ===== */}
        <path d="M 175 92 L 200 115 L 225 92 L 215 80 L 200 95 L 185 80 Z" fill={K} />

        {/* ===== EYE PATCHES — angular fierce diamonds ===== */}
        {/* Left eye patch (tilted inward for aggressive expression) */}
        <path d="
          M 108 148
          L 162 132
          L 200 168
          L 188 212
          L 140 228
          L 92 208
          L 78 172
          Z
        " fill={K} />

        {/* Right eye patch (mirror) */}
        <path d="
          M 292 148
          L 238 132
          L 200 168
          L 212 212
          L 260 228
          L 308 208
          L 322 172
          Z
        " fill={K} />

        {/* ===== EYES — fierce white slits ===== */}
        {/* Left eye */}
        <path d="M 108 178 L 158 162 L 165 192 L 122 200 Z" fill={W} />
        <path d="M 120 180 L 148 170 L 150 188 L 128 192 Z" fill={K} opacity="0.6" />

        {/* Right eye */}
        <path d="M 292 178 L 242 162 L 235 192 L 278 200 Z" fill={W} />
        <path d="M 280 180 L 252 170 L 250 188 L 272 192 Z" fill={K} opacity="0.6" />

        {/* ===== SNOUT AREA ===== */}
        {/* Bridge shadow */}
        <path d="M 188 215 L 212 215 L 216 240 L 200 250 L 184 240 Z" fill={W} />

        {/* Nose — bold triangle */}
        <path d="M 178 240 L 222 240 L 200 268 Z" fill={K} />

        {/* Mouth — angular open */}
        <path d="
          M 178 275
          L 196 272
          L 200 284
          L 204 272
          L 222 275
          L 228 298
          L 208 308
          L 200 304
          L 192 308
          L 172 298
          Z
        " fill={K} />

        {/* Chin highlight */}
        <path d="M 188 306 L 212 306 L 205 324 L 195 324 Z" fill={W} />

        {/* ===== CHEEK FACETS — subtle angular shading ===== */}
        <path d="M 70 230 L 110 240 L 100 270 L 72 260 Z" fill={W} opacity="0.95" />
        <path d="M 330 230 L 290 240 L 300 270 L 328 260 Z" fill={W} opacity="0.95" />

        {/* ===== BODY / SHOULDERS — diagonal bandolier effect ===== */}
        {/* Shoulder base */}
        <path d="
          M 40 380
          L 80 320
          L 200 350
          L 320 320
          L 360 380
          Z
        " fill={W} />

        {/* Diagonal stripe right (bandolier) */}
        <path d="
          M 200 350
          L 320 320
          L 360 380
          L 240 380
          Z
        " fill={K} />

        {/* Diagonal line accent */}
        <path d="
          M 80 320
          L 200 350
          L 200 380
          L 60 380
          Z
        " fill={W} />
        <path d="
          M 145 335
          L 200 350
          L 200 380
          L 120 380
          Z
        " fill={K} />

      </g>

      {/* ===== INNER RING ACCENT (on top of everything) ===== */}
      {variant === 'mark' && (
        <circle cx="200" cy="200" r="178" stroke={W} strokeWidth="8" fill="none" />
      )}
    </Wrapper>
  )
}
