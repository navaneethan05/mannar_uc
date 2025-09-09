import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Award, Users, Calendar, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ChairmanPage() {
  const achievements = [
    {
      year: "2023",
      title: "Digital Transformation Initiative",
      description: "Successfully launched online municipal services, reducing processing time by 60%",
    },
    {
      year: "2022",
      title: "Infrastructure Development",
      description: "Completed 15km of road improvements and installed 200 new street lights",
    },
    {
      year: "2021",
      title: "Environmental Conservation",
      description: "Established 3 community gardens and implemented waste segregation program",
    },
  ]

  const initiatives = [
    {
      title: "Smart City Vision 2025",
      description: "Transforming Mannar into a digitally connected, sustainable urban center",
      status: "In Progress",
    },
    {
      title: "Youth Development Program",
      description: "Skills training and employment opportunities for local youth",
      status: "Active",
    },
    {
      title: "Heritage Preservation",
      description: "Protecting and promoting Mannar's rich cultural and historical heritage",
      status: "Ongoing",
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
            <span className="text-brand-blue font-medium">Chairman</span>
          </div>

          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Chairman Profile */}
          <div className="card-x mb-8">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-soft">
                  <Image
                    src="/chairman-portrait-professional-municipal-leader.jpg"
                    alt="Chairman of Mannar Urban Council"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">Hon. Rajesh Kumar Patel</h1>
                <p className="text-xl text-gray-600 mb-6">Chairman, Mannar Urban Council</p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-brand-blue" />
                    <div>
                      <p className="text-sm text-gray-500">Term Started</p>
                      <p className="font-medium">March 2020</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-blue" />
                    <div>
                      <p className="text-sm text-gray-500">Constituency</p>
                      <p className="font-medium">Mannar Municipal Area</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-blue" />
                    <div>
                      <p className="text-sm text-gray-500">Office Phone</p>
                      <p className="font-medium">+94 23 2225 678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-blue" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">chairman@mannar.gov.lk</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                    Urban Planning
                  </span>
                  <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                    Community Development
                  </span>
                  <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                    Environmental Conservation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chairman's Message */}
          <div className="card-x mb-8">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Chairman's Message</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Dear Fellow Citizens of Mannar,</p>
              <p className="mb-4">
                It is with great honor and responsibility that I serve as your Chairman of the Mannar Urban Council.
                Over the past four years, we have worked tirelessly to transform our beloved city into a model of
                sustainable urban development, transparency, and community-centered governance.
              </p>
              <p className="mb-4">
                Our vision extends beyond mere administrative duties. We are committed to creating a Mannar where every
                citizen has access to quality services, where our rich cultural heritage is preserved and celebrated,
                and where economic opportunities flourish for all. Through innovative digital solutions, infrastructure
                improvements, and environmental conservation initiatives, we are building a foundation for future
                generations.
              </p>
              <p className="mb-4">
                I believe in the power of community participation and transparent governance. Your voices, concerns, and
                suggestions are not just welcomed—they are essential to our success. Together, we have achieved
                remarkable progress, and together, we will continue to build a brighter future for Mannar.
              </p>
              <p className="mb-4">
                I invite you to engage with us, participate in our initiatives, and hold us accountable to the highest
                standards of public service. Your trust is our greatest asset, and your prosperity is our ultimate goal.
              </p>
              <p>With warm regards and unwavering commitment to our shared future,</p>
              <p className="font-semibold mt-4">
                Hon. Rajesh Kumar Patel
                <br />
                Chairman, Mannar Urban Council
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="card-x mb-8">
            <h2 className="text-2xl font-bold text-brand-blue mb-6">Key Achievements</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-brand-blue" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Initiatives */}
          <div className="card-x">
            <h2 className="text-2xl font-bold text-brand-blue mb-6">Current Initiatives</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{initiative.title}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {initiative.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
