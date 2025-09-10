import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function OfficeHoursPage() {
  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 4:30 PM" },
    { day: "Saturday", time: "8:00 AM - 12:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "Office Hours" }]} />
        <section className="section-x bg-gradient-to-br from-brand-blue to-blue-800">
          <div className="container-x text-center">
            <Clock className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Office Hours</h1>
            <p className="text-blue-100 max-w-3xl mx-auto">Working hours and holiday schedules.</p>
          </div>
        </section>
        <section className="section-x">
          <div className="container-x grid md:grid-cols-3 gap-6">
            {hours.map((h) => (
              <div key={h.day} className="card-x text-center">
                <div className="text-sm text-gray-600">{h.day}</div>
                <div className="text-xl font-semibold text-brand-blue">{h.time}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
