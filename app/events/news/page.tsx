"use client"

import { useMemo, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User, Clock, Filter, Search, Camera } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "day" | "week" | "month" | "year">("all")
  const [search, setSearch] = useState("")
  const [visible, setVisible] = useState(6)

  const newsArticles = [
    {
      id: 1,
      title: "New Water Treatment Plant Inaugurated",
      excerpt:
        "The Mannar Urban Council officially opened a state-of-the-art water treatment facility to serve 15,000 residents with clean, safe drinking water.",
      content:
        "In a significant milestone for public health infrastructure, the Mannar Urban Council inaugurated its new water treatment plant yesterday. The facility, built with a budget of Rs. 45 million, incorporates advanced filtration and purification technologies...",
      author: "Municipal Communications",
      date: "2024-01-15",
      readTime: "3 min read",
      image: "/water-treatment-plant-inauguration.jpg",
      category: "Infrastructure",
    },
    {
      id: 2,
      title: "Digital Services Portal Launched",
      excerpt:
        "Citizens can now access municipal services online through our new digital platform, reducing wait times and improving efficiency.",
      content:
        "The Mannar Urban Council has launched its comprehensive digital services portal, marking a significant step towards modernizing municipal operations. Citizens can now apply for certificates, pay taxes, and access various services online...",
      author: "IT Department",
      date: "2024-01-12",
      readTime: "2 min read",
      image: "/digital-services-launch.jpg",
      category: "Technology",
    },
    {
      id: 3,
      title: "Community Garden Project Success",
      excerpt:
        "The pilot community garden project has yielded impressive results, with plans to expand to five more locations across the municipality.",
      content:
        "The community garden initiative launched six months ago has exceeded expectations. Located in the heart of Ward 3, the garden has produced over 500kg of fresh vegetables, distributed among participating families...",
      author: "Environmental Division",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "/community-garden-success.jpg",
      category: "Environment",
    },
    // add more articles...
  ]

  // Filtered + Search
  const filtered = useMemo(() => {
    const now = new Date()
    return newsArticles.filter((a) => {
      const q = search.toLowerCase()
      const matchesSearch =
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)

      const d = new Date(a.date)
      const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
      let matchesFilter = true
      if (timeFilter === "day") matchesFilter = diffDays <= 1
      else if (timeFilter === "week") matchesFilter = diffDays <= 7
      else if (timeFilter === "month") matchesFilter = diffDays <= 30
      else if (timeFilter === "year") matchesFilter = diffDays <= 365

      return matchesSearch && matchesFilter
    })
  }, [newsArticles, search, timeFilter])

  const visibleItems = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      <main className="relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 relative">
          <div className="container-x text-center py-20">
            <Camera className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Municipal News</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest updates, developments, and achievements from the Mannar Urban Council.
            </p>
          </div>

          {/* Floating Search + Filter */}
          <div className="absolute left-0 right-0 -bottom-10 z-20 px-4 md:px-0">
            <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-6 bg-white rounded-xl shadow-md">
              {/* Search */}
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news by title or category..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setVisible(6)
                  }}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Time Filter */}
              <div className="flex gap-2 items-center">
                <span className="text-gray-600 font-medium flex items-center gap-1">
                  <Filter className="w-4 h-4" /> Filter by time
                </span>
                {["all", "day", "week", "month", "year"].map((f) => (
                  <button
                    key={f}
                    onClick={() => {
                      setTimeFilter(f as any)
                      setVisible(6)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      timeFilter === f
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container-x mt-24">
          {/* Breadcrumb */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Events", href: "/events" },
              { label: "News" },
            ]}
          />

          {/* Back Button */}
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>

          {/* News Grid */}
          <div className="grid gap-8">
            {visibleItems.map((article) => (
              <article key={article.id} className="card-x overflow-hidden">
                <div className="md:flex gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden group">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 mt-4 md:mt-0">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />{" "}
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {article.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" /> {article.author}
                      </div>
                      <button className="text-purple-600 hover:text-purple-800 font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            {hasMore ? (
              <button
                onClick={() => setVisible((v) => v + 6)}
                className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Load More Articles
              </button>
            ) : (
              <div className="text-gray-500">No more articles</div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
