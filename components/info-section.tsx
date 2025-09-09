import { Trash2, FileText, Bell, Globe, ArrowRight } from "lucide-react"

export function InfoSection() {
  const services = [
    {
      icon: Trash2,
      title: "Garbage Collection",
      description:
        "Schedule pickup, report missed collections, and learn about waste management programs in your area.",
      link: "#garbage-collection",
    },
    {
      icon: FileText,
      title: "Certificates",
      description:
        "Apply for birth certificates, marriage certificates, and other official municipal documents online.",
      link: "#certificates",
    },
    {
      icon: Bell,
      title: "Public Notices",
      description: "Stay informed with the latest municipal announcements, policy changes, and community updates.",
      link: "#notices",
    },
    {
      icon: Globe,
      title: "E-Services",
      description: "Access digital services including online payments, permit applications, and service requests.",
      link: "#e-services",
    },
  ]

  return (
    <section id="info" className="section-x bg-primary">
      <div className="container-x">
        <h2 className="text-white text-center text-3xl md:text-4xl font-semibold mb-10">
          Municipal Services & Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>

        {/* Additional Services Row */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-lg mb-6">
            Need help with something else? Our comprehensive service directory has you covered.
          </p>
          <a
            href="#all-services"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-colors gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
