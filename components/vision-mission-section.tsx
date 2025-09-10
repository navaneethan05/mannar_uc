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
        <p className="max-w-4xl mx-auto text-blue-100 text-lg md:text-xl mb-12">
          Providing leadership and coordination to achieve economic and social development goals with transparent
          governance and public participation.
        </p>

        {/* Vision */}
        <div className="max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl font-bold mb-2">Vision</h3>
          <p className="text-blue-100 text-lg leading-relaxed">“An independent, sovereign and prosperous Mannar.”</p>
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Mission</h3>
          <p className="text-blue-100 text-lg leading-relaxed">
            “To provide the leadership for an excellent municipal mechanism with good governance and effective
            coordination between agencies to improve residents’ quality of life.”
          </p>
        </div>
      </div>
    </section>
  )
}
