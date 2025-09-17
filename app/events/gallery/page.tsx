"use client";

import {useMemo, useState} from "react";
import {useRouter} from "next/navigation";
import {Camera, Calendar, MapPin, Users, Search, Filter, X, ChevronLeft, ChevronRight, ArrowRight} from "lucide-react";
import {TopBar} from "@/components/top-bar";
import {Navigation} from "@/components/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs"

import {Footer} from "@/components/footer";

type Photo = {
    id: string;
    title: string;
    dateLabel: string;
    dateISO: string;
    location: string;
    category: string;
    participants: string;
    image: string;
    description: string;
};

export default function GalleryPage() {
    const router = useRouter();
    const photos: Photo[] = [
        {
            id: "1",
            title: "Community Clean-up Drive 2024",
            dateLabel: "January 15, 2024",
            dateISO: "2024-01-15",
            location: "Central Park, Mannar",
            category: "Environment",
            participants: "200+ volunteers",
            image: "/community-cleanup-volunteers-park.jpg",
            description:
                "Annual community clean-up initiative bringing together residents for environmental conservation.",
        },
        {
            id: "2",
            title: "Youth Leadership Workshop",
            dateLabel: "January 10, 2024",
            dateISO: "2024-01-10",
            location: "Community Center",
            category: "Youth Programs",
            participants: "50 young leaders",
            image: "/youth-workshop-community-center.jpg",
            description: "Empowering young minds with leadership skills and civic responsibility training.",
        },
        {
            id: "3",
            title: "New Year Cultural Festival",
            dateLabel: "January 1, 2024",
            dateISO: "2024-01-01",
            location: "Town Square",
            category: "Public Events",
            participants: "1000+ attendees",
            image: "/cultural-festival-mannar-new-year-celebration.jpg",
            description: "Celebrating the New Year with traditional music, dance, and cultural performances.",
        },
        {
            id: "4",
            title: "Council Budget Meeting",
            dateLabel: "December 20, 2023",
            dateISO: "2023-12-20",
            location: "Council Chambers",
            category: "Council Ceremonies",
            participants: "Council members & public",
            image: "/public-meeting-council-chambers.jpg",
            description: "Annual budget presentation and public consultation meeting.",
        },
        {
            id: "5",
            title: "Senior Citizens Health Fair",
            dateLabel: "December 15, 2023",
            dateISO: "2023-12-15",
            location: "Municipal Hall",
            category: "Community Outreach",
            participants: "150 seniors",
            image: "/health-fair-senior-citizens.jpg",
            description: "Free health screenings and wellness programs for senior community members.",
        },
        {
            id: "6",
            title: "Tree Planting Campaign",
            dateLabel: "December 10, 2023",
            dateISO: "2023-12-10",
            location: "Various locations",
            category: "Environment",
            participants: "300+ volunteers",
            image: "/tree-planting-campaign-mannar-environmental-init.jpg",
            description: "Community-wide tree planting initiative to enhance green spaces and combat climate change.",
        },
        {
            id: "7",
            title: "Beach Restoration Project",
            dateLabel: "November 25, 2023",
            dateISO: "2023-11-25",
            location: "Mannar Beach",
            category: "Environment",
            participants: "150+ volunteers",
            image: "/beach-restoration-project.jpg",
            description: "Community effort to restore and preserve the beautiful beaches of Mannar.",
        },
        {
            id: "8",
            title: "Annual Sports Festival",
            dateLabel: "November 15, 2023",
            dateISO: "2023-11-15",
            location: "City Stadium",
            category: "Public Events",
            participants: "500+ participants",
            image: "/sports-festival.jpg",
            description: "Annual sports competition featuring various games and activities for all ages.",
        },
        {
            id: "9",
            title: "Local Business Expo",
            dateLabel: "October 30, 2023",
            dateISO: "2023-10-30",
            location: "Convention Center",
            category: "Business",
            participants: "75+ local businesses",
            image: "/business-expo.jpg",
            description: "Showcasing local businesses and entrepreneurs to promote economic growth.",
        },
    ];

    // Extract unique categories
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(photos.map((photo) => photo.category)));
        return uniqueCategories;
    }, [photos]);

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<"latest" | "oldest">("latest");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const pageSize = 6;

    const filteredAndSorted = useMemo(() => {
        // Filter by search and categories
        const filtered = photos.filter((photo) => {
            const matchesSearch =
                search === "" ||
                photo.title.toLowerCase().includes(search.toLowerCase()) ||
                photo.location.toLowerCase().includes(search.toLowerCase()) ||
                photo.category.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(photo.category);

            return matchesSearch && matchesCategory;
        });

        // Sort
        filtered.sort((a, b) =>
            sort === "latest" ? b.dateISO.localeCompare(a.dateISO) : a.dateISO.localeCompare(b.dateISO)
        );
        return filtered;
    }, [search, sort, selectedCategories, photos]);

    const totalPages = Math.ceil(filteredAndSorted.length / pageSize);
    const start = (page - 1) * pageSize;
    const visiblePhotos = filteredAndSorted.slice(start, start + pageSize);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
        setPage(1);
    };

    const clearFilters = () => {
        setSearch("");
        setSelectedCategories([]);
        setPage(1);
    };

    const handlePhotoClick = (id: string) => {
        router.push(`/events/${id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation */}
            <TopBar />
            <Navigation />

            {/* Breadcrumbs */}
            {/* <div className="container mx-auto px-4 py-4">
                <div className="flex items-center text-sm text-gray-500">
                    <a href="#" className="hover:text-[oklch(0.2_0.08_250)]">
                        Home
                    </a>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <a href="#" className="hover:text-[oklch(0.2_0.08_250)]">
                        Events
                    </a>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-gray-700">Gallery</span>
                </div>
            </div> */}
             <Breadcrumbs
                        items={[
                          { label: "Home", href: "/" },
                          { label: "Events", href: "/events" },
                          { label: "Gallery" },
                        ]}
                      />

            {/* Hero Section with HD Background */}
            <section
                className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-[oklch(0.2_0.08_250)]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Camera className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Gallery</h1>
                    <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                        Explore moments from Mannar's vibrant community events and initiatives.
                    </p>
                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="sticky top-16 z-10 bg-white shadow-sm py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-2/5">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search events by title, location, or category..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[oklch(0.2_0.08_250)] focus:border-[oklch(0.2_0.08_250)] focus:outline-none"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                            {/* Sort */}
                            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2.5">
                                <span className="text-gray-700 font-medium whitespace-nowrap">Sort by:</span>
                                <select
                                    value={sort}
                                    onChange={(e) => {
                                        setSort(e.target.value as "latest" | "oldest");
                                        setPage(1);
                                    }}
                                    className="bg-transparent border-none focus:ring-0 focus:outline-none"
                                >
                                    <option value="latest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                </select>
                            </div>

                            {/* Filter Toggle */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-2.5 bg-[oklch(0.2_0.08_250)]/10 hover:bg-[oklch(0.2_0.08_250)]/20 text-[oklch(0.2_0.08_250)] rounded-lg transition-colors font-medium"
                            >
                                <Filter className="w-5 h-5" />
                                <span>Filters</span>
                                {selectedCategories.length > 0 && (
                                    <span className="bg-[oklch(0.2_0.08_250)] text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                                        {selectedCategories.length}
                                    </span>
                                )}
                            </button>

                            {/* Clear Filters */}
                            {(search || selectedCategories.length > 0) && (
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-[oklch(0.2_0.08_250)] transition-colors font-medium"
                                >
                                    <X className="w-5 h-5" />
                                    <span>Clear All</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filters */}
                    {showFilters && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-medium text-gray-700 mb-4">Filter by Category</h3>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => toggleCategory(category)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all ${
                                            selectedCategories.includes(category)
                                                ? "bg-[oklch(0.2_0.08_250)] text-white shadow-md"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    {/* Results Count */}
                    <div className="mb-8 flex justify-between items-center">
                        <p className="text-gray-600">
                            Showing {visiblePhotos.length} of {filteredAndSorted.length} events
                        </p>
                    </div>

                    {visiblePhotos.length === 0 ? (
                        <div className="text-center py-16">
                            <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-700 mb-2">No events found</h3>
                            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                            <button
                                onClick={clearFilters}
                                className="px-6 py-3 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.2_0.08_250)]/90 transition-colors font-medium"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {visiblePhotos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
                                    onClick={() => handlePhotoClick(photo.id)}
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <div
                                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                            style={{
                                                backgroundImage: `url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80)`,
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                                                <span className="inline-block px-3 py-1.5 bg-[oklch(0.2_0.08_250)] text-white rounded-full text-sm font-medium">
                                                    {photo.category}
                                                </span>
                                                <div className="flex items-center gap-2 text-white text-sm font-medium">
                                                    View Details
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-gray-500 mb-3">
                                            <Calendar className="w-5 h-5" />
                                            <span>{photo.dateLabel}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-[oklch(0.2_0.08_250)] transition-colors">
                                            {photo.title}
                                        </h3>
                                        <p className="text-gray-600 mb-5 line-clamp-2">{photo.description}</p>
                                        <div className="space-y-2 text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-5 h-5" />
                                                <span className="truncate">{photo.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-5 h-5" />
                                                <span>{photo.participants}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-3 mt-16">
                            <button
                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                                disabled={page === 1}
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Previous
                            </button>

                            <div className="flex gap-2">
                                {Array.from({length: totalPages}, (_, i) => i + 1).map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setPage(p)}
                                        className={`px-4 py-2 rounded-lg border font-medium ${
                                            p === page
                                                ? "bg-[oklch(0.2_0.08_250)] text-white border-[oklch(0.2_0.08_250)] shadow-md"
                                                : "border-gray-300 hover:bg-gray-50"
                                        }`}
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>

                            <button
                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                                disabled={page === totalPages}
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            >
                                Next
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
          

            {/* Footer */}
            <Footer />
        </div>
    );
}
