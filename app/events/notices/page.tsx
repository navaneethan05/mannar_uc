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
  ArrowRight,
  Download,
  Eye,
  Share2,
  Bell,
  Bookmark
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function AnnouncementsPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "weekly" | "monthly" | "yearly">("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<string | null>(null)
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
      location: "Ward 3 & 4, Mannar",
      views: 1245,
      downloads: 342
    },
    {
      id: "2",
      title: "Road Closure - Main Street Construction",
      date: "2024-01-15",
      time: "Posted at 2:30 PM",
      category: "Infrastructure",
      priority: "high",
      validUntil: "2024-01-25",
      description: "Main Street will be partially closed for road improvement works from January 18-25. Alternative routes via Church Road and Market Street are available.",
      affectedAreas: ["Main Street (Town Center to Market Junction)"],
      contactInfo: "Traffic Management: +94 23 223 5682",
      participants: "Commuters and local businesses",
      location: "Main Street, Mannar",
      views: 876,
      downloads: 210
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
      location: "Council Chambers, Mannar",
      views: 543,
      downloads: 98
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
      location: "Northern Mannar",
      views: 1123,
      downloads: 287
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
      location: "Community Health Center, Mannar",
      views: 765,
      downloads: 154
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
      location: "Mannar Municipal Office",
      views: 987,
      downloads: 321
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
      location: "Mannar Region",
      views: 2156,
      downloads: 432
    }
  ]

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(announcements.map((item) => item.category)));
    return uniqueCategories;
  }, [announcements]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "priority" | "views">("date");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-destructive text-destructive-foreground"
      case "high":
        return "bg-accent text-accent-foreground"
      default:
        return "bg-primary text-primary-foreground"
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

    // Sort by selected criteria
    if (sortBy === "date") {
      filtered.sort((a, b) => b.date.localeCompare(a.date))
    } else if (sortBy === "priority") {
      const priorityOrder = { urgent: 3, high: 2, normal: 1 };
      filtered.sort((a, b) => priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder])
    } else if (sortBy === "views") {
      filtered.sort((a, b) => (b.views || 0) - (a.views || 0))
    }
    
    return filtered
  }, [timeFilter, searchTerm, selectedCategories, sortBy, announcements])

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
    setTimeFilter("all")
    setSortBy("date")
    setPage(1)
  }

  const highPriorityAnnouncements = announcements
    .filter(a => a.priority === "urgent" || a.priority === "high")
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      {/* Breadcrumbs */}
      <div className="container-x py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Announcements" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-x text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Megaphone className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Public Announcements</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Stay informed about urgent updates, service changes, and community notices from Mannar Urban Council.
          </p>
          
          {/* Quick Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-primary-foreground">{announcements.length}</div>
              <div className="text-primary-foreground/80">Total Announcements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-primary-foreground">{highPriorityAnnouncements.length}</div>
              <div className="text-primary-foreground/80">Urgent Notices</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-primary-foreground">{categories.length}</div>
              <div className="text-primary-foreground/80">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section - Sticky */}
      <section className="sticky top-16 z-10 bg-card shadow-sm py-6 border-b border-border">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-2/5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search announcements by title, category, or description..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none bg-background text-foreground"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              {/* Time Filter */}
              <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2.5">
                <span className="text-foreground font-medium whitespace-nowrap">Time:</span>
                <select
                  value={timeFilter}
                  onChange={(e) => {
                    setTimeFilter(e.target.value as "all" | "weekly" | "monthly" | "yearly");
                    setPage(1);
                  }}
                  className="bg-transparent border-none focus:ring-0 focus:outline-none text-foreground"
                >
                  <option value="all">All Time</option>
                  <option value="weekly">This Week</option>
                  <option value="monthly">This Month</option>
                  <option value="yearly">This Year</option>
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2.5">
                <span className="text-foreground font-medium whitespace-nowrap">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as "date" | "priority" | "views");
                    setPage(1);
                  }}
                  className="bg-transparent border-none focus:ring-0 focus:outline-none text-foreground"
                >
                  <option value="date">Newest</option>
                  <option value="priority">Priority</option>
                  <option value="views">Most Viewed</option>
                </select>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium border border-primary/20"
              >
                <Filter className="w-5 h-5" />
                <span>Categories</span>
                {selectedCategories.length > 0 && (
                  <span className="bg-primary text-primary-foreground text-sm rounded-full h-6 w-6 flex items-center justify-center">
                    {selectedCategories.length}
                  </span>
                )}
              </button>

              {/* Clear Filters */}
              {(searchTerm || selectedCategories.length > 0 || timeFilter !== "all" || sortBy !== "date") && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  <X className="w-5 h-5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-lg font-medium text-foreground mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all border ${
                      selectedCategories.includes(category)
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-muted text-foreground border-border hover:bg-muted/80"
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
      <section className="py-8">
        <div className="container-x">
          {/* Results Count */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-muted-foreground">
              Showing {Math.min(filteredAndSorted.length, start + 1)}-{Math.min(filteredAndSorted.length, start + pageSize)} of {filteredAndSorted.length} announcements
            </p>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <button 
                className={`px-3 py-1.5 rounded-lg text-sm ${selectedAnnouncement ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"}`}
                onClick={() => setSelectedAnnouncement(null)}
              >
                Grid
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg text-sm ${selectedAnnouncement ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
                onClick={() => setSelectedAnnouncement(filteredAndSorted[0]?.id || null)}
              >
                Detailed
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left - Announcements Grid */}
            <div className={`${selectedAnnouncement ? "lg:col-span-3" : "lg:col-span-3"}`}>
              {visibleItems.length === 0 ? (
                <div className="text-center py-16 bg-card rounded-xl shadow-sm">
                  <Megaphone className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-foreground mb-2">No announcements found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="btn-primary"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : selectedAnnouncement ? (
                // Detailed View
                <div className="bg-card rounded-xl shadow-sm overflow-hidden">
                  {visibleItems.filter(a => a.id === selectedAnnouncement).map((announcement) => {
                    const PriorityIcon = getPriorityIcon(announcement.priority)
                    return (
                      <div key={announcement.id} className="p-6">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getPriorityColor(announcement.priority)}`}>
                                <PriorityIcon className="w-6 h-6 text-primary-foreground" />
                              </div>
                              <div>
                                <h2 className="text-2xl font-bold text-foreground">
                                  {announcement.title}
                                </h2>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(announcement.date).toLocaleDateString()}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{announcement.time}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(announcement.priority)}`}>
                                {announcement.priority.toUpperCase()}
                              </span>
                              <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border">
                                {announcement.category}
                              </span>
                              <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border">
                                Valid until: {new Date(announcement.validUntil).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => setSelectedAnnouncement(null)}
                            className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="prose max-w-none mb-6">
                          <p className="text-foreground leading-relaxed">{announcement.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h3 className="font-semibold text-foreground mb-3 text-lg">Affected Areas</h3>
                            <ul className="space-y-2">
                              {announcement.affectedAreas.map((area, areaIndex) => (
                                <li key={areaIndex} className="flex items-start gap-2 text-muted-foreground">
                                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{area}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-foreground mb-3 text-lg">Contact Information</h3>
                            <p className="text-muted-foreground mb-4">{announcement.contactInfo}</p>
                            
                            <h3 className="font-semibold text-foreground mb-3 text-lg">Participants</h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="w-5 h-5 text-primary" />
                              <span>{announcement.participants}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-border">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{announcement.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{announcement.views} views</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              <span>{announcement.downloads} downloads</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors">
                              <Bookmark className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors">
                              <Share2 className="w-5 h-5" />
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors border border-primary/20">
                              <Download className="w-4 h-4" />
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                // Grid View
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {visibleItems.map((announcement) => {
                    const PriorityIcon = getPriorityIcon(announcement.priority)
                    return (
                      <div
                        key={announcement.id}
                        className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-primary cursor-pointer"
                        onClick={() => setSelectedAnnouncement(announcement.id)}
                      >
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getPriorityColor(announcement.priority)}`}>
                                <PriorityIcon className="w-5 h-5 text-primary-foreground" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                                  {announcement.title}
                                </h3>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>{new Date(announcement.date).toLocaleDateString()}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{announcement.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                              {announcement.priority.toUpperCase()}
                            </span>
                            <span className="px-2.5 py-1 bg-muted text-muted-foreground rounded-full text-xs border border-border">
                              {announcement.category}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span className="line-clamp-1">{announcement.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{announcement.views}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="w-3 h-3" />
                                <span>{announcement.downloads}</span>
                              </div>
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
                <div className="flex items-center justify-center gap-3 mt-12">
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-medium text-foreground transition-colors"
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
                        className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                          p === page
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "border-border hover:bg-muted text-foreground"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-medium text-foreground transition-colors"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right - High Priority Announcements & Quick Links */}
            <div className="lg:col-span-1 space-y-6">
              {/* High Priority Announcements */}
              <div className="bg-card rounded-xl shadow-sm p-6 sticky top-32">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Urgent Notices
                </h2>
                
                <div className="space-y-4">
                  {highPriorityAnnouncements.map((announcement) => (
                    <div 
                      key={announcement.id} 
                      className={`p-4 rounded-lg border-l-4 cursor-pointer transition-colors ${
                        announcement.priority === "urgent" 
                          ? "bg-destructive/10 border-l-destructive hover:bg-destructive/20" 
                          : "bg-accent/10 border-l-accent hover:bg-accent/20"
                      }`}
                      onClick={() => setSelectedAnnouncement(announcement.id)}
                    >
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{announcement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{announcement.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{new Date(announcement.date).toLocaleDateString()}</span>
                        <span className={`px-2 py-1 rounded-full ${
                          announcement.priority === "urgent" 
                            ? "bg-destructive text-destructive-foreground" 
                            : "bg-accent text-accent-foreground"
                        }`}>
                          {announcement.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center gap-3 p-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Bell className="w-4 h-4 text-primary" />
                        </div>
                        <span>Subscribe to Alerts</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 p-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Download className="w-4 h-4 text-primary" />
                        </div>
                        <span>Download All</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 p-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                        <span>Archived Notices</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Statistics Card */}
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl shadow-sm p-6 text-primary-foreground">
                <h3 className="text-lg font-semibold mb-4">Announcement Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Total Announcements</span>
                    <span className="font-bold">{announcements.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Urgent Notices</span>
                    <span className="font-bold">{announcements.filter(a => a.priority === "urgent").length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>This Month</span>
                    <span className="font-bold">{announcements.filter(a => {
                      const now = new Date();
                      const announcementDate = new Date(a.date);
                      return now.getMonth() === announcementDate.getMonth() && 
                             now.getFullYear() === announcementDate.getFullYear();
                    }).length}</span>
                  </div>
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