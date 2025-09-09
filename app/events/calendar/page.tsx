import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar } from "lucide-react"

export default function EventCalendarPage() {
  const dates = [
    { date: "2024-03-15", title: "Community Clean-Up Drive" },
    { date: "2024-03-20", title: "Public Budget Meeting" },
    { date: "2024-03-25", title: "Youth Development Workshop" },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <section className="section-x bg-gradient-to-br from-brand-blue to-blue-800">
          <div className="container-x text-center">
            <Calendar className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Calendar</h1>
            <p className="text-blue-100 max-w-3xl mx-auto">View upcoming events and important dates.</p>
          </div>
        </section>
        <section className="section-x">
          <div className="container-x grid md:grid-cols-3 gap-6">
            {dates.map((d) => (
              <div key={d.date} className="card-x">
                <div className="text-sm text-gray-600">{new Date(d.date).toLocaleDateString()}</div>
                <div className="text-lg font-semibold text-brand-blue">{d.title}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
