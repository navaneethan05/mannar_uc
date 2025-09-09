import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      <main className="section-x py-8">
        <div className="container-x">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-brand-blue">
              Home
            </Link>
            <span>/</span>
            <Link href="/events" className="hover:text-brand-blue">
              Events
            </Link>
            <span>/</span>
            <span className="text-brand-blue font-medium">News</span>
          </div>

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

          {/* News Grid */}
          <div className="grid gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="card-x overflow-hidden">
                <div className="md:flex gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=200&width=300&query=${encodeURIComponent(article.image.replace("/", ""))}`}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
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
            <button className="btn-primary">Load More Articles</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
