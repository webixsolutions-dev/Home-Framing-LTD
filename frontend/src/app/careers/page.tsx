import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers | Home Framing LTD",
  description:
    "Home Framing LTD is hiring Carpenter-Framers and Administrative Assistants in Calgary, Alberta. Explore our current openings and apply today.",
};

interface Job {
  slug: string;
  title: string;
  tagline: string;
  pay: string;
  hours: string;
  type: string;
  vacancies: number;
  location: string;
  startDate: string;
  image: string;
  description: string;
  benefits: string[];
  /** Numeric hourly wage used for JobPosting structured data. */
  salaryValue: number;
  /** ISO employmentType used for JobPosting structured data. */
  employmentType: string;
}

const CONTACT = {
  phone: "+1 (403) 925-0600",
  phoneHref: "tel:+14039250600",
  email: "careers@homeframingltd.com",
};

const jobs: Job[] = [
  {
    slug: "carpenter-framer",
    title: "Carpenter-Framer",
    tagline: "Build your career with a professional framing team.",
    pay: "$37.00 per hour",
    hours: "40 hours per week",
    type: "Permanent, Full-Time",
    vacancies: 2,
    location: "Calgary, Alberta",
    startDate: "As soon as possible",
    image: "/images/careers/carpenter-framer.png",
    description:
      "Build your career with Home Framing LTD! We're looking for skilled and motivated Carpenter-Framers to join our professional team in Calgary, Alberta. Earn $37.00 per hour while working 40 hours per week in a permanent, full-time position. We offer competitive wages, applicable overtime pay, career growth opportunities, and a supportive team environment. Two vacancies are available, with positions starting as soon as possible.",
    benefits: [
      "Competitive wages",
      "Overtime pay as applicable",
      "Opportunities for career growth",
      "Supportive team environment",
    ],
    salaryValue: 37,
    employmentType: "FULL_TIME",
  },
  {
    slug: "administrative-assistant",
    title: "Administrative Assistant",
    tagline: "Build your career in a professional and supportive workplace.",
    pay: "$23.00 per hour",
    hours: "40 hours per week",
    type: "Permanent, Full-Time",
    vacancies: 1,
    location: "Calgary, Alberta",
    startDate: "As soon as possible",
    image: "/images/careers/admin-assistant.png",
    description:
      "Home Framing LTD is looking for an organized and motivated Administrative Assistant to join our team in Calgary, Alberta. This permanent, full-time position offers $23.00 per hour for 40 hours per week, along with paid vacation, stable employment, and professional development opportunities. If you have strong communication, organizational, and Microsoft Office skills, we'd love to hear from you.",
    benefits: [
      "Competitive salary",
      "Paid vacation",
      "Stable full-time employment",
      "Professional development opportunities",
    ],
    salaryValue: 23,
    employmentType: "FULL_TIME",
  },
];

// Structured data (JSON-LD) shared values for JobPosting schema.
const DATE_POSTED = "2026-07-07";
const VALID_THROUGH = "2026-12-31";

function jobPostingJsonLd(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: DATE_POSTED,
    validThrough: VALID_THROUGH,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Home Framing LTD",
      sameAs: "https://homeframingltd.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "Alberta",
        addressCountry: "CA",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "CAD",
      value: {
        "@type": "QuantitativeValue",
        value: job.salaryValue,
        unitText: "HOUR",
      },
    },
  };
}

/** Small icon set for the facts grid — inherits color via currentColor. */
const factIcons = {
  pay: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m0-8c1.11 0 2.08.402 2.599 1M12 8v8m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  hours: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  type: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  vacancies: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-6-5.292M17 8a4 4 0 11-8 0 4 4 0 018 0z"
    />
  ),
  location: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </>
  ),
  startDate: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  ),
} as const;

