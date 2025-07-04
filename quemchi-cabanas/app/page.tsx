import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Utensils, Car, CheckCircle } from "lucide-react"
import { StructuredData, homeStructuredData } from "@/components/structured-data"

export default function HomePage() {
  return (
    <>
      <StructuredData data={homeStructuredData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <Image
            src="/Quemchi.jpg"
            alt="Vista panorámica de las Cabañas Guardiamó en Quemchi, Chiloé con montañas y mar al fondo durante el atardecer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                Experiencia All-Inclusive
                <span className="block text-parchment-300">en Quemchi</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-parchment-100">7 días y 6 noches de pura magia en Chiloé</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Badge variant="secondary" className="text-lg px-6 py-2 bg-parchment-500 text-umber-700">
                  Desde $480.000 por persona
                </Badge>
                <Button asChild size="lg" className="bg-umber-700 hover:bg-umber-800">
                  <Link href="/programa">Ver Programa Completo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resto del contenido permanece igual... */}
        {/* Resumen de Servicios */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-umber-700 mb-4">
                Todo Incluido para tu Comodidad
              </h2>
              <p className="text-lg text-umber-600 max-w-2xl mx-auto">
                Disfruta de una experiencia completa sin preocupaciones. Nosotros nos encargamos de todo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Car className="h-12 w-12 text-umber-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-umber-700 mb-2">Traslados Incluidos</h3>
                  <p className="text-sm text-umber-600">Desde aeropuerto o terminal de buses hasta las cabañas</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Utensils className="h-12 w-12 text-umber-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-umber-700 mb-2">Comidas Tipicas</h3>
                  <p className="text-sm text-umber-600">Incluyendo especialidades locales</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-umber-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-umber-700 mb-2">Experiencias Únicas</h3>
                  <p className="text-sm text-umber-600">Isla Mechuque, avistamiento de aves y más</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-umber-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-umber-700 mb-2">Cabañas 2-10 Personas</h3>
                  <p className="text-sm text-umber-600">Espacios cómodos para familias y grupos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Destacados */}
        <section className="py-16 bg-parchment-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-umber-700 mb-6">
                  Una Experiencia Auténtica en Chiloé
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-umber-600">
                      <strong>Gastronomía Local:</strong> Disfruta de la auténtica Gastronomía chilote
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-umber-600">
                      <strong>Navegación a Islas:</strong> Explora Isla Caucague e Isla Mechuque con sus palafitos
                      únicos
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-umber-600">
                      <strong>Experiencias Únicas:</strong> Visita astillero tradicional y conoce la apicultura
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-umber-600">
                      <strong>Ambiente Rural:</strong> Desconéctate en un entorno natural auténtico de Chiloé
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-umber-700 hover:bg-umber-800">
                    <Link href="/cabanas">Ver Cabañas</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/galeria">Ver Galería</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/isla_de_las_almas.jpg"
                  alt="Interior acogedor de cabaña Guardiamó con chimenea encendida, sofás cómodos y vista panorámica al mar de Quemchi"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Condiciones */}
        <section className="py-12 bg-umber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-serif text-2xl font-bold text-umber-700 mb-4">Condiciones de Reserva</h3>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-umber-600 mb-4">
                <strong>Anticipo:</strong> 20% del valor total para confirmar tu reserva
              </p>
              <p className="text-sm text-umber-500">
                * El anticipo no es reembolsable. Consulta nuestras políticas de cancelación.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
