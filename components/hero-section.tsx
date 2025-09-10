"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

type Slide =
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string; alt: string }

export function HeroSection() {
  const slides: Slide[] = [
    { type: "video", src: "/hero.mp4", poster: "/modern-municipal-building-government-office.jpg" },
    { type: "image", src: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg", alt: "Mannar island beaches" },
    { type: "image", src: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg", alt: "Mannar lighthouse" },
  ]

  const [active, setActive] = useState(0)

  return (
    <section id="home" className="relative">
      {/* Background Carousel */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`${i === active ? "opacity-100" : "opacity-0"} absolute inset-0 transition-opacity duration-500`}
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
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-x section-x">
        {/* Fixed height for hero while remaining responsive */}
        <div className="grid md:grid-cols-2 items-center gap-10 min-h-[520px] md:min-h-[600px]">
          {/* Left - Image container with padding and rounded corners */}
          <div className="rounded-2xl p-5 bg-white/90 backdrop-blur-sm shadow-lg">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/modern-municipal-building-government-office.jpg"
                alt="Municipal Council Building"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Serving Our Community with Excellence</h1>
            <p className="text-base md:text-lg text-gray-200/90 max-w-[600px]">
              Welcome to our Municipal Council's official website. We are committed to providing quality services,
              transparent governance, and fostering community development for all our residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#info" className="btn-primary gap-2 font-semibold">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline font-medium bg-white text-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full border border-white/80 transition-colors ${
              i === active ? "bg-white" : "bg-white/20 hover:bg-white/40"
            }`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}
