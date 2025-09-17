"use client"
import { useState } from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MapPin, Camera, Calendar, Star, Clock, Phone, Search, X, Filter } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function TourismPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const attractions = [
    {
      name: "Mannar Fort",
      description:
        "Historic Portuguese and Dutch fort built in 1560, offering panoramic views of the coastline and rich colonial history.",
      category: "Historical Site",
      rating: 4.5,
      image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
    },
    {
      name: "Adam's Bridge (Rama Setu)",
      description:
        "Legendary chain of limestone shoals connecting Mannar Island to Pamban Island in India, steeped in mythology and natural beauty.",
      category: "Natural Wonder",
      rating: 4.8,
      image: "/adams-bridge-rama-setu-mannar-natural-limestone-fo.jpg",
    },
    {
      name: "Mannar Island",
      description:
        "Pristine island paradise with beautiful beaches, diverse wildlife, and traditional fishing communities.",
      category: "Natural Beauty",
      rating: 4.6,
      image: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
    },
    {
      name: "Baobab Tree",
      description:
        "Ancient African baobab trees, unique to this region in Sri Lanka, creating a distinctive landscape.",
      category: "Natural Wonder",
      rating: 4.3,
      image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
    },
    {
      name: "St. Sebastian's Church",
      description:
        "Beautiful Catholic church showcasing colonial architecture and serving as an important pilgrimage site.",
      category: "Religious Site",
      rating: 4.4,
      image: "/st-sebastian-church-mannar-catholic-colonial-archi.jpg",
    },
    {
      name: "Mannar Lighthouse",
      description:
        "Historic lighthouse offering spectacular views of the surrounding waters and serving as a maritime landmark.",
      category: "Historical Site",
      rating: 4.2,
      image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
    },
  ];

  const events = [
    {
      name: "Mannar Cultural Festival",
      date: "March 15-17, 2024",
      description: "Annual celebration of local culture, music, dance, and traditional crafts",
    },
    {
      name: "Fishing Festival",
      date: "July 20-22, 2024",
      description: "Celebration of maritime heritage with boat races, seafood, and cultural performances",
    },
    {
      name: "Heritage Walk",
      date: "Every Saturday",
      description: "Guided tours through historic sites and cultural landmarks",
    },
  ];

  const categories = [
    "Historical Site",
    "Natural Wonder",
    "Natural Beauty",
    "Religious Site",
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setPage(1);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setTimeFilter("all");
    setPage(1);
  };

  // Filter attractions based on search term and selected categories
  const filteredAttractions = attractions.filter((attraction) => {
    const matchesSearch =
      attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attraction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attraction.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(attraction.category);

    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredAttractions.length / itemsPerPage);
  const paginatedAttractions = filteredAttractions.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "Tourism" }]} />

        {/* Hero Section */}
        <section className="section-x relative from-primary">
          <div className="absolute inset-0">
            <img
              src="/mannar-island-beaches-sri-lanka-pristine-coastline.jpg"
              alt="Mannar scenic landscape"
              className="w-full h-full object-cover opacity-200"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
          </div>
          <div className="container-x relative text-center z-10">
            <MapPin className="w-16 h-16 text-white mx-auto mb-4" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Discover Mannar</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Explore Mannar's rich cultural heritage, beautiful landscapes, and vibrant festivals. Find local
              attractions, maps, and event highlights to plan your perfect visit.
            </p>
          </div>
        </section>

        {/* Search & Filter Section - Sticky */}
        <section className="sticky top-16 z-10 bg-white shadow-sm py-6">
          <div className="container-x">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-2/5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search attractions by name, category, or description..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-shadow"
                  aria-label="Search attractions"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                {/* Time Filter */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2.5">
                  <span className="text-gray-700 font-medium whitespace-nowrap">Sort By:</span>
                  <select
                    value={timeFilter}
                    onChange={(e) => {
                      setTimeFilter(e.target.value);
                      setPage(1);
                    }}
                    className="bg-transparent border-none focus:ring-0 focus:outline-none"
                    aria-label="Sort attractions"
                  >
                    <option value="all">Default</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium"
                  aria-expanded={showFilters}
                  aria-controls="category-filters"
                >
                  <Filter className="w-5 h-5" aria-hidden="true" />
                  <span>Categories</span>
                  {selectedCategories.length > 0 && (
                    <span className="bg-primary text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                      {selectedCategories.length}
                    </span>
                  )}
                </button>

                {/* Clear Filters */}
                {(searchTerm || selectedCategories.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-primary transition-colors font-medium"
                    aria-label="Clear all filters"
                  >
                    <X className="w-5 h-5" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            {showFilters && (
              <div id="category-filters" className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all ${
                        selectedCategories.includes(category)
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      aria-pressed={selectedCategories.includes(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Tourist Attractions */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Top Attractions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the must-visit destinations that showcase Mannar's unique blend of history, culture, and
                natural beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedAttractions.map((attraction, index) => (
                <div
                  key={index}
                  className="card-x overflow-hidden group hover:shadow-lg transition-all duration-300"
                  role="article"
                >
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {attraction.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                        <span className="text-sm font-medium">{attraction.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{attraction.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-lg bg-primary text-white disabled:opacity-50"
                  aria-label="Previous page"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-4 py-2 rounded-lg ${
                      page === p ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    aria-current={page === p ? "page" : undefined}
                    aria-label={`Page ${p}`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-lg bg-primary text-white disabled:opacity-50"
                  aria-label="Next page"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Cultural Events */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Cultural Events & Festivals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the vibrant culture of Mannar through our regular events and annual festivals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="card-x" role="article">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{event.name}</h3>
                      <p className="text-sm text-primary">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="section-x">
          <div className="container-x">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Visitor Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Best Time to Visit</h3>
                      <p className="text-gray-600 text-sm">
                        November to March offers the most pleasant weather with cool breezes and minimal rainfall.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Getting Around</h3>
                      <p className="text-gray-600 text-sm">
                        Local buses, tuk-tuks, and bicycle rentals are available. Many attractions are within walking
                        distance of the town center.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Camera className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Photography</h3>
                      <p className="text-gray-600 text-sm">
                        Sunrise and sunset offer the best lighting for photography, especially at the fort and
                        lighthouse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Tourism Office</h2>
                <div className="card-x">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-medium">Tourism Information Center</p>
                        <p className="text-gray-600">+94 23 223 5681</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">Near Mannar Fort, Main Street</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Office Hours</h4>
                      <p className="text-primary text-sm">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-primary text-sm">Sunday: 9:00 AM - 1:00 PM</p>
                    </div>
                    <div className="mt-4">
                      <a
                        href="/info/tourism/map"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                        aria-label="Download tourist map"
                      >
                        Download Tourist Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}