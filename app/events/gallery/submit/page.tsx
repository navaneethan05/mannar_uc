"use client"

import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Camera } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SubmitPhotosPage() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const categories = [
    "Environment",
    "Youth Programs",
    "Public Events",
    "Council Ceremonies",
    "Community Outreach",
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    setSubmitting(true)
    try {
      const payload = Object.fromEntries(formData.entries())
      // Persist locally so the action "works" without a backend
      const existing = JSON.parse(localStorage.getItem("submittedPhotos") || "[]")
      existing.push({ ...payload, submittedAt: new Date().toISOString() })
      localStorage.setItem("submittedPhotos", JSON.stringify(existing))
      setSuccess("Thank you! Your photos were submitted for review.")
      setTimeout(() => router.push("/events/gallery"), 1600)
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        <section className="section-x bg-gradient-to-br from-purple-600 to-purple-800">
          <div className="container-x text-center">
            <Camera className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Submit Event Photos</h1>
            <p className="text-purple-100 max-w-3xl mx-auto">
              Share your photos from municipal events. Approved submissions will appear in our gallery.
            </p>
          </div>
        </section>

        <section className="section-x">
          <div className="container-x">
            <div className="card-x">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input id="name" name="name" required className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Title
                  </label>
                  <input id="title" name="title" required className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Date
                  </label>
                  <input id="date" name="date" type="date" required className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input id="location" name="location" required className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select id="category" name="category" required className="w-full rounded-xl border border-gray-300 px-4 py-3">
                    <option value="">Select category</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea id="description" name="description" rows={4} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Photos
                  </label>
                  <input id="photos" name="photos" type="file" accept="image/*" multiple className="block w-full text-sm" />
                  <p className="text-xs text-gray-500 mt-1">JPEG/PNG, up to 10 files.</p>
                </div>

                <div className="md:col-span-2 flex items-center gap-3">
                  <input id="consent" name="consent" type="checkbox" required className="rounded border-gray-300" />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I confirm I have the right to share these photos and agree to the terms.
                  </label>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit Photos"}
                  </button>
                </div>

                {success && (
                  <div className="md:col-span-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                    {success}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
