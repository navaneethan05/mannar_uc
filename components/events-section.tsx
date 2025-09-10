import Image from "next/image"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { events } from "@/lib/data/events"

export function EventsSection() {
  const notices = [
    {
      id: 1,
      title: "Water Supply Maintenance",
      date: "March 12, 2024",
      image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
      description: "Scheduled maintenance will affect water supply in Zone A from 9 AM to 3 PM.",
    },
    {
      id: 2,
      title: "Road Construction Update",
      date: "March 10, 2024",
      image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
      description: "Main Street construction project is 60% complete. Expected completion by April 15.",
    },
    {
      id: 3,
      title: "New Recycling Program",
      date: "March 8, 2024",
      image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
      description: "Enhanced recycling collection starts March 15. New bins will be distributed this week.",
    },
    {
      id: 4,
      title: "Property Tax Deadline",
      date: "March 5, 2024",
      image: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
      description: "Reminder: Property tax payments are due by March 31. Online payment options available.",
    },
  ]

  return (
    <section id="events" className="section-x bg-[#EFF6FF]">
      <div className="container-x">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-x">Events & Updates</h2>
          <a
            href="/events"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity gap-2"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Events Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {events.map((event) => (
                <div key={event.id} className="card-x p-0 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-primary mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-5 mb-4">{event.description}</p>
                    <a href={`/events/${(event as any).slug || ""}`} className="text-primary underline underline-offset-4 text-sm font-medium hover:no-underline transition-all">
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Notices Panel */}
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold inline-block mb-4">
              NOTICES
            </div>
            <div className="space-y-4">
              {notices.map((notice) => (
                <div key={notice.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={notice.image || "/placeholder.svg"}
                      alt={notice.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-primary text-sm mb-1">{notice.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{notice.date}</p>
                    <p className="text-sm text-gray-600 leading-5">{notice.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a
                href="/events/notices"
                className="text-primary text-sm font-medium underline underline-offset-4 hover:no-underline transition-all"
              >
                View All Notices
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
