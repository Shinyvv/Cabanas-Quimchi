"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, CheckCircle } from "lucide-react"

interface Cabana {
  id: number
  name: string
  capacity: string
  description: string
  amenities: string[]
  image: string
}

interface CardProgramaProps {
  cabana: Cabana
}

export function CardPrograma({ cabana }: CardProgramaProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card className="overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageLoaded && <div className="absolute inset-0 bg-parchment-200 animate-pulse" />}
        <Image
          src={cabana.image || "/placeholder.svg"}
          alt={`${cabana.name} - Vista exterior de la cabaña`}
          fill
          className="object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-serif text-xl text-umber-700">{cabana.name}</CardTitle>
          <Badge variant="outline" className="text-umber-600 border-umber-600">
            <Users className="h-3 w-3 mr-1" />
            {cabana.capacity}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-umber-600 mb-4">{cabana.description}</p>

        <div>
          <h4 className="font-semibold text-umber-700 mb-2">Servicios incluidos:</h4>
          <ul className="space-y-1">
            {cabana.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center text-sm text-umber-600">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
