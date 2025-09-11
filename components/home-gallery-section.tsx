"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HomeGallerySection() {
  const mainImages = [
    { src: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg", alt: "Mannar Island Beaches" },
    { src: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg", alt: "Mannar Fort" },
    { src: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg", alt: "Baobab Trees" },
    { src: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg", alt: "Mannar Lighthouse" },
    { src: "/st-sebastian-church-mannar-catholic-colonial-archi.jpg", alt: "St. Sebastian's Church" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? mainImages.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === mainImages.length - 1 ? 0 : prev + 1))
  }

  // Keep 4 small thumbnails (excluding current main image)
  const small = mainImages.filter((_, idx) => idx !== currentIndex).slice(0, 4)

  return (
    <section className="section-x bg-white">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Main large photo with arrows */}
          <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-lg aspect-[16/10] md:aspect-[4/3]">
            <Image
              key={currentIndex}
              src={mainImages[currentIndex].src}
              alt={mainImages[currentIndex].alt}
              fill
              className="object-cover transition-all duration-700 ease-in-out"
            />

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Right side collage */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            {small.map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer"
                onClick={() => setCurrentIndex(mainImages.indexOf(img))}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/events/gallery"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View All Photos
          </a>
        </div>
      </div>
    </section>
  )
}
