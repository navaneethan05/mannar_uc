import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Camera, Calendar, Star, Clock, Phone } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function TourismPage() {
  const attractions = [
    {
      name: "Mannar Fort",
      description:
        "Historic Portuguese and Dutch fort built in 1560, offering panoramic views of the coastline and rich colonial history.",
      category: "Historical Site",
      rating: 4.5,
      image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
    },
    {
      name: "Adam's Bridge (Rama Setu)",
      description:
        "Legendary chain of limestone shoals connecting Mannar Island to Pamban Island in India, steeped in mythology and natural beauty.",
      category: "Natural Wonder",
      rating: 4.8,
      image: "/adams-bridge-rama-setu-mannar-natural-limestone-fo.jpg",
    },
    {
      name: "Mannar Island",
      description:
        "Pristine island paradise with beautiful beaches, diverse wildlife, and traditional fishing communities.",
      category: "Natural Beauty",
      rating: 4.6,
      image: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
    },
    {
      name: "Baobab Tree",
      description:
        "Ancient African baobab trees, unique to this region in Sri Lanka, creating a distinctive landscape.",
      category: "Natural Wonder",
      rating: 4.3,
      image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
    },
    {
      name: "St. Sebastian's Church",
      description:
        "Beautiful Catholic church showcasing colonial architecture and serving as an important pilgrimage site.",
      category: "Religious Site",
      rating: 4.4,
      image: "/st-sebastian-church-mannar-catholic-colonial-archi.jpg",
    },
    {
      name: "Mannar Lighthouse",
      description:
        "Historic lighthouse offering spectacular views of the surrounding waters and serving as a maritime landmark.",
      category: "Historical Site",
      rating: 4.2,
      image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
    },
  ]

  const events = [
    {
      name: "Mannar Cultural Festival",
      date: "March 15-17, 2024",
      description: "Annual celebration of local culture, music, dance, and traditional crafts",
    },
    {
      name: "Fishing Festival",
      date: "July 20-22, 2024",
      description: "Celebration of maritime heritage with boat races, seafood, and cultural performances",
    },
    {
      name: "Heritage Walk",
      date: "Every Saturday",
      description: "Guided tours through historic sites and cultural landmarks",
    },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "Tourism" }]} />
        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-teal-600 to-teal-800">
          <div className="container-x text-center">
            <MapPin className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Discover Mannar</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Explore Mannar's rich cultural heritage, beautiful landscapes, and vibrant festivals. Find local
              attractions, maps, and event highlights to plan your perfect visit.
            </p>
          </div>
        </section>

        {/* Tourist Attractions */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Top Attractions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the must-visit destinations that showcase Mannar's unique blend of history, culture, and
                natural beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <div key={index} className="card-x overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                        {attraction.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{attraction.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">{attraction.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Events */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Cultural Events & Festivals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the vibrant culture of Mannar through our regular events and annual festivals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="card-x">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue">{event.name}</h3>
                      <p className="text-sm text-teal-600">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="section-x">
          <div className="container-x">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-6">Visitor Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue mb-2">Best Time to Visit</h3>
                      <p className="text-gray-600 text-sm">
                        November to March offers the most pleasant weather with cool breezes and minimal rainfall.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue mb-2">Getting Around</h3>
                      <p className="text-gray-600 text-sm">
                        Local buses, tuk-tuks, and bicycle rentals are available. Many attractions are within walking
                        distance of the town center.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Camera className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue mb-2">Photography</h3>
                      <p className="text-gray-600 text-sm">
                        Sunrise and sunset offer the best lighting for photography, especially at the fort and
                        lighthouse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-6">Tourism Office</h2>
                <div className="card-x">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Tourism Information Center</p>
                        <p className="text-gray-600">+94 23 223 5681</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">Near Mannar Fort, Main Street</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                      <h4 className="font-semibold text-teal-800 mb-2">Office Hours</h4>
                      <p className="text-teal-700 text-sm">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-teal-700 text-sm">Sunday: 9:00 AM - 1:00 PM</p>
                    </div>
                    <div className="mt-4">
                      <a
                        href="/info/tourism/map"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                      >
                        Download Tourist Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
