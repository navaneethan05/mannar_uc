"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslation } from 'next-i18next'

export function VisionMissionSection() {
  const { t } = useTranslation('common')
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true)
        })
      },
      { threshold: 0.2 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section
      className="relative section-x"
      style={{
        backgroundImage: 'url(/office.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fix the background image
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div ref={containerRef} className="relative container-x text-center text-white py-16">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${inView ? "anim-fade-up" : "opacity-0 translate-y-4"}`}>{t('visionMission.title')}</h2>
        <p className={`max-w-4xl mx-auto text-blue-100 text-lg md:text-xl mb-12 ${inView ? "anim-fade-up-delay" : "opacity-0 translate-y-4"}`}>
          {t('visionMission.description')}
        </p>

        <div className="max-w-3xl mx-auto mb-10">
          <h3 className={`text-2xl font-bold mb-2 ${inView ? "anim-fade-up" : "opacity-0 translate-y-4"}`}>{t('visionMission.vision')}</h3>
          <p className={`text-blue-100 text-lg leading-relaxed ${inView ? "anim-fade-up-delay" : "opacity-0 translate-y-4"}`}>
            "{t('visionMission.visionText')}"
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className={`text-2xl font-bold mb-2 ${inView ? "anim-fade-up" : "opacity-0 translate-y-4"}`}>{t('visionMission.mission')}</h3>
          <p className={`text-blue-100 text-lg leading-relaxed ${inView ? "anim-fade-up-delay-2" : "opacity-0 translate-y-4"}`}>
            "{t('visionMission.missionText')}"
          </p>
        </div>
      </div>
    </section>
  )
}