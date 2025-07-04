"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function ContactoClientPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "56993615655"
    const message = "Hola! Me interesa conocer más sobre las Cabañas Guardiamó en Quemchi"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleEmailClick = () => {
    const email = "leonortega@hotmail.com"
    const subject = "Consulta sobre Cabañas Guardiamó"
    const body =
      "Hola,\n\nMe interesa conocer más información sobre las cabañas y el programa all-inclusive.\n\nGracias!"
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen py-16 bg-parchment-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contacto" }]} />

        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-parchment-500 text-umber-700">
            Contacto
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-umber-700 mb-4">¡Hablemos!</h1>
          <p className="text-lg text-umber-600 max-w-2xl mx-auto">
            Estamos aquí para resolver todas tus dudas y ayudarte a planificar tu experiencia perfecta en Quemchi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp */}
          <Card className="hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-umber-700">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-umber-600 mb-6">
                La forma más rápida de contactarnos. Respuesta inmediata durante horario comercial.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                size="lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Escribir por WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-umber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-umber-700">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-umber-600 mb-6">
                Para consultas detalladas o envío de documentos. Te respondemos en menos de 24 horas.
              </p>
              <Button
                onClick={handleEmailClick}
                variant="outline"
                className="w-full border-umber-700 text-umber-700 hover:bg-umber-700 hover:text-white bg-transparent"
                size="lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                Enviar Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Información adicional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-umber-700">
                <Clock className="h-5 w-5 mr-2" />
                Horarios de Atención
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-umber-600">
                <div className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-semibold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-semibold">Solo WhatsApp</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-umber-700">
                <Phone className="h-5 w-5 mr-2" />
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-umber-600">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>+569 9361 5655</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-umber-600" />
                  <span>leonortega@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-umber-600" />
                  <span>Quemchi, Chiloé, Chile</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Llamada a la acción */}
        <Card className="mt-12 bg-umber-700 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">¿Listo para tu Aventura en Chiloé?</h2>
            <p className="mb-6 text-parchment-100">
              No esperes más. Las mejores fechas se agotan rápido. ¡Reserva ahora tu experiencia all-inclusive!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-500 hover:bg-green-600">
                <MessageCircle className="h-5 w-5 mr-2" />
                Reservar por WhatsApp
              </Button>
              <Button
                onClick={handleEmailClick}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-umber-700 bg-transparent"
              >
                <Mail className="h-5 w-5 mr-2" />
                Solicitar Información
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
