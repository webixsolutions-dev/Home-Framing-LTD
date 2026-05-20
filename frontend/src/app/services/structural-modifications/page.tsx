"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServicePage4() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const processSteps = [
    {
      title: "Review the Structural Change",
      desc: "We review the wall removal, opening, layout change, addition, or load-bearing modification needed for your project.",
    },
    {
      title: "Check Plans & Engineering Details",
      desc: "We look at drawings, measurements, beam details, header requirements, or engineering notes before framing work begins.",
    },
    {
      title: "Inspect Existing Framing",
      desc: "Our crew checks the current wall, floor, ceiling, or roof framing to understand how the structure is built.",
    },
    {
      title: "Prepare Temporary Support",
      desc: "When needed, we help prepare the work area with proper support before removing or modifying any structural framing.",
    },
    {
      title: "Complete the Framing Modification",
      desc: "We complete the required wall opening, beam support, header framing, or structural framing change with clean and accurate workmanship.",
    },
    {
      title: "Final Structural Framing Check",
      desc: "We review the modified framing to make sure it is secure, aligned, clean, and ready for the next stage of construction.",
    },
  ];

  const services = [
    {
      title: "Load-Bearing Wall Modifications",
      desc: "Framing support for load-bearing wall changes, structural openings, and wall adjustments based on project drawings, plans, or engineering details.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    },
    {
      title: "Wall Removal & Opening Support",
      desc: "Framing for wall removals, larger openings, open-concept layouts, room connections, and renovation changes that need proper structural support.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    },
    {
      title: "Beam & Header Framing Support",
      desc: "Framing work around beams, headers, supports, and openings to help carry loads safely and prepare the space for the next construction stage.",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    },
    {
      title: "Renovation Structural Framing",
      desc: "Structural framing changes for remodels, home additions, basement updates, layout changes, and existing-home modifications.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    },
  ];

  const costFactors = [
    "Type of structural change required",
    "Load-bearing or non-load-bearing wall work",
    "Size of wall opening or layout change",
    "Beam, header, or support framing requirements",
    "Project drawings, plans, or engineering details",
    "Existing structure condition",
    "Site access and work area limitations",
    "Renovation complexity and timeline",
    "Materials, lumber, and framing requirements",
  ];

  const faqs = [
    {
      q: "What are structural modifications?",
      a: "Structural modifications are changes made to the framing or support system of a building. This can include wall openings, load-bearing wall changes, beam support, header framing, layout changes, and renovation-related framing updates.",
    },
    {
      q: "Do you handle load-bearing wall modifications?",
      a: "Yes. Home Framing LTD can provide framing support for load-bearing wall changes when the project has the proper drawings, plans, or engineering details required for the work.",
    },
    {
      q: "Can you help with wall removal framing?",
      a: "Yes. We provide framing support for wall removals, larger openings, open-concept layouts, and room connections that need proper structural framing.",
    },
    {
      q: "Do I need engineering drawings before structural modification work?",
      a: "For many structural changes, especially load-bearing wall modifications or larger openings, engineering details or approved drawings may be required. These details help make sure the work is planned safely and correctly. ",
    },
    {
      q: "Can you modify framing during a renovation?",
      a: "Yes. We provide structural framing support for renovations, additions, basement updates, remodels, and layout changes where existing framing needs to be adjusted or rebuilt.",
    },
    {
      q: "What affects the cost of structural modification work?",
      a: "Cost depends on the type of structural change, wall type, opening size, beam or header requirements, drawings, site access, existing structure condition, materials, and project timeline.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative h-[72vh] min-h-[650px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Structural Modifications"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#092336]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Structural Modification Services in Calgary for Renovations &
              Additions
            </h1>

            <p className="text-lg md:text-xl leading-9 text-gray-200 mb-10">
              Home Framing LTD provides structural modification support for
              renovations, additions, wall openings, load-bearing wall changes,
              and layout updates. Our team focuses on accurate framing, safe
              site practices, and clean workmanship so your structural changes
              are completed properly and ready for the next stage of
              construction.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 hover:bg-white hover:text-[#092336] px-8 py-4 rounded-xl font-semibold transition"
              >
                Contact Us
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
                Framing Support for Safe Structural Changes
              </h2>

              <div className="space-y-6">
                <p className="text-[#4A5565] text-lg leading-8">
                  Structural modifications need more care than standard framing
                  work. When a wall is being changed, an opening is being
                  created, or an existing layout is being adjusted, the framing
                  must be planned properly and completed with accuracy.
                </p>

                <p className="text-[#4A5565] text-lg leading-8">
                  <span className="font-bold">At Home Framing LTD</span>, we
                  support homeowners, builders, contractors, and property owners
                  with structural framing changes for renovation and
                  construction projects. Whether the work involves a
                  load-bearing wall, beam support, header framing, room opening,
                  or layout modification, our crew follows the project details
                  carefully and focuses on keeping the structure safe, aligned,
                  and ready for the next trade.
                </p>
              </div>
            </div>

            <div className="relative h-[540px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
                alt="Structural Framing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-6">
              Our Structural Modification Process
            </h2>

            <p className="text-[#4A5565] text-lg leading-8">
              Structural modification work must be planned carefully because
              walls, openings, beams, and existing framing can affect the
              strength and safety of the structure. At Home Framing LTD, we
              follow a careful process to complete each framing change with
              accuracy and proper support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 min-h-[330px]"
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
              What Our Structural Modification Work Includes
            </h2>

            <p className="text-[#4A5565] text-lg leading-8">
              We provide structural modification framing support for homes,
              renovations, additions, and layout changes that need careful
              planning and proper execution.
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
              What Affects Structural Modification Cost?
            </h2>

            <p className="text-[#4A5565] text-lg leading-9 mb-10">
              Structural modification cost depends on the type of change, the
              size of the opening, the condition of the existing structure, and
              the level of framing support required. A small layout adjustment
              will not have the same scope as a load-bearing wall change, beam
              installation area, or major renovation modification.
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
              For an accurate quote, share your project type, location, drawings
              if available, and details about the structural change you need.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092336] rounded-[2rem] p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Structural Framing Changes Done Right?
            </h2>

            <p className="text-gray-200 text-lg leading-8 max-w-4xl mx-auto mb-10">
              Planning a wall opening, layout change, renovation, addition, or
              load-bearing wall modification? Home Framing LTD provides
              dependable structural modification support built around your
              project plans, safety needs, and construction timeline.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 hover:bg-white hover:text-[#092336] px-8 py-4 rounded-xl font-semibold transition text-white"
              >
                Contact Us
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
              FAQ Section
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
