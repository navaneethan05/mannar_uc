"use client"

import { useMemo, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Megaphone, AlertTriangle, Clock, MapPin, Calendar, Filter } from "lucide-react"

export default function AnnouncementsPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "weekly" | "monthly">("all")
  const [visible, setVisible] = useState(6)

  const announcements = [
    {
      title: "Water Supply Maintenance - Ward 3 & 4",
      date: "2024-01-16",
      time: "Posted at 9:00 AM",
      category: "Utility",
      priority: "urgent",
      validUntil: "2024-01-18",
      description:
        "Scheduled water supply maintenance will affect Ward 3 and Ward 4 areas from January 17, 6:00 AM to 4:00 PM. Alternative water supply arrangements have been made at community centers.",
      affectedAreas: ["Ward 3 - Central District", "Ward 4 - Eastern District"],
      contactInfo: "Emergency Water Supply: +94 23 223 5680",
    },
    {
      title: "Road Closure - Main Street Construction",
      date: "2024-01-15",
      time: "Posted at 2:30 PM",
      category: "Traffic",
      priority: "high",
      validUntil: "2024-01-25",
      description:
        "Main Street will be partially closed for road improvement works from January 18-25. Alternative routes via Church Road and Market Street are available.",
      affectedAreas: ["Main Street (Town Center to Market Junction)"],
      contactInfo: "Traffic Management: +94 23 223 5682",
    },
    {
      title: "Public Meeting - Budget Consultation",
      date: "2024-01-14",
      time: "Posted at 11:00 AM",
      category: "Meeting",
      priority: "normal",
      validUntil: "2024-01-20",
      description:
        "Public consultation meeting for the 2024 municipal budget will be held on January 20 at 3:00 PM in the Council Chambers. All residents are invited to participate.",
      affectedAreas: ["All Wards"],
      contactInfo: "Council Secretary: +94 23 223 5678",
    },
    {
      title: "Garbage Collection Schedule Change",
      date: "2024-01-13",
      time: "Posted at 8:00 AM",
      category: "Waste Management",
      priority: "normal",
      validUntil: "2024-01-31",
      description:
        "Due to the Pongal holiday, garbage collection schedules will be adjusted for the week of January 15-19. Collection will be delayed by one day for all wards.",
      affectedAreas: ["All Wards"],
      contactInfo: "Waste Management: +94 23 223 5679",
    },
    {
      title: "Job Vacancy - Municipal Engineer",
      date: "2024-01-12",
      time: "Posted at 10:00 AM",
      category: "Employment",
      priority: "normal",
      validUntil: "2024-02-12",
      description:
        "Applications are invited for the position of Municipal Engineer. Qualified candidates with relevant experience in civil engineering and municipal projects are encouraged to apply.",
      affectedAreas: ["Municipal Office"],
      contactInfo: "HR Department: +94 23 223 5683",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  const getPriorityIcon = (priority: string) => {
    return priority === "urgent" || priority === "high" ? AlertTriangle : Megaphone
  }

  const filtered = useMemo(() => {
    const now = new Date()
    const limitDays = timeFilter === "weekly" ? 7 : timeFilter === "monthly" ? 30 : 0
    return announcements.filter((a) => {
      if (limitDays === 0) return true
      const diffDays = Math.floor((now.getTime() - new Date(a.date).getTime()) / (1000 * 60 * 60 * 24))
      return diffDays <= limitDays
    })
  }, [timeFilter, announcements])

  const visibleItems = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-red-600 to-red-800">
          <div className="container-x text-center">
            <Megaphone className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Public Announcements</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Important announcements and alerts from Mannar Urban Council for public attention. Stay informed about
              urgent updates, service changes, and community notices.
            </p>
          </div>
        </section>

        {/* Filter and Stats */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-2">Current Announcements</h2>
                <p className="text-gray-600">Last updated: January 16, 2024 at 9:00 AM</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">2</div>
                  <div className="text-sm text-gray-600">Urgent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">1</div>
                  <div className="text-sm text-gray-600">High Priority</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2</div>
                  <div className="text-sm text-gray-600">Normal</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-medium">
                All Announcements
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-red-100 border border-gray-200 text-sm font-medium">
                Urgent Only
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-red-100 border border-gray-200 text-sm font-medium">
                Utility Services
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-red-100 border border-gray-200 text-sm font-medium">
                Traffic & Roads
              </button>
            </div>
          </div>
        </section>

        {/* Announcements List */}
        <section className="section-x">
          <div className="container-x">
            <div className="card-x flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" /> Filter by time
              </div>
              <div className="flex gap-2">
                {[
                  { key: "all", label: "All" },
                  { key: "weekly", label: "Weekly" },
                  { key: "monthly", label: "Monthly" },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => {
                      setTimeFilter(t.key as any)
                      setVisible(6)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      timeFilter === (t.key as any)
                        ? "bg-red-600 text-white"
                        : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {visibleItems.map((announcement, index) => {
                const PriorityIcon = getPriorityIcon(announcement.priority)
                return (
                  <div
                    key={index}
                    className={`card-x border-l-4 ${
                      announcement.priority === "urgent"
                        ? "border-l-red-500"
                        : announcement.priority === "high"
                          ? "border-l-orange-500"
                          : "border-l-blue-500"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            announcement.priority === "urgent"
                              ? "bg-red-100"
                              : announcement.priority === "high"
                                ? "bg-orange-100"
                                : "bg-blue-100"
                          }`}
                        >
                          <PriorityIcon
                            className={`w-5 h-5 ${
                              announcement.priority === "urgent"
                                ? "text-red-600"
                                : announcement.priority === "high"
                                  ? "text-orange-600"
                                  : "text-blue-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-brand-blue">{announcement.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{announcement.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{announcement.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(
                            announcement.priority,
                          )}`}
                        >
                          {announcement.priority.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {announcement.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">{announcement.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-brand-blue mb-2">Affected Areas:</h4>
                        <ul className="space-y-1">
                          {announcement.affectedAreas.map((area, areaIndex) => (
                            <li key={areaIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-blue mb-2">Contact Information:</h4>
                        <p className="text-sm text-gray-600">{announcement.contactInfo}</p>
                        <p className="text-sm text-gray-500 mt-2">Valid until: {announcement.validUntil}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              {hasMore ? (
                <button
                  onClick={() => setVisible((v) => v + 6)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700"
                >
                  Load More
                </button>
              ) : (
                <a
                  href="/events/announcements/archive"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                >
                  View Archived Announcements
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="section-x bg-red-50">
          <div className="container-x text-center">
            <div className="max-w-2xl mx-auto">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Emergency Notifications</h2>
              <p className="text-gray-600 mb-6">
                For urgent municipal emergencies outside office hours, contact our emergency hotline. We also send SMS
                alerts for critical announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+94232235999"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  Emergency Hotline: +94 23 223 5999
                </a>
                <a
                  href="/events/announcements/subscribe"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                >
                  Subscribe to SMS Alerts
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
