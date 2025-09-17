"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn, Grid3X3 } from "lucide-react"
import { useTranslation } from 'next-i18next'

export function HomeGallerySection() {
  const { t } = useTranslation('common')
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
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Preload images
  useEffect(() => {
    mainImages.forEach((img) => {
      const preload = new window.Image()
      preload.src = img.src
    })
  }, [])

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isHovered || viewMode !== 'carousel') return

    const timer = setInterval(() => {
      setNextIndex((prev) => (prev === mainImages.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovered, mainImages.length, viewMode])

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

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setLightboxIndex(prev => prev === 0 ? mainImages.length - 1 : prev - 1)
    } else {
      setLightboxIndex(prev => prev === mainImages.length - 1 ? 0 : prev + 1)
    }
  }

  // Get thumbnails to display
  const allThumbnails = mainImages
  const displayedThumbnails = showAllThumbnails 
    ? allThumbnails 
    : allThumbnails.slice(0, 5)

  return (
    <>
      <section className="section-x bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="container-x">
          {/* Section Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
              <Grid3X3 size={18} className="mr-2" />
              {t('gallery.title')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('gallery.description')}
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1.5 shadow-sm border border-gray-200">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === 'carousel' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Carousel View
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Grid View
              </button>
            </div>
          </div>

          {viewMode === 'carousel' ? (
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Main Large Image Carousel */}
              <div
                className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] md:aspect-[4/3] group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Image gallery carousel"
                onClick={() => openLightbox(currentIndex)}
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

                {/* Overlay with gradient and info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {mainImages[currentIndex].alt}
                    </h3>
                    <p className="text-gray-200">Click to view full size</p>
                  </div>
                </div>

                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-black/40 text-white p-2.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <ZoomIn size={20} />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  aria-label="Previous image"
                  className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 shadow-lg z-30 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  aria-label="Next image"
                  className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 shadow-lg z-30 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>

                {/* Slide Indicator Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                  {mainImages.slice(0, 8).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setNextIndex(idx);
                        if (idx !== currentIndex) {
                          setTimeout(() => setCurrentIndex(idx), 700);
                        }
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex || idx === nextIndex
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                  {mainImages.length > 8 && (
                    <span className="text-white text-xs flex items-center ml-1">
                      +{mainImages.length - 8}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Side Collage of Thumbnails */}
              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3 md:col-span-1">
                {displayedThumbnails.map((img, i) => (
                  <div
                    key={i}
                    className={`relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl border-2 transition-colors animate-fade-in-up group ${
                      i === currentIndex
                        ? "border-primary/60 scale-105 shadow-lg ring-2 ring-primary/20"
                        : "border-transparent hover:border-primary/30"
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setNextIndex(i);
                      setTimeout(() => setCurrentIndex(i), 700);
                    }}
                    aria-label={`View ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                    
                    {i === currentIndex && (
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium shadow-md">
                        Active
                      </div>
                    )}
                  </div>
                ))}
                
              
                {/* {!showAllThumbnails && allThumbnails.length > 5 && (
                  <div
                    className="relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl border-2 border-dashed border-gray-300 hover:border-primary/40 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 animate-fade-in-up group"
                    style={{ animationDelay: `${displayedThumbnails.length * 0.1}s` }}
                    onClick={() => setShowAllThumbnails(true)}
                    aria-label="View more images"
                  >
                    <div className="text-center p-4 transform transition-transform duration-300 group-hover:scale-110">
                      <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold text-2xl">+{allThumbnails.length - 5}</span>
                      </div>
                      <div className="text-gray-700 font-medium mb-1">View All Images</div>
                      <div className="text-gray-500 text-sm">See our complete collection</div>
                    </div>
                    
                   
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                )} */}
              </div>
            </div>
          ) : (
            // Grid View
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {allThumbnails.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-primary/30 group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => openLightbox(i)}
                  aria-label={`View ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white font-medium text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {img.alt}
                    </h3>
                  </div>
                  
                  {/* Zoom icon on hover */}
                  <div className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={16} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-12 animate-fade-in-up delay-300">
            <a
              href="/events/gallery"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {t('gallery.exploreGallery')}
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 z-60"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 z-60"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 z-60"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="relative w-full max-w-6xl h-full max-h-[80vh] flex items-center justify-center">
            <Image
              src={mainImages[lightboxIndex].src}
              alt={mainImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center z-60">
            <h3 className="text-xl font-semibold mb-1">{mainImages[lightboxIndex].alt}</h3>
            <p className="text-gray-300">Image {lightboxIndex + 1} of {mainImages.length}</p>
          </div>
        </div>
      )}

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}