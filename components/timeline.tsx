import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Ship, Camera, TreePine, Sunrise } from "lucide-react"

const programData = [
  {
    day: 1,
    title: "Llegada y Bienvenida",
    icon: Plane,
    activities: [
      "Recepción en aeropuerto Mocopulli de Castro o terminal de buses de Ancud",
      "Traslado a Cabañas Playa Guardiamó, Quemchi",
      "Bienvenida con parrillada especial",
      "Tarde libre para descansar y ambientarse",
    ],
    meals: ["Parrillada especial", "Once"],
  },
  {
    day: 2,
    title: "¡Conozcamos Quemchi!",
    icon: TreePine,
    activities: [
      "Desayuno",
      "Visita a la Iglesia Patrimonial de Colo",
      "Visita a la Cascada de Tocoihue",
      "Visita al Islote Aucar, conocido como la Isla de las Almas Navegantes",
      "Recorrido por el pueblo de Quemchi",
      "Regreso a las cabañas",
    ],
    meals: ["Desayuno", "Merienda", "Once"],
  },
  {
    day: 3,
    title: "Día Libre",
    icon: Sunrise,
    activities: [
      "Día libre de descanso para disfrutar el entorno natural",
      {
        text: "Sugerencias: caminatas por la playa y alrededores, visita al astillero local, baño en el mar y uso de kayaks",
        subtitle:
          "Disponibilidad de 2 kayaks monoplaza y 1 kayak doble, con implementos de seguridad",
      },
    ],
    meals: ["Desayuno", "Almuerzo", "Once"],
  },
  {
    day: 4,
    title: "¡A Navegar!",
    icon: Ship,
    activities: [
      {
        text: "Navegación por el canal Caucahué",
        subtitle:
          "Actividad sujeta a condiciones climáticas; podría adelantarse o posponerse",
      },
      "Regreso a las cabañas",
    ],
    meals: ["Desayuno", "Merienda", "Once"],
  },
  {
    day: 5,
    title: "Día Libre",
    icon: Sunrise,
    activities: [
      "Día libre de descanso con sugerencias de actividades",
      "Avistamiento de cisnes de cuello negro, otras aves y, con algo de fortuna, toninas",
      "Caminatas, kayaks, juegos de mesa, lectura o descanso",
      "Café al atardecer alrededor de un bracero",
    ],
    meals: ["Desayuno", "Almuerzo", "Once"],
  },
  {
    day: 6,
    title: "Visita a Dalcahue",
    icon: Camera,
    activities: [
      "Desayuno tradicional",
      "Traslado a Dalcahue",
      "Visita a uno de los lugares imperdibles de Chiloé",
      "Compra de artesanía, miel, quesos y otros productos locales",
      "Regreso a las cabañas",
      "Cena chilota de despedida",
    ],
    meals: ["Desayuno", "Merienda", "Cena chilota de despedida"],
  },
  {
    day: 7,
    title: "Despedida",
    icon: Sunrise,
    activities: [
      "Traslado al aeropuerto Mocopulli de Castro o terminal de buses de Ancud",
      "Fin de la experiencia",
    ],
    meals: ["Desayuno"],
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
