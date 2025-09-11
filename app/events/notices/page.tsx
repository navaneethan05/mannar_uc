"use client"

import { useMemo, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowLeft,
  Calendar,
  Download,
  AlertCircle,
  FileText,
  Clock,
  Filter,
  Search,
  Newspaper,
} from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function NoticesPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "weekly" | "monthly">("all")
  const [visible, setVisible] = useState(6)
  const [search, setSearch] = useState("")

  const notices = [
    {
      id: 1,
      title: "Public Tender: Road Maintenance Contract 2024",
      description:
        "Invitation for sealed bids for the maintenance and repair of municipal roads in Wards 1-5. Estimated value: Rs. 2.5 million.",
      date: "2024-01-20",
      deadline: "2024-02-15",
      type: "Tender",
      priority: "high",
      downloadUrl: "#",
      status: "Open",
    },
    {
      id: 2,
      title: "Council Meeting Minutes - January 2024",
      description:
        "Official minutes from the monthly council meeting held on January 10, 2024. Includes budget discussions and policy updates.",
      date: "2024-01-12",
      type: "Minutes",
      priority: "medium",
      downloadUrl: "#",
      status: "Published",
    },
    {
      id: 3,
      title: "Property Tax Assessment Notice",
      description:
        "Annual property tax assessments for 2024 are now available. Property owners can view and appeal assessments until March 1, 2024.",
      date: "2024-01-08",
      deadline: "2024-03-01",
      type: "Tax Notice",
      priority: "high",
      downloadUrl: "#",
      status: "Active",
    },
    {
      id: 4,
      title: "Environmental Impact Study - Waste Management",
      description:
        "Public consultation document for the proposed waste management facility. Community feedback period open until February 28, 2024.",
      date: "2024-01-05",
      deadline: "2024-02-28",
      type: "Environmental",
      priority: "medium",
      downloadUrl: "#",
      status: "Consultation",
    },
    {
      id: 5,
      title: "Budget Allocation Report 2024",
      description:
        "Detailed breakdown of the municipal budget allocation for fiscal year 2024, including infrastructure, services, and development projects.",
      date: "2024-01-03",
      type: "Budget",
      priority: "medium",
      downloadUrl: "#",
      status: "Published",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800"
      case "Active":
        return "bg-blue-100 text-blue-800"
      case "Consultation":
        return "bg-purple-100 text-purple-800"
      case "Published":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filtered = useMemo(() => {
    const now = new Date()
    const limitDays = timeFilter === "weekly" ? 7 : timeFilter === "monthly" ? 30 : 0
    return notices.filter((n) => {
      const base = n.deadline || n.date
      if (!base) return true
      if (limitDays !== 0) {
        const diffDays = Math.floor((now.getTime() - new Date(base).getTime()) / (1000 * 60 * 60 * 24))
        if (diffDays > limitDays) return false
      }
      if (search && !n.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [timeFilter, notices, search])

  const visibleItems = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 relative">
        <div className="container-x text-center py-20">
          <Newspaper className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Official Notices</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Stay updated with tenders, policies, taxes, and important municipal communications.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="absolute -bottom-10 left-0 right-0">
          <div className="container-x">
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notices..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                />
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
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="section-x pt-20 pb-8">
        <div className="container-x">
          {/* Breadcrumb */}
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }, { label: "Notices" }]} />

          {/* Back Button */}
          <Link href="/events" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          {/* Notices List */}
          <div className="space-y-6">
            {visibleItems.map((notice) => (
              <div key={notice.id} className="card-x">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{notice.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Published: {new Date(notice.date).toLocaleDateString()}
                        </div>
                        {notice.deadline && (
                          <div className="flex items-center gap-1 text-red-600">
                            <Clock className="w-4 h-4" />
                            Deadline: {new Date(notice.deadline).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(notice.status)}`}>
                      {notice.status}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(notice.priority)}`}
                    >
                      {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)} Priority
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{notice.description}</p>

                <div className="flex items-center justify-between">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {notice.type}
                  </span>
                  <div className="flex items-center gap-3">
                    {notice.deadline && (
                      <div className="flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        {Math.ceil(
                          (new Date(notice.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
                        )}{" "}
                        days left
                      </div>
                    )}
                    <button className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 font-medium">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            {hasMore ? (
              <button onClick={() => setVisible((v) => v + 6)} className="btn-primary">
                Load More Notices
              </button>
            ) : (
              <div className="text-gray-500">No more notices</div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
