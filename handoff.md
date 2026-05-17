# Handoff de Proyecto - Cabanas-Quimchi

## 1) Contexto rapido
- Proyecto web de marketing/reserva para "Cabañas Playa Guardiamó" (Quemchi, Chiloé).
- Stack principal: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind + shadcn/ui + Firebase Firestore.
- Objetivo de negocio visible en UI: captar consultas/reservas por WhatsApp y email.

## 2) Estado actual (snapshot)
- Sitio multipágina con rutas: `/`, `/programa`, `/cabanas`, `/galeria`, `/ubicacion`, `/contacto`.
- Contenido turístico y comercial ya cargado (precio, itinerario, galería, ubicación, contacto).
- Sección de comentarios en home conectada a Firestore en tiempo real.
- SEO técnico base implementado (metadata, OpenGraph, robots, sitemap).
- Deploy orientado a Netlify (`netlify.toml`, `_redirects`, headers custom).

## 3) Arquitectura y piezas clave
- Layout global: `app/layout.tsx` (nav, footer, botón WhatsApp, metadata global).
- Home: `app/page.tsx` (hero, beneficios, CTA, comentarios, reservas).
- Comentarios: `components/comments/*` + `lib/firebase.ts` + `types/comment.ts`.
- SEO estructurado: `components/structured-data.tsx`.
- Config base: `next.config.mjs`, `tailwind.config.ts`, `next-sitemap.config.js`.

