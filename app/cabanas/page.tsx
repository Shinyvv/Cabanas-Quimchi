import type { Metadata } from "next"
import { CardPrograma } from "@/components/card-programa"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { StructuredData, accommodationStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Nuestras Cabañas",
  description:
    "Cabañas cómodas y acogedoras para 2-10 personas en Quemchi, Chiloé. Equipadas con cocina, calefacción, WiFi y vista al mar. Perfectas para familias y grupos.",
  keywords: [
    "cabañas Chiloé",
    "alojamiento Quemchi",
    "cabañas familiares",
    "vista al mar",
    "equipadas",
    "2-10 personas",
  ],
  openGraph: {
    title: "Nuestras Cabañas | Cabañas Guardiamó",
    description:
      "Cabañas equipadas para 2-10 personas con vista al mar, cocina completa y todos los servicios incluidos en Quemchi, Chiloé.",
    images: ["/cabanas-og.jpg"],
  },
}

const cabanasData = [
  {
    id: 1,
    name: "Cabaña Familiar 1",
    capacity: "4-6 personas",
    description: "Cabaña acogedora con ambiente rural auténtico. Perfecta para familias que buscan desconectarse.",
    amenities: ["Cocina equipada", "Baño privado", "Calefacción", "Vista al mar", "Terraza"],
    image: "/cabana1.jpg",
  },
  {
    id: 2,
    name: "Cabaña Familiar 2",
    capacity: "4-6 personas",
    description: "Cabaña con encanto rural y todas las comodidades básicas para una estadía confortable.",
    amenities: ["Cocina completa", "Baño privado", "Calefacción", "Vista panorámica", "Deck de madera"],
    image: "/cabana2.jpg",
  },
]

export default function CabanasPage() {
  return (
    <>
      <StructuredData data={accommodationStructuredData} />
      <div className="min-h-screen py-16 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Cabañas" }]} />

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-parchment-500 text-umber-700">
              Alojamiento
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-umber-700 mb-4">Nuestras Cabañas</h1>
            <p className="text-lg text-umber-600 max-w-2xl mx-auto">
              Espacios cómodos y acogedores diseñados para que disfrutes al máximo tu estadía en Quemchi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cabanasData.map((cabana) => (
              <CardPrograma key={cabana.id} cabana={cabana} />
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-umber-700 mb-6 text-center">
              Servicios Incluidos en Todas las Cabañas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl mb-2">🧴</div>
                <p className="text-sm text-umber-600">Toallas</p>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">🔥</div>
                <p className="text-sm text-umber-600">Calefacción</p>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">📶</div>
                <p className="text-sm text-umber-600">WiFi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
