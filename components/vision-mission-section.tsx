import { Eye, Target, Users, Lightbulb } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="section-x bg-gradient-to-br from-brand-blue to-blue-800">
      <div className="container-x">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Vision & Mission</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building a sustainable, inclusive, and prosperous Mannar for all citizens through transparent governance and
            innovative public services.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              To transform Mannar into a model urban council that exemplifies excellence in public service delivery,
              environmental sustainability, and community development, while preserving our rich cultural heritage and
              promoting inclusive growth for all residents.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              To provide efficient, transparent, and citizen-centered public services through innovative governance,
              sustainable development practices, and active community engagement, ensuring every resident has access to
              quality municipal services and opportunities for growth.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Community First</h4>
              <p className="text-blue-100 text-sm">Putting citizens at the heart of every decision</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Innovation</h4>
              <p className="text-blue-100 text-sm">Embracing modern solutions for better services</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Transparency</h4>
              <p className="text-blue-100 text-sm">Open governance and accountable leadership</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Excellence</h4>
              <p className="text-blue-100 text-sm">Striving for the highest standards in service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
