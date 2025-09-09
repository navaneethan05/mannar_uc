"use client"

import { useMemo, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Camera, Calendar, MapPin, Users } from "lucide-react"

type Photo = {
  title: string
  dateLabel: string
  dateISO: string
  location: string
  category: string
  participants: string
  image: string
  description: string
}

export default function GalleryPage() {
  const photos: Photo[] = [
    {
      title: "Community Clean-up Drive 2024",
      dateLabel: "January 15, 2024",
      dateISO: "2024-01-15",
      location: "Central Park, Mannar",
      category: "Environment",
      participants: "200+ volunteers",
      image: "/community-cleanup-volunteers-park.jpg",
      description:
        "Annual community clean-up initiative bringing together residents for environmental conservation.",
    },
    {
      title: "Youth Leadership Workshop",
      dateLabel: "January 10, 2024",
      dateISO: "2024-01-10",
      location: "Community Center",
      category: "Youth Programs",
      participants: "50 young leaders",
      image: "/youth-workshop-community-center.jpg",
      description:
        "Empowering young minds with leadership skills and civic responsibility training.",
    },
    {
      title: "New Year Cultural Festival",
      dateLabel: "January 1, 2024",
      dateISO: "2024-01-01",
      location: "Town Square",
      category: "Public Events",
      participants: "1000+ attendees",
      image: "/cultural-festival-mannar-new-year-celebration.jpg",
      description:
        "Celebrating the New Year with traditional music, dance, and cultural performances.",
    },
    {
      title: "Council Budget Meeting",
      dateLabel: "December 20, 2023",
      dateISO: "2023-12-20",
      location: "Council Chambers",
      category: "Council Ceremonies",
      participants: "Council members & public",
      image: "/public-meeting-council-chambers.jpg",
      description: "Annual budget presentation and public consultation meeting.",
    },
    {
      title: "Senior Citizens Health Fair",
      dateLabel: "December 15, 2023",
      dateISO: "2023-12-15",
      location: "Municipal Hall",
      category: "Community Outreach",
      participants: "150 seniors",
      image: "/health-fair-senior-citizens.jpg",
      description:
        "Free health screenings and wellness programs for senior community members.",
    },
    {
      title: "Tree Planting Campaign",
      dateLabel: "December 10, 2023",
      dateISO: "2023-12-10",
      location: "Various locations",
      category: "Environment",
      participants: "300+ volunteers",
      image: "/tree-planting-campaign-mannar-environmental-init.jpg",
      description:
        "Community-wide tree planting initiative to enhance green spaces and combat climate change.",
    },
  ]

  const [sort, setSort] = useState<"latest" | "oldest">("latest")
  const [page, setPage] = useState(1)
  const pageSize = 6

  const sorted = useMemo(() => {
    const arr = [...photos]
    arr.sort((a, b) => (sort === "latest" ? b.dateISO.localeCompare(a.dateISO) : a.dateISO.localeCompare(b.dateISO)))
    return arr
  }, [sort, photos])

  const totalPages = Math.ceil(sorted.length / pageSize)
  const start = (page - 1) * pageSize
  const visiblePhotos = sorted.slice(start, start + pageSize)

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }, { label: "Gallery" }]} />

        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-purple-600 to-purple-800">
          <div className="container-x text-center">
            <Camera className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Gallery</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Explore moments from Mannar's vibrant community events and public initiatives. Witness the spirit of
              unity, progress, and civic engagement through our visual stories.
            </p>
          </div>
        </section>

        {/* Sort Bar */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-brand-blue">Gallery</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Filter:</span>
                <button
                  onClick={() => {
                    setSort("latest")
                    setPage(1)
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    sort === "latest" ? "bg-purple-600 text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-purple-100"
                  }`}
                >
                  Latest
                </button>
                <button
                  onClick={() => {
                    setSort("oldest")
                    setPage(1)
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    sort === "oldest" ? "bg-purple-600 text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-purple-100"
                  }`}
                >
                  Oldest
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-x">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePhotos.map((photo, index) => (
                <div key={index} className="card-x overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={photo.image || "/placeholder.svg"}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {photo.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{photo.dateLabel}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-2">{photo.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{photo.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{photo.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{photo.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded border ${p === page ? "bg-purple-600 text-white border-purple-600" : "border-gray-300 hover:bg-gray-50"}`}
                >
                  {p}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50"
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next &gt;
              </button>
            </div>
          </div>
        </section>

        {/* Photo Submission CTA */}
        <section className="section-x bg-purple-50">
          <div className="container-x text-center">
            <div className="max-w-2xl mx-auto">
              <Camera className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Share Your Photos</h2>
              <p className="text-gray-600 mb-6">
                Have photos from municipal events or community activities? Share them with us to be featured in our
                gallery and celebrate our community spirit together.
              </p>
              <a
                href="/events/gallery/submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Submit Photos
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
