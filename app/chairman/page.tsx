"use client"

import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ChairmanPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[70vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/Group1.png')",
        }}
      >
        {/* Parallax and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent parallax-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-6 animate-fade-in">
            Balen Shah
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto md:mx-0 mb-8 animate-slide-up">
            Leader in sustainable development, transparency, and community-driven governance.
          </p>
          <Link href="#contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 animate-pulse-slow">
            Get Involved <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Card */}
      <div className="relative -mt-24 max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 z-10 transform transition-all duration-300 hover:shadow-3xl">
        {/* Who is Balen */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C6A] mb-6">Who is Balen?</h2>
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
            Balen Shah is a prominent figure in Nepal known for his work as an engineer, rapper, and politician. His leadership focuses on sustainable development, transparency, and community-driven governance.
          </p>
        </div>

        {/* Academics & Qualifications */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="flex justify-center md:justify-end">
            <img
              src="/municipal-council-logo-emblem.jpg"
              alt="Academic emblem"
              className="rounded-xl shadow-lg w-full md:w-[85%] object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C6A] mb-6">Academics & Qualifications</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C6A] mb-6 text-center md:text-left">Honours, Awards & Publications</h2>
            <ul className="space-y-6 text-gray-700 list-disc list-inside">
              <li>
                <span className="font-semibold text-lg">Master of Science (M.Sc.) in Mechanical Engineering (Production Technology)</span>
                <p className="text-sm text-gray-500 mt-1">Tribhuvan University, Kathmandu, Nepal</p>
              </li>
              <li>
                <span className="font-semibold text-lg">Bachelor of Engineering (B.E.) in Civil Engineering</span>
                <p className="text-sm text-gray-500 mt-1">Institute of Engineering, Pulchowk Campus, Tribhuvan University, Nepal</p>
              </li>
              <li>
                <span className="font-semibold text-lg">Certificate in Senior Management</span>
                <p className="text-sm text-gray-500 mt-1">Nepal Engineering Council, Kathmandu, Nepal</p>
              </li>
              <li>
                <span className="font-semibold text-lg">Certificate in Standardization & Quality Control</span>
                <p className="text-sm text-gray-500 mt-1">Nepal Bureau of Standards and Metrology, Lalitpur, Nepal</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/municipal-council-logo-emblem.jpg"
              alt="Award photo"
              className="rounded-xl shadow-lg w-full md:w-[85%] object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
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