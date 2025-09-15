export function TourismMediaSection() {
  const videos = [
    { id: "YWCMA2G22A8", title: "Mannar Sri Lanka - Exploring the Hidden Gem" },
    { id: "qRcIv8PJTG8", title: "Discover Mannar - Sri Lanka's Untouched Paradise" },
    { id: "tL2qrDNBLzQ", title: "Mannar Island - Cultural Heritage & Natural Beauty" },
    { id: "LRAL62axdmE", title: "Mannar Tourism - Beaches, History & Wildlife" },
  ]

  const main = videos[0]
  const sideVideos = videos.slice(1)

  return (
    <section className="section-x bg-gray-50 py-16">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-12 animate-fade-in-up">
          Tourism Highlights
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Left side - Main video */}
          <div className="md:col-span-3">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${main.id}?rel=0`}
                title={main.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-gray-800 mt-4 text-xl font-semibold">{main.title}</p>
            
            {/* Video description */}
            <div className="mt-6 p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-3">About Mannar, Sri Lanka</h3>
              <p className="text-gray-700 leading-relaxed">
                Mannar is a hidden gem in Sri Lanka's Northern Province, known for its pristine beaches, 
                rich cultural heritage, and unique biodiversity. Explore the historic Baobab trees, 
                ancient fortresses, and beautiful coastal landscapes that make Mannar a must-visit destination.
              </p>
            </div>
          </div>

          {/* Right side - Video grid */}
          <div className="md:col-span-1 space-y-4">
            {sideVideos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}