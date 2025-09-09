"use client"

import { useMemo, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User, Clock, Filter } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "weekly" | "monthly">("all")
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
  ]

  const filtered = useMemo(() => {
    const now = new Date()
    const limitDays = timeFilter === "weekly" ? 7 : timeFilter === "monthly" ? 30 : 0
    return newsArticles.filter((a) => {
      if (limitDays === 0) return true
      const d = new Date(a.date)
      const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
      return diffDays <= limitDays
    })
  }, [timeFilter, newsArticles])

  const visibleItems = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      <main className="section-x py-8">
        <div className="container-x">
          {/* Breadcrumb */}
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }, { label: "News" }]} />

          {/* Back Button */}
          <Link href="/events" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Municipal News</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay informed with the latest updates, developments, and achievements from the Mannar Urban Council.
            </p>
          </div>

          {/* Filter */}
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
                      ? "bg-brand-blue text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid gap-8">
            {visibleItems.map((article) => (
              <article key={article.id} className="card-x overflow-hidden">
                <div className="md:flex gap-6">
                  <div className="md:w-1/3">
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden group">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=200&width=300&query=${encodeURIComponent(article.image.replace("/", ""))}`}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 mt-4 md:mt-0">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <button className="text-brand-blue hover:text-brand-blue/80 font-medium">Read More →</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            {hasMore ? (
              <button onClick={() => setVisible((v) => v + 6)} className="btn-primary">
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
