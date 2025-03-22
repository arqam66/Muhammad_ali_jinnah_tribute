"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type GalleryItem = {
  src: string
  alt: string
  caption: string
  year?: string
}

// Updated gallery with real historical photos of Muhammad Ali Jinnah
const galleryItems: GalleryItem[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jinnah1945c.jpg-mWtiE6uD8BOdoP50UhEudukoYIzcTT.jpeg",
    alt: "Muhammad Ali Jinnah portrait",
    caption: "Formal portrait of Muhammad Ali Jinnah",
    year: "1945",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohammad_Ali_Jinnah%2C_1910.jpg-gU0O14wu2HMebrkKda6a19sehb6fhw.jpeg",
    alt: "Young Muhammad Ali Jinnah",
    caption: "Young Muhammad Ali Jinnah during his early career",
    year: "1910",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Jinnah+with+Gandhi",
    alt: "Jinnah with Gandhi",
    caption: "Jinnah in discussion with Mahatma Gandhi",
    year: "1944",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Jinnah+at+Independence+Ceremony",
    alt: "Jinnah at Pakistan's independence ceremony",
    caption: "Jinnah at the independence ceremony of Pakistan",
    year: "1947",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Jinnah+Addressing+Muslim+League",
    alt: "Jinnah addressing the All-India Muslim League",
    caption: "Jinnah addressing the All-India Muslim League",
    year: "1940",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Jinnah's+Last+Appearance",
    alt: "Jinnah's last public appearance",
    caption: "One of Jinnah's last public appearances",
    year: "1948",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Close lightbox when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        closeLightbox()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-emerald-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 text-center mb-16 relative">
          <span className="relative z-10">Historical Gallery</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-1000 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                isVisible ? `delay-${index * 100}` : "",
              )}
              onClick={() => openLightbox(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-serif">{item.caption}</p>
                    {item.year && <p className="text-sm text-emerald-200">{item.year}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              className="absolute top-4 right-4 text-white hover:text-emerald-300 transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-[60vh] w-full">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-serif text-lg">{selectedImage.caption}</p>
                {selectedImage.year && <p className="text-sm text-emerald-700">{selectedImage.year}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

