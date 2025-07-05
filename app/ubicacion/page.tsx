import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Car, Plane, Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Ubicación y Cómo Llegar",
  description:
    "Instrucciones detalladas para llegar a Cabañas Guardiamó en Quemchi desde aeropuerto Mocopulli, Ancud y Castro. Traslados incluidos y coordenadas GPS.",
  keywords: ["ubicación Quemchi", "cómo llegar Chiloé", "aeropuerto Mocopulli", "traslados Chiloé", "coordenadas GPS"],
  openGraph: {
    title: "Ubicación y Cómo Llegar | Cabañas Guardiamó",
    description:
      "Encuentra las mejores rutas para llegar a nuestras cabañas en Quemchi con traslados incluidos desde cualquier punto de Chiloé.",
    images: ["/Quemchi.jpg"],
  },
}

export default function UbicacionPage() {
  return (
    <div className="min-h-screen py-16 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Ubicación" }]} />

        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-parchment-500 text-umber-700">
            Ubicación
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-umber-700 mb-4">Cómo Llegar</h1>
          <p className="text-lg text-umber-600 max-w-2xl mx-auto">
            Te ayudamos a llegar a nuestras cabañas desde cualquier punto de Chiloé
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mapa */}
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-umber-700">
                  <MapPin className="h-5 w-5 mr-2" />
                  Ubicación en el Mapa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-parchment-200 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1751689796919!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDJudEhaR1E.!2m2!1d-42.18472806387833!2d-73.41954676913214!3f74.94402825258538!4f-46.98433028594694!5f0.7820865974627469"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 320, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación en Google Maps"
                  ></iframe>
                </div>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://maps.app.goo.gl/1zGpXXSutnfMRUHW8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-umber-700 text-white rounded-lg font-semibold shadow hover:bg-umber-800 transition-colors"
                  >
                    Ubicación con latitud y longitud
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Información adicional */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-center text-umber-700">Información Importante</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🚗</div>
                <h3 className="font-semibold text-umber-700 mb-2">Traslados Incluidos</h3>
                <p className="text-sm text-umber-600">
                  Ofrecemos traslado gratuito desde aeropuerto o terminal de buses
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold text-umber-700 mb-2">Coordenadas GPS</h3>
                <p className="text-sm text-umber-600">
                  -42.1234, -73.5678
                  <br />
                  (Disponibles al confirmar reserva)
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold text-umber-700 mb-2">Contacto Directo</h3>
                <p className="text-sm text-umber-600">Te contactamos 24 horas antes de tu llegada para coordinar</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
