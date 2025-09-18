"use client"

import type React from "react"
import { useState, useCallback, useRef } from "react"
import { ChevronDown, ChevronUp, MapPin, Phone, Mail } from "lucide-react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import {ArrowRight} from "lucide-react"

const containerStyle = {
  width: '100%',
  height: '400px',
}

// ✅ CORRECTED COORDINATES FROM YOUR GOOGLE MAPS LINK
const defaultCenter = {
  lat: 8.9798667,
  lng: 79.9125385,
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log("Form submitted:", formData)

    // Simulate API call
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
      alert("Thank you! Your message has been sent.")
    }, 1500)
  }

  const faqs = [
    {
      question: "What are the office hours for municipal services?",
      answer: "Our main office is open Monday to Friday from 8:00 AM to 4:30 PM. Emergency services are available 24/7. Some specialized services may have different hours.",
    },
    {
      question: "How can I apply for building permits?",
      answer: "Building permits can be applied for online through our E-Services portal or in person at our Planning Department. Required documents include architectural plans, site surveys, and completed application forms.",
    },
    {
      question: "When is garbage collection in my area?",
      answer: "Garbage collection schedules vary by zone. You can check your collection day by entering your address in our Garbage Collection service or calling our waste management hotline.",
    },
    {
      question: "How do I report a municipal issue or complaint?",
      answer: "You can report issues through this contact form, call our hotline, visit our office in person, or use our online complaint portal available 24/7.",
    },
  ]

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY_HERE",
  })

  const mapRef = useRef<google.maps.Map | null>(null)
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])

  const onMapUnmount = useCallback(() => {
    mapRef.current = null
  }, [])

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container-x">
        <h2 className="title-x text-center mb-12 text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Form Card — Match HeroSection Style */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We'd love to hear from you. Fill out the form below and we'll respond within 1–2 business days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-y bg-white"
                  required
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#001f4d] text-white font-semibold rounded-2xl hover:bg-[#00153a] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right - Info + Map Cards — Match HeroSection Design Language */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">+94 23 223 5681</p>
                    <p className="text-gray-600 text-sm mt-1">Mon–Fri, 8:00 AM – 4:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">info@mannaruc.gov.lk</p>
                    <p className="text-gray-600 text-sm mt-1">We reply within 1–2 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:col-span-2">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mannar Urban Council</p>
                    <p className="text-gray-600 text-sm mt-1">Main Street, Mannar 41000, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Card — Styled Like HeroSection */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Find Us On Map
                </h3>
              </div>
              <div className="relative">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={16}
                    options={{
                      disableDefaultUI: false,
                      zoomControl: true,
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false,
                      gestureHandling: 'greedy',
                      draggable: true,
                      scrollwheel: true,
                    }}
                    onLoad={onMapLoad}
                    onUnmount={onMapUnmount}
                  >
                    <Marker
                      position={defaultCenter}
                      title="Urban Council Mannar Office"
                      aria-label="Urban Council Mannar Office Location"
                      icon={{
                        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
                        fillColor: '#001f4d',
                        fillOpacity: 1,
                        strokeWeight: 2,
                        strokeColor: '#ffffff',
                        scale: 1.5,
                      }}
                    />
                  </GoogleMap>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center bg-gray-50 p-8">
                    <div className="inline-block animate-pulse bg-gray-300 rounded-xl w-16 h-16 mb-4"></div>
                    <p className="text-gray-600 font-medium text-center">
                      Loading Interactive Map...
                    </p>
                    <p className="text-sm text-gray-500 text-center mt-2 max-w-xs">
                      Please ensure JavaScript is enabled and your API key is configured.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs — Match HeroSection Spacing & Feel */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  aria-expanded={expandedFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-8 pb-8 pt-0 animate-fadeIn"
                  >
                    <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
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