import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export const useI18n = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  
  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale })
  }
  
  const currentLanguage = router.locale || 'en'
  
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'si', name: 'Sinhala', nativeName: 'සිංහල' }
  ]
  
  return {
    t,
    changeLanguage,
    currentLanguage,
    languages,
    getCurrentLanguageName: () => {
      const lang = languages.find(l => l.code === currentLanguage)
      return lang?.nativeName || 'English'
    }
  }
}

export const getLanguageDirection = (locale: string) => {
  // All supported languages are LTR
  return 'ltr'
}