import Script from "next/script"

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Datos estructurados para la página principal
export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://cabanasguardiamo.cl/#business",
      name: "Cabañas Guardiamó",
      description: "Cabañas all-inclusive en Quemchi, Chiloé con experiencias gastronómicas y turísticas únicas",
      url: "https://cabanasguardiamo.cl",
      telephone: "+56912345678",
      email: "info@cabanasguardiamo.cl",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Quemchi",
        addressLocality: "Quemchi",
        addressRegion: "Los Lagos",
        addressCountry: "CL",
        postalCode: "5770000",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -42.1234,
        longitude: -73.5678,
      },
      openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
      priceRange: "$$$",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Traslados incluidos",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Comidas incluidas",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "WiFi gratuito",
          value: true,
        },
      ],
      starRating: {
        "@type": "Rating",
        ratingValue: "4.8",
      },
    },
    {
      "@type": "TouristTrip",
      "@id": "https://cabanasguardiamo.cl/#trip",
      name: "Experiencia All-Inclusive Quemchi 7 días",
      description: "Paquete completo de 7 días y 6 noches en Chiloé con alojamiento, comidas y experiencias incluidas",
      provider: {
        "@id": "https://cabanasguardiamo.cl/#business",
      },
      offers: {
        "@type": "Offer",
        price: "480000",
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
        validFrom: "2024-01-01",
        validThrough: "2024-12-31",
      },
      duration: "P7D",
      itinerary: [
        {
          "@type": "TouristDestination",
          name: "Isla Mechuque",
        },
        {
          "@type": "TouristDestination",
          name: "Humedales de Quemchi",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://cabanasguardiamo.cl/#website",
      url: "https://cabanasguardiamo.cl",
      name: "Cabañas Guardiamó",
      description: "Experiencia all-inclusive en Quemchi, Chiloé",
      publisher: {
        "@id": "https://cabanasguardiamo.cl/#business",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://cabanasguardiamo.cl/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
  ],
}

export const programStructuredData = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Programa All-Inclusive Quemchi 7 días",
  description: "Itinerario completo de 7 días con recorrido local, navegación a islas, visita astillero y apicultor",
  duration: "P7D",
  provider: {
    "@type": "LodgingBusiness",
    name: "Cabañas Guardiamó",
  },
  itinerary: [
    {
      "@type": "TouristDestination",
      name: "Día 1: Llegada y Bienvenida",
      description: "Recepción desde aeropuerto Mocopulli Castro o terminal Ancud",
    },
    {
      "@type": "TouristDestination",
      name: "Día 2: Recorrido Local por Quemchi",
      description: "Visita pueblo, astillero tradicional y apicultor local",
    },
    {
      "@type": "TouristDestination",
      name: "Día 4: Navegación a Islas",
      description: "Excursión a Isla Caucague e Isla Mechuque",
    },
    {
      "@type": "TouristDestination",
      name: "Día 6: Visita Dalcahue",
      description: "Mercado artesanal e iglesia histórica",
    },
  ],
}

export const accommodationStructuredData = {
  "@context": "https://schema.org",
  "@type": "AccommodationProduct",
  name: "Cabañas Guardiamó - Alojamiento",
  description: "Cabañas para 2-10 personas con servicios incluidos",
  provider: {
    "@type": "LodgingBusiness",
    name: "Cabañas Guardiamó",
  },
  accommodationCategory: "Cabin",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Cocina equipada",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Calefacción",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Vista al mar",
      value: true,
    },
  ],
  occupancy: {
    "@type": "QuantitativeValue",
    minValue: 2,
    maxValue: 10,
  },
}
