"use client"

import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SubmitNewsTipPage() {
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <section className="section-x bg-gradient-to-br from-brand-blue to-blue-800">
          <div className="container-x text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Submit News Tip</h1>
            <p className="text-blue-100 max-w-3xl mx-auto">Share community news or event information.</p>
          </div>
        </section>
        <section className="section-x">
          <div className="container-x card-x">
            {!sent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input className="w-full rounded-xl border border-gray-300 px-4 py-3" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full rounded-xl border border-gray-300 px-4 py-3" required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tip</label>
                  <textarea rows={5} className="w-full rounded-xl border border-gray-300 px-4 py-3" required />
                </div>
                <div className="md:col-span-2">
                  <button className="px-6 py-3 rounded-full bg-brand-blue text-white hover:bg-blue-700">Submit Tip</button>
                </div>
              </form>
            ) : (
              <div className="text-center text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-6">
                Thank you! Your tip has been received.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
