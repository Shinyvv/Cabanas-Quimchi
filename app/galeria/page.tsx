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
    src: "/amanecer.jpg",
    alt: "Foto de un amanecer",
  },
  {
    src: "/ambas_cabanas.jpg",
    alt: "Vista de ambas cabañas",
  },
  {
    src: "/baño.jpeg",
    alt: "Baño de la cabaña",
  },
  {
    src: "/baño2.jpeg",
    alt: "Segundo baño de la cabaña",
  },
  {
    src: "/banca_en_muelle.jpeg",
    alt: "Banca en muelle",
  },
  {
    src: "/cabana1.jpg",
    alt: "Cabaña 1",
  },
  {
    src: "/cabana2.jpg",
    alt: "Cabaña 2",
  },
  {
    src: "/cabana_interior.jpeg",
    alt: "Interior de una cabaña",
  },
  {
    src: "/cabana_interior2.jpeg",
    alt: "Segundo interior de la cabaña",
  },
  {
    src: "/Casa.png",
    alt: "Casa",
  },
  {
    src: "/Casas_elevadas.jpeg",
    alt: "Casas elevadas",
  },
  {
    src: "/cascada_tocohue.jpg",
    alt: "Imagen de la cascada Toco Hue en Quemchi",
  },
  {
    src: "/comida_tradicional.jpg",
    alt: "Comida tradicional",
  },
  {
    src: "/desayuno_tradicional.jpg",
    alt: "Imagen de un desayuno tradicional chileno con pan amasado, queso de campo y mermelada casera",
  },
  {
    src: "/dormitorio1.jpeg",
    alt: "Dormitorio principal con cama matrimonial",
  },
  {
    src: "/Flores_frente_casa.jpeg",
    alt: "Flores frente casa",
  },
  {
    src: "/Foto_museo2.jpeg",
    alt: "Foto museo 2",
  },
  {
    src: "/iglesia.jpg",
    alt: "Imagen de la iglesia de Quemchi, un ícono arquitectónico de Chiloé",
  },
  {
    src: "/Iglesia2.jpeg",
    alt: "Iglesia 2",
  },
  {
    src: "/Iglesia3.jpeg",
    alt: "Iglesia 3",
  },
  {
    src: "/isla_de_las_almas.jpg",
    alt: "Vista panoramica de la Isla de las Almas con mar al fondo",
  },
  {
    src: "/isla_de_las_almas_cartel.jpeg",
    alt: "Cartel de bienvenida a la Isla de las Almas",
  },
  {
    src: "/Mesa_cabana1.jpeg",
    alt: "Mesa interior en cabaña 1",
  },
  {
    src: "/mesa_cabana1_2.jpeg",
    alt: "Mesa exterior en cabaña 1",
  },
  {
    src: "/mesa_cabana2.jpeg",
    alt: "Mesa exterior en cabaña 2",
  },
  {
    src: "/msueo_mechuque.jpg",
    alt: "vista exterior del museo de Isla Mechuque con palafitos al fondo",
  },
  {
    src: "/Muelle.jpeg",
    alt: "Muelle",
  },
  {
    src: "/Naturaleza.jpeg",
    alt: "Naturaleza",
  },
  {
    src: "/Naturaleza2.jpeg",
    alt: "Naturaleza 2",
  },
  {
    src: "/No_se_que_es.jpeg",
    alt: "Cementerio(?)",
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
    src: "/vacas.jpg",
    alt: "Preparación tradicional del curanto chilote en hoyo con piedras calientes y mariscos frescos",
  },
  {
    src: "/vista_ventana.jpeg",
    alt: "Vista desde la ventana",
  },
  {
    src: "/vista_ventana2.jpeg",
    alt: "Segunda vista desde la ventana",
  },
  {
    src: "/Vista_playa.jpeg",
    alt: "Imagen del pueblo de Quemchi con mar al fondo",
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
