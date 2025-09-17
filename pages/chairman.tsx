import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from 'next-i18next'

export default function ChairmanPage() {
  const { t } = useTranslation('common')
  
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[70vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent parallax-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-right py-16 w-full flex justify-end">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-6 animate-fade-in-up">
              {t('chairman.name')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in-up">
              {t('chairman.position')}
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 animate-pulse-slow"
            >
              {t('navigation.contact')} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Card */}
      <div className="relative -mt-24 max-w-7xl mx-auto bg-card shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 z-10 transform transition-all duration-300 hover:shadow-3xl">
        {/* Chairman Message */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{t('chairman.position')}</h2>
          <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-4xl mx-auto space-y-6 text-justify">
            <p>{t('chairman.message1')}</p>
            <p>{t('chairman.message2')}</p>
            <p>{t('chairman.message3')}</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}