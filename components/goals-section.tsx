import { Target, Eye, Heart } from "lucide-react"

export function GoalsSection() {
  const goals = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide efficient, transparent, and responsive municipal services that enhance the quality of life for all residents while promoting sustainable development and community engagement.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be a model municipal council recognized for excellence in governance, innovation in service delivery, and commitment to creating a thriving, inclusive, and sustainable community.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, transparency, accountability, and community-first approach guide all our decisions and actions in serving the public interest with dedication and professionalism.",
    },
  ]

  return (
    <section className="section-x bg-soft-bg">
      <div className="container-x">
        <h2 className="title-x text-center mb-10">Our Commitment to You</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal, index) => {
            const IconComponent = goal.icon
            return (
              <div key={index} className="card-x text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{goal.title}</h3>
                <p className="text-gray-600 leading-7">{goal.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
