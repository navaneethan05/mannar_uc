import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Globe, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function EServicesPage() {
  const services = [
    { name: "Pay Property Tax", href: "#" },
    { name: "Book an Appointment", href: "#" },
    { name: "Apply for Permit", href: "#" },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "e-Services" }]} />
        <section className="section-x bg-gradient-to-br from-purple-600 to-purple-800">
          <div className="container-x text-center">
            <Globe className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">e-Services</h1>
            <p className="text-purple-100 max-w-3xl mx-auto">Access online services and submit requests.</p>
          </div>
        </section>

        <section className="section-x">
          <div className="container-x grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <a key={s.name} href={s.href} className="card-x block group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-blue">{s.name}</h3>
                    <p className="text-gray-600 text-sm">Secure and convenient.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
