"use client"

import { useCallback, useState } from "react"
import Image from "next/image"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const reviewImages = [
  { src: "/reseña_1.jpeg", alt: "Resena escrita de visitante 1" },
  { src: "/reseña_2.jpeg", alt: "Resena escrita de visitante 2" },
  { src: "/reseña_3.jpeg", alt: "Resena escrita de visitante 3" },
  { src: "/reseña_4.jpeg", alt: "Resena escrita de visitante 4" },
  { src: "/reseña_5.jpeg", alt: "Resena escrita de visitante 5" },
  { src: "/reseña_6.jpeg", alt: "Resena escrita de visitante 6" },
  { src: "/reseña_7.jpeg", alt: "Resena escrita de visitante 7" },
] as const

interface ReviewsCarouselProps {
  title?: string
}

export function ReviewsCarousel({ title = "Comentarios de nuestros visitantes" }: ReviewsCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openFullscreen = useCallback((index: number) => {
    setSelectedIndex(index)
  }, [])

  const selectedImage = selectedIndex !== null ? reviewImages[selectedIndex] : null

  return (
    <section className="py-16 bg-parchment-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-umber-700 md:text-4xl">{title}</h2>
        </div>

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className="relative"
        >
          <CarouselContent className="-ml-3">
            {reviewImages.map((image, index) => (
              <CarouselItem key={image.src} className="basis-[88%] pl-3 sm:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden border-parchment-200/80 bg-parchment-50/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-0">
                    <button
                      type="button"
                      onClick={() => openFullscreen(index)}
                      className="relative block aspect-[4/5] w-full overflow-hidden bg-parchment-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-umber-600 focus-visible:ring-offset-2"
                      aria-label={`Abrir imagen ampliada: ${image.alt}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 88vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            aria-label="Ver imagen anterior"
            className="left-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-white/60 bg-white/90 text-umber-700 shadow-lg backdrop-blur transition-all duration-200 hover:bg-white hover:scale-105"
          />
          <CarouselNext
            aria-label="Ver imagen siguiente"
            className="right-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-white/60 bg-white/90 text-umber-700 shadow-lg backdrop-blur transition-all duration-200 hover:bg-white hover:scale-105"
          />
        </Carousel>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent
          aria-label="Vista en pantalla completa"
          className="fixed inset-0 z-50 grid h-screen w-screen max-w-none translate-x-0 translate-y-0 gap-0 border-0 bg-black/95 p-4 shadow-none outline-none data-[state=open]:animate-in data-[state=closed]:animate-out sm:p-8"
        >
          {selectedImage ? (
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar vista en pantalla completa"
              className="relative h-full w-full cursor-zoom-out"
            >
              <span className="absolute left-1/2 top-6 z-10 -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 text-xs font-medium text-white sm:text-sm">
                <span className="sm:hidden">Toca la pantalla nuevamente para cerrar</span>
                <span className="hidden sm:inline">Haz click nuevamente para cerrar</span>
              </span>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                loading="eager"
              />
            </button>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}