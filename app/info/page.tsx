import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Trash2, FileText, Bell, Globe, MapPin, Users } from "lucide-react"

export default function InfoPage() {
  const infoCards = [
    {
      title: "Garbage Collection",
      description:
        "Provides schedules, instructions, and contact info related to waste collection services across different wards/zones. Helps residents understand how and when to dispose of waste properly.",
      icon: Trash2,
      href: "/info/garbage-collection",
      color: "bg-green-500",
    },
    {
      title: "Certificates & Permits",
      description:
        "Information about how to apply for essential certificates such as birth, marriage, and death certificates. Details on business registrations and construction permits.",
      icon: FileText,
      href: "/info/certificates",
      color: "bg-blue-500",
    },
    {
      title: "Public Notices",
      description:
        "Displays official announcements such as tenders, council meetings, budget releases, and public consultations. Keeps the community informed about important local government activities.",
      icon: Bell,
      href: "/info/public-notices",
      color: "bg-orange-500",
    },
    {
      title: "e-Services",
      description:
        "Offers access to online services like payment of taxes, license fees, and booking appointments. Includes links to downloadable forms and instructions for using digital services.",
      icon: Globe,
      href: "/info/e-services",
      color: "bg-purple-500",
    },
    {
      title: "Tourism",
      description:
        "Presents information about local tourist attractions, cultural events, historical sites, and natural beauty spots within Mannar. Aims to promote local tourism and provide visitors with useful guides.",
      icon: MapPin,
      href: "/info/tourism",
      color: "bg-teal-500",
    },
    {
      title: "Community Services",
      description:
        "Details on community welfare programs such as youth development initiatives, elder care services, and health clinics. Encourages public participation and awareness of social services.",
      icon: Users,
      href: "/info/community-services",
      color: "bg-red-500",
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Information & Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive information about municipal services, procedures, and resources. Everything you need
              to know about living and working in Mannar.
            </p>
          </div>
        </section>

        {/* Info Cards Grid */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Service Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of municipal services and information resources designed to serve our
                community efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {infoCards.map((card) => {
                const IconComponent = card.icon
                return (
                  <div key={card.title} className="card-x group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-blue">{card.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{card.description}</p>
                    <a
                      href={card.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-blue text-white hover:bg-blue-700 transition-colors group-hover:shadow-md"
                    >
                      Learn More
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Quick Access</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Frequently accessed services and information for your convenience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-soft text-center">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">Emergency Contacts</h3>
                <p className="text-gray-600 text-sm mb-4">Important phone numbers for urgent situations</p>
                <a href="/info/emergency" className="text-brand-blue hover:underline">
                  View Contacts
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft text-center">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm mb-4">Working hours and holiday schedules</p>
                <a href="/info/office-hours" className="text-brand-blue hover:underline">
                  View Schedule
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft text-center">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">Download Forms</h3>
                <p className="text-gray-600 text-sm mb-4">Printable application forms and documents</p>
                <a href="/info/forms" className="text-brand-blue hover:underline">
                  Download Now
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
