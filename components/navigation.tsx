"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const baseItems = [
    { name: "Home", href: "/" },
    { name: "Chairman", href: "/chairman" },
  ]

  const eventsDropdown = [
    { name: "Gallery", href: "/events/gallery" },
    { name: "News", href: "/events/news" },
    { name: "Announcements", href: "/events/announcements" },
    { name: "Notices", href: "/events/notices" },
  ]

  const infoDropdown = [
    { name: "Services", href: "/info" },
    { name: "Tourism", href: "/info/tourism" },
    { name: "Certificates & Permits", href: "/info/certificates" },
    { name: "Public Notices", href: "/info/public-notices" },
    { name: "e-Services", href: "/info/e-services" },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-x flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Image
              src="/municipal-council-logo-emblem.jpg"
              alt="Municipal Council Logo"
              width={32}
              height={32}
              className="rounded"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-primary">Mannar Urban Council</h1>
            <p className="text-xs text-muted-foreground">Official Website</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 relative">
          {baseItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary font-medium hover:underline underline-offset-4 transition-all"
            >
              {item.name}
            </a>
          ))}

          {/* Events & Updates dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("events")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="inline-flex items-center gap-1 text-primary font-medium hover:underline underline-offset-4">
              Events & Updates
              <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "events" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl border border-gray-200 w-48 py-2">
                {eventsDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-primary hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Information dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("info")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="inline-flex items-center gap-1 text-primary font-medium hover:underline underline-offset-4">
              Information
              <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "info" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl border border-gray-200 w-64 py-2">
                {infoDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-primary hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/contact" className="text-primary font-medium hover:underline underline-offset-4 transition-all">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-top border-gray-200">
          <div className="container-x py-4 space-y-3">
            {baseItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <details className="group">
              <summary className="flex justify-between items-center py-2 cursor-pointer text-primary font-medium">
                Events & Updates
                <span className="group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="pl-4 pb-2 space-y-2">
                {eventsDropdown.map((item) => (
                  <a key={item.name} href={item.href} className="block py-1" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center py-2 cursor-pointer text-primary font-medium">
                Information
                <span className="group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="pl-4 pb-2 space-y-2">
                {infoDropdown.map((item) => (
                  <a key={item.name} href={item.href} className="block py-1" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                ))}
              </div>
            </details>

            <a href="/contact" className="block text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
