"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Play, Pause } from "lucide-react"

type Slide =
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string; alt: string }

export function HeroSection() {
  const slides: Slide[] = [
    { type: "video", src: "/demo4.webm", poster: "/modern-municipal-building-government-office.jpg" },
    { type: "image", src: "/hero.png", alt: "Mannar island beaches" },
    { type: "image", src: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg", alt: "Mannar island beaches" },
  ]

  const [active, setActive] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Autoplay every 10s, loop
  useEffect(() => {
    if (!isPlaying) return
    
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 10000)
    return () => clearInterval(id)
  }, [slides.length, isPlaying])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const nextSlide = () => setActive((i) => (i + 1) % slides.length)
  const prevSlide = () => setActive((i) => (i - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`${i === active ? "opacity-100" : "opacity-0"} absolute inset-0 transition-opacity duration-700 ease-in-out`}
            aria-hidden={i !== active}
          >
            {s.type === "video" ? (
              <video
                className="w-full h-full object-cover"
                src={s.src}
                poster={s.poster}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} />
            )}
          </div>
        ))}
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content Container */}
      <div className="container-x section-x text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
            <span className="text-sm font-semibold text-primary">Welcome to Municipal Council</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Building a Better
            <span className="text-primary block mt-2">Community Together</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dedicated to serving our residents with transparency, innovation, and excellence in local governance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a 
              href="#services" 
              className="btn-primary gap-3 font-semibold text-lg px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="btn-outline border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-medium text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
        </button>

        {/* Navigation Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === active 
                  ? "bg-white scale-125" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}