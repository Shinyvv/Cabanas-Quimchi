"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface GalleryImage {
  src: string
  alt: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src))
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            {!loadedImages.has(image.src) && <div className="absolute inset-0 bg-parchment-200 animate-pulse" />}
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onLoad={() => handleImageLoad(image.src)}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
