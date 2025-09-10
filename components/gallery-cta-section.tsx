export function GalleryCtaSection() {
  return (
    <section className="section-x bg-gray-50">
      <div className="container-x text-center">
        <h2 className="text-3xl font-bold text-brand-blue mb-3">Explore Our Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">See highlights from community events and initiatives.</p>
        <a href="/events/gallery" className="inline-flex items-center px-6 py-3 rounded-full bg-brand-blue text-white hover:bg-blue-700 transition-colors">
          View All Photos
        </a>
      </div>
    </section>
  )
}
