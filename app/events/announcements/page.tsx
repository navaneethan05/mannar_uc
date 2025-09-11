"use client"

import { useMemo, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Megaphone,
  AlertTriangle,
  Clock,
  MapPin,
  Calendar,
  Filter,
  Search,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function AnnouncementsPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "weekly" | "monthly" | "yearly">("all")
  const [searchTerm, setSearchTerm] = useState("")
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
    const limitDays =
      timeFilter === "weekly" ? 7 : timeFilter === "monthly" ? 30 : timeFilter === "yearly" ? 365 : 0

    return announcements.filter((a) => {
      // time filter
      if (limitDays !== 0) {
        const diffDays = Math.floor(
          (now.getTime() - new Date(a.date).getTime()) / (1000 * 60 * 60 * 24),
        )
        if (diffDays > limitDays) return false
      }

      // search filter
      if (searchTerm.trim() !== "") {
        const q = searchTerm.toLowerCase()
        return (
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
        )
      }

      return true
    })
  }, [timeFilter, searchTerm, announcements])

  const visibleItems = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Events", href: "/events" },
            { label: "Announcements" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-center text-white relative">
          <div className="container-x py-16">
            <Megaphone className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Public Announcements</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Stay informed about urgent updates, service changes, and community notices from
              Mannar Urban Council.
            </p>

            {/* Search & Filter Row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto mt-8">
              {/* Search */}
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setVisible(6)
                  }}
                  placeholder="Search announcements..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
                />
              </div>

              {/* Filter */}
              <div className="flex gap-2">
                {[
                  { key: "all", label: "All" },
                  { key: "weekly", label: "Weekly" },
                  { key: "monthly", label: "Monthly" },
                  { key: "yearly", label: "Yearly" },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => {
                      setTimeFilter(t.key as any)
                      setVisible(6)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      timeFilter === (t.key as any)
                        ? "bg-white text-red-600"
                        : "bg-red-700 text-white hover:bg-red-600"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* List Section */}
        <section className="section-x">
          <div className="container-x">
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
                          <h3 className="text-xl font-semibold text-brand-blue">
                            {announcement.title}
                          </h3>
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
                        <p className="text-sm text-gray-500 mt-2">
                          Valid until: {announcement.validUntil}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Load More */}
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
      </main>

      <Footer />
    </div>
  )
}
