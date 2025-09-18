import Image from "next/image"
import { useTranslation } from 'next-i18next'

export function ChairmanSection() {
  const { t } = useTranslation('common')
  
  return (
    <section id="chairman" className="section-x bg-white">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Chairman Photo */}
          <div className="rounded-2xl shadow-lg overflow-hidden aspect-[4/3]">
            <Image
              src="/placeholder-user.png"
              alt="Chairman of Municipal Council"
              width={500}
              height={375}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Chairman Message */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">{t('chairman.name')}</h2>
              <p className="text-lg text-muted-foreground">{t('chairman.position')}</p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="leading-7">
                {t('chairman.message1')}
              </p>
              <p className="leading-7">
                {t('chairman.message2')}
              </p>
              <p className="leading-7">
                {t('chairman.message3')}
              </p>
            </div>

            <a href="/chairman" className="inline-flex items-center px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              {t('chairman.readMore')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
