import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Download, FileText } from "lucide-react"

export default function FormsPage() {
  const forms = [
    { id: "birth", name: "Birth Certificate Application", file: "/placeholder.pdf" },
    { id: "marriage", name: "Marriage Certificate Application", file: "/placeholder.pdf" },
    { id: "death", name: "Death Certificate Application", file: "/placeholder.pdf" },
    { id: "br", name: "Business Registration", file: "/placeholder.pdf" },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <section className="section-x bg-gradient-to-br from-teal-600 to-teal-800">
          <div className="container-x text-center">
            <FileText className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download Forms</h1>
            <p className="text-teal-100 max-w-3xl mx-auto">Printable application forms and documents.</p>
          </div>
        </section>
        <section className="section-x">
          <div className="container-x grid md:grid-cols-2 gap-6">
            {forms.map((f) => (
              <a key={f.id} id={f.id} href={f.file} className="card-x flex items-center justify-between group">
                <span className="text-brand-blue font-medium">{f.name}</span>
                <Download className="w-5 h-5 text-brand-blue group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