function FactChip({
  icon,
  label,
  value,
}: {
  icon: keyof typeof factIcons;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#B95927]/10 text-[#B95927]">
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {factIcons[icon]}
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wide text-gray-500 font-semibold">
          {label}
        </span>
        <span className="block text-[15px] font-semibold text-[#092336]">
          {value}
        </span>
      </span>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Application for ${job.title} - Home Framing LTD`
  )}`;

  return (
    <article
      id={job.slug}
      className="scroll-mt-24 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Flyer image */}
        <div className="relative lg:col-span-2 bg-gray-50 min-h-[280px] sm:min-h-[360px] lg:min-h-full">
          <Image
            src={job.image}
            alt={`Home Framing LTD hiring ${job.title} in Calgary, Alberta`}
            fill
            className="object-contain p-4 lg:p-6"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-3 p-6 sm:p-8 md:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#092336] mb-2">
            {job.title}
          </h3>

          <p className="text-[#B95927] font-semibold text-base sm:text-lg mb-6">
            {job.tagline}
          </p>

          {/* Facts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <FactChip icon="pay" label="Pay" value={job.pay} />
            <FactChip icon="hours" label="Hours" value={job.hours} />
            <FactChip icon="type" label="Job Type" value={job.type} />
            <FactChip
              icon="vacancies"
              label="Vacancies"
              value={String(job.vacancies)}
            />
            <FactChip icon="location" label="Location" value={job.location} />
            <FactChip
              icon="startDate"
              label="Start Date"
              value={job.startDate}
            />
          </div>

          {/* Description */}
          <p className="text-[#4A5565] text-base sm:text-lg leading-8 mb-8">
            {job.description}
          </p>

          {/* Benefits */}
          <h4 className="text-lg font-bold text-[#092336] mb-4">
            What We Offer
          </h4>
          <ul className="space-y-3 mb-8">
            {job.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B95927] mt-2 flex-shrink-0" />
                <span className="text-[#4A5565] leading-7">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-[#B95927] text-white font-semibold rounded-xl shadow-xl hover:bg-[#a04d20] transition-all duration-300 hover:scale-105 px-6 py-3.5 text-base"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call to Apply
            </a>

            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#B95927] font-semibold rounded-xl border-2 border-[#B95927] hover:bg-[#B95927] hover:text-white transition-all duration-300 hover:scale-105 px-6 py-3.5 text-base"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Apply by Email
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* JobPosting structured data for both openings */}
      {jobs.map((job) => (
        <script
          key={job.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingJsonLd(job)),
          }}
        />
      ))}

      {/* Hero */}
      <section className="bg-[#092336] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 md:py-28 text-center">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#B95927] mb-4">
            Careers
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Join Our <span className="text-[#B95927]">Team</span>
          </h1>

          <p className="text-lg md:text-xl leading-9 text-gray-200 max-w-3xl mx-auto">
            Build a lasting career with a professional framing team in Calgary,
            Alberta. At Home Framing LTD, we invest in skilled, motivated people
            and offer competitive pay, steady work, and real opportunities to
            grow.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="mb-12 md:mb-16 text-center">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#092336] mb-4">
            Now Hiring
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#092336]">
            Current Openings
          </h2>
        </div>

        <div className="space-y-10 md:space-y-14">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>

        {/* Contact note */}
        <div className="mt-16 bg-[#092336] rounded-3xl p-10 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Apply?
          </h2>

          <p className="text-lg leading-8 text-gray-200 max-w-3xl mx-auto mb-8">
            Reach out to our team by phone or email to start your application. We
            look forward to hearing from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-block bg-[#B95927] text-white font-semibold rounded-xl shadow-xl hover:bg-[#a04d20] transition-all duration-300 hover:scale-105 px-8 py-4 text-base"
            >
              ☎ {CONTACT.phone}
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-block bg-white text-[#B95927] font-semibold rounded-xl border-2 border-[#B95927] hover:bg-[#B95927] hover:text-white transition-all duration-300 hover:scale-105 px-8 py-4 text-base"
            >
              ✉ {CONTACT.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
