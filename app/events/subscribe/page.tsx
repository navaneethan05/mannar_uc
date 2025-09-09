import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SubscribeUpdatesPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <section className="section-x bg-gradient-to-br from-brand-blue to-blue-800">
          <div className="container-x text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Subscribe to Updates</h1>
            <p className="text-blue-100 max-w-3xl mx-auto">Get notified about important announcements and news.</p>
          </div>
        </section>
        <section className="section-x">
          <div className="container-x card-x">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-gray-300 px-4 py-3" required />
              </div>
              <div className="md:col-span-2">
                <button className="px-6 py-3 rounded-full bg-brand-blue text-white hover:bg-blue-700">Subscribe Now</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
