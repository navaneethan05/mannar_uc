import { Eye, Target } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section
      className="relative section-x"
      style={{
        backgroundImage: 'url(/modern-municipal-building-government-office.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container-x text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mannar Urban Council</h2>
        <p className="max-w-4xl mx-auto text-blue-100 text-lg md:text-xl mb-10">
          Providing leadership and coordination to achieve economic and social development goals with transparent
          governance and public participation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-left">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold">Vision</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              “An independent, sovereign and prosperous Mannar.”
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-left">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold">Mission</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              To provide the leadership for an excellent municipal mechanism with good governance and effective
              coordination between agencies to improve residents’ quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
