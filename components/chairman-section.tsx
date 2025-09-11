import Image from "next/image"

export function ChairmanSection() {
  return (
    <section id="chairman" className="section-x bg-white">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Chairman Photo */}
          <div className="rounded-2xl shadow-lg overflow-hidden aspect-[4/3]">
            <Image
              src="/placeholder-user.png"
              alt="Chairman of Municipal Council"
              width={500}
              height={375}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Chairman Message */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">Hon. Rajesh Perera</h2>
              <p className="text-lg text-muted-foreground">Chairman, Municipal Council</p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="leading-7">
                Dear Citizens, it is my honor to serve as your Chairman and work alongside our dedicated team to build a
                stronger, more prosperous community for all residents.
              </p>
              <p className="leading-7">
                Our administration is committed to transparency, sustainable development, and ensuring that every voice
                in our community is heard. Together, we are implementing innovative solutions to improve infrastructure,
                enhance public services, and create opportunities for economic growth.
              </p>
              <p className="leading-7">
                I encourage you to actively participate in our community initiatives and share your valuable feedback as
                we continue to work towards our shared vision of excellence.
              </p>
            </div>

            <a href="/chairman" className="inline-flex items-center px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              Read Full Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
