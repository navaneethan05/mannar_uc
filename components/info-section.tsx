import { Trash2, FileText, Bell, Globe, Users, ArrowRight } from "lucide-react"

export function InfoSection() {
  const services = [
    {
      icon: Trash2,
      title: "Garbage Collection",
      description:
        "Schedule pickup, report missed collections, and learn about waste management programs in your area.",
      link: "/info/garbage-collection",
    },
    {
      icon: FileText,
      title: "Certificates & Permits",
      description:
        "Apply for birth certificates, marriage certificates, and other official municipal documents online.",
      link: "/info/certificates",
    },
    {
      icon: Bell,
      title: "Public Notices",
      description: "Stay informed with the latest municipal announcements, policy changes, and community updates.",
      link: "/info/public-notices",
    },
    {
      icon: Globe,
      title: "E-Services",
      description: "Access digital services including online payments, permit applications, and service requests.",
      link: "/info/e-services",
    },
    {
      icon: Users,
      title: "Community Services",
      description: "Programs for youth, elders, health clinics, and public welfare initiatives.",
      link: "/info/community-services",
    },
  ]

  return (
    <section id="info" className="section-x bg-primary">
      <div className="container-x">
        <h2 className="text-white text-center text-3xl md:text-4xl font-semibold mb-10">
          Municipal Services & Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 ring-1 ring-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>

                <p className="text-white/80 text-sm leading-6 mb-4">{service.description}</p>

                <a
                  href={service.link}
                  className="inline-flex items-center text-white underline underline-offset-4 text-sm font-medium hover:no-underline transition-all group-hover:text-white/90 gap-1"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            )
          })}

          {/* "+5 More Services" card */}
          <a
            href="/info"
            aria-label="View more services"
            className="bg-white/10 backdrop-blur rounded-2xl p-6 ring-1 ring-white/20 hover:bg-white/20 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">+5 More Services →</h3>
              <p className="text-white/80 text-sm leading-6">Explore additional municipal services and information.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
