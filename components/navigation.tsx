"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  const go = (href: string) => {
    try {
      setOpenDropdown(null)
      if (typeof window !== "undefined") {
        window.location.assign(href)
      }
    } catch (_) {}
  }

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const handleDropdownEnter = (dropdownName: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpenDropdown(dropdownName)
  }

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 300)
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === href
    return pathname.startsWith(href)
  }

  const baseItems = [
    { name: "Home", href: "/" },
    { name: "Chairman", href: "/about" },
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
  ]

  const isEventsActive = eventsDropdown.some(item => isActive(item.href))
  const isInfoActive = infoDropdown.some(item => isActive(item.href))

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-x flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Image
              src="/logo.png"
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
              className={`font-medium hover:underline underline-offset-4 transition-all px-2 py-1 rounded ${
                isActive(item.href)
                  ? 'bg-[#1C2B78] text-white'
                  : 'text-primary hover:text-primary'
              }`}
              onClick={() => setOpenDropdown(null)}
            >
              {item.name}
            </a>
          ))}

          {/* Events & Updates dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownEnter("events")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`inline-flex items-center gap-1 font-medium hover:underline underline-offset-4 px-2 py-1 rounded transition-colors ${
                openDropdown === "events" || isEventsActive
                  ? 'bg-[#1C2B78] text-white'
                  : 'text-primary'
              }`}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "events"}
              onClick={() => setOpenDropdown(openDropdown === "events" ? null : "events")}
            >
              Events & Updates
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "events" ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            </button>
            {openDropdown === "events" && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl border border-gray-200 w-48 py-2 z-50"
                role="menu"
                aria-label="Events & Updates"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current)
                }}
                onMouseLeave={handleDropdownLeave}
              >
                {eventsDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    role="menuitem"
                    className={`block px-4 py-2 font-medium ${
                      isActive(item.href)
                        ? 'bg-[#1C2B78] text-white'
                        : 'text-primary hover:bg-gray-50'
                    }`}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      go(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Information dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownEnter("info")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`inline-flex items-center gap-1 font-medium hover:underline underline-offset-4 px-2 py-1 rounded transition-colors ${
                openDropdown === "info" || isInfoActive
                  ? 'bg-[#1C2B78] text-white'
                  : 'text-primary'
              }`}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "info"}
              onClick={() => setOpenDropdown(openDropdown === "info" ? null : "info")}
            >
              Information
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "info" ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            </button>
            {openDropdown === "info" && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl border border-gray-200 w-64 py-2 z-50"
                role="menu"
                aria-label="Information"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current)
                }}
                onMouseLeave={handleDropdownLeave}
              >
                {infoDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    role="menuitem"
                    className={`block px-4 py-2 font-medium ${
                      isActive(item.href)
                        ? 'bg-[#1C2B78] text-white'
                        : 'text-primary hover:bg-gray-50'
                    }`}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      go(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/contact"
            className={`font-medium hover:underline underline-offset-4 transition-all px-2 py-1 rounded ${
              isActive("/contact")
                ? 'bg-[#1C2B78] text-white'
                : 'text-primary hover:text-primary'
            }`}
            onClick={() => setOpenDropdown(null)}
          >
            Contact
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
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-x py-4 space-y-3">
            {baseItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block font-medium py-2 px-3 rounded ${
                  isActive(item.href)
                    ? 'bg-[#1C2B78] text-white'
                    : 'text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <details className="group border rounded-lg">
              <summary
                className={`flex justify-between items-center py-2 px-3 cursor-pointer font-medium rounded ${
                  isEventsActive ? 'bg-[#1C2B78] text-white' : 'text-primary'
                }`}
              >
                Events & Updates
                <span className="group-open:rotate-180 transition-transform">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="pl-4 pb-2 space-y-2">
                {eventsDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block py-1 px-2 rounded ${
                      isActive(item.href)
                        ? 'bg-[#1C2B78] text-white font-medium'
                        : 'text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </details>

            <details className="group border rounded-lg">
              <summary
                className={`flex justify-between items-center py-2 px-3 cursor-pointer font-medium rounded ${
                  isInfoActive ? 'bg-[#1C2B78] text-white' : 'text-primary'
                }`}
              >
                Information
                <span className="group-open:rotate-180 transition-transform">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="pl-4 pb-2 space-y-2">
                {infoDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block py-1 px-2 rounded ${
                      isActive(item.href)
                        ? 'bg-[#1C2B78] text-white font-medium'
                        : 'text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </details>

            <a
              href="/contact"
              className={`block font-medium py-2 px-3 rounded ${
                isActive("/contact")
                  ? 'bg-[#1C2B78] text-white'
                  : 'text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}