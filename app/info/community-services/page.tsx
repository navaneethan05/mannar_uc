import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function CommunityServicesPage() {
  const programs = [
    { name: "Youth Development", desc: "Workshops, sports, and skills training for youth.", contact: "+94 23 223 5690" },
    { name: "Elder Care", desc: "Health camps, social support, and home assistance.", contact: "+94 23 223 5691" },
    { name: "Health Clinics", desc: "Monthly mobile clinics and wellness checks.", contact: "+94 23 223 5692" },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "Community Services" }]} />
        <section className="section-x bg-gradient-to-br from-red-600 to-red-800">
          <div className="container-x text-center">
            <Users className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Services</h1>
            <p className="text-red-100 max-w-3xl mx-auto">Programs and support to uplift our residents.</p>
          </div>
        </section>

        <section className="section-x">
          <div className="container-x grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.name} className="card-x">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-3">{p.desc}</p>
                <p className="text-sm text-gray-700">Hotline: {p.contact}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
