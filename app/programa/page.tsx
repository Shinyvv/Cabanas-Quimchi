import type { Metadata } from "next"
import { Timeline } from "@/components/timeline"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { StructuredData, programStructuredData } from "@/components/structured-data"
import { DocumentViewer } from "@/components/document-viewer"

export const metadata: Metadata = {
  title: "Programa Completo 7 Días",
  description:
    "Descubre día a día todas las experiencias que te esperan en tu estadía all-inclusive en Quemchi: navegación a Isla Mechuque, curanto tradicional, avistamiento de aves y más.",
  keywords: [
    "programa Chiloé",
    "itinerario Quemchi",
    "Isla Mechuque",
    "curanto",
    "avistamiento aves",
    "experiencias Chiloé",
  ],
  openGraph: {
    title: "Programa Completo 7 Días | Cabañas Guardiamó",
    description:
      "Itinerario detallado de 7 días con navegación a Isla Mechuque, curanto tradicional, avistamiento de aves y experiencias únicas en Chiloé.",
    images: ["/programa-og.jpg"],
  },
}

export default function ProgramaPage() {
  return (
    <>
      <StructuredData data={programStructuredData} />
      <div className="min-h-screen py-16 bg-parchment-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Programa" }]} />

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-parchment-500 text-umber-700">
              7 Días / 6 Noches
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-umber-700 mb-4">Programa Completo</h1>
            <p className="text-lg text-umber-600 max-w-2xl mx-auto">
              Descubre día a día todas las experiencias que te esperan en tu estadía en Quemchi
            </p>
          </div>

          <Timeline />
          <DocumentViewer
            title="Programa Completo"
            description="Descarga el itinerario detallado en español o inglés"
          />
        </div>
      </div>
    </>
  )
}
