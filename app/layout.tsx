import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "Cabañas Guardiamó - Experiencia All-Inclusive en Quemchi, Chiloé",
    template: "%s | Cabañas Guardiamó",
  },
  description:
    "Disfruta de 7 días y 6 noches en Quemchi con todo incluido. Traslados, comidas típicas chilotas y experiencias únicas en Chiloé a $480.000 fijos por persona.",
  keywords: [
    "Quemchi",
    "Chiloé",
    "cabañas",
    "all-inclusive",
    "turismo Chile",
    "Isla Mechuque",
    "curanto",
    "salmón cancato",
    "avistamiento aves",
    "alojamiento Chiloé",
    "vacaciones familiares",
    "turismo rural",
  ],
  authors: [{ name: "Cabañas Guardiamó" }],
  creator: "Cabañas Guardiamó",
  publisher: "Cabañas Guardiamó",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cabanasplayaguardiamo.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://cabanasplayaguardiamo.cl",
    title: "Cabañas Guardiamó - Experiencia All-Inclusive en Quemchi, Chiloé",
    description:
      "Disfruta de 7 días y 6 noches en Quemchi con todo incluido. Traslados, comidas típicas chilotas y experiencias únicas en Chiloé desde $480.000 por persona.",
    siteName: "Cabañas Guardiamó",
    images: [
      {
        url: "/Quemchi.jpg",
        width: 1200,
        height: 630,
        alt: "Cabañas Guardiamó - Vista panorámica en Quemchi, Chiloé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabañas Guardiamó - Experiencia All-Inclusive en Quemchi, Chiloé",
    description: "7 días y 6 noches con todo incluido en Chiloé con precio fijo de $480.000 por persona",
    images: ["/Quemchi.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="canonical" href="https://cabanasplayaguardiamo.cl" />
        <meta name="geo.region" content="CL-LL" />
        <meta name="geo.placename" content="Quemchi, Chiloé" />
        <meta name="geo.position" content="-42.1234;-73.5678" />
        <meta name="ICBM" content="-42.1234, -73.5678" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-parchment-50`}>
        <Navigation />
        <main className="min-h-screen -mt-16">{children}</main>
        <WhatsAppButton />
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
