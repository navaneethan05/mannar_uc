"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Chairman", href: "/chairman" },
    { name: "Events", href: "/events" },
    { name: "Info", href: "/info" },
    { name: "Contact Us", href: "/contact" },
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
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary font-medium hover:underline underline-offset-4 transition-all"
            >
              {item.name}
            </a>
          ))}
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
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-primary font-medium py-2 hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
