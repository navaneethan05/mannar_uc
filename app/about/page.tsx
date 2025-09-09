import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Award, Target, Heart } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "1987", event: "Establishment of Mannar Urban Council" },
    { year: "2010", event: "Digital transformation initiative launched" },
    { year: "2018", event: "Waste management modernization program" },
    { year: "2021", event: "Community engagement platform introduced" },
    { year: "2023", event: "Smart city infrastructure development" },
  ]

  const departments = [
    {
      name: "Administration",
      description: "Overall governance, policy implementation, and public relations",
      icon: Users,
    },
    {
      name: "Public Health",
      description: "Waste management, sanitation, and community health programs",
      icon: Heart,
    },
    {
      name: "Engineering",
      description: "Infrastructure development, road maintenance, and urban planning",
      icon: Award,
    },
    {
      name: "Finance",
      description: "Budget management, revenue collection, and financial planning",
      icon: Target,
    },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-brand-blue to-blue-800">
          <div className="container-x text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Mannar Urban Council</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Serving the vibrant community of Mannar with dedication, transparency, and innovation since 1987. We are
              committed to building a sustainable and prosperous future for all our residents.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-x">
          <div className="container-x">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Mannar Urban Council was established in 1987 as part of Sri Lanka's local government
                    restructuring to better serve urban communities. Located in the Northern Province, Mannar is a
                    historically significant region known for its cultural diversity, strategic location, and rich
                    heritage.
                  </p>
                  <p>
                    Over the decades, we have evolved from a traditional municipal body to a modern, citizen-centric
                    organization that embraces technology and innovation while preserving our cultural values and
                    environmental heritage.
                  </p>
                  <p>
                    Today, we serve over 45,000 residents across multiple wards, providing essential services including
                    waste management, infrastructure development, public health initiatives, and community programs that
                    enhance the quality of life for all citizens.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-municipal-building-government-office.jpg"
                  alt="Mannar Urban Council Building"
                  className="rounded-2xl shadow-soft w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Milestones */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Key Milestones</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Important moments in our journey towards becoming a model urban council
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-blue/20"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="bg-white rounded-xl p-6 shadow-soft">
                        <div className="text-2xl font-bold text-brand-blue mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-brand-blue rounded-full border-4 border-white shadow-md z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Departments</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized teams working together to deliver comprehensive municipal services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept) => {
                const IconComponent = dept.icon
                return (
                  <div key={dept.name} className="card-x text-center">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">{dept.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{dept.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="section-x bg-brand-blue">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">By the Numbers</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">Our impact on the Mannar community in measurable terms</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">45,000+</div>
                <div className="text-blue-100">Residents Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">12</div>
                <div className="text-blue-100">Administrative Wards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-blue-100">Staff Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">37</div>
                <div className="text-blue-100">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-x">
          <div className="container-x text-center">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Get Involved</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We believe in transparent governance and community participation. Join us in building a better Mannar
                through active citizenship and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-blue text-white hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/events"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                >
                  View Events
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
