import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" }, // Updated to link to dedicated About Us page
    { name: "Services", href: "#info" },
    { name: "Events", href: "#events" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Sitemap", href: "#sitemap" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#facebook" },
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "YouTube", icon: Youtube, href: "#youtube" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-x">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Mannar Urban Council</h3> {/* Updated council name */}
              <p className="text-primary-foreground/80 leading-7 mb-4">
                Serving the vibrant community of Mannar with transparency, efficiency, and dedication since 1987.
                Building a sustainable and prosperous future together through quality municipal services.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p>Mannar Urban Council</p> {/* Updated address to be more specific */}
                    <p>Main Street, Mannar 41000, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-primary-foreground/80">+94 23 223 5678</span> {/* Updated phone number */}
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-primary-foreground/80">info@mannaruc.gov.lk</span> {/* Updated email */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#082457] text-primary-foreground/70 py-4">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © 2024 Mannar Urban Council. All rights reserved. Built with dedication for our community.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#accessibility" className="hover:text-primary-foreground transition-colors">
                Accessibility
              </a>
              <span>|</span>
              <a href="#feedback" className="hover:text-primary-foreground transition-colors">
                Feedback
              </a>
              <span>|</span>
              <a href="#help" className="hover:text-primary-foreground transition-colors">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
