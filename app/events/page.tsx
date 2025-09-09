import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Camera, Newspaper, Megaphone, FileText, Calendar, Clock } from "lucide-react"

export default function EventsPage() {
  const eventCategories = [
    {
      title: "Gallery",
      description: "Explore moments from Mannar's vibrant community events and public initiatives.",
      icon: Camera,
      href: "/events/gallery",
      color: "bg-purple-500",
      count: "150+ Photos",
    },
    {
      title: "News",
      description: "Stay updated with the latest council news, public decisions, and local initiatives.",
      icon: Newspaper,
      href: "/events/news",
      color: "bg-blue-500",
      count: "25 Articles",
    },
    {
      title: "Announcements",
      description: "Important announcements and alerts from Mannar Urban Council for public attention.",
      icon: Megaphone,
      href: "/events/announcements",
      color: "bg-red-500",
      count: "8 Active",
    },
    {
      title: "Notices",
      description: "Access official council notices and documents published for public transparency.",
      icon: FileText,
      href: "/events/notices",
      color: "bg-green-500",
      count: "12 Documents",
    },
  ]

  const recentUpdates = [
    {
      category: "News",
      title: "New Digital Services Platform Launched",
      date: "2024-01-15",
      type: "news",
    },
    {
      category: "Announcement",
      title: "Water Supply Maintenance - Ward 3",
      date: "2024-01-14",
      type: "announcement",
      urgent: true,
    },
    {
      category: "Notice",
      title: "Tender Call: Road Development Project",
      date: "2024-01-13",
      type: "notice",
    },
    {
      category: "Gallery",
      title: "Community Clean-up Drive Photos",
      date: "2024-01-12",
      type: "gallery",
    },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-brand-blue to-blue-800">
          <div className="container-x text-center">
            <Calendar className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Events & Updates</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay connected with Mannar Urban Council through our latest news, announcements, official notices, and
              event galleries. Your gateway to community happenings and municipal updates.
            </p>
          </div>
        </section>

        {/* Event Categories */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Browse by Category</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access different types of municipal communications and community content organized for your convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <a
                    key={category.title}
                    href={category.href}
                    className="card-x group hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div
                      className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">{category.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {category.count}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Recent Updates</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Latest additions across all categories to keep you informed about municipal activities.
              </p>
            </div>

            <div className="grid gap-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="card-x flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        update.type === "news"
                          ? "bg-blue-100 text-blue-700"
                          : update.type === "announcement"
                            ? "bg-red-100 text-red-700"
                            : update.type === "notice"
                              ? "bg-green-100 text-green-700"
                              : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {update.category}
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue">{update.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{update.date}</span>
                        {update.urgent && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium">
                            URGENT
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`/events/${update.type}`}
                    className="px-4 py-2 text-brand-blue hover:bg-brand-blue hover:text-white rounded-lg transition-colors"
                  >
                    View
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="/events/all"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-blue text-white hover:bg-blue-700 transition-colors"
              >
                View All Updates
              </a>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Quick Actions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-x text-center">
                <h3 className="text-lg font-semibold text-brand-blue mb-3">Subscribe to Updates</h3>
                <p className="text-gray-600 text-sm mb-4">Get notified about important announcements and news</p>
                <a
                  href="/events/subscribe"
                  className="inline-flex items-center justify-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe Now
                </a>
              </div>
              <div className="card-x text-center">
                <h3 className="text-lg font-semibold text-brand-blue mb-3">Event Calendar</h3>
                <p className="text-gray-600 text-sm mb-4">View upcoming events and important dates</p>
                <a
                  href="/events/calendar"
                  className="inline-flex items-center justify-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Calendar
                </a>
              </div>
              <div className="card-x text-center">
                <h3 className="text-lg font-semibold text-brand-blue mb-3">Submit News Tip</h3>
                <p className="text-gray-600 text-sm mb-4">Share community news or event information</p>
                <a
                  href="/events/submit"
                  className="inline-flex items-center justify-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Tip
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
