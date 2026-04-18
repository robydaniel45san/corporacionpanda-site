# Corporación Panda — Landing Page

## Stack
- React 19 + Vite + Tailwind CSS v4
- Supabase (PostgreSQL + Auth + Storage)
- React Hook Form · Lucide React · React Router DOM

## Estructura
```
landing/src/
  components/layout/   → Header, Footer
  components/sections/ → Hero, Services, Process, Portfolio, Pricing, Contact
  lib/supabase.js      → cliente Supabase
supabase/migrations/   → schema SQL
docs/                  → documentos legales (Word)
```

## Comandos
```bash
cd landing && npm run dev     # puerto 5173
```

## Variables de entorno
Copiar `.env.example` → `.env.local` y completar con credenciales Supabase.

## Supabase
Tablas: `leads`, `clients`, `services`, `projects`
RLS activo — anon solo puede insertar leads y leer clientes/servicios/proyectos públicos.

## Paleta
- Brand: `#00C896`
- Fondo: `#0A0A0A`
- Superficie: `#111111`
- Muted: `#A0AEC0`
