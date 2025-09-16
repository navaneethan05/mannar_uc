import React from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Redesigned ContactPage with full ContactSection included in one file
// Tailwind CSS utility classes used. Drop this file into your Next.js pages or components folder.

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
        },
        {
          name: "Ms. N.Y. Kohowala",
          position: "Senior Assistant Secretary",
          salary: "SL 1",
          tel: "+94 11 2575317",
          fax: "+94 11 2575310",
          email: "nalinikohowala@pmoffice.gov.lk",
        },
        {
          name: "Mrs. Mihiri U. Thennakoon",
          position: "Assistant Secretary",
          salary: "SL 1",
          tel: "+94 11 2575317",
          fax: "+94 11 2575310",
          email: "mihirias.sb@pmoffice.gov.lk",
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
        },
        {
          name: "Mrs. K.W.L. Atigala",
          position: "Senior Assistant Secretary (HR & Admin)",
          salary: "SL 1",
          tel: "+94 11 2576483",
          fax: "+94 11 2575312",
          email: "atigala@pmoffice.gov.lk",
        },
        {
          name: "Mrs. H. S. A. Sankalpana",
          position: "Assistant Secretary (Admin I)",
          salary: "SL 1",
          tel: "+94 11 2372116",
          fax: "+94 11 2574713",
          email: "sankalpana@pmoffice.gov.lk",
        },
        {
          name: "Ms. A.M.L. Ranaweera",
          position: "Assistant Secretary (Admin II)",
          salary: "SL 1",
          tel: "+94 11 2564033",
          fax: "+94 11 2574713",
          email: "lakmali@pmoffice.gov.lk",
        },
        {
          name: "Mrs. K.A.S. Sripali",
          position: "Administrative Officer (Admin I)",
          salary: "MN 7",
          tel: "+94 11 2372736",
          fax: "+94 11 2574713",
          email: "sashikasripaliao@pmoffice.gov.lk",
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
        },
        {
          name: "Ms. H.D.D.C.P.K. Thilakaratne",
          position: "Senior Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354731",
          fax: "+94 11 4354784",
          email: "deshini@pmoffice.gov.lk",
        },
        {
          name: "Mrs. P.H.P.I. Bandara",
          position: "Senior Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354789",
          fax: "+94 11 4354789",
          email: "piyumee@pmoffice.gov.lk",
        },
        {
          name: "Mr. M.H.A.N. Riflan",
          position: "Senior Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "-",
          fax: "-",
          email: "-",
        },
        {
          name: "Mrs. A.T. Ekanayake",
          position: "Director (Planning)",
          salary: "SL 1",
          tel: "+94 11 7124405",
          fax: "+94 11 7124416",
          email: "anujaekanayake@pmoffice.gov.lk",
        },
        {
          name: "Mrs. M.N.S. Perera",
          position: "Deputy Director (Planning)",
          salary: "SL 1",
          tel: "-",
          fax: "-",
          email: "nilusha@pmoffice.gov.lk",
        },
        {
          name: "Mrs. D.M.J.K. Dissanayaka",
          position: "Deputy Director (Development)",
          salary: "SL 1",
          tel: "-",
          fax: "-",
          email: "jayanthi@pmoffice.gov.lk",
        },
        {
          name: "Mrs. F.A.F. Farzana",
          position: "Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 7124407",
          fax: "+94 11 7124416",
          email: "fathi@pmoffice.gov.lk",
        },
        {
          name: "Mrs. S.U.A. Weerasinghe",
          position: "Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354749",
          fax: "+94 11 4354784",
          email: "udari@pmoffice.gov.lk",
        },
        {
          name: "Mrs. I.H. Poornima Nirmani",
          position: "Assistant Director (Planning)",
          salary: "SL 1",
          tel: "+94 11 7124408",
          fax: "+94 11 7124416",
          email: "nirmani@pmoffice.gov.lk",
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
        },
        {
          name: "Ms. R.P.M.S. Rajapakshe",
          position: "Senior Assistant Secretary (Parliament Affairs)",
          salary: "SL 1",
          tel: "+94 11 2564449",
          fax: "+94 11 2577105",
          email: "manjularajapakshe@gmail.com",
        },
        {
          name: "Mrs. M.H.A. Karunathilaka",
          position: "Assistant Secretary (Development)",
          salary: "SL 1",
          tel: "+94 11 4354754 (4293)",
          fax: "+94 11 7124416",
          email: "amanda@pmoffice.gov.lk",
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
        },
        {
          name: "Mr. M.M.J.R.N. Fernando",
          position: "Chief Accountant",
          salary: "SL 1",
          tel: "+94 11 2576071",
          fax: "+94 11 2574411",
          email: "nilantha@pmoffice.gov.lk",
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
        },
        {
          name: "Mrs. S.T. Sirimanna",
          position: "Senior Assistant Secretary (Public Relations)",
          salary: "SL 1",
          tel: "+94 11 4354702 Ext:4461",
          fax: "-",
          email: "surani@pmoffice.gov.lk",
        },
        {
          name: "Ms. G.C.D.R. Fernando",
          position: "Assistant Secretary (Public Relations)",
          salary: "SL 1",
          tel: "+94 11 4354703 Ext:4462",
          fax: "-",
          email: "dulanjali@pmoffice.gov.lk",
        },
        {
          name: "Mr. N.W.S.R. Chandana",
          position: "Administrative Officer (Public Relations)",
          salary: "MN 7",
          tel: "+94 11 4354704 Ext:4463",
          fax: "-",
          email: "r_chandana@pmoffice.gov.lk",
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
        },
        {
          name: "Mr. K.M. Inaamul Hassan",
          position: "Assistant Director (ICT)",
          salary: "SL 1",
          tel: "+94 11 4354818",
          fax: "+94 11 2575310 (Attn: Hassan)",
          email: "hassan@pmoffice.gov.lk",
        },
        {
          name: "Ms. W.G.D.P.C. Wijesinghe",
          position: "ICT Officer",
          salary: "MN 6",
          tel: "+94 11 2575310",
          fax: "+94 11 2575318",
          email: "pubuduni@pmoffice.gov.lk",
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
        },
        { name: "Mr. N.M. Nilantha Adikari", position: "Assistant Director (Communications)", salary: "-", tel: "-", fax: "-", email: "-" },
        { name: "Mrs. R.P. Anusha Manel Gunathilaka", position: "Assistant Director (Foreign Media)", salary: "-", tel: "-", fax: "-", email: "-" },
        { name: "Mr. W. R. A. Nisanka", position: "Assistant Director (New Media)", salary: "-", tel: "-", fax: "-", email: "-" },
        { name: "W. A. D. R. P. K. Wickramarachchi", position: "Assistant Director (New Media)", salary: "-", tel: "-", fax: "-", email: "-" },
        { name: "Mrs. K. Indiradevi", position: "Administrative Officer (Media)", salary: "MN 7", tel: "+94 11 7124400", fax: "+94 11 2393809", email: "-" },
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
        },
      ],
    },

    {
      title: "Translators",
      items: [
        { name: "Ms. K.A.T.R. Kandepeliarachchi", position: "Translator S/E", salary: "MN 6", tel: "-", fax: "-", email: "-" },
      ],
    },

    {
      title: "Private Staffs of the Hon Prime Minister",
      items: [
        { name: "Mrs. A.L.S.C. Perera", position: "Private Secretary to the Hon Prime Minister", salary: "-", tel: "+94 11 2370954", fax: "-", email: "shyamalie961@gmail.com" },
      ],
    },
  ],
};

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v.217l-8 4.8-8-4.8V4z" />
      <path d="M18 8.383V16a2 2 0 01-2 2H4a2 2 0 01-2-2V8.383l7.553 4.532a2 2 0 002.894 0L18 8.383z" />
    </svg>
  );
}

