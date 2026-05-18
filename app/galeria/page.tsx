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
    "cabañas playa Guardiamó",
    "quemchi fotos",
    "cabañas Quemchi",
    "cabañas playa Guardiamó imágenes",
    "quemchi galería",
    "quemchi fotos cabañas",
    "quemchi imágenes",
    "quemchi curanto",
    "quemchi gastronomía",
    "quemchi naturaleza",
    "quemchi isla de las almas",
    "cabañas",
    "cabañas chiloé",
],
  openGraph: {
    title: "Galería de Fotos | Cabañas Playa Guardiamó - Quemchi, Chiloé",
    description:
      "Galería de imágenes que muestra la belleza de Quemchi, experiencias gastronómicas y las instalaciones de Cabañas Playa Guardiamó, en Quemchi, Chile.",
    images: ["/galeria-og.jpg"],
  },
}

const vistasImages = [
  {
    src: "/amanecer.jpg",
    alt: "Foto de un amanecer",
  },
  {
    src: "/banca_en_muelle.jpeg",
    alt: "Banca en muelle",
  },
  {
    src: "/cascada_tocohue.jpg",
    alt: "Imagen de la cascada Toco Hue en Quemchi",
  },
  {
    src: "/Flores_frente_casa.jpeg",
    alt: "Flores frente casa",
  },
  {
    src: "/iglesia.jpg",
    alt: "Imagen de la iglesia de Quemchi, un ícono arquitectónico de Chiloé",
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
    src: "/msueo_mechuque.jpg",
    alt: "vista exterior del museo de Isla Mechuque con palafitos al fondo",
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
    src: "/Iglesia2.jpeg",
    alt: "Iglesia 2",
  },
  {
  src: "/un kayak.jpg",
  alt: "Kayak individual",
  },
  {
  src: "/arcoiris.jpg",
  alt: "Arcoíris en el paisaje",
  },
  {
  src: "/astillero en galpon.jpg",
  alt: "Astillero dentro de un galpón",
  },
  {
  src: "/astillero en la costa.jpg",
  alt: "Astillero ubicado en la costa",
  },
  {
  src: "/atardecer osuro.jpg",
  alt: "Atardecer oscuro en la costa",
  },
  {
  src: "/barco encallado.jpg",
  alt: "Barco encallado en la costa",
  },
  {
  src: "/barco solo.jpg",
  alt: "Barco solitario",
  },
  {
  src: "/barcos dos.jpg",
  alt: "Dos barcos en la costa",
  },
  {
  src: "/cielo en la tarde.jpg",
  alt: "Cielo durante la tarde",
  },
  {
  src: "/costa horizontal en la tarde.jpg",
  alt: "Vista horizontal de la costa en la tarde",
  },
  {
  src: "/costa horizontal.jpg",
  alt: "Vista horizontal de la costa",
  },
  {
  src: "/dos kayak.jpg",
  alt: "Dos kayaks",
  },
  {
  src: "/estatua acordeon.jpg",
  alt: "Estatua de acordeón",
  },
  {
  src: "/iglesia con nubes.jpg",
  alt: "Iglesia bajo cielo nublado",
  },
  {
  src: "/mirador bandera.jpg",
  alt: "Mirador con bandera",
  },
  {
  src: "/puente sobre lago con isla.jpg",
  alt: "Puente sobre lago con isla",
  },
  {
  src: "/sol a traves de nubes.jpg",
  alt: "Sol atravesando las nubes",
  },
  {
    src: "/Casa.png",
    alt: "Casa",
  },
  {
    src: "/Casas_elevadas.jpeg",
    alt: "Casas elevadas",
  }
]

const cabanasImages = [
  {
    src: "/baño.jpeg",
    alt: "Baño de la cabaña",
  },
  {
    src: "/baño2.jpeg",
    alt: "Segundo baño de la cabaña",
  },
  {
    src: "/ventana cama roja azul.jpg",
    alt: "Habitación con ventana y cama roja azul",
  },
  {
    src: "/baño desde afuera.jpg",
    alt: "Vista del baño desde afuera",
  },
  {
    src: "/baño wc cortina abierta.jpg",
    alt: "Baño con WC y cortina abierta",
  },
  {
    src: "/baño wc lavamanos.jpg",
    alt: "Baño con WC y lavamanos",
  },
  {
    src: "/cama blanca azul dos.jpg",
    alt: "Habitación con cama blanca y azul",
  },
  {
    src: "/cama blanca azul tres.jpg",
    alt: "Otra vista de cama blanca y azul",
  },
  {
    src: "/cama blanca azul.jpg",
    alt: "Cama blanca con detalles azules",
  },
  {
    src: "/cama blanca con lineas.jpg",
    alt: "Cama blanca con líneas decorativas",
  },
  {
    src: "/cama blanca.jpg",
    alt: "Cama blanca en habitación",
  },
  {
  src: "/vinos.jpg",
  alt: "Botellas de vino",
  },
  {
    src: "/cama roja azul dos.jpg",
    alt: "Otra vista de cama roja y azul",
  },
  {
    src: "/cama roja azul.jpg",
    alt: "Cama roja y azul en habitación",
  },
  {
    src: "/sofa.jpg",
    alt: "Sofá del interior de la cabaña",
  },
  {
    src: "/comedor dos.jpg",
    alt: "Comedor de la cabaña",
  },
  {
    src: "/comedor tres.jpg",
    alt: "Otra vista del comedor",
  },
  {
    src: "/living mesa.jpg",
    alt: "Living con mesa",
  },
  {
  src: "/mesa con desayuno.jpg",
  alt: "Mesa servida con desayuno",
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
  src: "/horno con comida.jpg",
  alt: "Horno con comida preparada",
  },
  {
    src: "/tres cabañas tres.jpg",
    alt: "Tercera vista de tres cabañas",
  },
  {  src: "/tres cabañas cuatro.jpg",
  alt: "Vista adicional de tres cabañas",
  },
  {
  src: "/tres cabañas dos.jpg",
  alt: "Segunda vista de tres cabañas",
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

        <div className="space-y-12">
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-umber-700">
                Vistas, Paisajes y Más
              </h2>
              <p className="text-umber-600 max-w-2xl">
                Rincones de Quemchi, su costa y experiencias que se viven alrededor de las cabañas.
              </p>
            </div>
            <ImageGallery images={vistasImages} />
          </section>

          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-umber-700">
                Cabañas y su interior
              </h2>
              <p className="text-umber-600 max-w-2xl">
                Detalles del interior, comodidad y espacios pensados para el descanso.
              </p>
            </div>
            <ImageGallery images={cabanasImages} />
          </section>
        </div>
      </div>
    </div>
  )
}
