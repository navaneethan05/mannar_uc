import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function ChairmanPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[70vh] flex items-center"
        style={{
          backgroundImage:
            "url('/chairman-portrait-professional-municipal-leader.jpg')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Balen Shah
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Leader in sustainable development, transparency, and community-driven governance.
          </p>
        </div>
      </section>

      {/* Main Card */}
      <div className="relative -mt-32 w-full max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-8 sm:p-10 md:p-12 z-10 space-y-16">

        {/* Who is Balen */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0B2C6A] mb-4">Who is Balen?</h2>
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            Balen Shah is a prominent figure in Nepal known for his work as an engineer, rapper, and politician. His leadership focuses on sustainable development, transparency, and community-driven governance.
          </p>
        </div>

        {/* Academics & Qualifications */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-end">
            <img
              src="/municipal-council-logo-emblem.jpg"
              alt="Academic emblem"
              className="rounded-xl shadow-lg w-full md:w-[85%] object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C6A] mb-6">
              Academics & Qualifications
            </h2>
            <ul className="space-y-5 text-gray-700">
              <li>
                <p className="font-semibold text-lg">Master of Science (Mechanical Engineering, Production Technology)</p>
                <p className="text-sm text-gray-500">University of XYZ, Country</p>
              </li>
              <li>
                <p className="font-semibold text-lg">Certificate in Senior Management</p>
                <p className="text-sm text-gray-500">ABC Institute, Country</p>
              </li>
              <li>
                <p className="font-semibold text-lg">Certificate in Standardization & Quality Control</p>
                <p className="text-sm text-gray-500">DEF Organization, Country</p>
              </li>
              <li>
                <p className="font-semibold text-lg">Certificate in Natural Product Standards (RBS Standards & Technology)</p>
                <p className="text-sm text-gray-500">GHI University, Country</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Honours, Awards & Publications */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C6A] mb-6 text-center md:text-left">
              Honours, Awards & Publications
            </h2>
            <ul className="space-y-4 text-gray-700 list-disc list-inside text-sm md:text-base">
              <li><span className="font-semibold">Greater Good Award</span> – Mizani Africa, Nairobi, Kenya, May 2021</li>
              <li><span className="font-semibold">Doctor of Sciences (Honoris Causa)</span> – Jaramogi Oginga Odinga University of Science & Technology, Siaya, Kenya, Dec 2018</li>
              <li><span className="font-semibold">The Quest For Nationhood Roadmap To Our Future</span> – Nairobi: Mountaintop Publishers, 2017</li>
              <li><span className="font-semibold">HE FLAME OF FREEDOM</span> – Nairobi: Mountaintop Publishers, 2013</li>
              <li><span className="font-semibold">Doctorate of Leadership in Social Development (Honoris Causa)</span> – Limkokwing University, Kuala Lumpur, May 2012</li>
              <li><span className="font-semibold">Honorary Doctorate</span> – Florida Agricultural Mechanical University, USA, 2009</li>
              <li><span className="font-semibold">Doctor of Laws (LL.D) (Honoris Causa)</span> – University of Nairobi, Kenya, Oct 2008</li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/municipal-council-logo-emblem.jpg"
              alt="Award photo"
              className="rounded-xl shadow-lg w-full md:w-[85%] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
