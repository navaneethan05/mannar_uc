import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { notFound } from "next/navigation"
import { events } from "@/lib/data/events"

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug)
  if (!event) return notFound()

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <section className="section-x">
          <div className="container-x">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={event.image || "/placeholder.jpg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">{event.title}</h1>
                <p className="text-gray-600">{event.description}</p>
                <div className="text-sm text-muted-foreground">
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Location: {event.location}</p>
                </div>
                <a href="/events" className="btn-outline inline-flex">Back to Events</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
