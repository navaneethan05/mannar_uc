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
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  ArrowRight
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function AnnouncementsPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "weekly" | "monthly" | "yearly">("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)
  const pageSize = 6

  const announcements = [
    {
      id: "1",
      title: "Water Supply Maintenance - Ward 3 & 4",
      date: "2024-01-16",
      time: "Posted at 9:00 AM",
      category: "Utility",
      priority: "urgent",
      validUntil: "2024-01-18",
      description: "Scheduled water supply maintenance will affect Ward 3 and Ward 4 areas from January 17, 6:00 AM to 4:00 PM. Alternative water supply arrangements have been made at community centers.",
      affectedAreas: ["Ward 3 - Central District", "Ward 4 - Eastern District"],
      contactInfo: "Emergency Water Supply: +94 23 223 5680",
      participants: "All residents in affected areas",
      location: "Ward 3 & 4, Mannar"
    },
    {
      id: "2",
      title: "Road Closure - Main Street Construction",
      date: "2024-01-15",
      time: "Posted at 2:30 PM",
      category: "Traffic",
      priority: "high",
      validUntil: "2024-01-25",
      description: "Main Street will be partially closed for road improvement works from January 18-25. Alternative routes via Church Road and Market Street are available.",
      affectedAreas: ["Main Street (Town Center to Market Junction)"],
      contactInfo: "Traffic Management: +94 23 223 5682",
      participants: "Commuters and local businesses",
      location: "Main Street, Mannar"
    },
    {
      id: "3",
      title: "Public Meeting - Budget Consultation",
      date: "2024-01-14",
      time: "Posted at 11:00 AM",
      category: "Meeting",
      priority: "normal",
      validUntil: "2024-01-20",
      description: "Public consultation meeting for the 2024 municipal budget will be held on January 20 at 3:00 PM in the Council Chambers. All residents are invited to participate.",
      affectedAreas: ["All Wards"],
      contactInfo: "Council Secretary: +94 23 223 5678",
      participants: "All residents",
      location: "Council Chambers, Mannar"
    },
    {
      id: "4",
      title: "Power Interruption - Scheduled Maintenance",
      date: "2024-01-13",
      time: "Posted at 4:45 PM",
      category: "Utility",
      priority: "high",
      validUntil: "2024-01-15",
      description: "Scheduled power maintenance will affect northern areas of Mannar on January 15 from 9:00 AM to 3:00 PM. Please plan accordingly.",
      affectedAreas: ["Northern District", "Industrial Zone"],
      contactInfo: "Power Utility: +94 23 223 5690",
      participants: "Residents and businesses in affected areas",
      location: "Northern Mannar"
    },
    {
      id: "5",
      title: "Community Health Camp",
      date: "2024-01-12",
      time: "Posted at 10:15 AM",
      category: "Health",
      priority: "normal",
      validUntil: "2024-01-19",
      description: "Free health check-up camp organized by Mannar Urban Council in collaboration with District Hospital. Services include blood pressure, sugar tests, and general consultations.",
      affectedAreas: ["All Wards"],
      contactInfo: "Health Department: +94 23 223 5675",
      participants: "All community members",
      location: "Community Health Center, Mannar"
    },
    {
      id: "6",
      title: "Tax Payment Deadline Extension",
      date: "2024-01-10",
      time: "Posted at 3:20 PM",
      category: "Administrative",
      priority: "normal",
      validUntil: "2024-01-31",
      description: "Property tax payment deadline has been extended to January 31, 2024. Late fees will be waived during this extension period.",
      affectedAreas: ["All Wards"],
      contactInfo: "Tax Department: +94 23 223 5660",
      participants: "Property owners in Mannar",
      location: "Mannar Municipal Office"
    },
    {
      id: "7",
      title: "Emergency Weather Alert",
      date: "2024-01-09",
      time: "Posted at 5:30 PM",
      category: "Emergency",
      priority: "urgent",
      validUntil: "2024-01-11",
      description: "Heavy rainfall warning issued for Mannar region. Residents in low-lying areas are advised to take necessary precautions.",
      affectedAreas: ["Coastal Areas", "Low-lying regions"],
      contactInfo: "Emergency Services: 119",
      participants: "All residents in alert areas",
      location: "Mannar Region"
    }
  ]

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(announcements.map((item) => item.category)));
    return uniqueCategories;
  }, [announcements]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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

  const filteredAndSorted = useMemo(() => {
    const now = new Date()
    const limitDays =
      timeFilter === "weekly" ? 7 : timeFilter === "monthly" ? 30 : timeFilter === "yearly" ? 365 : 0

    // Filter by time, search and categories
    const filtered = announcements.filter((a) => {
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
        if (
          !a.title.toLowerCase().includes(q) &&
          !a.description.toLowerCase().includes(q) &&
          !a.category.toLowerCase().includes(q)
        ) return false
      }

      // category filter
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(a.category);

      return matchesCategory
    })

    // Sort by date (newest first)
    filtered.sort((a, b) => b.date.localeCompare(a.date))
    return filtered
  }, [timeFilter, searchTerm, selectedCategories, announcements])

  const totalPages = Math.ceil(filteredAndSorted.length / pageSize);
  const start = (page - 1) * pageSize;
  const visibleItems = filteredAndSorted.slice(start, start + pageSize);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
    setPage(1)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setPage(1)
  }

  const highPriorityAnnouncements = announcements
    .filter(a => a.priority === "urgent" || a.priority === "high")
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Announcements" },
        ]}
      />

      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-[oklch(0.2_0.08_250)]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Public Announcements</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Stay informed about urgent updates, service changes, and community notices from Mannar Urban Council.
          </p>
        </div>
      </section>

      {/* Search & Filter Section - Sticky */}
      <section className="sticky top-16 z-10 bg-white shadow-sm py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-2/5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search announcements by title, category, or description..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[oklch(0.2_0.08_250)] focus:border-[oklch(0.2_0.08_250)] focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              {/* Time Filter */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2.5">
                <span className="text-gray-700 font-medium whitespace-nowrap">Time:</span>
                <select
                  value={timeFilter}
                  onChange={(e) => {
                    setTimeFilter(e.target.value as "all" | "weekly" | "monthly" | "yearly");
                    setPage(1);
                  }}
                  className="bg-transparent border-none focus:ring-0 focus:outline-none"
                >
                  <option value="all">All Time</option>
                  <option value="weekly">This Week</option>
                  <option value="monthly">This Month</option>
                  <option value="yearly">This Year</option>
                </select>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 bg-[oklch(0.2_0.08_250)]/10 hover:bg-[oklch(0.2_0.08_250)]/20 text-[oklch(0.2_0.08_250)] rounded-lg transition-colors font-medium"
              >
                <Filter className="w-5 h-5" />
                <span>Categories</span>
                {selectedCategories.length > 0 && (
                  <span className="bg-[oklch(0.2_0.08_250)] text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                    {selectedCategories.length}
                  </span>
                )}
              </button>

              {/* Clear Filters */}
              {(searchTerm || selectedCategories.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-[oklch(0.2_0.08_250)] transition-colors font-medium"
                >
                  <X className="w-5 h-5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategories.includes(category)
                        ? "bg-[oklch(0.2_0.08_250)] text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {visibleItems.length} of {filteredAndSorted.length} announcements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Announcements Grid */}
            <div className="lg:col-span-2">
              {visibleItems.length === 0 ? (
                <div className="text-center py-16">
                  <Megaphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No announcements found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.2_0.08_250)]/90 transition-colors font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {visibleItems.map((announcement) => {
                    const PriorityIcon = getPriorityIcon(announcement.priority)
                    return (
                      <div
                        key={announcement.id}
                        className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                          announcement.priority === "urgent"
                            ? "border-l-red-500"
                            : announcement.priority === "high"
                            ? "border-l-orange-500"
                            : "border-l-blue-500"
                        }`}
                      >
                        <div className="p-6">
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
                                <h3 className="text-xl font-semibold text-gray-800">
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
                              <h4 className="font-semibold text-[oklch(0.2_0.08_250)] mb-2">Affected Areas:</h4>
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
                              <h4 className="font-semibold text-[oklch(0.2_0.08_250)] mb-2">Contact Information:</h4>
                              <p className="text-sm text-gray-600">{announcement.contactInfo}</p>
                              <p className="text-sm text-gray-500 mt-2">
                                Valid until: {announcement.validUntil}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{announcement.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{announcement.participants}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-16">
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({length: totalPages}, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-4 py-2 rounded-lg border font-medium ${
                          p === page
                            ? "bg-[oklch(0.2_0.08_250)] text-white border-[oklch(0.2_0.08_250)] shadow-md"
                            : "border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right - High Priority Announcements */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
                <h2 className="text-2xl font-bold text-[oklch(0.2_0.08_250)] mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  Important Notices
                </h2>
                
                <div className="space-y-4">
                  {highPriorityAnnouncements.map((announcement) => (
                    <div 
                      key={announcement.id} 
                      className={`p-4 rounded-lg border-l-4 ${
                        announcement.priority === "urgent" 
                          ? "bg-red-50 border-l-red-500" 
                          : "bg-orange-50 border-l-orange-500"
                      }`}
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">{announcement.title}</h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{announcement.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{announcement.date}</span>
                        <span className={`px-2 py-1 rounded-full ${
                          announcement.priority === "urgent" 
                            ? "bg-red-100 text-red-800" 
                            : "bg-orange-100 text-orange-800"
                        }`}>
                          {announcement.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-[oklch(0.2_0.08_250)] mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[oklch(0.2_0.08_250)] transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Emergency Contacts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[oklch(0.2_0.08_250)] transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Service Request Form
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[oklch(0.2_0.08_250)] transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Announcements Archive
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[oklch(0.2_0.08_250)] transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Subscribe to Alerts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}