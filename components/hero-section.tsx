import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative">
      {/* Split Background */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-accent -z-10"></div>

      <div className="container-x section-x">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left - Image */}
          <div className="aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden">
            <Image
              src="/modern-municipal-building-government-office.jpg"
              alt="Municipal Council Building"
              width={600}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              Serving Our Community with Excellence
            </h1>
            <p className="text-lg text-gray-600 text-pretty">
              Welcome to our Municipal Council's official website. We are committed to providing quality services,
              transparent governance, and fostering community development for all our residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#info" className="btn-primary gap-2">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
