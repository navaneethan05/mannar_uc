import { Trash2, FileText, Bell, Globe, Users, ArrowRight, Plus } from "lucide-react"

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
    <section id="info" className="section-x bg-white"> {/* Changed from bg-primary to bg-white */}
      <div className="container-x">
        {/* Main Heading — Now uses #111827 (foreground) on white */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Municipal Services & Information
          </h1>
          <h2 className="title-x mb-4 text-foreground">
            Municipal Services & Information
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Access essential services and stay informed about municipal programs and initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-primary font-semibold text-lg mb-3 group-hover:text-primary/80 transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-6 mb-4">{service.description}</p>

                <a
                  href={service.link}
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
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
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-border border-dashed hover:border-primary/30 flex flex-col justify-center items-center text-center animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Plus className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-primary font-semibold text-lg mb-2 group-hover:text-primary/80 transition-colors">
              More Services
            </h3>
            <p className="text-muted-foreground text-sm">Explore additional municipal services and information</p>
            <div className="mt-4 inline-flex items-center text-primary text-sm font-medium">
              View All
              <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </a>
        </div>

        {/* Bottom CTA — Now uses foreground color instead of primary */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="/services"
            className="btn-outline text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
          >
            Browse All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}