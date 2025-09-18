"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Globe } from "lucide-react"

export function TopBar() {
  const [currentTime, setCurrentTime] = useState("")
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

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

  // Prevent hydration mismatch by not rendering time until mounted
  if (!mounted) {
    return (
      <div className="bg-primary text-primary-foreground">
        <div className="container-x flex items-center justify-between py-2 text-xs md:text-sm">
          <div className="flex items-center">
            <span>&nbsp;</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <a href="tel:+94232235681" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <Phone className="w-3 h-3" />
                <span>+94 23 223 5681</span>
              </a>
              <a
                href="mailto:info@mannaruc.gov.lk"
                className="flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-3 h-3" />
                <span>info@mannaruc.gov.lk</span>
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-x flex items-center justify-between py-2 text-xs md:text-sm">
        <div className="flex items-center">
          <span>{currentTime}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+94232235681" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              <span>+94 23 223 5681</span>
            </a>
            <a
              href="mailto:info@mannaruc.gov.lk"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3 h-3" />
              <span>info@mannaruc.gov.lk</span>
            </a>
          </div>

          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  )
}
