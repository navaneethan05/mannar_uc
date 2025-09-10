import Image from "next/image"

export function HomeGallerySection() {
  const main = {
    src: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
    alt: "Mannar Island Beaches",
  }
  const small = [
    { src: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg", alt: "Mannar Fort" },
    { src: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg", alt: "Baobab Trees" },
    { src: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg", alt: "Mannar Lighthouse" },
    { src: "/st-sebastian-church-mannar-catholic-colonial-archi.jpg", alt: "St. Sebastian's Church" },
  ]

  return (
    <section className="section-x bg-white">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Main large photo */}
          <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-lg aspect-[16/10] md:aspect-[4/3]">
            <Image src={main.src} alt={main.alt} fill className="object-cover" />
          </div>

          {/* Right side collage */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            {small.slice(0, 2).map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-square shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
            {small.slice(2).map((img, i) => (
              <div key={i + 2} className="relative rounded-2xl overflow-hidden aspect-square shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/events/gallery"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View All Photos
          </a>
        </div>
      </div>
    </section>
  )
}
