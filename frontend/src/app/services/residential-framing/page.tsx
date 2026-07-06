"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ResidentialFramingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const processSteps = [
    {
      title: "Quote and Plan Review",
      desc: "Send your house plans, lot address, and target start date. We respond with a clear, itemized quote.",
    },
    {
      title: "Site Walk and Coordination",
      desc: "We confirm foundation readiness, site access, lumber delivery, and crew availability before locking the start date.",
    },
    {
      title: "Floor and Wall Framing",
      desc: "Crews frame floors, load-bearing walls, partitions, and openings to plan with daily progress updates.",
    },
    {
      title: "Roof Framing and Sheathing",
      desc: "Trusses or stick-framed roof system installed, sheathed, and prepped for the roofing trade.",
    },
    {
      title: "Inspection-Ready Handoff",
      desc: "Everything plumbed, squared, blocked where required, and the site cleaned for the framing inspection and the next trade.",
    },
  ];

  const includes = [
    {
      title: "New Home Framing",
      desc: "Complete wood framing for new residential builds, including walls, floors, roof structures, openings, and layout work based on project plans.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    },
    {
      title: "Wall, Floor & Roof Framing",
      desc: "Accurate framing for the main structural parts of the home, built to support strength, alignment, and long-term performance.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    },
    {
      title: "Basement & Interior Framing",
      desc: "Framing for basement layouts, interior walls, partitions, room divisions, and other framed areas inside the home.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    },
  ];

  const faqs = [
    {
      q: "Why should I choose Home Framing LTD for residential framing?",
      a: "Home Framing LTD focuses on accurate measurements, clean workmanship, safe site practices, and reliable communication. Our goal is to complete residential framing work properly so your project is ready for the next stage of construction. ",
    },
    {
      q: "How much does residential framing cost in Calgary?",
      a: "Residential framing cost depends on the size of the home, framing scope, drawings, roof design, wall layout, site access, material needs, and project timeline.",
    },
    {
      q: "Can you handle basement framing and interior wall framing?",
      a: "Yes. We provide basement framing, interior wall framing, room divisions, partitions, bulkheads, and layout framing for residential projects. These services are useful for basement developments, renovations, and interior space changes. ",
    },
    {
      q: "Do you handle small residential framing jobs?",
      a: "Yes. We can review smaller framing jobs such as basement layouts, interior walls, additions, openings, room divisions, and renovation framing. Availability depends on the project size and schedule. ",
    },
    {
      q: "Do you provide materials for residential framing?",
      a: "Material requirements depend on the project. During the quote process, Home Framing LTD can review the scope and discuss what materials, lumber, and framing requirements are needed. ",
    },
    {
      q: "What makes a good residential framing contractor?",
      a: "A good residential framing contractor should understand construction plans, layout accuracy, safe site practices, clean workmanship, scheduling, and coordination with the next trades.  ",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Residential Framing"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#092336]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Residential Framing Services in Calgary
            </h1>

            <p className="text-lg md:text-xl leading-9 text-gray-200 mb-10">
              Home Framing LTD provides residential wood framing for new homes,
              custom builds, additions, renovations, basement layouts, and
              interior spaces. Our team focuses on accurate layout, clean
              workmanship, and dependable framing support that helps every home
              project move forward with confidence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Get Free Quote
              </Link>

              <Link
                href="/projects"
                className="border border-white/30 hover:bg-white hover:text-[#092336] px-8 py-4 rounded-xl font-semibold transition"
              >
                View Projects
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
                Residential Wood Framing for Strong Builds
              </h2>

              <div className="space-y-6">
                <p className="text-[#4A5565] text-lg leading-8">
                  A strong home starts with a properly built frame. Residential
                  framing shapes the structure, layout, and support system of
                  the entire building, from walls and floors to roof framing,
                  openings, and interior layouts.
                </p>

                <p className="text-[#4A5565] text-lg leading-8">
                  <span className="font-bold">At Home Framing LTD</span>, we
                  work with homeowners, builders, and contractors who need
                  reliable framing for new residential construction, additions,
                  and basement developments. Every project is handled with
                  careful measurements, organized site work, and attention to
                  the details that help the next stage of construction move
                  smoothly.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
                alt="Residential Construction"
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
              Residential Framing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white  rounded-3xl p-8 border border-gray-100 shadow-sm max-h-[400px]"
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

      {/* SERVICES INCLUDED */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-6">
              What Our Residential Framing Includes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {includes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#092336] mb-5">
                    {item.title}
                  </h3>

                  <p className="text-[#4A5565] leading-8">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-8">
              What Affects Residential Framing Cost?
            </h2>

            <p className="text-[#4A5565] text-lg leading-9 mb-10">
              Every home project is different, so residential framing cost
              depends on the size, design, and complexity of the work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Size and total framing area",
                "Wall, floor, and roof framing requirements",
                "Materials and lumber requirements",
                "Site access and project timeline",
                "Drawings, plans, and structural details",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#B95927] mt-2"></div>

                  <p className="text-[#4A5565] leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092336] rounded-[2rem] p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Residential Framing for Your Home Project?
            </h2>

            <p className="text-gray-200 text-lg leading-8 max-w-4xl mx-auto mb-10">
              Planning a new home, basement development, custom build,
              renovation, or addition? Home Framing LTD provides dependable
              residential framing services built around your project needs,
              structure, and timeline.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Request Free Quote
              </Link>

              <a
                href="tel:+14039250600"
                className="border border-white/20 text-white hover:bg-white hover:text-[#092336] px-8 py-4 rounded-xl font-semibold transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336]">
              FAQ’s
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
