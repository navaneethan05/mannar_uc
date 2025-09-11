import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function EmergencyContactsPage() {
  const contacts = [
    { dept: "Police", phone: "+94 23 222 2222" },
    { dept: "Fire & Rescue", phone: "+94 23 223 0000" },
    { dept: "Ambulance", phone: "+94 23 224 4444" },
    { dept: "Municipal Emergency", phone: "+94 23 223 5999" },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "Emergency Contacts" }]} />
        <section className="section-x bg-gradient-to-br from-red-600 to-red-800">
          <div className="container-x text-center">
            <Phone className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Emergency Contacts</h1>
            <p className="text-red-100 max-w-3xl mx-auto">Important numbers for urgent situations.</p>
          </div>
        </section>
        <section className="section-x">
          <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((c) => (
              <div key={c.dept} className="card-x text-center">
                <div className="text-sm text-gray-600">{c.dept}</div>
                <div className="text-xl font-semibold text-brand-blue">{c.phone}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
