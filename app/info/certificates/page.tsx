import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Download, Mail } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function CertificatesPage() {
  const docs = [
    { name: "Birth Certificate", desc: "Requirements and processing timelines.", href: "/info/forms#birth" },
    { name: "Marriage Certificate", desc: "Application steps and fees.", href: "/info/forms#marriage" },
    { name: "Death Certificate", desc: "How to request and collect.", href: "/info/forms#death" },
    { name: "Business Registration", desc: "Checklist and downloadable form.", href: "/info/forms#br" },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "Certificates & Permits" }]} />
        <section className="section-x bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="container-x text-center">
            <FileText className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificates & Permits</h1>
            <p className="text-blue-100 max-w-3xl mx-auto">Guidelines, forms, and contacts for common requests.</p>
          </div>
        </section>

        <section className="section-x">
          <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((d) => (
              <div key={d.name} className="card-x">
                <h3 className="text-lg font-semibold text-brand-blue mb-1">{d.name}</h3>
                <p className="text-gray-600 mb-4">{d.desc}</p>
                <a href={d.href} className="inline-flex items-center gap-2 text-brand-blue font-medium">
                  <Download className="w-4 h-4" />
                  Download Form
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section-x bg-gray-50">
          <div className="container-x text-center">
            <p className="text-gray-700 mb-4">Need help? Email our documentation desk.</p>
            <a href="mailto:documents@mannaruc.gov.lk" className="inline-flex items-center gap-2 btn-outline">
              <Mail className="w-4 h-4" />
              documents@mannaruc.gov.lk
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
