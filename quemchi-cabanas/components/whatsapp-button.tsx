"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "56912345678" // Reemplazar con el número real
  const message = "Hola! Me interesa conocer más sobre las Cabañas Guardiamó en Quemchi"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
