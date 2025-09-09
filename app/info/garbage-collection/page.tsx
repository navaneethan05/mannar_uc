import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock, MapPin, Phone, Trash2, Recycle, AlertTriangle } from "lucide-react"

export default function GarbageCollectionPage() {
  const schedules = [
    { ward: "Ward 1 - Central", days: "Monday, Thursday", time: "6:00 AM - 10:00 AM" },
    { ward: "Ward 2 - North", days: "Tuesday, Friday", time: "6:00 AM - 10:00 AM" },
    { ward: "Ward 3 - South", days: "Wednesday, Saturday", time: "6:00 AM - 10:00 AM" },
    { ward: "Ward 4 - East", days: "Monday, Thursday", time: "10:00 AM - 2:00 PM" },
    { ward: "Ward 5 - West", days: "Tuesday, Friday", time: "10:00 AM - 2:00 PM" },
  ]

  const wasteTypes = [
    {
      type: "Organic Waste",
      description: "Food scraps, garden waste, biodegradable materials",
      color: "Green bins",
      icon: Recycle,
    },
    {
      type: "Recyclable Waste",
      description: "Paper, plastic, glass, metal containers",
      color: "Blue bins",
      icon: Recycle,
    },
    {
      type: "General Waste",
      description: "Non-recyclable, non-hazardous waste",
      color: "Black bins",
      icon: Trash2,
    },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-green-600 to-green-800">
          <div className="container-x text-center">
            <Trash2 className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Garbage Collection Services</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive waste management services to keep Mannar clean and sustainable. Find your collection
              schedule, disposal guidelines, and contact information.
            </p>
          </div>
        </section>

        {/* Collection Schedule */}
        <section className="section-x">
          <div className="container-x">
            <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Collection Schedule by Ward</h2>
            <div className="grid gap-4">
              {schedules.map((schedule, index) => (
                <div key={index} className="card-x flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue">{schedule.ward}</h3>
                      <p className="text-gray-600">{schedule.days}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{schedule.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waste Types */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Waste Separation Guidelines</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {wasteTypes.map((waste, index) => {
                const IconComponent = waste.icon
                return (
                  <div key={index} className="card-x text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-2">{waste.type}</h3>
                    <p className="text-gray-600 mb-3">{waste.description}</p>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {waste.color}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Important Guidelines */}
        <section className="section-x">
          <div className="container-x">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-6">Collection Guidelines</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-700">Place bins at the roadside by 6:00 AM on collection days</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Ensure bins are properly closed and not overflowing</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Separate waste according to the color-coded system</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">4</span>
                    </div>
                    <p className="text-gray-700">Remove bins from roadside after collection</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h2>
                <div className="card-x">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">Waste Management Department</p>
                        <p className="text-gray-600">+94 23 223 5679</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-medium">Emergency Collection</p>
                        <p className="text-gray-600">+94 23 223 5680</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Office Hours</h4>
                      <p className="text-green-700 text-sm">Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-green-700 text-sm">Saturday: 8:00 AM - 12:00 PM</p>
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
