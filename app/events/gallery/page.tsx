import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Camera, Calendar, MapPin, Users, Filter } from "lucide-react"

export default function GalleryPage() {
  const photoCategories = [
    { name: "All", count: 150, active: true },
    { name: "Environment", count: 45 },
    { name: "Youth Programs", count: 32 },
    { name: "Public Events", count: 38 },
    { name: "Council Ceremonies", count: 25 },
    { name: "Community Outreach", count: 10 },
  ]

  const photoGallery = [
    {
      title: "Community Clean-up Drive 2024",
      date: "January 15, 2024",
      location: "Central Park, Mannar",
      category: "Environment",
      participants: "200+ volunteers",
      image: "/community-cleanup-volunteers-park.jpg",
      description: "Annual community clean-up initiative bringing together residents for environmental conservation.",
    },
    {
      title: "Youth Leadership Workshop",
      date: "January 10, 2024",
      location: "Community Center",
      category: "Youth Programs",
      participants: "50 young leaders",
      image: "/youth-workshop-community-center.jpg",
      description: "Empowering young minds with leadership skills and civic responsibility training.",
    },
    {
      title: "New Year Cultural Festival",
      date: "January 1, 2024",
      location: "Town Square",
      category: "Public Events",
      participants: "1000+ attendees",
      image: "/cultural-festival-mannar-new-year-celebration.jpg",
      description: "Celebrating the New Year with traditional music, dance, and cultural performances.",
    },
    {
      title: "Council Budget Meeting",
      date: "December 20, 2023",
      location: "Council Chambers",
      category: "Council Ceremonies",
      participants: "Council members & public",
      image: "/public-meeting-council-chambers.jpg",
      description: "Annual budget presentation and public consultation meeting.",
    },
    {
      title: "Senior Citizens Health Fair",
      date: "December 15, 2023",
      location: "Municipal Hall",
      category: "Community Outreach",
      participants: "150 seniors",
      image: "/health-fair-senior-citizens.jpg",
      description: "Free health screenings and wellness programs for senior community members.",
    },
    {
      title: "Tree Planting Campaign",
      date: "December 10, 2023",
      location: "Various locations",
      category: "Environment",
      participants: "300+ volunteers",
      image: "/tree-planting-campaign-mannar-environmental-init.jpg",
      description: "Community-wide tree planting initiative to enhance green spaces and combat climate change.",
    },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
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

        {/* Filter Categories */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-brand-blue">Photo Categories</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span>Filter by category</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {photoCategories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.active
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-100 border border-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-x">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoGallery.map((photo, index) => (
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
                        <span>{photo.date}</span>
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

            <div className="text-center mt-12">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                Load More Photos
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
