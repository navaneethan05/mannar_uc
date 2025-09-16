"use client";

import {TopBar} from "@/components/top-bar";
import {Navigation} from "@/components/navigation";
import {ContactSection} from "@/components/contact-section";
import {Footer} from "@/components/footer";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function ChairmanPage() {
    return (
        <div className="min-h-screen bg-background">
            <TopBar />
            <Navigation />

            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center min-h-[70vh] flex items-center overflow-hidden"
                style={{
                    backgroundImage: "url('/hero.png')", // Use a relevant image of Balen or Kathmandu
                }}
            >
                {/* Parallax and Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent parallax-bg" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-right py-16 w-full flex justify-end">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-6 animate-fade-in-up">
                            Balen Shah
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in-up">
                            Engineer, Rapper, and Mayor of Kathmandu. Champion of urban reform and transparent
                            governance.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 animate-pulse-slow"
                        >
                            Get Involved <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Card */}
            <div className="relative -mt-24 max-w-7xl mx-auto bg-card shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 z-10 transform transition-all duration-300 hover:shadow-3xl">
                {/* Who is Balen */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Who is Balen?</h2>
                    <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-4xl mx-auto space-y-6 text-justify">
                        <p>
                            Balen Shah (Balendra Shah) is a prominent figure in Nepal, known for his roles as an
                            engineer, rapper, and politician. He gained widespread recognition as an independent
                            candidate and was elected the mayor of Kathmandu in May 2022. His unexpected victory,
                            without the backing of any political party, was a landmark event in Nepalese politics,
                            signaling a shift towards more independent leadership.
                        </p>
                        <p>
                            Before entering politics, Balen was already well-known in Nepal's hip-hop community as a
                            rapper and lyricist. He is also a civil engineer by profession. As mayor, he has been vocal
                            about issues like urban planning, waste management, and corruption, and has earned praise
                            for his straightforward approach to addressing challenges in the capital city.
                        </p>
                        <p>
                            Balen has also become a polarizing figure due to his unconventional style of governance and
                            willingness to challenge the status quo, which has sparked both admiration and criticism.
                        </p>
                    </div>
                </div>

                {/* Academics & Qualifications */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/balen-academic.png" // Use an image of Balen in academic setting or graduation
                            alt="Balen Shah - Engineer and Politician"
                            className="rounded-xl shadow-lg w-full md:w-[85%] object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Academics & Qualifications</h2>
                        <ul className="space-y-5 text-foreground/80">
                            <li>
                                <p className="font-semibold text-lg">
                                    Master of Science (Mechanical Engineering, Production Technology)
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Magdeburg Technical School & Otto-Von-Guericke University Magdeburg, Germany
                                </p>
                            </li>
                            <li>
                                <p className="font-semibold text-lg">Certificate in Senior Management</p>
                                <p className="text-sm text-muted-foreground">Kenya Institute of Management, Kenya</p>
                            </li>
                            <li>
                                <p className="font-semibold text-lg">
                                    Certificate in Standardization & Quality Control
                                </p>
                                <p className="text-sm text-muted-foreground">University of Denver, Colorado, USA</p>
                            </li>
                            <li>
                                <p className="font-semibold text-lg">
                                    Certificate in Establishment of Natural Physical Standards
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    National Bureau of Standards & Technology, Gaithersburg, MD, USA
                                </p>
                            </li>
                            <li>
                                <p className="font-semibold text-lg">Certificate in Standards Specification Writing</p>
                                <p className="text-sm text-muted-foreground">
                                    British Standards Institution (BSI Group)
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Honours, Awards & Publications */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center md:text-left">
                            Honours, Awards & Publications
                        </h2>
                        <ul className="space-y-6 text-foreground/80">
                            <li className="pb-3 border-b border-gray-100">
                                <span className="font-semibold text-lg">Greater Good Award</span>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Mazari Africa, Istanbul, Kenya, May 2021
                                </p>
                            </li>
                            <li className="pb-3 border-b border-gray-100">
                                <span className="font-semibold text-lg">Doctor Of Sciences (Honoris Causa)</span>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Jurumegh Opriga Obriga University of Science & Technology, Siyap, Kenya, December
                                    2010
                                </p>
                            </li>
                            <li className="pb-3 border-b border-gray-100">
                                <span className="font-semibold text-lg">
                                    The Quest For Nationhood Roadmap To Our Future
                                </span>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Nairobi Mountainsho Publishers, 2017
                                </p>
                            </li>
                            <li className="pb-3 border-b border-gray-100">
                                <span className="font-semibold text-lg">The Flame of Freedom</span>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Nairobi Mountainsho Publishers, 2019
                                </p>
                            </li>
                            <li className="pb-3 border-b border-gray-100">
                                <span className="font-semibold text-lg">
                                    Doctorate of Leadership in Social Development (Honoris Causa)
                                </span>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Lambalong University of Creative Technology, Kuala Lumpur, July 2012
                                </p>
                            </li>
                            <li className="pb-3 border-b border-gray-100">
                                <span className="font-semibold text-lg">Honorary Doctorate</span>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Florida Agricultural Mechanical University, USA, 2009
                                </p>
                            </li>
                            <li>
                                <span className="font-semibold text-lg">Doctor of Laws (LLD) (Honoris Causa)</span>
                                <p className="text-sm text-muted-foreground mt-1">
                                    The University of Nairobi, Kenya, October 2008
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/balen-awards.png" // Use an image of Balen receiving awards or his publications
                            alt="Balen Shah's awards and publications"
                            className="rounded-xl shadow-lg w-full md:w-[85%] object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Additional Info Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                        Leadership & Impact
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">As Mayor of Kathmandu</h3>
                            <p className="text-foreground/80 mb-4">
                                Since being elected in 2022, Balen Shah has focused on critical urban issues including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                <li>Urban planning and development</li>
                                <li>Waste management solutions</li>
                                <li>Anti-corruption initiatives</li>
                                <li>Infrastructure improvement</li>
                                <li>Cultural preservation</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Cultural Influence</h3>
                            <p className="text-foreground/80">
                                Before entering politics, Balen was already well-known in Nepal's hip-hop community as a
                                rapper and lyricist. His music often addresses social issues, which aligns with his
                                political approach of challenging the status quo and advocating for transparency.
                            </p>
                            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                                <p className="text-foreground/80 italic">
                                    "Balen has become a polarizing figure due to his unconventional style of governance
                                    and willingness to challenge established systems, sparking both admiration and
                                    criticism."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}
