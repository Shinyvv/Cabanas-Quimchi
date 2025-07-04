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
                  <div className="text-center text-umber-600">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-semibold">Cabañas Guardiamó</p>
                    <p className="text-sm">Quemchi, Chiloé</p>
                    <p className="text-xs mt-2">Mapa interactivo de Google Maps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instrucciones */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-umber-700">
                  <Plane className="h-5 w-5 mr-2" />
                  Desde el Aeropuerto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-umber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-umber-700">Duración: 45 minutos</p>
                      <p className="text-sm text-umber-600">Desde Aeropuerto Mocopulli Castro</p>
                    </div>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-umber-600">
                    <li>Salir del aeropuerto hacia Ruta 5</li>
                    <li>Tomar dirección norte hacia Castro</li>
                    <li>En Castro, seguir hacia Quemchi por Ruta W-25</li>
                    <li>Llegar a Quemchi y seguir señalización</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-umber-700">
                  <Car className="h-5 w-5 mr-2" />
                  Desde Ancud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-umber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-umber-700">Duración: 1 hora</p>
                      <p className="text-sm text-umber-600">Desde terminal de buses Ancud</p>
                    </div>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-umber-600">
                    <li>Salir de Ancud por Ruta 5 hacia el sur</li>
                    <li>Continuar hasta Castro</li>
                    <li>En Castro, tomar Ruta W-25 hacia Quemchi</li>
                    <li>Seguir por 30 km hasta llegar a destino</li>
                  </ol>
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
