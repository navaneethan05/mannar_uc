"use client"

import type React from "react"

import { useState, useCallback, useRef } from "react"
import { ChevronDown, ChevronUp, MapPin, Phone, Mail } from "lucide-react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: '100%',
  height: '100%'
};

// Extracted coordinates for Urban Council Mannar from the URL
const defaultCenter = {
  lat: 8.979872,
  lng: 79.9099636
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const faqs = [
    {
      question: "What are the office hours for municipal services?",
      answer:
        "Our main office is open Monday to Friday from 8:00 AM to 4:30 PM. Emergency services are available 24/7. Some specialized services may have different hours.",
    },
    {
      question: "How can I apply for building permits?",
      answer:
        "Building permits can be applied for online through our E-Services portal or in person at our Planning Department. Required documents include architectural plans, site surveys, and completed application forms.",
    },
    {
      question: "When is garbage collection in my area?",
      answer:
        "Garbage collection schedules vary by zone. You can check your collection day by entering your address in our Garbage Collection service or calling our waste management hotline.",
    },
    {
      question: "How do I report a municipal issue or complaint?",
      answer:
        "You can report issues through this contact form, call our hotline, visit our office in person, or use our online complaint portal available 24/7.",
    },
  ]

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // You need to get a valid Google Maps API Key and replace this placeholder.
    // The map won't load correctly until a key is provided.
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  })

  const mapRef = useRef(undefined)
  const onMapLoad = useCallback(function callback(map) {
    mapRef.current = map
  }, [])
  const onMapUnmount = useCallback(function callback(map) {
    mapRef.current = undefined
  }, [])

  return (
    <section id="contact" className="section-x">
      <div className="container-x">
        <h2 className="title-x text-center mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Have Something Useful For Us?</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jhon Smith"
                  className="w-full bg-transparent px-2 pb-2 border-b border-gray-300 focus:border-primary outline-none"
                  required
                  aria-label="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@gmail.com"
                  className="w-full bg-transparent px-2 pb-2 border-b border-gray-300 focus:border-primary outline-none"
                  required
                  aria-label="Your Email"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-transparent px-2 pb-2 border-b border-gray-300 focus:border-primary outline-none resize-y"
                  required
                  aria-label="Your Message"
                />
              </div>
              <button type="submit" className="w-full px-6 py-3 rounded-lg bg-[#001f4d] text-white font-semibold">
                Send message
              </button>
            </form>
          </div>

          {/* Right - Quick Info and Google Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">+94 11 234 5678</p>
                    <p className="text-gray-600 text-sm">Mon–Fri, 8:00–16:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">info@municipal.gov.lk</p>
                    <p className="text-gray-600 text-sm">We reply within 1–2 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">123 Main Street, City Center, Colombo 00100</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden aspect-video bg-gray-200">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={defaultCenter}
                  zoom={15}
                  onLoad={onMapLoad}
                  onUnmount={onMapUnmount}
                >
                  <Marker position={defaultCenter} />
                </GoogleMap>
              ) : (
                <div>Loading map...</div>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
