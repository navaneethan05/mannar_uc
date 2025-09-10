export type EventItem = {
  id: number
  title: string
  slug: string
  date: string
  time: string
  location: string
  image?: string
  description: string
}

export const events: EventItem[] = [
  {
    id: 1,
    title: "Community Clean-Up Drive",
    slug: "community-clean-up-drive",
    date: "March 15, 2024",
    time: "8:00 AM",
    location: "Central Park",
    image: "/community-cleanup-volunteers-park.jpg",
    description:
      "Join us for our monthly community clean-up initiative to keep our neighborhoods beautiful and sustainable.",
  },
  {
    id: 2,
    title: "Public Budget Meeting",
    slug: "public-budget-meeting",
    date: "March 20, 2024",
    time: "7:00 PM",
    location: "Council Chambers",
    image: "/public-meeting-council-chambers.jpg",
    description:
      "Annual budget presentation and public consultation session. Your input matters for our community's future.",
  },
  {
    id: 3,
    title: "Youth Development Workshop",
    slug: "youth-development-workshop",
    date: "March 25, 2024",
    time: "2:00 PM",
    location: "Community Center",
    image: "/youth-workshop-community-center.jpg",
    description: "Skills development and career guidance workshop for young residents aged 16-25.",
  },
  {
    id: 4,
    title: "Senior Citizens Health Fair",
    slug: "senior-citizens-health-fair",
    date: "March 30, 2024",
    time: "10:00 AM",
    location: "Municipal Hall",
    image: "/health-fair-senior-citizens.jpg",
    description:
      "Free health screenings, wellness consultations, and health education for our senior community members.",
  },
]
