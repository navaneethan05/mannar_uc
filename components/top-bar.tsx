"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Globe } from "lucide-react"

export function TopBar() {
  const [currentTime, setCurrentTime] = useState("")
  const [language, setLanguage] = useState("English")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const languages = ["English", "සිංහල", "தமிழ்"]

  return (
    <div style={{ backgroundColor: "#1C2B78" }} className="text-primary-foreground">
      <div className="container-x flex items-center justify-between py-2 text-xs md:text-sm">
        <div className="flex items-center">
          <span>{currentTime}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+94112345678" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              <span>+94 11 234 5678</span>
            </a>
            <a
              href="mailto:info@municipal.gov.lk"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3 h-3" />
              <span>info@municipal.gov.lk</span>
            </a>
          </div>

          <div className="relative">
            <button
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
              onClick={() => {
                const currentIndex = languages.indexOf(language)
                const nextIndex = (currentIndex + 1) % languages.length
                setLanguage(languages[nextIndex])
              }}
            >
              <Globe className="w-3 h-3" />
              <span>{language}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}