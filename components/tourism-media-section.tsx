export function TourismMediaSection() {
  const videos = [
    { id: "lTTajzrSkCw", title: "Top 15 Places to Visit in Mannar" },
    { id: "ScMzIvxBSi4", title: "Mannar Travel Guide" },
    { id: "ysz5S6PUM-U", title: "Sri Lanka: Northern Beauty" },
    { id: "aqz-KE-bpKQ", title: "Bird Watching in Mannar" },
  ]

  const main = videos[0]

  return (
    <section className="section-x bg-gray-50">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">Tourism Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${main.id}`}
                title={main.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-gray-700 mt-3 font-medium">{main.title}</p>
          </div>

          <div className="space-y-3">
            {videos.slice(1).map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 p-2 bg-white rounded-xl shadow hover:shadow-md transition-shadow"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="w-28 h-16 rounded object-cover"
                />
                <div className="text-sm font-medium text-primary line-clamp-2">{v.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
