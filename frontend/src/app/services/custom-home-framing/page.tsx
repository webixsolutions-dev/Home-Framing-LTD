"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.homeframingltd.com/services/custom-home-framing#webpage",
      "url": "https://www.homeframingltd.com/services/custom-home-framing",
      "name": "Custom Home Framing Services in Calgary | Home Framing LTD",
      "isPartOf": {
        "@id": "https://www.homeframingltd.com/#website"
      },
      "about": {
        "@id": "https://www.homeframingltd.com/#business"
      },
      "mainEntity": {
        "@id": "https://www.homeframingltd.com/services/custom-home-framing#service"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://www.homeframingltd.com/services/custom-home-framing#service",
      "name": "Custom Home Framing Services in Calgary",
      "serviceType": "Custom Home Framing",
      "url": "https://www.homeframingltd.com/services/custom-home-framing",
      "description": "Custom home framing for unique house designs, open-concept layouts, detailed rooflines, vaulted ceilings, large openings, walls, floors, structural supports, and project-specific framing plans in Calgary.",
      "provider": {
        "@id": "https://www.homeframingltd.com/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Calgary",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Alberta",
          "containedInPlace": {
            "@type": "Country",
            "name": "Canada"
          }
        }
      },
      "category": "Wood Framing"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.homeframingltd.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.homeframingltd.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Custom Home Framing",
          "item": "https://www.homeframingltd.com/services/custom-home-framing"
        }
      ]
    }
  ]
} as const;

