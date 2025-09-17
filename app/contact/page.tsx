"use client";
import React, { useState, useMemo } from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Search,
  Filter,
  Mail,
  Phone,
  MapPin,
  Download,
  User,
  ChevronDown,
  X,
  Building,
  Printer,
  Copy as CopyIcon,
} from "lucide-react";

// Contact data with profile field added
const CONTACT_DATA = {
  main: {
    address: "58, Sir Ernest De Silva Mawatha, Colombo 07",
    tel: "+94 11 2575317 / 18, +94 11 2370737 / 38",
    fax: "+94 11 2575310, +94 11 2574713",
    email: "info@pmoffice.gov.lk",
  },
  divisions: [
    {
      title: "Secretary Bureau",
      items: [
        {
          name: "Mr. G. Pradeep Saputhanthri",
          position: "Secretary to the Prime Minister",
          salary: "SL 4",
          tel: "+94 11 2575311",
          fax: "+94 11 2575310",
          email: "secpm@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Ms. N.Y. Kohowala",
          position: "Senior Assistant Secretary",
          salary: "SL 1",
          tel: "+94 11 2575317",
          fax: "+94 11 2575310",
          email: "nalinikohowala@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. Mihiri U. Thennakoon",
          position: "Assistant Secretary",
          salary: "SL 1",
          tel: "+94 11 2575317",
          fax: "+94 11 2575310",
          email: "mihirias.sb@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Admin Division",
      items: [
        {
          name: "Mr. J.M.I.R.K. Jayasundara",
          position: "Additional Secretary (Admin)",
          salary: "SL 1",
          tel: "+94 11 2370955",
          fax: "+94 11 2574713",
          email: "rkj@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. K.W.L. Atigala",
          position: "Senior Assistant Secretary (HR & Admin)",
          salary: "SL 1",
          tel: "+94 11 2576483",
          fax: "+94 11 2575312",
          email: "atigala@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. H. S. A. Sankalpana",
          position: "Assistant Secretary (Admin I)",
          salary: "SL 1",
          tel: "+94 11 2372116",
          fax: "+94 11 2574713",
          email: "sankalpana@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Ms. A.M.L. Ranaweera",
          position: "Assistant Secretary (Admin II)",
          salary: "SL 1",
          tel: "+94 11 2564033",
          fax: "+94 11 2574713",
          email: "lakmali@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. K.A.S. Sripali",
          position: "Administrative Officer (Admin I)",
          salary: "MN 7",
          tel: "+94 11 2372736",
          fax: "+94 11 2574713",
          email: "sashikasripaliao@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Development Division I",
      items: [
        {
          name: "Ms. B.W.G.C. Sagarika Bogahawatta",
          position: "Additional Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354750 Ext:4209",
          fax: "+94 11 4354723",
          email: "sagarika@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Ms. H.D.D.C.P.K. Thilakaratne",
          position: "Senior Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354731",
          fax: "+94 11 4354784",
          email: "deshini@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. P.H.P.I. Bandara",
          position: "Senior Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354789",
          fax: "+94 11 4354789",
          email: "piyumee@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mr. M.H.A.N. Riflan",
          position: "Senior Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "-",
          fax: "-",
          email: "-",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. A.T. Ekanayake",
          position: "Director (Planning)",
          salary: "SL 1",
          tel: "+94 11 7124405",
          fax: "+94 11 7124416",
          email: "anujaekanayake@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. M.N.S. Perera",
          position: "Deputy Director (Planning)",
          salary: "SL 1",
          tel: "-",
          fax: "-",
          email: "nilusha@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. D.M.J.K. Dissanayaka",
          position: "Deputy Director (Development)",
          salary: "SL 1",
          tel: "-",
          fax: "-",
          email: "jayanthi@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. F.A.F. Farzana",
          position: "Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 7124407",
          fax: "+94 11 7124416",
          email: "fathi@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. S.U.A. Weerasinghe",
          position: "Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354749",
          fax: "+94 11 4354784",
          email: "udari@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. I.H. Poornima Nirmani",
          position: "Assistant Director (Planning)",
          salary: "SL 1",
          tel: "+94 11 7124408",
          fax: "+94 11 7124416",
          email: "nirmani@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Development Division II",
      items: [
        {
          name: "Mr. A.B.M. Ashraff",
          position: "Additional Secretary (Development II)",
          salary: "SL 1",
          tel: "+94 11 2370955 Ext:116",
          fax: "+94 11 2574713",
          email: "ashraff@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Ms. R.P.M.S. Rajapakshe",
          position: "Senior Assistant Secretary (Parliament Affairs)",
          salary: "SL 1",
          tel: "+94 11 2564449",
          fax: "+94 11 2577105",
          email: "manjularajapakshe@gmail.com",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. M.H.A. Karunathilaka",
          position: "Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354754 (4293)",
          fax: "+94 11 7124416",
          email: "amanda@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Accounts Division",
      items: [
        {
          name: "Mr. Y.M.S. Gunasekera",
          position: "Chief Financial Officer",
          salary: "SL 3",
          tel: "+94 11 2575314",
          fax: "+94 11 2574411",
          email: "gunesekara@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mr. M.M.J.R.N. Fernando",
          position: "Chief Accountant",
          salary: "SL 1",
          tel: "+94 11 2576071",
          fax: "+94 11 2574411",
          email: "nilantha@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Public Relations Division",
      items: [
        {
          name: "Mr. D.N. Nanayakkara",
          position: "Additional Secretary (Public Relations)",
          salary: "SL 3",
          tel: "+94 11 4354701 Ext:4460",
          fax: "-",
          email: "nanayakkara@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. S.T. Sirimanna",
          position: "Senior Assistant Secretary (Public Relations)",
          salary: "SL 1",
          tel: "+94 11 4354702 Ext:4461",
          fax: "-",
          email: "surani@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Ms. G.C.D.R. Fernando",
          position: "Assistant Secretary (Public Relations)",
          salary: "SL 1",
          tel: "+94 11 4354703 Ext:4462",
          fax: "-",
          email: "dulanjali@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mr. N.W.S.R. Chandana",
          position: "Administrative Officer (Public Relations)",
          salary: "MN 7",
          tel: "+94 11 4354704 Ext:4463",
          fax: "-",
          email: "r_chandana@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "ICT Division",
      items: [
        {
          name: "Mr. G.V.D. Priyantha",
          position: "Director (ICT)",
          salary: "SL 1",
          tel: "+94 11 4354754 / +94 11 4354854",
          fax: "+94 11 2575310 (Attn: Priyantha)",
          email: "gvdpriyantha@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mr. K.M. Inaamul Hassan",
          position: "Assistant Director (ICT)",
          salary: "SL 1",
          tel: "+94 11 4354818",
          fax: "+94 11 2575310 (Attn: Hassan)",
          email: "hassan@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Ms. W.G.D.P.C. Wijesinghe",
          position: "ICT Officer",
          salary: "MN 6",
          tel: "+94 11 2575310",
          fax: "+94 11 2575318",
          email: "pubuduni@pmoffice.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Media & Communication Division",
      items: [
        {
          name: "Mrs. S. Vijitha Basnayake",
          position: "Media Secretary",
          salary: "-",
          tel: "+94 11 4354754 / +94 11 2334157",
          fax: "+94 11 2393809",
          email: "vijitha.sribahavan@gmail.com",
          profile: "/images.jfif",
        },
        {
          name: "Mr. N.M. Nilantha Adikari",
          position: "Assistant Director (Communications)",
          salary: "-",
          tel: "-",
          fax: "-",
          email: "-",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. R.P. Anusha Manel Gunathilaka",
          position: "Assistant Director (Foreign Media)",
          salary: "-",
          tel: "-",
          fax: "-",
          email: "-",
          profile: "/images.jfif",
        },
        {
          name: "Mr. W. R. A. Nisanka",
          position: "Assistant Director (New Media)",
          salary: "-",
          tel: "-",
          fax: "-",
          email: "-",
          profile: "/images.jfif",
        },
        {
          name: "W. A. D. R. P. K. Wickramarachchi",
          position: "Assistant Director (New Media)",
          salary: "-",
          tel: "-",
          fax: "-",
          email: "-",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. K. Indiradevi",
          position: "Administrative Officer (Media)",
          salary: "MN 7",
          tel: "+94 11 7124400",
          fax: "+94 11 2393809",
          email: "-",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Internal Audit Division",
      items: [
        {
          name: "Mrs. K. Parthipan",
          position: "Chief Internal Auditor",
          salary: "SL 1",
          tel: "+94 11 4354785",
          fax: "+94 11 2575310",
          email: "kugan2177@gmail.com",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Translators",
      items: [
        {
          name: "Ms. K.A.T.R. Kandepeliarachchi",
          position: "Translator S/E",
          salary: "MN 6",
          tel: "-",
          fax: "-",
          email: "-",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Private Staffs of the Hon Prime Minister",
      items: [
        {
          name: "Mrs. A.L.S.C. Perera",
          position: "Private Secretary to the Hon Prime Minister",
          salary: "-",
          tel: "+94 11 2370954",
          fax: "-",
          email: "shyamalie961@gmail.com",
          profile: "/images.jfif",
        },
      ],
    },
  ],
};

// Function to generate consistent avatar based on name (used as fallback)
const generateAvatar = (name: string, backgroundColor = "1e40af", foregroundColor = "ffffff") => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return `https://placehold.co/128x128/${backgroundColor}/${foregroundColor}?text=${encodeURIComponent(initials)}`;
};

// Profile Card Component
function ProfileCard({ person, onEmailClick, onPhoneClick }: { person: any; onEmailClick: (email: string) => void; onPhoneClick: (phone: string) => void }) {
  const [hasProfileImage, setHasProfileImage] = useState(!!person.profile);
  const avatarUrl = generateAvatar(person.name, "1e40af", "ffffff");

  return (
    <div className="bg-card rounded-xl shadow-sm p-5 border border-border hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center">
            {hasProfileImage ? (
              <img
                src={person.profile}
                alt={person.name}
                className="w-full h-full object-cover"
                onError={() => setHasProfileImage(false)}
              />
            ) : (
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                {person.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{person.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{person.position}</p>
          {person.salary && person.salary !== "-" && (
            <span className="inline-block mt-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {person.salary}
            </span>
          )}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {person.tel && person.tel !== "-" && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="w-4 h-4 mr-2 text-primary" />
            <a
              href={`tel:${person.tel.replace(/\s+/g, "")}`}
              className="hover:text-primary hover:underline truncate"
              onClick={(e) => {
                e.preventDefault();
                onPhoneClick(person.tel);
              }}
            >
              {person.tel}
            </a>
          </div>
        )}
        {person.fax && person.fax !== "-" && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Printer className="w-4 h-4 mr-2 text-primary" />
            <span>{person.fax}</span>
          </div>
        )}
        {person.email && person.email !== "-" && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="w-4 h-4 mr-2 text-primary" />
            <a
              href={`mailto:${person.email}`}
              className="hover:text-primary hover:underline truncate"
              onClick={(e) => {
                e.preventDefault();
                onEmailClick(person.email);
              }}
            >
              {person.email}
            </a>
          </div>
        )}
      </div>
      <div className="mt-4 pt-3 border-t border-border flex justify-between">
        <button
          className="text-xs text-primary hover:text-primary/80 flex items-center"
          onClick={() => {
            navigator.clipboard.writeText(`
              ${person.name}
              ${person.position}
              Tel: ${person.tel}
              Email: ${person.email}
            `.trim());
          }}
        >
          <CopyIcon className="w-3 h-3 mr-1" /> Copy
        </button>
        <button
          className="text-xs text-primary hover:text-primary/80 flex items-center"
          onClick={() => onEmailClick(person.email)}
        >
          <Mail className="w-3 h-3 mr-1" /> Email
        </button>
      </div>
    </div>
  );
}

// Division Section Component
function DivisionSection({ division, searchTerm, onEmailClick, onPhoneClick }: { division: any; searchTerm: string; onEmailClick: (email: string) => void; onPhoneClick: (phone: string) => void }) {
  const filteredItems = division.items.filter(
    (person: any) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (person.tel && person.tel.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (person.email && person.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  if (filteredItems.length === 0) return null;
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <h3 className="text-2xl font-bold text-foreground">{division.title}</h3>
        </div>
        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
          {filteredItems.length} contact{filteredItems.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((person: any, idx: number) => (
          <ProfileCard
            key={idx}
            person={person}
            onEmailClick={onEmailClick}
            onPhoneClick={onPhoneClick}
          />
        ))}
      </div>
    </section>
  );
}

export default function ContactPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Define primary color
  const primaryColor = "oklch(0.2 0.08 250)";

  // Extract all divisions for filter
  const divisionsList = useMemo(() => {
    return CONTACT_DATA.divisions.map((div) => div.title);
  }, []);

  // Show toast notification
  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Handle email click
  const handleEmailClick = (email: string) => {
    if (email && email !== "-") {
      window.location.href = `mailto:${email}`;
    } else {
      showToastMessage("No email address available");
    }
  };

  // Handle phone click
  const handlePhoneClick = (phone: string) => {
    if (phone && phone !== "-") {
      window.location.href = `tel:${phone.replace(/\s+/g, "")}`;
    } else {
      showToastMessage("No phone number available");
    }
  };

  // Filter divisions based on selection
  const filteredDivisions = useMemo(() => {
    if (selectedDivision === "all") return CONTACT_DATA.divisions;
    return CONTACT_DATA.divisions.filter((div) => div.title === selectedDivision);
  }, [selectedDivision]);

  // Generate CSV data
  const generateCSV = () => {
    const headers = "Name,Position,Salary,Telephone,Fax,Email,Division\n";
    const rows = CONTACT_DATA.divisions
      .flatMap((division) =>
        division.items.map(
          (person: any) =>
            `"${person.name}","${person.position}","${person.salary || ""}","${person.tel || ""}","${person.fax || ""}","${person.email || ""}","${division.title}"`
        )
      )
      .join("\n");
    return headers + rows;
  };

  // Download CSV
  const downloadCSV = () => {
    const csvData = generateCSV();
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "pm-office-contacts.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToastMessage("Directory downloaded as CSV");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        :root {
          --primary: ${primaryColor};
        }
      `}</style>
      <TopBar />
      <Navigation />
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center animate-fadeIn">
          <span>{toastMessage}</span>
          <button
            className="ml-4 text-green-800 hover:text-green-900"
            onClick={() => setShowToast(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <main className="py-8">
        <div className="container-x">
          {/* Header Section */}
          <header className="rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 shadow-lg">
            <div className="max-w-4xl">
              <h1 className="title-x mb-4 text-primary-foreground">Contact Directory</h1>
              <p className="text-lg opacity-90 mb-6">
                Find the right contact in the Prime Minister's Office quickly and efficiently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold">Main Office</h3>
                  </div>
                  <p className="text-sm opacity-90">{CONTACT_DATA.main.address}</p>
                  <p className="text-sm mt-2 opacity-90">Tel: {CONTACT_DATA.main.tel}</p>
                  <p className="text-sm opacity-90">Fax: {CONTACT_DATA.main.fax}</p>
                  <p className="text-sm mt-2 opacity-90">
                    Email: <a className="underline" href={`mailto:${CONTACT_DATA.main.email}`}>{CONTACT_DATA.main.email}</a>
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <User className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold">Private Staff</h3>
                  </div>
                  <p className="text-sm opacity-90">Mrs. A.L.S.C. Perera</p>
                  <p className="text-sm mt-2 opacity-90">Tel: +94 11 2370954</p>
                  <p className="text-sm opacity-90">
                    Email: <a className="underline" href="mailto:shyamalie961@gmail.com">shyamalie961@gmail.com</a>
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <Building className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold">Quick Access</h3>
                  </div>
                  <div className="space-y-2">
                    <button
                      className="w-full text-left text-sm hover:underline"
                      onClick={() => setSelectedDivision("Secretary Bureau")}
                    >
                      Secretary's Office
                    </button>
                    <button
                      className="w-full text-left text-sm hover:underline"
                      onClick={() => setSelectedDivision("Admin Division")}
                    >
                      Administration
                    </button>
                    <button
                      className="w-full text-left text-sm hover:underline"
                      onClick={() => setSelectedDivision("Public Relations Division")}
                    >
                      Public Relations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Search and Filter Section */}
          <div className="card-x mb-8 sticky top-16 z-10">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name, position, phone, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                <div className="relative">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium"
                  >
                    <Filter className="w-5 h-5" />
                    <span>Filter</span>
                    {selectedDivision !== "all" && (
                      <span className="bg-primary text-primary-foreground text-sm rounded-full h-6 w-6 flex items-center justify-center">
                        1
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                  </button>
                  {showFilters && (
                    <div className="absolute right-0 mt-2 w-64 bg-card rounded-lg shadow-lg border border-border z-20 p-3">
                      <h4 className="font-medium text-foreground mb-2">Filter by Division</h4>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        <label className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer">
                          <input
                            type="radio"
                            name="division"
                            value="all"
                            checked={selectedDivision === "all"}
                            onChange={() => setSelectedDivision("all")}
                            className="rounded-full text-primary focus:ring-primary"
                          />
                          <span>All Divisions</span>
                        </label>
                        {divisionsList.map((division, index) => (
                          <label key={index} className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer">
                            <input
                              type="radio"
                              name="division"
                              value={division}
                              checked={selectedDivision === division}
                              onChange={() => setSelectedDivision(division)}
                              className="rounded-full text-primary focus:ring-primary"
                            />
                            <span>{division}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={downloadCSV}
                  className="flex items-center gap-2 px-4 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors font-medium"
                >
                  <Download className="w-5 h-5" />
                  <span>Export</span>
                </button>
              </div>
            </div>
            {/* Active filters */}
            {(searchTerm || selectedDivision !== "all") && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {searchTerm && (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1">
                      Search: "{searchTerm}"
                      <button onClick={() => setSearchTerm("")}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedDivision !== "all" && (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1">
                      Division: {selectedDivision}
                      <button onClick={() => setSelectedDivision("all")}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            <section className="lg:w-2/3">
              {filteredDivisions.length > 0 ? (
                filteredDivisions.map((division: any, idx: number) => (
                  <DivisionSection
                    key={idx}
                    division={division}
                    searchTerm={searchTerm}
                    onEmailClick={handleEmailClick}
                    onPhoneClick={handlePhoneClick}
                  />
                ))
              ) : (
                <div className="text-center py-12 card-x">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-foreground mb-2">No contacts found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </section>
            <aside className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">
                <div className="card-x">
                  <h3 className="font-semibold text-lg mb-3">Directory Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Divisions:</span>
                      <span className="font-medium">{CONTACT_DATA.divisions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Contacts:</span>
                      <span className="font-medium">
                        {CONTACT_DATA.divisions.reduce((total: number, division: any) => total + division.items.length, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Updated:</span>
                      <span className="font-medium">January 2024</span>
                    </div>
                  </div>
                </div>
                <div className="card-x">
                  <h3 className="font-semibold text-lg mb-3">Quick Actions</h3>
                  <div className="space-y-3">
                    <button
                      className="w-full flex items-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                      onClick={() => handleEmailClick(CONTACT_DATA.main.email)}
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Main Office</span>
                    </button>
                    <button
                      className="w-full flex items-center gap-2 px-4 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
                      onClick={downloadCSV}
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Directory</span>
                    </button>
                    <button
                      className="w-full flex items-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 text-muted-foreground rounded-lg transition-colors"
                      onClick={() => window.print()}
                    >
                      <Printer className="w-5 h-5" />
                      <span>Print Directory</span>
                    </button>
                  </div>
                </div>
                <div className="card-x">
                  <h3 className="font-semibold text-lg mb-3">Most Contacted</h3>
                  <div className="space-y-4">
                    {CONTACT_DATA.divisions[0].items.slice(0, 3).map((person: any, idx: number) => {
                      const [hasProfileImage, setHasProfileImage] = useState(!!person.profile);
                      const avatarUrl = generateAvatar(person.name, "1e40af", "ffffff");
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary">
                            {hasProfileImage ? (
                              <img
                                src={person.profile}
                                alt={person.name}
                                className="w-full h-full object-cover"
                                onError={() => setHasProfileImage(false)}
                              />
                            ) : (
                              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium text-xs">
                                {person.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{person.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{person.position}</p>
                          </div>
                          <button
                            className="text-primary hover:text-primary/80"
                            onClick={() => handleEmailClick(person.email)}
                          >
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}