function ContactCard({ person }) {
  return (
    <div className="bg-white/80 dark:bg-slate-800/70 rounded-xl shadow p-4 border">
      <h4 className="font-semibold text-lg truncate">{person.name}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-300">{person.position} {person.salary ? `• ${person.salary}` : ""}</p>

      <div className="mt-3 text-sm space-y-1">
        {person.tel && (
          <p>
            <strong>Tel:</strong> <a href={`tel:${person.tel.replace(/\s+/g, "")}`}>{person.tel}</a>
          </p>
        )}
        {person.fax && person.fax !== "-" && (
          <p>
            <strong>Fax:</strong> {person.fax}
          </p>
        )}
        {person.email && person.email !== "-" && (
          <p>
            <strong>
              <IconMail />
            </strong>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
        )}
      </div>
    </div>
  );
}

function DivisionSection({ division }) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">{division.title}</h3>
        <p className="text-sm text-slate-500">{division.items.length} contact(s)</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {division.items.map((p, idx) => (
          <ContactCard key={idx} person={p} />
        ))}
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <TopBar />
      <Navigation />

      <main className="py-10">
        <div className="container mx-auto px-4">
          <header className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <div className="p-8 bg-gradient-to-r from-sky-600 to-indigo-700 text-white">
              <h1 className="text-4xl font-extrabold">Contact Us</h1>
              <p className="mt-2 max-w-3xl">Have something useful for us? Use the directory below to reach the correct division or person.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold">Main Office</h4>
                  <p className="text-sm mt-1">{CONTACT_DATA.main.address}</p>
                  <p className="text-sm">Tel: {CONTACT_DATA.main.tel}</p>
                  <p className="text-sm">Fax: {CONTACT_DATA.main.fax}</p>
                  <p className="text-sm mt-1">Email: <a className="underline" href={`mailto:${CONTACT_DATA.main.email}`}>{CONTACT_DATA.main.email}</a></p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold">Quick actions</h4>
                  <p className="text-sm mt-1">Search, copy, or email contacts quickly.</p>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-2 bg-white/20 rounded text-white">Copy Email</button>
                    <button className="px-3 py-2 bg-white/20 rounded text-white">Open Map</button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-8">
            <section className="lg:w-2/3">
              {CONTACT_DATA.divisions.map((div, idx) => (
                <DivisionSection key={idx} division={div} />
              ))}
            </section>

            <aside className="lg:w-1/3">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow">
                  <h4 className="font-semibold">Filter by Division</h4>
                  <p className="text-sm text-slate-500">Use browser find (Ctrl+F) to search quickly or filter below (UI filter placeholder).</p>

                  {/* Placeholder search input - easy to wire up with state if you want */}
                  <div className="mt-3">
                    <input className="w-full rounded border p-2" placeholder="Search name / position / tel" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow">
                  <h4 className="font-semibold">Private Staff</h4>
                  <p className="text-sm mt-1">Mrs. A.L.S.C. Perera</p>
                  <p className="text-sm">Tel: +94 11 2370954</p>
                  <p className="text-sm">Email: <a href="mailto:shyamalie961@gmail.com" className="underline">shyamalie961@gmail.com</a></p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow">
                  <h4 className="font-semibold">Download</h4>
                  <p className="text-sm mt-1">Get the full directory as CSV / Excel.</p>
                  <div className="mt-3 flex gap-2">
                    <a className="px-3 py-2 border rounded" href="#">Download CSV</a>
                    <a className="px-3 py-2 border rounded" href="#">Download Excel</a>
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
