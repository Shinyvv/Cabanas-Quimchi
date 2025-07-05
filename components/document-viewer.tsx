"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Globe } from "lucide-react"

interface DocumentViewerProps {
  title: string
  description: string
}

export function DocumentViewer({ title, description }: DocumentViewerProps) {
  const [language, setLanguage] = useState<"es" | "en">("es")

  const documents = {
    es: {
      title: "Programa Completo - Español",
      filename: "programa-completo-es.docx",
      url: "/programa-completo-es.docx", // URL del documento en español
    },
    en: {
      title: "Complete Program - English",
      filename: "complete-program-en.docx",
      url: "/complete-program-en.docx", // URL del documento en inglés
    },
  }

  const currentDoc = documents[language]

  const handleDownload = () => {
    // Crear un enlace temporal para descargar
    const link = document.createElement("a")
    link.href = currentDoc.url
    link.download = currentDoc.filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-umber-700 mb-4">{title}</h2>
          <p className="text-lg text-umber-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-parchment-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <CardTitle className="flex items-center text-umber-700">
                <FileText className="h-6 w-6 mr-2" />
                {currentDoc.title}
              </CardTitle>

              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-umber-600 border-umber-600">
                  <Globe className="h-3 w-3 mr-1" />
                  {language === "es" ? "Español" : "English"}
                </Badge>

                <div className="flex rounded-lg border border-umber-300 overflow-hidden">
                  <Button
                    variant={language === "es" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage("es")}
                    className={`rounded-none ${
                      language === "es" ? "bg-umber-700 text-white" : "text-umber-600 hover:bg-parchment-100"
                    }`}
                  >
                    ES
                  </Button>
                  <Button
                    variant={language === "en" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage("en")}
                    className={`rounded-none ${
                      language === "en" ? "bg-umber-700 text-white" : "text-umber-600 hover:bg-parchment-100"
                    }`}
                  >
                    EN
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-parchment-200 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="h-12 w-12 text-umber-600" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-umber-700 mb-2">
                  {language === "es" ? "Programa Detallado de 7 Días" : "Detailed 7-Day Program"}
                </h3>
                <p className="text-umber-600 mb-4">
                  {language === "es"
                    ? "Descarga el programa completo con todos los detalles de actividades, horarios y servicios incluidos."
                    : "Download the complete program with all activity details, schedules and included services."}
                </p>
                <Badge variant="secondary" className="bg-parchment-500 text-umber-700">
                  {language === "es" ? "Formato DOCX" : "DOCX Format"}
                </Badge>
              </div>

              <Button onClick={handleDownload} size="lg" className="bg-umber-700 hover:bg-umber-800">
                <Download className="h-5 w-5 mr-2" />
                {language === "es" ? "Descargar Programa" : "Download Program"}
              </Button>

              <div className="text-sm text-umber-500 space-y-1">
                <p>{language === "es" ? "• Incluye itinerario día a día" : "• Includes day-by-day itinerary"}</p>
                <p>{language === "es" ? "• Detalles de comidas y actividades" : "• Meal and activity details"}</p>
                <p>{language === "es" ? "• Información de traslados" : "• Transfer information"}</p>
                <p>{language === "es" ? "• Condiciones" : "• Terms"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-umber-500">
            {language === "es"
              ? "¿Necesitas el programa en otro idioma? Contáctanos y te ayudamos."
              : "Need the program in another language? Contact us and we'll help you."}
          </p>
        </div>
      </div>
    </section>
  )
}
