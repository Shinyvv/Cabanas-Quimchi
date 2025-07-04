import type { Metadata } from "next"
import ContactoClientPage from "./ContactoClientPage"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos por WhatsApp o email para reservar tu experiencia all-inclusive en Quemchi. Atención personalizada y respuesta rápida para todas tus consultas.",
  keywords: ["contacto Cabañas Guardiamó", "WhatsApp Chiloé", "reservas Quemchi", "consultas turismo"],
  openGraph: {
    title: "Contacto | Cabañas Guardiamó",
    description:
      "Contáctanos para reservar tu experiencia all-inclusive en Quemchi. WhatsApp y email disponibles con atención personalizada.",
    images: ["/contacto-og.jpg"],
  },
}

export default function ContactoPage() {
  return <ContactoClientPage />
}
