"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

const reviewImages = [
  { src: "/reseña_1.jpeg", alt: "Resena escrita de visitante 1" },
  { src: "/reseña_2.jpeg", alt: "Resena escrita de visitante 2" },
  { src: "/reseña_3.jpeg", alt: "Resena escrita de visitante 3" },
  { src: "/reseña_4.jpeg", alt: "Resena escrita de visitante 4" },
  { src: "/reseña_5.jpeg", alt: "Resena escrita de visitante 5" },
  { src: "/reseña_6.jpeg", alt: "Resena escrita de visitante 6" },
  { src: "/reseña_7.jpeg", alt: "Resena escrita de visitante 7" },
]

interface ReviewsCarouselProps {
  title?: string
}

export function ReviewsCarousel({ title = "Comentarios de nuestros visitantes" }: ReviewsCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return
    const timer = setInterval(() => {
      api.scrollNext()
    }, 2800)
    return () => clearInterval(timer)
  }, [api])

  return (
    <section className="py-16 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-umber-700">{title}</h2>
        </div>

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {reviewImages.map((image) => (
              <CarouselItem key={image.src} className="basis-[88%] sm:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-parchment-200">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5]">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