export default function ServicePage3() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const processSteps = [
    {
      title: "Plan Review and Quote",
      desc: "Send your house plans, lot address, and target start date. We review the design, flag anything that needs clarification, and respond with a clear, itemized quote.",
    },
    {
      title: "Pre-Start Coordination",
      desc: "We confirm foundation readiness, lot access, lumber delivery schedule, and crew start date before locking in day one.",
    },
    {
      title: "Floor and Wall Framing",
      desc: "Crews frame floors, load-bearing walls, partitions, and openings to plan, with daily progress updates and clean stud lines ready for the next trade.",
    },
    {
      title: "Roof Framing and Sheathing",
      desc: "Trusses or stick-framed roof system installed and sheathed to handle Calgary snow loads, with detail work for vaulted ceilings, dormers, and complex rooflines.",
    },
    {
      title: "Inspection-Ready Handoff",
      desc: "Walls plumbed, openings squared, blocking installed where required, site cleaned, and the home ready for the City of Calgary framing inspection.",
    },
  ];

  const services = [
    {
      title: "Custom House Framing",
      desc: "Wood framing for custom homes with unique layouts, special room designs, detailed plans, and project-specific construction requirements.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    },
    {
      title: "Open-Concept Layout Framing",
      desc: "Framing support for open living areas, wide spaces, large openings, beams, and layouts that require careful structural planning.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    },
    {
      title: "Roofline & Ceiling Framing",
      desc: "Framing for custom roof-lines, vaulted ceilings, tray ceilings, and detailed ceiling structures based on the home design.",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    },
    {
      title: "Wall, Floor & Structural Framing",
      desc: "Accurate framing for walls, floors, openings, structural supports, and key framing components that shape the custom home.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    },
  ];

  const costFactors = [
    "Home size and total framing area",
    "Custom floor plan and layout complexity",
    "Large openings, beams, and structural supports",
    "Roofline and ceiling details",
    "Wall, floor, and roof framing requirements",
    "Drawings, engineering, and structural plans",
    "Site access, timeline, and project coordination",
    "Material and lumber requirements",
  ];

  const faqs = [
    {
      q: "How long does it take to frame a custom home in Calgary?",
      a: " Most custom homes take 3–6 weeks to frame, depending on size, design complexity, and weather. We commit to a start date and target completion date in writing before the job begins.",
    },
    {
      q: "Can you frame from architect or designer plans?",
      a: "Yes. We work directly from architect drawings, designer plans, and engineered structural drawings, and flag anything that needs clarification before the crew shows up.",
    },
    {
      q: "Do you handle LVLs, glulam beams, and large spans?",
      a: "Yes. Custom homes often call for LVLs, glulam beams, engineered I-joists, and large openings. We frame to the structural drawings and coordinate with the engineer if field adjustments come up.",
    },
    {
      q: "Do you frame trusses or stick-framed roofs?",
      a: "Both. We install pre-engineered trusses for standard rooflines and stick-frame on-site for vaulted ceilings, dormers, and custom roof structures.",
    },
    {
      q: "Do you frame custom homes in Calgary winters?",
      a: "Yes, we frame year-round. Extreme cold snaps below -20°C can pause outdoor work for safety, and we'll let you know upfront how the season may affect your timeline.",
    },
    {
      q: "Who pulls the building permit?",
      a: "On most custom home projects in Calgary, the builder or homeowner pulls the permit. We frame to the approved drawings and Alberta Building Code so the work is ready for the City of Calgary framing inspection.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* HERO */}
      <section className="relative h-[72vh] min-h-[650px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Custom Home Framing"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#092336]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Custom Home Framing Services in Calgary
            </h1>

            <p className="text-lg md:text-xl leading-9 text-gray-200 mb-10">
              Home Framing LTD provides custom home framing for unique house
              designs, open layouts, detailed rooflines, large openings, and
              project-specific structural plans. Our house framing contractors
              focus on accurate layout, clean workmanship, and dependable
              coordination from the first frame to the next stage of
              construction.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Get a Custom Home Framing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092336] leading-tight mb-8">
                House Framing Built Around Your Custom Design
              </h2>

              <div className="space-y-6">
                <p className="text-[#4A5565] text-lg leading-8">
                  Custom home framing requires more attention to detail than a
                  standard build. Every wall, floor, roofline, opening, and
                  structural connection needs to match the design plans
                  carefully so the home can take shape the right way.
                </p>

                <p className="text-[#4A5565] text-lg leading-8">
                  <span className="font-bold"> At Home Framing LTD</span>, we
                  work with{" "}
                  <Link href="/services/residential-framing" className="text-[#B95927] hover:underline font-medium">
                    standard residential framing
                  </Link>{" "}
                  projects as well as custom residential
                  builds. Whether the home includes open-concept spaces,
                  vaulted ceilings, complex roof structures,{" "}
                  <Link href="/services/structural-modifications" className="text-[#B95927] hover:underline font-medium">
                    large structural openings and beam support
                  </Link>
                  , or unique room layouts, our team focuses on building
                  the frame with accuracy and care.
                </p>
              </div>
            </div>

            <div className="relative h-[540px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80"
                alt="Custom Home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-6">
              Our Custom Home Framing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 min-h-[350px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#092336] text-white flex items-center justify-center text-2xl font-bold mb-8">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-[#092336] mb-5">
                  {step.title}
                </h3>

                <p className="text-[#4A5565] leading-8 text-[15px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-6">
              What Our Custom Home Framing Includes
            </h2>

            <p className="text-[#4A5565] text-lg leading-8">
              We provide complete framing support tailored to the unique architectural plans of your custom home build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-[320px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#092336] mb-5">
                    {service.title}
                  </h3>

                  <p className="text-[#4A5565] leading-8">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-8">
              What Affects Custom Home Framing Cost?
            </h2>

            <p className="text-[#4A5565] text-lg leading-9 mb-10">
              Custom home framing cost depends on the size, layout, design
              complexity, and structural requirements of the project. A simple
              house frame will usually have a different scope than a custom
              build with open layouts, large windows, detailed rooflines, or
              special framing details.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {costFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#B95927] mt-2"></div>

                  <p className="text-[#4A5565] leading-7">{factor}</p>
                </div>
              ))}
            </div>

            <p className="text-[#4A5565] text-lg leading-9">
              For the most accurate estimate, share your drawings, project
              location, timeline, and framing requirements with Home Framing
              LTD.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092336] rounded-[2rem] p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need House Framing Contractors for Your Custom Build?
            </h2>

            <p className="text-gray-200 text-lg leading-8 max-w-4xl mx-auto mb-10">
              Planning a custom home with unique layouts, open spaces, or
              detailed structural plans? Home Framing LTD provides dependable
              custom home framing built around your design, timeline, and
              construction needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Get a Custom Home Framing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#092336] pr-4">
                    {faq.q}
                  </h3>

                  <span className="text-2xl text-[#092336]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#4A5565] leading-8">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}