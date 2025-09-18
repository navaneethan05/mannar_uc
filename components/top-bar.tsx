"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Globe } from "lucide-react"
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export function TopBar() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [currentTime, setCurrentTime] = useState("")
  
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'si', name: 'Sinhala', nativeName: 'සිංහල' }
  ]
  
  const currentLanguage = router.locale || 'en'
  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === currentLanguage)
    return lang?.nativeName || 'English'
  }
  
  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale })
  }

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


  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-x flex items-center justify-between py-2 text-xs md:text-sm">
        <div className="flex items-center">
          <span>{currentTime}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a href={`tel:${t('topbar.phone')}`} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              <span>{t('topbar.phone')}</span>
            </a>
            <a
              href={`mailto:${t('topbar.email')}`}
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3 h-3" />
              <span>{t('topbar.email')}</span>
            </a>
          </div>

          <div className="relative">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <Globe className="w-3 h-3" />
                <span>{getCurrentLanguageName()}</span>
              </button>
              <div className="absolute right-0 top-full mt-1 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      currentLanguage === lang.code ? 'bg-primary/10 text-primary font-medium' : ''
                    }`}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
