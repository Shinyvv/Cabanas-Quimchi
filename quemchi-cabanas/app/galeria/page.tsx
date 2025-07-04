import type { Metadata } from "next"
import { ImageGallery } from "@/components/image-gallery"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Galería de Fotos",
  description:
    "Descubre a través de imágenes la belleza natural de Quemchi, las experiencias gastronómicas, navegación a Isla Mechuque y las cómodas instalaciones de nuestras cabañas.",
  keywords: [
    "fotos Chiloé",
    "galería Quemchi",
    "Isla Mechuque",
    "curanto fotos",
    "cabañas imágenes",
    "paisajes Chiloé",
  ],
  openGraph: {
    title: "Galería de Fotos | Cabañas Guardiamó",
    description:
      "Galería de imágenes que muestra la belleza de Quemchi, experiencias gastronómicas y las instalaciones de Cabañas Guardiamó.",
    images: ["/galeria-og.jpg"],
  },
}

const galleryImages = [
  {
    src: "/ambas_cabanas.jpg",
    alt: "Vista de ambas cabañas",
  },
  {
    src: "/cascada_tocohue.jpg",
    alt: "Imagen de la cascada Toco Hue en Quemchi",
  },
  {
    src: "/vacas.jpg",
    alt: "Preparación tradicional del curanto chilote en hoyo con piedras calientes y mariscos frescos",
  },
  {
    src: "/msueo_mechuque.jpg",
    alt: "vista exterior del museo de Isla Mechuque con palafitos al fondo",
  },
  {
    src: "/isla_de_las_almas.jpg",
    alt: "Vista panoramica de la Isla de las Almas con mar al fondo",
  },
  {
    src: "/iglesia.jpg",
    alt: "Imagen de la iglesia de Quemchi, un ícono arquitectónico de Chiloé",
  },
  {
    src: "/desayuno_tradicional.jpg",
    alt: "Imagen de un desayuno tradicional chileno con pan amasado, queso de campo y mermelada casera",
  },
  {
    src: "/playa_barcos.jpg",
    alt: "Playa con barcos",
  },
  {
    src: "/Quemchi.jpg",
    alt: "Imagen del nombre de Quemchi tallado en madera con fondo de mar",
  },
  {
    src: "/amanecer.jpg",
    alt: "Foto de un amanecer",
  }
]

export default function GaleriaPage() {
  return (
    <div className="min-h-screen py-16 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Galería" }]} />

        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-parchment-500 text-umber-700">
            Galería
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-umber-700 mb-4">Momentos Únicos</h1>
          <p className="text-lg text-umber-600 max-w-2xl mx-auto">
            Descubre a través de imágenes la belleza natural y las experiencias que te esperan en Quemchi
          </p>
        </div>

        <ImageGallery images={galleryImages} />
      </div>
    </div>
  )
}
