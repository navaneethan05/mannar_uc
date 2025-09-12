"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HomeGallerySection() {
  const mainImages = [
    { src: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg", alt: "Mannar Island Beaches" },
    { src: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg", alt: "Mannar Fort" },
    { src: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg", alt: "Baobab Trees" },
    { src: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg", alt: "Mannar Lighthouse" },
    { src: "/st-sebastian-church-mannar-catholic-colonial-archi.jpg", alt: "St. Sebastian's Church" },
    { src: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg", alt: "Mannar Fort" },
    { src: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg", alt: "Baobab Trees" },
    { src: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg", alt: "Mannar Lighthouse" },
    { src: "/st-sebastian-church-mannar-catholic-colonial-archi.jpg", alt: "St. Sebastian's Church" },
    { src: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg", alt: "Mannar Island Beaches" },
    { src: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg", alt: "Mannar Fort" },
    { src: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg", alt: "Baobab Trees" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const [showAllThumbnails, setShowAllThumbnails] = useState(false)

  // Preload images
  useEffect(() => {
    mainImages.forEach((img) => {
      const preload = new window.Image()
      preload.src = img.src
    })
  }, [])

  // Auto-rotate every 1 second
  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setNextIndex((prev) => (prev === mainImages.length - 1 ? 0 : prev + 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [isHovered, mainImages.length])

  // Trigger current index update after fade animation completes
  useEffect(() => {
    if (currentIndex !== nextIndex) {
      const timeout = setTimeout(() => {
        setCurrentIndex(nextIndex)
      }, 700) // Match fade duration
      return () => clearTimeout(timeout)
    }
  }, [nextIndex, currentIndex])

  const prevSlide = () => {
    setNextIndex((prev) => (prev === 0 ? mainImages.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setNextIndex((prev) => (prev === mainImages.length - 1 ? 0 : prev + 1))
  }

  // Get thumbnails to display
  const allThumbnails = mainImages
  const displayedThumbnails = showAllThumbnails 
    ? allThumbnails 
    : allThumbnails.slice(0, 5) // Show only 5 thumbnails initially

  return (
    <section className="section-x bg-white py-16">
      <div className="container-x">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-10 animate-fade-in-up">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Large Image Carousel */}
          <div
            className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-xl aspect-[16/10] md:aspect-[4/3] group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Image gallery carousel"
          >
            {/* Current Image */}
            <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out z-10">
              <Image
                src={mainImages[currentIndex].src}
                alt={mainImages[currentIndex].alt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            </div>

            {/* Next Image */}
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-20 ${
                currentIndex === nextIndex ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={mainImages[nextIndex].src}
                alt={mainImages[nextIndex].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay Dimming */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 shadow-lg z-30"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 shadow-lg z-30"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Slide Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {mainImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setNextIndex(idx)
                    if (idx !== currentIndex) {
                      setTimeout(() => setCurrentIndex(idx), 700)
                    }
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex || idx === nextIndex
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side Collage of Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-3 md:col-span-1">
            {displayedThumbnails.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl border-2 transition-colors animate-fade-in-up ${
                  i === currentIndex
                    ? "border-primary/60 scale-105 shadow-lg"
                    : "border-transparent hover:border-primary/30"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => {
                  setNextIndex(i)
                  setTimeout(() => setCurrentIndex(i), 700)
                }}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                {i === currentIndex && (
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                    Current
                  </div>
                )}
              </div>
            ))}
            
            {/* Show More Thumbnail */}
            {!showAllThumbnails && allThumbnails.length > 5 && (
              <div
                className="relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl border-2 border-dashed border-gray-300 hover:border-primary/30 flex flex-col items-center justify-center bg-gray-50 animate-fade-in-up"
                style={{ animationDelay: `${displayedThumbnails.length * 0.1}s` }}
                onClick={() => setShowAllThumbnails(true)}
                aria-label="View more images"
              >
                <div className="text-center p-4">
                  <div className="text-primary font-semibold text-lg mb-1">+{allThumbnails.length - 5}</div>
                  <div className="text-gray-600 text-sm">More Images</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in-up delay-300">
          <a
            href="/gallery"
            className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            View Full Gallery
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}