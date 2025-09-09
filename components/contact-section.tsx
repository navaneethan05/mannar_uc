"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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

  return (
    <section id="contact" className="section-x">
      <div className="container-x">
        <h2 className="title-x text-center mb-10">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Contact Form */}
          <div className="card-x">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@gmail.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message…"
                  rows={5}
                  className="w-full min-h-[140px] rounded-xl border border-gray-300 px-4 py-3 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-colors resize-vertical"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Contact Details */}
          <div className="space-y-6">
            <div className="card-x">
              <h3 className="text-xl font-semibold text-primary mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Municipal Council Office</p>
                    <p className="text-gray-700">123 Main Street, City Center</p>
                    <p className="text-gray-700">Colombo 00100, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-700">+94 11 234 5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-700">info@municipal.gov.lk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:30 PM</p>
                    <p className="text-gray-700">Saturday: 8:00 AM - 12:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden aspect-video bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzcuNiJOIDc5wrA1MSc0MC4zIkU!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Municipal Council Location"
              />
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
