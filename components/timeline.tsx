import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Ship, Camera, TreePine, Sunrise } from "lucide-react"

const programData = [
  {
    day: 1,
    title: "Llegada y Bienvenida",
    icon: Plane,
    activities: [
      "Recepción en aeropuerto de Mocopulli Castro o terminal de buses Ancud",
      "Traslado a Cabañas Guardiamó",
      "Bienvenida con comida típica chilota",
      "Descanso y adaptación al ambiente rural",
    ],
    meals: ["Almuerzo", "Cena"],
  },
  {
    day: 2,
    title: "¡Conozcamos Quemchi!",
    icon: TreePine,
    activities: [
      "Desayuno en las cabañas",
      "Visita al pueblo de Quemchi",
      "Visitas a ubicaciones emblemáticas",
      "Visitas a bellos lugares naturales",
      "Visita al Islote Aucar (Isla de las almas navegantes)",
      "Regreso y cena en las cabañas",
    ],
    meals: ["Desayuno", "Almuerzo", "Cena"],
  },
  {
    day: 3,
    title: "Día Libre",
    icon: Sunrise,
    activities: [
      "Dia Libre para disfrutar a su gusto, con sugerencias de actividades",
      {
        text: "Sugerencias: caminatas por la playa, Visita al astillero local, Baño en el mar",
        subtitle: "Disponibilidad de Kayaks e implementos de seguridad",
      },
    ],
    meals: ["Desayuno", "Almuerzo", "Cena"],
  },
  {
    day: 4,
    title: "¡A Navegar!",
    icon: Ship,
    activities: [
      {
        text: "Navegación hacia Isla Caucahue o Islas Mechuque",
        subtitle: "(Sujeto a condiciones climáticas)",
      },
      "Regreso y cena en las cabañas",
    ],
    meals: ["Desayuno", "Almuerzo", "Cena"],
  },
  {
    day: 5,
    title: "Día Libre",
    icon: Sunrise,
    activities: [
      "Dia de descanso con sugerencias de actividades",
      "Sugerencia: Avistamiento de aves en el entorno natural, Visita a apicultor local",
    ],
    meals: ["Desayuno", "Almuerzo", "Cena"],
  },
  {
    day: 6,
    title: "Visita a Dalcahue",
    icon: Camera,
    activities: [
      "Desayuno tradicional",
      "Traslado a Dalcahue",
      "Regreso y cena chilota de despedida",
    ],
    meals: ["Desayuno", "Almuerzo", "Cena"],
  },
  {
    day: 7,
    title: "Despedida",
    icon: Sunrise,
    activities: [
      "Desayuno en la cabaña",
      "Almuerzo en la cabaña (Según horario de salida)",
      "Check-out y empaque",
      "Traslado al aeropuerto de Mocopulli Castro o terminal de buses Ancud",
      "Fin de la experiencia",
    ],
    meals: ["Desayuno", "Almuerzo"],
  },
]

export function Timeline() {
  return (
    <div className="space-y-8">
      {programData.map((day, index) => {
        const Icon = day.icon
        return (
          <div key={day.day} className="relative">
            {/* Timeline line */}
            {index < programData.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-parchment-300 -z-10" />
            )}

            <Card className="hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-umber-700 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge variant="outline" className="text-umber-700 border-umber-700">
                        Día {day.day}
                      </Badge>
                      <h3 className="font-serif text-xl font-bold text-umber-700">{day.title}</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-umber-600 mb-2">Actividades:</h4>
                        <ul className="space-y-1">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-umber-600 flex items-start">
                              <span className="w-2 h-2 bg-parchment-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {typeof activity === "string" ? (
                                <span>{activity}</span>
                              ) : (
                                <>
                                  <span>{activity.text}</span>
                                  <span className="block text-sm text-umber-500 italic">{activity.subtitle}</span>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-umber-600 mb-2">Comidas incluidas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {day.meals.map((meal, mealIndex) => (
                            <Badge key={mealIndex} variant="secondary" className="bg-parchment-200 text-umber-700">
                              {meal}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
